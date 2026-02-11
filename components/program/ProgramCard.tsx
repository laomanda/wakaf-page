"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import type { Program } from "@/data/programs";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all hover:shadow-xl hover:shadow-brand-green-900/5"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <Image
          src={program.images[0]}
          alt={program.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Price Badge Overlay */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-green-700 shadow-sm backdrop-blur-sm">
            {program.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 space-y-2">
          <h3 className="font-heading text-xl font-bold leading-snug text-neutral-900 transition-colors group-hover:text-brand-green-700">
            {program.title}
          </h3>
          <p className="line-clamp-2 text-sm text-neutral-600 leading-relaxed">
            {program.shortDesc}
          </p>
        </div>

        {/* Benefits List */}
        <div className="mb-6 space-y-2.5 flex-1">
          {program.benefits.slice(0, 3).map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-2.5 text-sm text-neutral-600"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green-500" />
              <span className="leading-snug">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-4 border-t border-neutral-100">
          <Link
            href={`/program/${program.slug}`}
            className={cn(
              "group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-neutral-50 px-4 py-3 text-sm font-bold text-neutral-900 transition-all",
              "hover:bg-brand-green-600 hover:text-white hover:shadow-lg hover:shadow-brand-green-500/20"
            )}
          >
            <span>Lihat Detail Program</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
