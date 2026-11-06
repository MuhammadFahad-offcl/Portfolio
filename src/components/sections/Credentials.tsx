import { motion } from "framer-motion";
import { credentials } from "@/data/portfolio";
import { SectionLabel } from "@/components/SectionLabel";

export function Credentials() {
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>Certifications</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center text-4xl font-bold md:text-5xl"
        >
          Credentials &amp; <span className="text-gradient">milestones</span>
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-2">
          {credentials.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-3xl p-7 shadow-soft transition-shadow hover:shadow-glow"
              >
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className="relative flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <div className="mt-0.5 flex flex-wrap items-center gap-2 text-sm">
                      <span className="text-gradient font-medium">{item.org}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{item.year}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
