import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2, Pause, Play } from "lucide-react";
import { clientWork } from "@/data/portfolio";
import { SectionLabel } from "@/components/SectionLabel";

type Video = NonNullable<(typeof clientWork)[number]["video"]>;

/** Portrait demo video in a phone frame. Plays only while on screen, to save data and battery. */
function PhoneVideo({ video, title }: { video: Video; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || userPaused) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [userPaused]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      setUserPaused(false);
      el.play().catch(() => {});
    } else {
      setUserPaused(true);
      el.pause();
    }
  };

  return (
    <div className="mx-auto w-full max-w-[290px]">
      <div className="relative rounded-[2.75rem] border border-border bg-card p-2.5 shadow-glow">
        <div className="relative aspect-[1/2] overflow-hidden rounded-[2.25rem] bg-muted">
          <video
            ref={ref}
            src={video.src}
            poster={video.poster}
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            aria-label={`${title} — demo video`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2.5">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
          className="flex size-8 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/70 transition-colors hover:border-primary/50 hover:text-primary"
        >
          {playing ? <Pause size={13} /> : <Play size={13} className="translate-x-px" />}
        </button>
        <p className="text-xs text-muted-foreground">{video.caption}</p>
      </div>
    </div>
  );
}

export function ClientWork() {
  return (
    <section id="client-work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Client Work</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl font-bold md:text-5xl"
        >
          Built for real clients, <span className="text-gradient">running in production</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-center text-muted-foreground"
        >
          Systems I've delivered for businesses and still run and maintain today.
        </motion.p>

        <div className="mt-16 space-y-8">
          {clientWork.map((work) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="glass relative overflow-hidden rounded-3xl p-6 shadow-soft md:p-10"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                {work.video && (
                  <div className="lg:col-span-5">
                    <PhoneVideo video={work.video} title={work.title} />
                  </div>
                )}

                <div className={work.video ? "lg:col-span-7" : "lg:col-span-12"}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground/80">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-primary" />
                      </span>
                      {work.status}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1.5 text-xs font-medium text-primary">
                      <Building2 size={13} />
                      {work.client}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">{work.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{work.summary}</p>

                  <div className="mt-7 grid grid-cols-3 gap-3">
                    {work.stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-border bg-background/50 p-4 text-center">
                        <div className="text-gradient text-2xl font-bold md:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {stat.value}
                        </div>
                        <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {work.highlights.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-foreground/80">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-1.5">
                    {work.stack.map((tech) => (
                      <span key={tech} className="rounded-full bg-primary/8 px-2.5 py-1 text-[11px] font-medium text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    Get one for your business
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
