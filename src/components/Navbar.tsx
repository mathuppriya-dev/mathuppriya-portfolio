"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4">

      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[var(--card)] px-6 py-4 backdrop-blur-xl"
      >

        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide text-white">
          Mathuppriya
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Contact
          </a>

          <div className="flex items-center gap-3">

  <ThemeToggle />

  <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-105">
    Hire Me
  </button>

</div>

        </div>

        {/* Mobile Menu Button */}
        <button
         aria-label="Open Menu"
         onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 md:hidden"
        >

          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />

        </button>

      </motion.nav>

      {/* Mobile Menu */}
      {menuOpen && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-4 max-w-7xl rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl md:hidden"
        >

          <div className="flex flex-col gap-6 text-gray-300">

            <a href="#" className="transition hover:text-white">
              About
            </a>

            <a href="#" className="transition hover:text-white">
              Projects
            </a>

            <a href="#" className="transition hover:text-white">
              Skills
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>

            <button className="rounded-full bg-white px-5 py-3 text-black">
              Hire Me
            </button>

          </div>

        </motion.div>

      )}

    </header>
  );
}