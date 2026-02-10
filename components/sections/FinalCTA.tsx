import Container from "@/components/layout/Container";
import SectionReveal from "@/components/sections/SectionReveal";
import { ArrowRight } from "lucide-react";


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
        <div className="group relative overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500 sm:p-16 lg:p-20">
          <div className="flex flex-col items-center text-center">

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
            </div>

            {/* 5. Clean CTA Button (No Bloom) */}
            <div className="mt-12 flex flex-col items-center">
              <a
                href={ctaHref}
                className="group relative inline-flex h-16 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-primary-500 to-primary-600 px-10 text-lg font-bold text-white transition-all duration-300 active:scale-95"
              >
                {/* Inner Highlight (Glossy Effect) */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                
                <span className="relative z-10 tracking-wide">{ctaLabel}</span>
                <ArrowRight size={22} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

                {/* Button Shine Effect on Hover */}
                <div className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </a>
            </div>
          </div>
        </div>

      </Container>



    </SectionReveal>
  );
}