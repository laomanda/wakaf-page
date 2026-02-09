import Container from "@/components/layout/Container";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-brand-green-900 text-brand-green-50">
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
                Wakaf DPF
              </span>
            </div>
            <p className="text-brand-green-200 text-sm leading-relaxed mb-6">
              Platform wakaf produktif yang fokus pada transparansi, pengelolaan
              amanah, dan dampak sosial berkelanjutan untuk kemaslahatan umat.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<FaWhatsapp size={20} />} label="WhatsApp" className="hover:bg-[#25D366] hover:border-[#25D366]" />
              <SocialLink href="#" icon={<FaInstagram size={20} />} label="Instagram" className="hover:bg-[#E1306C] hover:border-[#E1306C]" />
              <SocialLink href="#" icon={<FaTiktok size={20} />} label="TikTok" className="hover:bg-black hover:border-black" />
              <SocialLink href="#" icon={<FaYoutube size={20} />} label="YouTube" className="hover:bg-[#FF0000] hover:border-[#FF0000]" />
              <SocialLink href="#" icon={<FaFacebookF size={20} />} label="Facebook" className="hover:bg-[#1877F2] hover:border-[#1877F2]" />
            </div>
          </div>




          {/* Program Column */}
          <div className="lg:max-w-xs">
            <h3 className="text-white font-semibold mb-6">Program</h3>
            <ul className="space-y-4 text-sm text-brand-green-200">
              <li><FooterLink href="#">Investasi Kebaikan dengan Wakaf Peternakan</FooterLink></li>
              <li><FooterLink href="#">Wakaf Masjid Plosok & Bencana Indonesia</FooterLink></li>
              <li><FooterLink href="#">Wakaf Produktif Untuk UMKM Berdaya</FooterLink></li>
              <li><FooterLink href="#">Wakaf Air Manfaat Mengalir, Pahala Tumbuh Subur</FooterLink></li>
              <li><FooterLink href="#">Wakaf Uang</FooterLink></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:max-w-sm">
            <h3 className="text-white font-semibold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm text-brand-green-200">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-primary-500 mt-0.5" size={18} />
                <span>Jl. Kebaikan No. 12, Jakarta Selatan, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-primary-500" size={18} />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-primary-500" size={18} />
                <span>info@wakafdpf.id</span>
              </li>
            </ul>


          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-brand-green-800 bg-brand-green-950">
        <Container className="py-6" size="7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-green-400">
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