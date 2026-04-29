// Lightweight image prefetch utility used to warm the browser cache
// before a user navigates to a project detail page.
const prefetched = new Set<string>();

export const prefetchImage = (url?: string) => {
  if (!url || typeof window === "undefined" || prefetched.has(url)) return;
  prefetched.add(url);
  const img = new Image();
  img.decoding = "async";
  (img as HTMLImageElement & { fetchPriority?: string }).fetchPriority = "high";
  img.src = url;
};

/**
 * Returns React event handlers that trigger an image prefetch on the
 * earliest reliable signal of intent (hover, focus, or touch start).
 */
export const prefetchHandlers = (url?: string) => {
  const trigger = () => prefetchImage(url);
  return {
    onMouseEnter: trigger,
    onFocus: trigger,
    onTouchStart: trigger,
  };
};
