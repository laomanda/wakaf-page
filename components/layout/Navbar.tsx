"use client";

import { Menu, ChevronRight } from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Program", href: "/#program" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Laporan", href: "/#laporan" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <Container className="flex items-center justify-between py-4" size="7xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white">
            WD
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Wakaf DPF
            </p>
            <p className="text-sm font-semibold text-neutral-900">
              Wakaf Produktif
            </p>
          </div>
        </div>

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

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" className="text-neutral-600">
            Masuk
          </Button>
          <Button>Mulai Wakaf</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigasi cepat untuk melihat program dan laporan.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-700"
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 text-neutral-400" />
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Button>Mulai Wakaf</Button>
              <Button variant="outline">Hubungi Kami</Button>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}