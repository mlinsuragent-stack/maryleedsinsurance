import { About } from "./_components/About";
import { CarrierMarquee } from "./_components/CarrierMarquee";
import { ContactFooter } from "./_components/ContactFooter";
import { CtaSection } from "./_components/CtaSection";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Services } from "./_components/Services";
import { Testimonials } from "./_components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <CarrierMarquee />
        <About />
        <Services />
        <Testimonials />
        <CtaSection />
      </main>
      <ContactFooter />
    </div>
  );
}
