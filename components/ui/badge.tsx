import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-primary-500/30 bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 shadow-[0_0_10px_rgba(255,138,0,0.1)]",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      },
      shiny: {
        true: "relative overflow-hidden",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      shiny: false
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
  shiny?: boolean;
}

function Badge({ className, variant, shiny, children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), "relative overflow-hidden", className)}
      {...props}
    >
      {shiny && (
        <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ width: '200%', backgroundSize: '50% 100%', backgroundRepeat: 'no-repeat' }} />
      )}
      {children}
    </div>
  )
}

export { Badge, badgeVariants };