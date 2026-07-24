import { useEffect, useRef } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const DEFAULT_THRESHOLD = 0.25;

const observerEntries = new Map();
let reducedMotionQuery = null;
let isReducedMotionListenerActive = false;

function getReducedMotionQuery() {
  if (!reducedMotionQuery && typeof window !== 'undefined') {
    reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  }

  return reducedMotionQuery;
}

function removeReducedMotionListener() {
  if (!reducedMotionQuery || !isReducedMotionListenerActive) {
    return;
  }

  reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
  isReducedMotionListenerActive = false;
}

function releaseObserver(threshold, entry) {
  if (entry.targets.size > 0 || observerEntries.get(threshold) !== entry) {
    return;
  }

  entry.observer.disconnect();
  observerEntries.delete(threshold);

  if (observerEntries.size === 0) {
    removeReducedMotionListener();
  }
}

function handleReducedMotionChange(event) {
  if (!event.matches) {
    return;
  }

  observerEntries.forEach((entry) => {
    entry.targets.forEach(({ revealedClassName }, element) => {
      element.classList.add(revealedClassName);
    });
    entry.observer.disconnect();
  });

  observerEntries.clear();
  removeReducedMotionListener();
}

function ensureReducedMotionListener() {
  const query = getReducedMotionQuery();

  if (!query || isReducedMotionListenerActive) {
    return;
  }

  query.addEventListener('change', handleReducedMotionChange);
  isReducedMotionListenerActive = true;
}

function createObserverEntry(threshold) {
  const entry = {
    observer: null,
    targets: new Map(),
  };

  entry.observer = new IntersectionObserver((entries) => {
    entries.forEach(({ intersectionRatio, isIntersecting, target: element }) => {
      const targetOptions = entry.targets.get(element);

      if (!targetOptions) {
        return;
      }

      const hasReachedThreshold =
        isIntersecting && intersectionRatio >= threshold;

      if (hasReachedThreshold) {
        element.classList.add(targetOptions.revealedClassName);

        if (targetOptions.once) {
          entry.observer.unobserve(element);
          entry.targets.delete(element);
        }
      } else if (!targetOptions.once) {
        element.classList.remove(targetOptions.revealedClassName);
      }
    });

    releaseObserver(threshold, entry);
  }, { threshold });

  observerEntries.set(threshold, entry);
  ensureReducedMotionListener();

  return entry;
}

function normalizeThreshold(threshold) {
  if (!Number.isFinite(threshold)) {
    return DEFAULT_THRESHOLD;
  }

  return Math.min(Math.max(threshold, 0), 1);
}

function observeElement(element, options) {
  const query = getReducedMotionQuery();

  if (query?.matches || typeof IntersectionObserver === 'undefined') {
    element.classList.add(options.revealedClassName);
    return () => {};
  }

  const threshold = normalizeThreshold(options.threshold);
  const entry =
    observerEntries.get(threshold) ?? createObserverEntry(threshold);

  entry.targets.set(element, {
    once: options.once,
    revealedClassName: options.revealedClassName,
  });
  entry.observer.observe(element);

  return () => {
    entry.observer.unobserve(element);
    entry.targets.delete(element);
    releaseObserver(threshold, entry);
  };
}

function useReveal({
  once = true,
  revealedClassName,
  threshold = DEFAULT_THRESHOLD,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    return observeElement(element, {
      once,
      revealedClassName,
      threshold,
    });
  }, [once, revealedClassName, threshold]);

  return elementRef;
}

export default useReveal;
