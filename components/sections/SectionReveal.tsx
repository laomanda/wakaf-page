"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionReveal({
  className,
  children,
  ...props
}: HTMLMotionProps<"section">) {
  return (
    <motion.section
      className={cn("py-14 sm:py-16 lg:py-20", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.section>
  );
}
