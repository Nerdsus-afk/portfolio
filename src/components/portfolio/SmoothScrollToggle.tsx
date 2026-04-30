import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const STORAGE_KEY = "smooth-scroll-enabled";

/**
 * Floating toggle to enable/disable native smooth scrolling.
 * Applies `data-smooth-scroll="on|off"` to <html> and persists the choice.
 */
export const SmoothScrollToggle = () => {
  const [enabled, setEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(STORAGE_KEY) === "on";
  });

  useEffect(() => {
    document.documentElement.dataset.smoothScroll = enabled ? "on" : "off";
    window.localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
  }, [enabled]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full border border-border bg-card/80 px-4 py-2 shadow-card backdrop-blur-md">
      <Label htmlFor="smooth-scroll" className="text-xs font-medium cursor-pointer">
        Smooth scroll
      </Label>
      <Switch
        id="smooth-scroll"
        checked={enabled}
        onCheckedChange={setEnabled}
        aria-label="Toggle smooth scrolling"
      />
    </div>
  );
};
