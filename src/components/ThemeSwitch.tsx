"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>; // Placeholder

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeSwitch;
