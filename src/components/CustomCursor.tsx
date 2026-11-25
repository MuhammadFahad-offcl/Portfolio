import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

const SPRING = { stiffness: 500, damping: 30, mass: 0.3 };

/**
 * Soft circle that follows the mouse (desktop with a fine pointer only) and grows over links/buttons/cards.
 * The position lives in motion values, so moving the mouse never re-renders React — only the hover
 * state does, and only when it actually changes.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [overHero, setOverHero] = useState(false);
  const x = useSpring(useMotionValue(-100), SPRING);
  const y = useSpring(useMotionValue(-100), SPRING);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      setHovering(!!target?.closest?.("a,button,[data-cursor-hover]"));
      // The hero header has its own ink cursor
      setOverHero(!!target?.closest?.(".ea-has-cursor"));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <m.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x, y }}
      animate={{ scale: hovering ? 2.2 : 1, opacity: overHero ? 0 : 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
    >
      <div className="size-8 rounded-full bg-primary/20 mix-blend-multiply dark:mix-blend-screen" />
    </m.div>
  );
}
