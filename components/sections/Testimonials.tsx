import Image from "next/image";

import Container from "@/components/layout/Container";
import SectionReveal from "@/components/sections/SectionReveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <SectionReveal id="testimonials" className="bg-neutral-50">
      <Container size="7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Testimoni
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Cerita wakif dan mitra tentang dampak wakaf.
            </h2>
          </div>
          <p className="text-sm text-neutral-600">
            Suara langsung dari lapangan.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-neutral-200 bg-white shadow-sm"
            >
              <div className="space-y-4 p-6">
                <p className="text-sm text-neutral-700">
                  &ldquo;{item.message}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-neutral-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionReveal>
  );
}
