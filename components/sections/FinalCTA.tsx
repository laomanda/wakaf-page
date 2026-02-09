import Container from "@/components/layout/Container";
import SectionReveal from "@/components/sections/SectionReveal";

type FinalCTAProps = {
  ctaLabel: string;
  ctaHref: string;
};

export default function FinalCTA({ ctaLabel, ctaHref }: FinalCTAProps) {
  return (
    <SectionReveal className="bg-neutral-900 text-white">
      <Container size="7xl">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-neutral-950/70 px-6 py-12 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Mulai Sekarang
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Jadikan wakaf Anda mesin kebaikan yang terus tumbuh.
          </h2>
          <p className="text-sm text-white/70 sm:text-base">
            Tim kami siap membantu memilih program yang sesuai dengan tujuan
            wakaf Anda.
          </p>
          <a
            href={ctaHref}
            className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
          >
            {ctaLabel}
          </a>
        </div>
      </Container>
    </SectionReveal>
  );
}