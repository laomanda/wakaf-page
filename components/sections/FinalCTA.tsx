import Container from "@/components/layout/Container";
import SectionReveal from "@/components/sections/SectionReveal";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";


type FinalCTAProps = {
  ctaLabel: string;
  ctaHref: string;
};

export default function FinalCTA({ ctaLabel, ctaHref }: FinalCTAProps) {
  return (
    <SectionReveal className="relative overflow-hidden py-24 sm:py-32 bg-brand-green-900 text-white">
      {/* 1. Ambient Background Elements */}
      <div className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary-500/10 blur-[120px]" />
      <div className="absolute -bottom-[10%] -right-[10%] h-[400px] w-[400px] rounded-full bg-brandBlueTeal-500/10 blur-[100px]" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <Container className="relative z-10 max-w-5xl">
        {/* Main Card Container */}
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:border-white/20 sm:p-16 lg:p-20">

          {/* 2. Top Glowing Line */}
          <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />

          <div className="flex flex-col items-center text-center">

            <div className="mb-8">
              <Badge variant="secondary" shiny={true} className="px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                <Sparkles size={14} className="animate-pulse text-primary-500 mr-2" />
                Wujudkan Keberkahan Jariyah
              </Badge>
            </div>

            {/* 4. Heading */}
            <div className="max-w-3xl space-y-6">
              <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-6xl font-heading">
                Jadikan wakaf Anda <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    mesin kebaikan
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                yang terus tumbuh.
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-relaxed text-brand-green-100/70 sm:text-xl font-body">
                Tim kami siap mendampingi Anda memilih program wakaf terbaik demi
                kemaslahatan umat yang berkelanjutan dan transparan.
              </p>
            </div>

            {/* 5. Clean CTA Button (No Bloom) */}
            <div className="mt-12 flex flex-col items-center">
              <a
                href={ctaHref}
                className="group/btn relative inline-flex h-16 items-center justify-center gap-4 overflow-hidden rounded-full bg-primary-500 px-12 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary-500/20"
              >
                <span className="relative z-10">{ctaLabel}</span>
                <ArrowRight size={22} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1.5" />

                {/* Button Shine Effect */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              </a>
            </div>
          </div>

          {/* Subtle Corner Accents */}
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary-500/5 blur-2xl" />
        </div>

      </Container>



    </SectionReveal>
  );
}