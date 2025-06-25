import { cn } from "@/lib/utils";
import { createElement, ElementType } from "react";

export function Wrapper<T extends ElementType = "div">({
  as,
  className,
  children,
}: {
  as?: T;
  className?: string;
  children: React.ReactNode;
}) {
  const Component = as || "div";

  return createElement(
    Component,
    {
      className: cn(
        "mx-auto max-w-4xl px-4 md:px-6 border-x lg:px-10",
        className,
      ),
    },
    children,
  );
}
