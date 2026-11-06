import { useRef, type ReactNode } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
};

/** Fades + un-blurs its content when it scrolls into view (used in the hero). */
export function BlurFade({ children, className, delay = 0, duration = 0.4, yOffset = 6, blur = "6px" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden"
        variants={{
          hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
          visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
        }}
        transition={{ delay: 0.04 + delay, duration, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
