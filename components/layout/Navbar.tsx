"use client";

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Search,
  HelpCircle,
  LayoutGrid,
  MessageSquareQuote,
  MessageCircleQuestion,
  Phone
} from 'lucide-react';

/**
 * Utilitas sederhana untuk menggabungkan class
 */
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Komponen Container
 */
const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

// Definisi menu dengan ikon
const navItems = [
  { label: "Program", href: "#program", icon: LayoutGrid },
  { label: "Testimoni", href: "#testimonials", icon: MessageSquareQuote },
  { label: "FAQ", href: "#faq", icon: MessageCircleQuestion },
];

import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Helper untuk menentukan href (jika di homepage pakai #id, jika di page lain pakai /#id)
  const getHref = (href: string) => {
    if (pathname === "/") return href;
    return `/${href}`;
  };

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (pathname === '/') {
        e.preventDefault();
        const targetId = href.substring(1);
        const el = document.getElementById(targetId);
        if (el) {
          const offset = 100;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
        setIsOpen(false);
      }
      // If not on homepage, let default behavior happen (navigate to /#id)
    }
  };

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close menu saat resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          isScrolled ? "py-3" : "py-6"
        )}
      >
        <Container>
          <nav
            className={cn(
              "flex items-center justify-between px-4 sm:px-6 py-3 transition-all duration-500 border",
              isScrolled
                ? "bg-white shadow-xl border-slate-200/50 rounded-2xl md:rounded-full"
                : "bg-white shadow-sm border-white/50 rounded-2xl md:rounded-full"
            )}
          >
            {/* Logo Section - Menggunakan Gambar Asli */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-brand-green-600">
                <img
                  src="/brand/dpf-icon.png"
                  alt="DPF Logo"
                  className="h-full w-full object-cover"
                  // Fallback image jika asset tidak ditemukan (untuk preview)
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=DPF&background=059669&color=fff&size=128";
                  }}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                  Wakaf DPF
                </p>
                <p className="text-base font-bold text-neutral-900 tracking-tight">
                  Wakaf <span className="text-emerald-600">Produktif</span>
                </p>
              </div>
            </a>

            {/* Desktop Navigation dengan Icon */}
            <div className="hidden md:flex items-center gap-1 bg-slate-50/50 p-1 rounded-full border border-slate-100/50">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={getHref(item.href)}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-600 rounded-full transition-all hover:bg-white hover:text-emerald-600 hover:shadow-sm"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions (Tanpa Login) */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://wa.me/6281311768254?text=Halo%20Wakaf%20DPF,%20saya%20ingin%20berwakaf%20dan%20ingin%20info%20lebih%20lanjut"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 pl-5 pr-6 py-2.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-600 hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="bg-white/20 p-1 rounded-full">
                  <Phone className="w-3.5 h-3.5 fill-current" />
                </div>
                Mulai Wakaf
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-neutral-900 transition-all hover:bg-slate-100 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[9999] md:hidden transition-all duration-500",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-[300px] bg-white p-6 shadow-2xl transition-transform duration-500 ease-out flex flex-col font-['Poppins']",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col gap-3 mt-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={getHref(item.href)}
                className="flex items-center justify-between rounded-2xl border border-slate-100 px-5 py-4 text-sm font-semibold text-neutral-700 hover:bg-emerald-50 hover:border-emerald-100 hover:text-emerald-700 transition-all group"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-emerald-200/50 transition-colors">
                    <item.icon className="w-5 h-5 text-neutral-400 group-hover:text-emerald-600" />
                  </div>
                  {item.label}
                </div>
                <ChevronRight className="h-5 w-5 text-neutral-300 group-hover:text-emerald-500" />
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <a
              href="https://wa.me/6281311768254?text=Halo%20Wakaf%20DPF,%20saya%20ingin%20berwakaf%20dan%20ingin%20info%20lebih%20lanjut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 py-4 text-sm font-extrabold uppercase tracking-widest text-white shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-white/20 p-1.5 rounded-full">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              Mulai Wakaf
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs font-semibold text-slate-400 py-2 hover:text-slate-600 transition-colors"
            >
              Tutup Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}