"use client";

import { DATA } from "@/data/resume";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <GitHubCalendar colorScheme={resolvedTheme as "light" | "dark"} username={DATA.githubUsername} />;
};

export default GithubCalendar;
