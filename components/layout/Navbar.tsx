"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Program", href: "/#program" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Laporan", href: "/#laporan" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200 bg-white sticky top-0 z-50">
      <Container className="flex items-center justify-between py-4" size="7xl">
        <a href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-brand-green-600">
            <img
              src="/brand/dpf-icon.png"
              alt="Wakaf DPF Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Wakaf DPF
            </p>
            <p className="text-sm font-semibold text-neutral-900">
              Wakaf Produktif
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-neutral-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/login"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 px-4 py-2"
          >
            Masuk
          </a>
          <a
            href="#program"
            className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
          >
            Mulai Wakaf
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-900 transition-colors hover:bg-neutral-100 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 mt-[73px] bg-white p-4 md:hidden border-t border-neutral-100">
           <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-neutral-900">Menu</h2>
              <p className="text-sm text-neutral-500">
                Navigasi cepat untuk melihat program dan laporan.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-700 active:bg-neutral-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 text-neutral-400" />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#program"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary-500 px-4 py-3 text-sm font-medium text-white hover:bg-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Mulai Wakaf
              </a>
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}