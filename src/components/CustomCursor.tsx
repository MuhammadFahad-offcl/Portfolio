import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/** Soft circle that follows the mouse (desktop with fine pointer only) and grows over links/buttons/cards. */
export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointerFine = () => setIsPointerFine(mediaQuery.matches);
    updatePointerFine();

    if (!mediaQuery.matches) {
      mediaQuery.addEventListener?.("change", updatePointerFine);
      return () => mediaQuery.removeEventListener?.("change", updatePointerFine);
    }

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest?.("a,button,[data-cursor-hover]"));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    mediaQuery.addEventListener?.("change", updatePointerFine);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      mediaQuery.removeEventListener?.("change", updatePointerFine);
    };
  }, []);

  if (!isPointerFine) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden [@media(pointer:fine)]:block"
      animate={{ x: pos.x - 16, y: pos.y - 16, scale: hovering ? 2.2 : 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
    >
      <div className="size-8 rounded-full bg-primary/20 backdrop-blur-sm mix-blend-multiply" />
    </motion.div>
  );
}
