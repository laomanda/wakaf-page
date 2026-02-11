"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, HeartHandshake, Sparkles } from "lucide-react";

/**
 * Komponen ProgramPriceBox yang telah ditingkatkan.
 * Menggunakan Hex Code agar tampil sempurna di preview Canvas.
 * Tema: Hijau (#3f8f3f) & Oranye (#ff8a00).
 */

export default function ProgramPriceBox({
  price, // Removed default value to use passed prop
  ctaLabel = "Wakaf Sekarang", // Kept default for flexibility
  ctaHref, // Removed default value to use passed prop
}: {
  price: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="overflow-hidden rounded-[2.5rem] border border-neutral-100 bg-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.08)] transition-all hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.12)]"
    >
      <div className="p-7 md:p-10 space-y-8">
        {/* Header Section */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2 rounded-full bg-[#3f8f3f]"></span>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3f8f3f]">
                Mulai Kebaikan
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-neutral-400 mb-1.5">Nominal Wakaf</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight text-[#152d16]">
                {price}
              </span>
              <span className="text-sm font-semibold text-neutral-400">/paket</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#f8fafc] p-6 border border-neutral-100">
            <p className="relative z-10 text-sm leading-relaxed text-neutral-600">
              Setiap wakaf adalah jejak kebaikan. Insya Allah menjadi <span className="font-bold text-[#152d16]">amal jariyah</span> yang pahalanya terus mengalir, menghadirkan harapan, kebermanfaatan, dan keberkahan bagi umat tanpa henti.
            </p>
            {/* Subtle decorative element */}
            <div className="absolute -right-2 -bottom-2 opacity-[0.03] text-[#3f8f3f]">
              <HeartHandshake size={64} />
            </div>
          </div>
        </div>

        {/* CTA Button with Shine Effect */}
        <div className="relative group/btn">
          <a
            href={ctaHref}
            className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#ff8a00] to-[#f97316] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"

          >
            <span className="relative z-10">{ctaLabel}</span>
            <HeartHandshake className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover/btn:scale-110" />

            {/* Moving Shine Animation */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shine_1.5s_infinite]"
              style={{ width: '200%' }} />
          </a>

          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes shine {
              0% { transform: translateX(-100%) skewX(-15deg); }
              100% { transform: translateX(100%) skewX(-15deg); }
            }
          `}} />
        </div>

        {/* Trust Signals Section */}
        <div className="grid grid-cols-1 gap-4 pt-8 border-t border-neutral-100">
          <div className="group/item flex items-center gap-4 transition-colors hover:bg-neutral-50 p-2 -m-2 rounded-xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3f8f3f]/10 text-[#3f8f3f]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#152d16]">Amanah & Transparan</p>
              <p className="text-[11px] text-neutral-400 mt-0.5 leading-tight">Diawasi langsung oleh Dewan Pengawas Syariah</p>
            </div>
          </div>

          <div className="group/item flex items-center gap-4 transition-colors hover:bg-neutral-50 p-2 -m-2 rounded-xl">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3f8f3f]/10 text-[#3f8f3f]">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#152d16]">Laporan Berkala</p>
              <p className="text-[11px] text-neutral-400 mt-0.5 leading-tight">Update progres program via email & dashboard rutin</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}