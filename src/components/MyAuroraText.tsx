"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { useTheme } from "next-themes";

interface ThemeAwareAuroraTextProps {
  children: React.ReactNode;
  className?: string;
}

export function MyAuroraText({
  children,
  className,
}: ThemeAwareAuroraTextProps) {
  const { theme } = useTheme();
  return (
    <AuroraText
      colors={theme === "dark" ? ["#fff", "#3b82f6"] : ["#000", "#3b82f6"]}
      className={className}
    >
      {children}
    </AuroraText>
  );
}
