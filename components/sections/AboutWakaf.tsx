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
    <SectionReveal id="about">
      <Container size="7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Tentang Wakaf DPF
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Ekosistem wakaf modern untuk hasil yang berkelanjutan.
            </h2>
            <p className="text-sm text-neutral-600 sm:text-base">
              Kami memastikan setiap program memiliki target dampak, pelaporan
              rutin, dan pengelolaan aset yang produktif agar manfaatnya terus
              bertambah.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow-sm"
              >
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
                    <item.icon className="h-5 w-5 text-neutral-700" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
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