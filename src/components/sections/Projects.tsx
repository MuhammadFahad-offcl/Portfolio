import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectDialog } from "@/components/ProjectDialog";

export function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Projects</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl font-bold md:text-5xl"
        >
          Things I've <span className="text-gradient">shipped</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-center text-muted-foreground"
        >
          A mix of AI, automation, and engineering work — built end-to-end.
        </motion.p>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -8 }}
                data-cursor-hover
                className="glass group relative overflow-hidden rounded-3xl p-7 shadow-soft transition-shadow duration-500 hover:shadow-glow"
              >
                <div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/8 px-2.5 py-1 text-[11px] font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                    <span className="text-xs text-muted-foreground">
                      {project.details?.status ? project.details.status.split("·")[0].trim() : "Case study"}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      aria-haspopup="dialog"
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                    >
                      View Details
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>{project.title === "WhatsApp AI Agent" && (
  <div className="mt-6 border-t border-border/30 pt-4">
    <p className="text-sm text-muted-foreground mb-4">{project.details?.overview}</p>
    {project.details?.steps && (
      <div className="mb-4">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">How it works</h4>
        <ol className="grid gap-3 sm:grid-cols-2">
          {project.details.steps.map((step, i) => (
            <li key={step.title} className="flex gap-3 rounded-2xl border border-border bg-card/60 p-4">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-semibold text-primary">{i + 1}</span>
              <div>
                <div className="text-sm font-semibold">{step.title}</div>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )}
    {project.details?.stack && (
      <div className="mb-4">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tech stack</h4>
        <dl className="space-y-2">
          {project.details.stack.map((group) => (
            <div key={group.group} className="grid gap-2 sm:grid-cols-[150px_1fr] sm:items-start">
              <dt className="pt-1 text-sm font-medium text-foreground/70">{group.group}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-primary/8 px-2.5 py-1 text-xs font-medium text-primary">{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    )}
    {project.details?.note && (
      <p className="mt-4 rounded-2xl border border-border bg-secondary/60 p-4 text-sm leading-relaxed text-muted-foreground">{project.details.note}</p>
    )}
    {project.details?.link && (
      <a href={project.details.link.href} target="_blank" rel="noreferrer" className="group mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow">
        {project.details.link.label}
        <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    )}
  </div>
)}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ProjectDialog project={selected} onClose={close} />
    </section>
  );
}
