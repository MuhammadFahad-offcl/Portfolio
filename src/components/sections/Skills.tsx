import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { SectionLabel } from "@/components/SectionLabel";

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12">
        <SectionLabel>Skills</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center text-4xl font-bold md:text-5xl"
        >
          The <span className="text-gradient">stack</span> I build with
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              data-cursor-hover
              className="glass group relative overflow-hidden rounded-3xl p-7 shadow-soft transition-shadow hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              <h3 className="relative mb-5 text-lg font-semibold">
                <span className="text-gradient">{group.title}</span>
              </h3>
              <div className="relative flex flex-wrap gap-2">
                {group.chips.map((chip, j) => (
                  <motion.span
                    key={chip}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: j * 0.04 }}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-medium text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  >
                    {chip}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
