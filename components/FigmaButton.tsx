"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FigmaButtonProps {
  text: string;
  url: string;
  className?: string;
  variant?: "outline" | "fill";
}

const FigmaButton = ({
  text,
  url,
  className,
  variant = "outline",
}: FigmaButtonProps) => {
  const baseStyles =
    "text-center px-10 py-2 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400";

  const variantStyles =
    variant === "fill"
      ? "bg-black text-white dark:bg-white dark:text-black border border-transparent"
      : "bg-transparent border border-black dark:border-white dark:text-white text-black shadow-[0_0_0_3px_#000000_inset]";

  return (
    <div className="flex justify-center mt-0">
      <Link
        href={url}
        className={cn(baseStyles, variantStyles, className)}
        aria-label={text}
      >
        {text}
      </Link>
    </div>
  );
};

export default FigmaButton;
