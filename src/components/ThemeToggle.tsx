"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {

  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white backdrop-blur-xl transition hover:bg-white/10"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}