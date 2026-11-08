import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { hero, profile } from "@/data/portfolio";
import { BlurFade } from "@/components/BlurFade";
import posthog from "@/posthog";

/** Glowing blobs, floating shapes and particles behind the hero text. They drift with the mouse. */
function HeroBackground() {
  const [m, setM] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setM({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: m.x, y: m.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute -left-32 top-20 size-[28rem] rounded-full bg-primary/15 blur-[120px] animate-pulse-glow"
      />
      <motion.div
        animate={{ x: -m.x, y: -m.y }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute -right-32 top-40 size-[32rem] rounded-full blur-[140px] animate-pulse-glow"
        style={{ background: "oklch(0.45 0.18 268 / 0.18)" }}
      />
      <motion.div
        animate={{ x: m.x * 1.5, y: m.y * 1.5 }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="absolute right-[15%] top-[20%] hidden md:block"
      >
        <div className="animate-float size-20 rotate-12 rounded-2xl border border-primary/20 bg-white/40 backdrop-blur-sm shadow-soft" />
      </motion.div>
      <motion.div
        animate={{ x: m.x * -2, y: m.y * -2 }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
        className="absolute left-[12%] top-[55%] hidden md:block"
      >
        <div
          className="animate-float size-14 rounded-full border border-primary/15 bg-white/30 backdrop-blur-sm"
          style={{ animationDelay: "1s" }}
        />
      </motion.div>
      <motion.div
        animate={{ x: m.x, y: m.y }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="absolute right-[25%] bottom-[15%] hidden md:block"
      >
        <div className="animate-float size-10 rotate-45 border border-primary/30" style={{ animationDelay: "2s" }} />
      </motion.div>
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute size-1 rounded-full bg-primary/30"
          style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 text-center sm:px-6 md:px-12"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial" />
      <HeroBackground />

      <div className="relative z-10 flex flex-col items-center gap-4">
        <BlurFade delay={0.25}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground/80">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {hero.badge}
          </div>
        </BlurFade>
        <BlurFade delay={0.4}>
          <h1 className="text-pretty text-5xl font-bold tracking-tighter text-foreground sm:text-7xl md:text-8xl">
            {hero.title}
          </h1>
        </BlurFade>
        <BlurFade delay={0.6}>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground/80 sm:text-3xl md:text-4xl">
            {hero.subtitle}
          </h2>
        </BlurFade>
        <BlurFade delay={0.8}>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{hero.description}</p>
        </BlurFade>
        <BlurFade delay={1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={hero.primaryButton.href}
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              {hero.primaryButton.label}
            </a>
            <a
              href={hero.secondaryButton.href}
              className="rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              {hero.secondaryButton.label}
            </a>
            <a
              href={profile.resume}
              download
              onClick={() => posthog.capture("resume_downloaded", { placement: "hero" })}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              <Download size={16} />
              {hero.resumeButton.label}
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
