import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import BenefitsChecklist from "@/components/program/BenefitsChecklist";
import ProgramDescription from "@/components/program/ProgramDescription";
import ProgramGallery from "@/components/program/ProgramGallery";
import ProgramPriceBox from "@/components/program/ProgramPriceBox";
import { programs } from "@/data/programs";
import { notFound } from "next/navigation";

type ProgramDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProgramDetailPage(props: ProgramDetailPageProps) {
  const params = await props.params;
  const program = programs.find((item) => item.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 pb-20 md:pb-0">
      <Navbar />
      <main className="py-14 sm:py-16 lg:py-20">
        <Container size="7xl">
          <div className="mb-8 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Detail Program
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">
              {program.title}
            </h1>
            <p className="text-sm text-neutral-600 sm:text-base">
              {program.shortDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <ProgramGallery images={program.images} title={program.title} />
              <ProgramDescription description={program.description} />
              <BenefitsChecklist benefits={program.benefits} />
            </div>
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <ProgramPriceBox
                  price={program.price}
                  ctaLabel="Mulai Wakaf"
                  ctaHref="#"
                />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      <div className="md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur">
        <Container className="flex items-center justify-between py-3" size="7xl">
          <span className="text-sm font-semibold text-neutral-900">
            Siap mendukung program ini?
          </span>
          <a
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-neutral-900 px-3 text-xs font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2"
          >
            Mulai Wakaf
          </a>
        </Container>
      </div>
    </div>
  );
}
