"use client";

import { DATA } from "@/data/resume";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  const { theme } = useTheme();
  return <GitHubCalendar colorScheme={theme as any} username={DATA.githubUsername} />;
};

export default GithubCalendar;
