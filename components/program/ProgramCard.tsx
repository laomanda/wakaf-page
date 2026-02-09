"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

import type { Program } from "@/data/programs";

const hoverStyle = {
  y: -6,
  boxShadow: "0 18px 36px rgba(15, 23, 42, 0.12)",
};

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <motion.div
      whileHover={hoverStyle}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-full rounded-xl border border-neutral-200 bg-white overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <Image
          src={program.images[0]}
          alt={program.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug text-neutral-900">
            {program.title}
          </h3>
          <span className="inline-flex items-center rounded-full bg-brand-green-50 px-2.5 py-0.5 text-xs font-semibold text-brand-green-700 whitespace-nowrap">
            {program.price}
          </span>
        </div>
        <p className="text-sm text-neutral-600 line-clamp-2">
          {program.shortDesc}
        </p>
        <div className="space-y-2 flex-1">
          {program.benefits.slice(0, 3).map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-2 text-sm text-neutral-600"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green-600 shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        <div className="pt-2 mt-auto">
          <Link
            href={`/program/${program.slug}`}
            className="inline-flex h-10 w-full items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-primary-600 transition-colors hover:bg-brand-green-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Lihat Detail
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
