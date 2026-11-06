import { motion } from "framer-motion";

/** The small uppercase label above each section title ("About Me", "Skills", …). */
export function SectionLabel({ children }: { children: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary/70"
    >
      {children}
    </motion.div>
  );
}
