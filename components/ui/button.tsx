import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full",
    "text-sm font-semibold tracking-wide",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-primary-foreground",
          "shadow-[0_4px_14px_rgba(58,123,213,0.32)]",
          "hover:bg-[#2f6fc4] hover:shadow-[0_6px_22px_rgba(58,123,213,0.42)]",
          "active:scale-[0.98] active:shadow-[0_2px_8px_rgba(58,123,213,0.28)]",
        ].join(" "),
        secondary: [
          "border border-border/80 bg-card text-foreground",
          "shadow-sm hover:border-primary/25 hover:bg-white hover:shadow-md",
          "active:scale-[0.98]",
        ].join(" "),
        outline: [
          "border-2 border-primary/70 bg-white/95 text-primary",
          "shadow-sm",
          "hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_4px_14px_rgba(58,123,213,0.25)]",
          "active:scale-[0.98]",
        ].join(" "),
        ghost: "text-foreground/80 hover:bg-white/60 hover:text-primary",
        link: "h-auto rounded-none p-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-sm uppercase tracking-[0.14em]",
        xl: "h-14 w-full px-8 text-sm uppercase tracking-[0.14em] sm:w-auto sm:tracking-[0.16em] md:text-base",
        icon: "size-10 shrink-0 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
