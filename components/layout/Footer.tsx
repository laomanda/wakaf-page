import Container from "@/components/layout/Container";

const legalLinks = [
  { label: "Syarat & Ketentuan", href: "#" },
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Laporan Audit", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container className="py-10" size="7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-neutral-900">Wakaf DPF</p>
            <p className="mt-3 text-sm text-neutral-600">
              Platform wakaf produktif yang fokus pada transparansi, pengelolaan
              amanah, dan dampak sosial berkelanjutan.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">Kontak</p>
            <div className="mt-3 space-y-2 text-sm text-neutral-600">
              <p>info@wakafdpf.id</p>
              <p>+62 21 1234 5678</p>
              <p>Jl. Kebaikan No. 12, Jakarta</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">Legal</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-600">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-neutral-900">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-neutral-500">
          (c) 2026 Wakaf DPF. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}