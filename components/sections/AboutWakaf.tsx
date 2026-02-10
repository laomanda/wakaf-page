import { BarChart3, ShieldCheck, Target, Users, FileText } from "lucide-react";

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
        <div className="flex flex-col gap-12">
          {/* Centered Title */}
          <div className="text-center">
            <span className="font-heading text-black font-bold tracking-widest text-3xl md:text-4xl uppercase block">
              Tentang Kami
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:max-w-xl">
              <h2 className="font-heading text-3xl font-bold leading-tight text-brand-green-600 sm:text-4xl lg:text-5xl">
                Ekosistem wakaf modern untuk <span className="text-primary-500">hasil yang berkelanjutan.</span>
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed text-justify">
                Kami memastikan setiap program memiliki target dampak, pelaporan
                rutin, dan pengelolaan aset yang produktif agar manfaatnya terus
                bertambah untuk umat.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-green-100 p-2 rounded-full text-brand-green-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-green-900">Terverifikasi BWI</p>
                    <p className="text-xs text-neutral-500">No. Reg: 3.3.00338</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary-100 p-2 rounded-full text-primary-500">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-green-900">Izin Operasional LKS</p>
                    <p className="text-xs text-neutral-500 max-w-[200px] leading-tight">(SK No 465.3/39)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="grid gap-6 sm:grid-cols-2">
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
        </div>
      </Container>
    </SectionReveal>
  );
}