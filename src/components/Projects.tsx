"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="relative bg-black px-6 py-32 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Featured Work
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            A collection of modern web applications, SaaS interfaces,
            and frontend engineering projects focused on performance,
            responsiveness, and premium user experience.
          </p>

        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Large Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 md:col-span-2"
          >

            <div className="absolute inset-0 bg-purple-500/10 opacity-0 transition group-hover:opacity-100" />

            <div className="relative z-10">

              <div className="mb-6 flex items-center justify-between">

                <div className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                  Featured Project
                </div>

                <p className="text-sm text-gray-400">
                  2026
                </p>

              </div>

              <h3 className="text-3xl font-bold">
                AI Workspace Platform
              </h3>

              <p className="mt-4 max-w-xl text-gray-400">
                A modern AI-powered productivity platform with
                task management, analytics dashboard, and
                futuristic SaaS interface design.
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm">
                  Next.js
                </span>

                <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm">
                  Tailwind
                </span>

                <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm">
                  Framer Motion
                </span>

              </div>

              {/* Fake Preview */}
              <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-6">

                <div className="grid gap-4 md:grid-cols-2">

                  <div className="rounded-2xl bg-purple-500/20 p-6">
                    <div className="h-24 rounded-2xl bg-purple-400/30" />
                  </div>

                  <div className="space-y-4">

                    <div className="h-8 rounded-xl bg-white/10" />
                    <div className="h-8 rounded-xl bg-white/5" />
                    <div className="h-8 rounded-xl bg-white/10" />

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Small Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8"
          >

            <div className="mb-6 h-16 w-16 rounded-2xl bg-purple-500/20" />

            <h3 className="text-2xl font-bold">
              Portfolio v1
            </h3>

            <p className="mt-4 text-gray-400">
              Personal developer portfolio focused on premium UI,
              responsiveness, and frontend engineering.
            </p>

          </motion.div>

          {/* Bottom Left */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8"
          >

            <h3 className="text-2xl font-bold">
              UI Components
            </h3>

            <p className="mt-4 text-gray-400">
              Reusable modern UI systems and design patterns.
            </p>

            <div className="mt-8 flex gap-3">

              <div className="h-12 w-12 rounded-2xl bg-white/10" />
              <div className="h-12 w-12 rounded-2xl bg-purple-500/20" />
              <div className="h-12 w-12 rounded-2xl bg-white/5" />

            </div>

          </motion.div>

          {/* Bottom Right */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:col-span-2"
          >

            <div className="flex flex-col justify-between gap-8 md:flex-row">

              <div>

                <h3 className="text-3xl font-bold">
                  Full Stack Journey
                </h3>

                <p className="mt-4 max-w-xl text-gray-400">
                  Exploring modern frontend architecture,
                  backend systems, animations, and SaaS product design.
                </p>

              </div>

              <div className="grid grid-cols-3 gap-4">

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                  <h4 className="text-2xl font-bold">
                    4
                  </h4>

                  <p className="mt-2 text-xs text-gray-400">
                    Projects
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                  <h4 className="text-2xl font-bold">
                    10+
                  </h4>

                  <p className="mt-2 text-xs text-gray-400">
                    Skills
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center">
                  <h4 className="text-2xl font-bold">
                    2026
                  </h4>

                  <p className="mt-2 text-xs text-gray-400">
                    Learning
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}