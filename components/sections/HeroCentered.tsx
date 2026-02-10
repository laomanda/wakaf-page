"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionReveal from "@/components/sections/SectionReveal";
import { ArrowRight, Phone, LayoutGrid } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

type HeroCenteredProps = {
  ctaLabel: string;
  ctaHref: string;
};

export default function HeroCentered({
  ctaLabel,
  ctaHref,
}: HeroCenteredProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-green-950">
      {/* Background Image with Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <Image
          src="/hero-bg.png"
          alt="Latar belakang wakaf produktif"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-neutral-950/60" />
      </motion.div>

      <Container className="relative z-10 pt-32 pb-20" size="7xl">
        <SectionReveal>
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">


            {/* Headline */}
            <h1 className="font-script text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl tracking-normal">
              Kebaikan yang <span className="text-primary-400">Tak Putus</span>,<br />
              Manfaat yang <span className="text-emerald-400">Terus Tumbuh</span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-lg text-emerald-50/90 sm:text-xl font-medium leading-relaxed drop-shadow-lg">
              Salurkan wakaf Anda melalui program produktif yang amanah, transparan, dan berdampak nyata bagi kemaslahatan umat.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 mt-8">
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary-500 px-8 pr-12 text-base font-bold text-white shadow-xl shadow-primary-500/30 transition-all hover:bg-primary-600 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:shadow-md"
              >
                 <Phone className="w-5 h-5 fill-current" />
                 <span className="uppercase tracking-wider">{ctaLabel}</span>
                 <ArrowRight className="absolute right-4 translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-1" />
              </a>
              
              <a
                href="#program"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border-2 border-white/20 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-md shadow-xl shadow-white/5 transition-all hover:bg-white hover:text-brand-green-900 hover:border-white hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:shadow-md"
              >
                <LayoutGrid className="w-5 h-5 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]" />
                <span>Lihat Program</span>
              </a>
            </div>
          </div>
        </SectionReveal>
      </Container>

    </div>
  );
}
