import Container from "@/components/layout/Container";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-green-900 to-primary-800 text-white">
      {/* Top Section */}
      <Container className="pt-16 pb-12" size="7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">

          {/* Brand Column */}
          <div className="lg:max-w-md">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/brand/dpf-icon.png"
                alt="Wakaf DPF Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain bg-white rounded-[12px] p-1"
              />
              <span className="text-xl font-bold text-white tracking-tight">
                Wakaf Produktif
              </span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              Platform wakaf produktif yang fokus pada transparansi, pengelolaan
              amanah, dan dampak sosial berkelanjutan untuk kemaslahatan umat.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://api.whatsapp.com/send/?phone=6281311768254&text&type=phone_number&app_absent=0" icon={<FaWhatsapp size={20} />} label="WhatsApp" className="hover:bg-[#25D366] hover:border-[#25D366]" />
              <SocialLink href="https://www.instagram.com/wakafdpf/" icon={<FaInstagram size={20} />} label="Instagram" className="hover:bg-[#E1306C] hover:border-[#E1306C]" />
              <SocialLink href="https://www.tiktok.com/@dpf.or.id" icon={<FaTiktok size={20} />} label="TikTok" className="hover:bg-black hover:border-black" />
              <SocialLink href="https://www.youtube.com/@dpfofficial" icon={<FaYoutube size={20} />} label="YouTube" className="hover:bg-[#FF0000] hover:border-[#FF0000]" />
              <SocialLink href="https://www.facebook.com/people/Djalaluddin-Pane/pfbid02KhWqQs46MyzxQCsxTesXkzHQ4MTjBmf3QSEikFUsURbumLeG5A636hrPJAhNWrqRl/" icon={<FaFacebookF size={20} />} label="Facebook" className="hover:bg-[#1877F2] hover:border-[#1877F2]" />
            </div>
          </div>




          {/* Program Column */}
          <div className="lg:max-w-xs">
            <h3 className="text-white font-semibold mb-6">Program</h3>
            <ul className="space-y-4 text-sm text-white/90">
              <li><span className="block py-1">Investasi Kebaikan dengan Wakaf Peternakan</span></li>
              <li><span className="block py-1">Wakaf Masjid Plosok & Bencana Indonesia</span></li>
              <li><span className="block py-1">Wakaf Produktif Untuk UMKM Berdaya</span></li>
              <li><span className="block py-1">Wakaf Air Manfaat Mengalir, Pahala Tumbuh Subur</span></li>
              <li><span className="block py-1">Wakaf Uang</span></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:max-w-sm">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider flex items-center gap-3">
              <span className="w-1 h-6 bg-brand-green-500 block"></span>
              Hubungi Kami
            </h3>
            <ul className="space-y-6 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-white mt-1" size={20} />
                <div>
                  <strong className="block text-white text-base mb-1">Jakarta:</strong>
                  <a href="https://maps.app.goo.gl/VB1WisFeMboS12Ed7" target="_blank" rel="noopener noreferrer" className="leading-relaxed text-white/80 hover:text-brand-green-300 transition-colors block">
                    Signature Park Grande, Jl. Letjen M.T. Haryono No.Kav. 20, RT.4/RW.1, 
                    Cawang, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13630.
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-white" size={20} />
                <a href="https://wa.me/6281311768254?text=Halo%20Wakaf%20DPF%2C%20saya%20ingin%20berwakaf%20dan%20ingin%20info%20lebih%20lanjut" target="_blank" rel="noopener noreferrer" className="text-base hover:text-brand-green-300 transition-colors">0813-1176-8254 (DPF Official)</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-white" size={20} />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=layanan@dpf.or.id" target="_blank" rel="noopener noreferrer" className="text-base hover:text-brand-green-300 transition-colors">layanan@dpf.or.id</a>
              </li>
            </ul>
          </div>

        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="">
        <Container className="py-6" size="7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/80">
            <p>© 2026 Wakaf DPF. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label, className }: { href: string; icon: React.ReactNode; label: string; className?: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {icon}
    </a>
  );
}



function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hover:text-white hover:pl-1 transition-all duration-200 inline-block">
      {children}
    </a>
  );
}