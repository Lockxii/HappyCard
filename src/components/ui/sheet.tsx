"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
const SheetTitle = SheetPrimitive.Title;
const SheetDescription = SheetPrimitive.Description;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out",
      className,
    )}
    {...props}
  />
));

SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: "top" | "right" | "bottom" | "left";
  }
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 flex flex-col gap-6 border border-[color:var(--line)] bg-[color:var(--popover)] p-6 text-[color:var(--foreground)] shadow-2xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out",
        side === "right" && "inset-y-0 right-0 h-full w-[88%] max-w-sm rounded-l-[2rem]",
        side === "left" && "inset-y-0 left-0 h-full w-[88%] max-w-sm rounded-r-[2rem]",
        side === "top" && "inset-x-0 top-0 rounded-b-[2rem]",
        side === "bottom" && "inset-x-0 bottom-0 rounded-t-[2rem]",
        className,
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-5 top-5 rounded-full border border-[color:var(--line)] p-2 text-[color:var(--copy-soft)] transition hover:bg-[color:var(--hero-badge-bg)] hover:text-[color:var(--heading)]">
        <X className="size-4" />
        <span className="sr-only">Fermer</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));

SheetContent.displayName = SheetPrimitive.Content.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
