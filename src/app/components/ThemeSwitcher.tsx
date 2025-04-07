"use client";

import { useTheme } from "@/lib/theme-context";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  
  // Safe access to theme context
  let theme: "light" | "dark" | "system" = "system";
  let setTheme: (theme: "light" | "dark" | "system") => void = () => {};
  
  try {
    const context = useTheme();
    theme = context.theme;
    setTheme = context.setTheme;
  } catch (error) {
    console.error("Theme context error:", error);
    // Continue with defaults
  }

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const cycleTheme = () => {
    const themes: ("light" | "dark" | "system")[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <button
      onClick={cycleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-opacity-80 backdrop-blur-sm dark:bg-opacity-80 bg-neutral-200 dark:bg-neutral-800 transition-all duration-300 shadow-md hover:shadow-lg group"
      aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} mode`}
    >
      {theme === "light" ? (
        <SunIcon className="text-amber-900 group-hover:text-amber-700" />
      ) : theme === "dark" ? (
        <MoonIcon className="text-indigo-100 group-hover:text-indigo-300" />
      ) : (
        <ComputerIcon className="text-emerald-900 dark:text-emerald-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300" />
      )}
    </button>
  );
}

// Simple Icons
function SunIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="m4.93 4.93 1.41 1.41"></path>
      <path d="m17.66 17.66 1.41 1.41"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="m6.34 17.66-1.41 1.41"></path>
      <path d="m19.07 4.93-1.41 1.41"></path>
    </svg>
  );
}

function MoonIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  );
}

function ComputerIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="14" height="8" x="5" y="2" rx="2"></rect>
      <rect width="20" height="8" x="2" y="14" rx="2"></rect>
      <path d="M6 18h2"></path>
      <path d="M12 18h6"></path>
    </svg>
  );
} 