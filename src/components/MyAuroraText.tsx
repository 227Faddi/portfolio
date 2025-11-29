"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeAwareAuroraTextProps {
  children: React.ReactNode;
  className?: string;
}

export function MyAuroraText({
  children,
  className,
}: ThemeAwareAuroraTextProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <AuroraText colors={["#000", "#3b82f6"]} className={className}>
        {children}
      </AuroraText>
    );
  }

  return (
    <AuroraText
      colors={
        resolvedTheme === "dark" ? ["#ffffff", "#3b82f6"] : ["#000", "#3b82f6"]
      }
      className={className}
    >
      {children}
    </AuroraText>
  );
}
