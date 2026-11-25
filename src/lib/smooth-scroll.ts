import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Site-wide smooth scrolling (Lenis). One instance for the whole page: components that need to follow the
 * scroll (GSAP ScrollTrigger, for example) read it with getLenis() instead of creating their own.
 *
 * - Skipped entirely for visitors who ask for reduced motion, and on touch devices, where the native
 *   momentum scroll already feels right and is cheaper.
 * - Anchor links (#about, #projects, ...) glide to their section.
 * - Pauses whenever something locks the page (overflow: hidden on <html> or <body>), e.g. the hero's
 *   opening splash or a dialog, so the page never moves underneath it.
 */
let lenis: Lenis | null = null;

export const getLenis = () => lenis;

export function initSmoothScroll() {
  if (lenis || typeof window === "undefined") return lenis;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touchOnly = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  if (reduced || touchOnly) return null;

  lenis = new Lenis({
    autoRaf: true,
    anchors: true,
    lerp: 0.1,
    wheelMultiplier: 1,
    // Lets scrollable boxes inside the page (dialogs, code blocks) scroll on their own
    allowNestedScroll: true,
  });

  const root = document.documentElement;
  const syncLock = () => {
    const locked = root.style.overflow === "hidden" || document.body.style.overflow === "hidden";
    if (locked) lenis?.stop();
    else lenis?.start();
  };
  const observer = new MutationObserver(syncLock);
  observer.observe(root, { attributes: true, attributeFilter: ["style"] });
  observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });
  syncLock();

  return lenis;
}
