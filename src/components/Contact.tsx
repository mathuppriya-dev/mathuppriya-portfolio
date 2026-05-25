"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Let’s build something amazing together.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            I’m currently focused on frontend engineering,
            modern SaaS experiences, and full stack development.
            Open to collaborations, internships, and exciting opportunities.
          </p>

        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >

          <a
            href="mailto:yourmail@gmail.com"
            className="rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105"
          >
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition hover:bg-white/10"
          >
            GitHub
          </a>

        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
        >

          <a href="#" className="transition hover:text-white">
            LinkedIn
          </a>

          <a href="#" className="transition hover:text-white">
            GitHub
          </a>

          <a href="#" className="transition hover:text-white">
            Twitter
          </a>

          <a href="#" className="transition hover:text-white">
            Behance
          </a>

        </motion.div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-8 text-sm text-gray-600">
          © 2026 Mathuppriya. Crafted with Next.js & Tailwind CSS.
        </div>

      </div>

    </section>
  );
}