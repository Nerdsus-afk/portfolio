import { useEffect, useRef } from "react";
import { prefetchImage } from "@/lib/prefetch";

/**
 * Prefetch an image as soon as the referenced element approaches the viewport.
 * Uses IntersectionObserver with a generous rootMargin so the cover image
 * begins loading well before the user can click the card.
 */
export const useInViewPrefetch = <T extends Element>(url?: string) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!url || !ref.current || typeof IntersectionObserver === "undefined") {
      // Fallback: just prefetch immediately
      if (url && typeof window !== "undefined") prefetchImage(url);
      return;
    }

    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            prefetchImage(url);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "400px 0px", threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [url]);

  return ref;
};
