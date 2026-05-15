"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-8 w-8" />;

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <button
      onClick={cycleTheme}
      className="rounded-none border border-primary/10 p-2 hover:bg-primary/5 transition-colors cursor-pointer group"
      aria-label={`Current theme: ${theme}. Click to cycle.`}
      title={`Theme: ${theme}`}
    >
      {theme === "light" && <Sun className="h-4 w-4 text-primary" />}
      {theme === "dark" && <Moon className="h-4 w-4 text-primary" />}
      {theme === "system" && <Monitor className="h-4 w-4 text-primary" />}
    </button>
  );
}
