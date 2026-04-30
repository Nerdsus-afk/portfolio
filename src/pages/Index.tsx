import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Process } from "@/components/portfolio/Process";
import { Contact } from "@/components/portfolio/Contact";
import { SmoothScrollToggle } from "@/components/portfolio/SmoothScrollToggle";
import { projects } from "@/data/projects";
import { usePreloadImages } from "@/hooks/use-preload-images";

const Index = () => {
  // Warm project image cache during idle time so thumbnails appear
  // instantly when the user scrolls, without hurting the hero LCP.
  usePreloadImages(projects.map((p) => p.img));

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Experience />
      <Process />
      <Contact />
      <SmoothScrollToggle />
    </main>
  );
};

export default Index;
