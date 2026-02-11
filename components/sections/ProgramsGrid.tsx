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
            <span className="font-heading text-primary-500 font-bold tracking-[0.2em] text-sm uppercase block mb-3">
              Program Unggulan
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-brand-green-900 sm:text-4xl lg:text-5xl">
              Pilihan program wakaf dengan <span className="text-primary-500">dampak nyata.</span>
            </h2>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {programs.map((program) => (
            <div key={program.title} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </Container>
    </SectionReveal>
  );
}