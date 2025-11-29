"use client";

import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  const { theme } = useTheme();
  return <GitHubCalendar colorScheme={theme as any} username="227Faddi" />;
};

export default GithubCalendar;
