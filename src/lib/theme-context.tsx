"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => null,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  // Handle theme changes
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    
    // No localStorage during SSR
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem("theme", newTheme);
      
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      
      if (newTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.classList.add(systemTheme);
      } else {
        root.classList.add(newTheme);
      }
    } catch (e) {
      console.error("Error setting theme:", e);
    }
  };

  // Initialize theme on component mount
  useEffect(() => {
    try {
      // Get initial theme from localStorage if available
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      if (storedTheme) {
        setTheme(storedTheme);
      }
      
      // Apply theme class
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      
      const themeToApply = storedTheme || theme;
      if (themeToApply === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.classList.add(systemTheme);
      } else {
        root.classList.add(themeToApply);
      }
      
      // Add system theme change listener
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemThemeChange = () => {
        if (theme === "system") {
          root.classList.remove("light", "dark");
          root.classList.add(mediaQuery.matches ? "dark" : "light");
        }
      };
      
      mediaQuery.addEventListener("change", handleSystemThemeChange);
      setMounted(true);
      
      return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    } catch (e) {
      console.error("Error initializing theme:", e);
      setMounted(true);
    }
  }, []);

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        setTheme: handleThemeChange 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 