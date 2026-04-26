import { useEffect, useRef, useState } from "react";

const TRAIL_COUNT = 6;
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label';

function createTrailState(x, y) {
  return Array.from({ length: TRAIL_COUNT }, (_, index) => ({
    x,
    y,
    scale: 1 - index * 0.12,
  }));
}

function shouldEnableCursorEffect() {
  if (typeof window === "undefined") {
    return false;
  }

  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
  const hasHover = window.matchMedia("(hover: hover)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const hasTouchPoints = (navigator.maxTouchPoints || 0) > 0;
  const desktopWidth = window.innerWidth >= 768;

  if (prefersReducedMotion) {
    return false;
  }

  return desktopWidth && (hasFinePointer || hasHover || !hasTouchPoints);
}

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const trailRefs = useRef([]);
  const pointerVisible = useRef(false);
  const isPointerDown = useRef(false);
  const isInteractive = useRef(false);
  const target = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const ringPosition = useRef({ x: 0, y: 0 });
  const glowPosition = useRef({ x: 0, y: 0 });
  const trail = useRef(createTrailState(0, 0));

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const syncEnabled = () => {
      setEnabled(shouldEnableCursorEffect());
    };

    syncEnabled();

    const pointerQuery = window.matchMedia("(pointer: fine)");
    const hoverQuery = window.matchMedia("(hover: hover)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const addQueryListener = (query) => {
      if (typeof query.addEventListener === "function") {
        query.addEventListener("change", syncEnabled);
        return;
      }

      query.addListener(syncEnabled);
    };

    const removeQueryListener = (query) => {
      if (typeof query.removeEventListener === "function") {
        query.removeEventListener("change", syncEnabled);
        return;
      }

      query.removeListener(syncEnabled);
    };

    addQueryListener(pointerQuery);
    addQueryListener(hoverQuery);
    addQueryListener(reducedMotionQuery);
    window.addEventListener("resize", syncEnabled);

    return () => {
      removeQueryListener(pointerQuery);
      removeQueryListener(hoverQuery);
      removeQueryListener(reducedMotionQuery);
      window.removeEventListener("resize", syncEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("custom-cursor-enabled");
      return undefined;
    }

    document.body.classList.add("custom-cursor-enabled");

    const setVisibility = (visible) => {
      pointerVisible.current = visible;

      if (cursorRef.current) {
        cursorRef.current.style.opacity = visible ? "1" : "0";
      }
    };

    const syncInteractiveState = (eventTarget) => {
      isInteractive.current = Boolean(
        eventTarget instanceof Element &&
          eventTarget.closest(INTERACTIVE_SELECTOR)
      );
    };

    const handleMouseMove = (event) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;

      if (!pointerVisible.current) {
        dotPosition.current = { x: event.clientX, y: event.clientY };
        ringPosition.current = { x: event.clientX, y: event.clientY };
        glowPosition.current = { x: event.clientX, y: event.clientY };
        trail.current = createTrailState(event.clientX, event.clientY);
        setVisibility(true);
      }

      syncInteractiveState(event.target);
    };

    const handleMouseDown = () => {
      isPointerDown.current = true;
    };

    const handleMouseUp = () => {
      isPointerDown.current = false;
    };

    const handleMouseLeave = () => {
      setVisibility(false);
      isPointerDown.current = false;
      isInteractive.current = false;
    };

    const handleMouseEnter = () => {
      setVisibility(true);
    };

    const handleMouseOver = (event) => {
      syncInteractiveState(event.target);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    let frameId = 0;

    const animate = () => {
      const dotEase = 0.24;
      const ringEase = isInteractive.current ? 0.15 : 0.12;
      const glowEase = 0.08;

      dotPosition.current.x += (target.current.x - dotPosition.current.x) * dotEase;
      dotPosition.current.y += (target.current.y - dotPosition.current.y) * dotEase;

      ringPosition.current.x +=
        (target.current.x - ringPosition.current.x) * ringEase;
      ringPosition.current.y +=
        (target.current.y - ringPosition.current.y) * ringEase;

      glowPosition.current.x +=
        (target.current.x - glowPosition.current.x) * glowEase;
      glowPosition.current.y +=
        (target.current.y - glowPosition.current.y) * glowEase;

      const ringScale = isInteractive.current ? 1.9 : isPointerDown.current ? 0.72 : 1;
      const dotScale = isPointerDown.current ? 0.78 : 1;
      const glowScale = isInteractive.current ? 1.35 : 1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPosition.current.x}px, ${dotPosition.current.y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosition.current.x}px, ${ringPosition.current.y}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPosition.current.x}px, ${glowPosition.current.y}px, 0) translate(-50%, -50%) scale(${glowScale})`;
      }

      let previousX = dotPosition.current.x;
      let previousY = dotPosition.current.y;

      for (let index = 0; index < trail.current.length; index += 1) {
        const point = trail.current[index];
        const followEase = 0.18 - index * 0.015;

        point.x += (previousX - point.x) * followEase;
        point.y += (previousY - point.y) * followEase;

        const node = trailRefs.current[index];
        if (node) {
          const opacity = isInteractive.current ? 0.55 - index * 0.08 : 0.42 - index * 0.06;
          node.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) scale(${point.scale})`;
          node.style.opacity = pointerVisible.current ? `${Math.max(opacity, 0)}` : "0";
        }

        previousX = point.x;
        previousY = point.y;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div ref={cursorRef} className="cursor-glow" aria-hidden="true">
      <div ref={glowRef} className="cursor-glow__aura" />
      <div ref={ringRef} className="cursor-glow__ring" />
      <div ref={dotRef} className="cursor-glow__dot" />
      {Array.from({ length: TRAIL_COUNT }, (_, index) => (
        <div
          key={index}
          ref={(node) => {
            trailRefs.current[index] = node;
          }}
          className="cursor-glow__trail"
        />
      ))}
    </div>
  );
}
