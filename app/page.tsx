import { About } from "./_components/About";
import { ContactFooter } from "./_components/ContactFooter";
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
        <About />
        <Services />
        <Testimonials />
      </main>
      <ContactFooter />
    </div>
  );
}
