import { useSyncExternalStore } from "react";

let interactiveMotionEnabled = false;
const listeners = new Set();
let initialized = false;

function canUseWindow() {
  return typeof window !== "undefined";
}

function computeInteractiveMotion() {
  if (!canUseWindow()) {
    return false;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
  const canHover = window.matchMedia("(hover: hover)").matches;

  return !prefersReducedMotion && (hasFinePointer || canHover);
}

function emitChange() {
  listeners.forEach((listener) => listener());
}

function syncInteractiveMotion() {
  const next = computeInteractiveMotion();
  if (next === interactiveMotionEnabled) {
    return;
  }

  interactiveMotionEnabled = next;
  emitChange();
}

function ensureSubscription() {
  if (initialized || !canUseWindow()) {
    return;
  }

  initialized = true;
  syncInteractiveMotion();

  const queries = [
    window.matchMedia("(prefers-reduced-motion: reduce)"),
    window.matchMedia("(pointer: fine)"),
    window.matchMedia("(hover: hover)"),
  ];

  const addListener = (query) => {
    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", syncInteractiveMotion);
      return;
    }

    query.addListener(syncInteractiveMotion);
  };

  const removeListener = (query) => {
    if (typeof query.removeEventListener === "function") {
      query.removeEventListener("change", syncInteractiveMotion);
      return;
    }

    query.removeListener(syncInteractiveMotion);
  };

  queries.forEach(addListener);
  window.addEventListener("resize", syncInteractiveMotion, { passive: true });

  const cleanup = () => {
    queries.forEach(removeListener);
    window.removeEventListener("resize", syncInteractiveMotion);
  };

  window.addEventListener("beforeunload", cleanup, { once: true });
}

function subscribe(listener) {
  ensureSubscription();
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return interactiveMotionEnabled;
}

function getServerSnapshot() {
  return false;
}

export function useInteractiveMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
