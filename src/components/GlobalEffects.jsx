import { Suspense, lazy, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ParticleBackground = lazy(() => import("./ParticleBackground"));
const CursorGlow = lazy(() => import("./CursorGlow"));

function shouldEnableEffects(pathname) {
  if (typeof window === "undefined" || pathname !== "/") {
    return false;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
  const wideScreen = window.matchMedia("(min-width: 1024px)").matches;

  return !prefersReducedMotion && hasFinePointer && wideScreen;
}

export default function GlobalEffects() {
  const { pathname } = useLocation();
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const syncEnabled = () => {
      setEnabled(shouldEnableEffects(pathname));
    };

    syncEnabled();

    if (typeof window === "undefined") {
      return undefined;
    }

    const queries = [
      window.matchMedia("(prefers-reduced-motion: reduce)"),
      window.matchMedia("(pointer: fine)"),
      window.matchMedia("(min-width: 1024px)"),
    ];

    const addListener = (query) => {
      if (typeof query.addEventListener === "function") {
        query.addEventListener("change", syncEnabled);
        return;
      }

      query.addListener(syncEnabled);
    };

    const removeListener = (query) => {
      if (typeof query.removeEventListener === "function") {
        query.removeEventListener("change", syncEnabled);
        return;
      }

      query.removeListener(syncEnabled);
    };

    queries.forEach(addListener);
    window.addEventListener("resize", syncEnabled, { passive: true });

    return () => {
      queries.forEach(removeListener);
      window.removeEventListener("resize", syncEnabled);
    };
  }, [pathname]);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    let timerId = null;
    let cancelled = false;

    const mountEffects = () => {
      if (!cancelled) {
        setMounted(true);
      }
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      timerId = window.requestIdleCallback(mountEffects, { timeout: 1200 });
    } else {
      timerId = window.setTimeout(mountEffects, 250);
    }

    return () => {
      cancelled = true;

      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(timerId);
        return;
      }

      window.clearTimeout(timerId);
    };
  }, [enabled]);

  if (!enabled || !mounted) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <ParticleBackground />
      <CursorGlow />
    </Suspense>
  );
}
