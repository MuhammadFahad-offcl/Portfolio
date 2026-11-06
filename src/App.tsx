import { Loader } from "@/components/Loader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { ClientWork } from "@/components/sections/ClientWork";
import { Projects } from "@/components/sections/Projects";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

/* Page order — move, add or remove sections here. */
export default function App() {
  return (
    <main className="relative">
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ClientWork />
      <Projects />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
