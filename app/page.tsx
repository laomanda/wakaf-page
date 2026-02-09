import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutWakaf from "@/components/sections/AboutWakaf";
import FinalCTA from "@/components/sections/FinalCTA";
import HeroCentered from "@/components/sections/HeroCentered";
import ProgramsGrid from "@/components/sections/ProgramsGrid";
import Testimonials from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";

const primaryCta = {
  label: "Mulai Wakaf",
  href: "#program",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 pb-20 md:pb-0">
      <Navbar />
      <main>
        <HeroCentered ctaLabel={primaryCta.label} ctaHref={primaryCta.href} />
        <AboutWakaf />
        <ProgramsGrid />
        <Testimonials />
        <FinalCTA ctaLabel={primaryCta.label} ctaHref={primaryCta.href} />
      </main>
      <Footer />
      <div className="md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur">
        <Container className="flex items-center justify-between py-3" size="7xl">
          <span className="text-sm font-semibold text-neutral-900">
            Siap berwakaf?
          </span>
          <Button size="sm" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
        </Container>
      </div>
    </div>
  );
}
