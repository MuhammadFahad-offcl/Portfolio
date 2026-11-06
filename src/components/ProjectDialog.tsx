import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

type Props = {
  project: Project | null;
  onClose: () => void;
};

/** "View Details" panel for a project. Closes on Esc, the X button, or a click outside. */
export function ProjectDialog({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = project !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[150] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-border bg-background p-6 shadow-2xl sm:rounded-3xl sm:p-9"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary/50 hover:text-primary sm:right-6 sm:top-6"
            >
              <X size={18} />
            </button>

            <ProjectBody project={project} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectBody({ project }: { project: Project }) {
  const Icon = project.icon;
  const details = project.details;
  const sectionTitle = "mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground";

  return (
    <>
      <div className="flex items-start gap-4 pr-12">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
          <Icon size={22} />
        </div>
        <div className="min-w-0">
          <h3 id="project-dialog-title" className="text-2xl font-bold tracking-tight md:text-3xl">
            {project.title}
          </h3>
          {details?.status && (
            <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground/80">
              <span className="size-1.5 rounded-full bg-primary" />
              {details.status}
            </span>
          )}
        </div>
      </div>

      <p className="mt-6 text-base leading-relaxed text-foreground/80">{details?.overview ?? project.desc}</p>

      {details?.steps && (
        <div className="mt-8">
          <h4 className={sectionTitle}>How it works</h4>
          <ol className="grid gap-3 sm:grid-cols-2">
            {details.steps.map((step, i) => (
              <li key={step.title} className="flex gap-3 rounded-2xl border border-border bg-card/60 p-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <div>
                  <div className="text-sm font-semibold">{step.title}</div>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="mt-8">
        <h4 className={sectionTitle}>Tech stack</h4>
        {details ? (
          <dl className="space-y-3">
            {details.stack.map((group) => (
              <div key={group.group} className="grid gap-2 sm:grid-cols-[150px_1fr] sm:items-start">
                <dt className="pt-1 text-sm font-medium text-foreground/70">{group.group}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-primary/8 px-2.5 py-1 text-xs font-medium text-primary">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-primary/8 px-2.5 py-1 text-xs font-medium text-primary">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {details?.note && (
        <p className="mt-8 rounded-2xl border border-border bg-secondary/60 p-4 text-sm leading-relaxed text-muted-foreground">
          {details.note}
        </p>
      )}

      {details?.link && (
        <a
          href={details.link.href}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
        >
          {details.link.label}
          <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}
    </>
  );
}
