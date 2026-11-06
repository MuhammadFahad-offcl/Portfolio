import { motion } from "framer-motion";
import { User } from "lucide-react";
import { about, profile } from "@/data/portfolio";
import { SectionLabel } from "@/components/SectionLabel";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>About Me</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center text-4xl font-bold leading-tight md:text-5xl"
        >
          Engineering the future, <span className="text-gradient">one workflow at a time</span>
        </motion.h2>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass relative overflow-hidden rounded-3xl p-2 shadow-soft"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-x-0 bottom-0 top-8 flex items-end justify-center">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  width={900}
                  height={950}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="animate-photo-float h-full w-auto max-w-full select-none object-contain object-bottom"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <User size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{about.photoCaption.label}</div>
                    <div className="text-sm font-semibold">{about.photoCaption.value}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text + facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm a <span className="font-semibold text-foreground">BSCS student at UMT</span> and the founder of{" "}
              <span className="text-gradient font-semibold">{profile.company}</span> — a Pakistan-based technology agency focused
              on AI automation, agentic workflows, and intelligent digital systems. I specialize in{" "}
              <span className="font-medium text-foreground">AI Agents</span>,{" "}
              <span className="font-medium text-foreground">n8n automation</span>, and modern web development that
              turns manual chaos into intelligent systems.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">{about.mission}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              {about.facts.map((fact, i) => {
                const Icon = fact.icon;
                return (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="glass flex items-center gap-3 rounded-2xl p-4 shadow-soft transition-transform hover:-translate-y-1"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {fact.label}
                      </div>
                      <div className="truncate text-sm font-semibold">{fact.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
