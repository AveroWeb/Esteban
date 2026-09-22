import Hero from "@/components/home/Hero";
import CategoryStrip from "@/components/home/CategoryStrip";
import Services from "@/components/home/Services";
import CollectionsSection from "@/components/home/CollectionsSection";
import About from "@/components/home/About";
import PhotoSelection from "@/components/home/PhotoSelection";
import Process from "@/components/home/Process";
import PhotoMarquee from "@/components/home/PhotoMarquee";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="bg-paper">
      <Hero />
      <CategoryStrip />
      <Services />
      <CollectionsSection />
      <About />
      <PhotoSelection />
      <Process />
      <PhotoMarquee />
      <Testimonials />
      <Contact />
    </main>
  );
}
