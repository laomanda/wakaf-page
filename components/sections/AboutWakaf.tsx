import { Monitor, ShieldCheck, Sprout, GraduationCap, FileText, HeartPulse, Coins, CheckCircle2, Users, Mic2, Building2 } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionReveal from "@/components/sections/SectionReveal";

export default function AboutWakaf() {
  const highlights = [
    {
      title: "Legalitas Ganda",
      desc: "Terdaftar resmi sebagai Lembaga Amil Zakat (LAZ) Nasional & Nazir Wakaf Uang.",
      icon: ShieldCheck,
    },
    {
      title: "DNA Teknologi",
      desc: "Pemanfaatan TIK untuk menciptakan ekosistem wakaf yang modern dan efisien.",
      icon: Monitor,
    },
    {
      title: "Wakaf Produktif",
      desc: "Aset dikelola secara profesional melalui unit bisnis riil yang menguntungkan.",
      icon: Sprout,
    },
    {
      title: "Peduli Pendidikan",
      desc: "Fokus utama pada pemberdayaan guru dan penciptaan masyarakat pembelajar.",
      icon: GraduationCap,
    },
  ];

  return (
    <SectionReveal id="about" className="py-24 sm:py-32 bg-white">
      <Container size="7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="font-heading text-primary-500 font-bold tracking-[0.2em] text-sm uppercase block mb-3">
                  Tentang Kami
                </span>
                <h2 className="font-heading text-3xl font-bold leading-tight text-brand-green-900 sm:text-4xl lg:text-5xl">
                  Ekosistem wakaf modern untuk <span className="text-primary-500">hasil yang berkelanjutan.</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-base text-neutral-600 leading-relaxed text-justify">
                <p>
                  Kami adalah lembaga penggalang dana masyarakat dengan izin Lembaga Amil Zakat (LAZ) tingkat nasional dan juga sebagai Lembaga Nazir Wakaf yang menyelenggarakan berbagai program karitas, peningkatan produktivitas, pemberdayaan serta program berkelanjutan bagi kaum fakir & miskin.
                </p>
                <p>
                  Yayasan Wakaf Djalaluddin Pane didirikan pada 26 Juli 2010 atas semangat filantropi Islam yang berbasis pada pendayagunaan dana zakat, infaq, sedekah, dan wakaf untuk kemaslahatan kaum lemah dan terlemahkan.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-brand-green-50 rounded-lg border border-brand-green-100">
                  <div className="bg-white p-2 rounded-full text-brand-green-600 shadow-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-brand-green-900">Terverifikasi BWI</p>
                    <p className="text-[10px] text-brand-green-700">No. Reg: 3.3.00338</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg border border-primary-100">
                  <div className="bg-white p-2 rounded-full text-primary-500 shadow-sm">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-brand-green-900">Izin Operasional LKS</p>
                    <p className="text-[10px] text-primary-700 leading-tight">(SK No 465.3/39)</p>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Right Content */}
            <div className="flex flex-col gap-6 h-full">
              <div className="grid gap-5 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 transition-all duration-300 hover:border-brand-green-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 h-full flex flex-col items-start"
                  >
                    <div className="relative z-10 flex flex-col gap-4 h-full">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-50 to-brand-green-100/50 text-brand-green-600 transition-colors group-hover:from-primary-500 group-hover:to-primary-600 group-hover:text-white shadow-sm">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-brand-green-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <p className="text-xs font-bold text-neutral-400 mb-4 uppercase tracking-wider">Fokus Penyaluran</p>
                <div className="flex flex-nowrap items-center gap-2 overflow-hidden w-full">
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap hover:bg-primary-100 transition-colors cursor-default border border-primary-100">
                    <GraduationCap className="w-3.5 h-3.5" /> Pendidikan
                  </span>
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap hover:bg-primary-100 transition-colors cursor-default border border-primary-100">
                    <Coins className="w-3.5 h-3.5" /> Ekonomi
                  </span>
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap hover:bg-primary-100 transition-colors cursor-default border border-primary-100">
                    <HeartPulse className="w-3.5 h-3.5" /> Kesehatan
                  </span>
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap hover:bg-primary-100 transition-colors cursor-default border border-primary-100">
                    <Users className="w-3.5 h-3.5" /> Sosial
                  </span>
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap hover:bg-primary-100 transition-colors cursor-default border border-primary-100">
                    <Mic2 className="w-3.5 h-3.5" /> Dakwah
                  </span>
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap hover:bg-primary-100 transition-colors cursor-default border border-primary-100">
                    <Building2 className="w-3.5 h-3.5" /> Wakaf
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Standar Pengelolaan - Full Width */}
          <div className="mt-12 bg-neutral-50 px-6 py-6 rounded-2xl border border-neutral-100">
            <p className="text-xs font-bold text-neutral-400 mb-6 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green-500" /> Standar Pengelolaan
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green-500 mt-2 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-800">Sesuai Prinsip Syariah</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">Diawasi Dewan Pengawas Syariah (DPS) tersertifikasi.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green-500 mt-2 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-800">Laporan Transparan</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">Update rutin penggunaan dana dan dokumentasi kegiatan.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green-500 mt-2 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-800">Audit Profesional</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">Laporan keuangan diperiksa oleh akuntan publik independen.</p>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </SectionReveal>
  );
}