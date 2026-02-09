import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "6xl" | "7xl";
};

const sizeMap: Record<NonNullable<ContainerProps["size"]>, string> = {
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export default function Container({
  size = "6xl",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeMap[size],
        className
      )}
      {...props}
    />
  );
}