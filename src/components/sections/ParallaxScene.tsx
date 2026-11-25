import { ArrowDown } from "lucide-react";
import { ParallaxComponent } from "@/components/ui/parallax-scrolling";
import { parallax } from "@/data/portfolio";
import { getLenis } from "@/lib/smooth-scroll";

/** The layered mountain scene between the hero and About. Content lives in `parallax` in src/data/portfolio.ts. */
export function ParallaxScene() {
  return (
    <ParallaxComponent id="scene" title={parallax.title} layers={parallax.layers} lenis={getLenis()}>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{parallax.eyebrow}</p>
        <p className="text-balance text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
          {parallax.statement}
        </p>
        <a
          href={parallax.link.href}
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/60"
        >
          {parallax.link.label}
          <ArrowDown size={16} />
        </a>
      </div>
    </ParallaxComponent>
  );
}
