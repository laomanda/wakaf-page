import Container from "@/components/layout/Container";
import ProgramCard from "@/components/program/ProgramCard";
import SectionReveal from "@/components/sections/SectionReveal";
import { programs } from "@/data/programs";

export default function ProgramsGrid() {
  return (
    <SectionReveal id="program">
      <Container size="7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Program Unggulan
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Pilihan program wakaf dengan dampak nyata.
            </h2>
          </div>
          <p className="text-sm text-neutral-600">
            6 program aktif dengan pelaporan berkala.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </Container>
    </SectionReveal>
  );
}