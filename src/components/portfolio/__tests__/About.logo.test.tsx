import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { About } from "../About";

// Common breakpoints to validate the logo container across.
const BREAKPOINTS = [
  { name: "mobile-sm", width: 320 },
  { name: "mobile", width: 375 },
  { name: "tablet", width: 768 },
  { name: "laptop", width: 1024 },
  { name: "desktop", width: 1440 },
  { name: "wide", width: 1920 },
];

const setViewport = (width: number) => {
  Object.defineProperty(window, "innerWidth", { configurable: true, value: width });
  window.dispatchEvent(new Event("resize"));
};

describe("About — Bank of America logo framing", () => {
  beforeAll(() => {
    // Mock IntersectionObserver used by framer-motion's whileInView
    class IO {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() { return []; }
    }
    // @ts-expect-error - test shim
    window.IntersectionObserver = IO;
  });

  afterAll(() => cleanup());

  it.each(BREAKPOINTS)(
    "keeps the BoA logo non-cropped at $name ($width px)",
    ({ width }) => {
      setViewport(width);
      const { unmount } = render(<About />);

      const img = screen.getByAltText(
        /Bank of America company logo — placement offer/i
      ) as HTMLImageElement;

      expect(img).toBeInTheDocument();

      // object-contain guarantees the full logo is visible (no cropping)
      expect(img.className).toMatch(/object-contain/);
      // never object-cover/object-fill which would crop or distort
      expect(img.className).not.toMatch(/object-(cover|fill|none)/);

      // Container preserves square aspect ratio so framing is identical at every breakpoint
      const container = img.parentElement as HTMLElement;
      expect(container.className).toMatch(/aspect-square/);
      // Container clips overflow but image uses contain → no actual crop
      expect(container.className).toMatch(/overflow-hidden/);

      // Image declares intrinsic dimensions to avoid layout shift
      expect(img.getAttribute("width")).toBe("96");
      expect(img.getAttribute("height")).toBe("96");

      unmount();
    }
  );
});
