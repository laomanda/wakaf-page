"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

import type { Program } from "@/data/programs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const hoverStyle = {
  y: -6,
  boxShadow: "0 18px 36px rgba(15, 23, 42, 0.12)",
};

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <motion.div whileHover={hoverStyle} transition={{ duration: 0.35, ease: "easeOut" }}>
      <Card className="h-full overflow-hidden border-neutral-200">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
          <Image
            src={program.images[0]}
            alt={program.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <CardHeader className="gap-2 pb-2">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-lg leading-snug text-neutral-900">
              {program.title}
            </CardTitle>
            <Badge variant="secondary" className="whitespace-nowrap">
              {program.price}
            </Badge>
          </div>
          <p className="text-sm text-neutral-600">{program.shortDesc}</p>
        </CardHeader>
        <CardContent className="space-y-2">
          {program.benefits.slice(0, 3).map((benefit) => (
            <div key={benefit} className="flex items-start gap-2 text-sm text-neutral-600">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
              <span>{benefit}</span>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href={`/program/${program.slug}`} className="flex items-center justify-center gap-2">
              Lihat Detail
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
