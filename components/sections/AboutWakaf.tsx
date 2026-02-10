import { BarChart3, ShieldCheck, Target, Users } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionReveal from "@/components/sections/SectionReveal";

const highlights = [
  {
    title: "Transparan",
    desc: "Laporan real time dan ringkasan kinerja tiap program.",
    icon: BarChart3,
  },
  {
    title: "Amanah",
    desc: "Pengelolaan sesuai prinsip syariah dan audit rutin.",
    icon: ShieldCheck,
  },
  {
    title: "Tepat Sasaran",
    desc: "Program terverifikasi dengan indikator dampak terukur.",
    icon: Target,
  },
  {
    title: "Kolaboratif",
    desc: "Sinergi wakif, nadzir, dan mitra di satu dashboard.",
    icon: Users,
  },
];

export default function AboutWakaf() {
  return (
    <SectionReveal id="about" className="py-24 sm:py-32 bg-white">
      <Container size="7xl">
        <div className="flex flex-col gap-10">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <span className="font-heading text-primary-500 font-bold tracking-widest text-3xl md:text-4xl uppercase block">
              Tentang Kami
            </span>

            <h2 className="font-heading text-3xl font-bold leading-tight text-brand-green-900 sm:text-4xl lg:text-5xl">
              Ekosistem wakaf modern untuk <span className="text-primary-500">hasil yang berkelanjutan.</span>
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Kami memastikan setiap program memiliki target dampak, pelaporan
              rutin, dan pengelolaan aset yang produktif agar manfaatnya terus
              bertambah untuk umat.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-brand-green-200 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-green-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionReveal>
  );
}