import Image from "next/image";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/sections/SectionReveal";

type HeroCenteredProps = {
  ctaLabel: string;
  ctaHref: string;
};

export default function HeroCentered({
  ctaLabel,
  ctaHref,
}: HeroCenteredProps) {
  return (
    <SectionReveal className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
          alt="Lanskap alam untuk latar wakaf"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/70" />
      </div>
      <Container className="relative z-10 text-center" size="7xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <span className="rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Wakaf Produktif
          </span>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Wakaf terukur untuk manfaat yang terus tumbuh.
          </h1>
          <p className="text-sm text-white/80 sm:text-base">
            Program terverifikasi, laporan transparan, dan pendampingan nadzir
            agar wakaf Anda memberi dampak nyata.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
              <a href="#program">Lihat Program</a>
            </Button>
          </div>
        </div>
      </Container>
    </SectionReveal>
  );
}
