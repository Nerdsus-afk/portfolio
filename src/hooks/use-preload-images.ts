import { useEffect } from "react";

/**
 * Warm the browser image cache for the given URLs once the page is idle.
 * Uses requestIdleCallback when available so it never competes with the
 * hero image / first paint. Safe to call with the same URLs multiple times.
 */
export const usePreloadImages = (urls: string[]) => {
  useEffect(() => {
    if (typeof window === "undefined" || urls.length === 0) return;

    let cancelled = false;

    const preload = () => {
      if (cancelled) return;
      urls.forEach((url) => {
        const img = new Image();
        img.decoding = "async";
        // low priority so it doesn't fight the LCP image
        (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = "low";
        img.src = url;
      });
    };

    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    if (typeof win.requestIdleCallback === "function") {
      idleId = win.requestIdleCallback(preload, { timeout: 2000 });
    } else {
      // Fallback: wait for load, then defer a bit
      const start = () => {
        timeoutId = window.setTimeout(preload, 300);
      };
      if (document.readyState === "complete") start();
      else window.addEventListener("load", start, { once: true });
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && win.cancelIdleCallback) win.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [urls]);
};
