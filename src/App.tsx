import { lazy, Suspense } from "react";
import { LazyMotion } from "framer-motion";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";

/*
 * The hero is in the main bundle so it paints first; the rest of the page is a separate chunk whose
 * download starts right away (in parallel with the hero's), not when it scrolls into view, so in-page
 * links always find their section. Section order lives in src/components/BelowFold.tsx.
 */
const belowFold = import("@/components/BelowFold");
const BelowFold = lazy(() => belowFold);

// Components animate with the light `m` renderer; its features download in their own chunk
const loadMotionFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

export default function App() {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
    <main className="relative w-full max-w-full overflow-x-clip">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
        <BelowFold />
      </Suspense>
    </main>
    </LazyMotion>
  );
}
