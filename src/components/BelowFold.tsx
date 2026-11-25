import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { ClientWork } from "@/components/sections/ClientWork";
import { Projects } from "@/components/sections/Projects";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { ParallaxScene } from "@/components/sections/ParallaxScene";
import { Footer } from "@/components/Footer";

/* Everything under the hero. Loaded as its own chunk so the hero paints first. Page order — move, add or remove sections here. */
export default function BelowFold() {
  return (
    <>
      <ParallaxScene />
      <About />
      <Skills />
      <ClientWork />
      <Projects />
      <Credentials />
      <Contact />
      <ROICalculator />
      <Footer />
    </>
  );
}
