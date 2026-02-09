import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wakaf DPF | Wakaf Produktif Transparan",
  description:
    "Platform wakaf produktif untuk membangun manfaat berkelanjutan dengan laporan real time dan program terverifikasi.",
  icons: {
    icon: "/brand/dpf-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${manrope.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
