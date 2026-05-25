"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-20 px-6 pt-40 lg:flex-row">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >

          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-400" />
            Available for internships & freelance
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
  Building premium digital experiences
  for the modern web.
</h1>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-gray-400 md:text-xl">
            I’m Mathuppriya — a full stack developer focused on
            building modern SaaS products, beautiful interfaces,
            and real-world web applications.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105">
              View Projects
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition hover:bg-white/10">
              Contact Me
            </button>
            <a
  href="/resume/Mathuppriya Naguleswaran SE-intern-CV.pdf"
  download
  className="rounded-full border border-purple-400/20 bg-purple-500/10 px-8 py-4 font-medium text-purple-300 transition hover:bg-purple-500/20"
>
  Download CV
</a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="w-full max-w-xl"
>

  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

    {/* Glow */}
    <div className="absolute inset-0 bg-purple-500/10 blur-3xl" />

{/* Profile Section */}
<div className="relative mb-6 flex items-center gap-4">

  <img
    src="/images/profile.png"
    alt="Mathuppriya"
    className="h-16 w-16 rounded-2xl object-cover border border-white/10"
  />

  <div>

    <h3 className="text-xl font-semibold">
      Mathuppriya
    </h3>

    <p className="text-sm text-gray-400">
      Full Stack Developer
    </p>

  </div>

</div>

    {/* Window Top */}
    <div className="relative mb-6 flex items-center gap-2">
      <div className="h-3 w-3 rounded-full bg-red-400" />
      <div className="h-3 w-3 rounded-full bg-yellow-400" />
      <div className="h-3 w-3 rounded-full bg-green-400" />
    </div>

    {/* Code Editor */}
    <div className="relative rounded-3xl border border-white/10 bg-black/40 p-5 font-mono text-sm">

      <p className="text-purple-400">
        const developer = {"{"}
      </p>

      <p className="ml-4 text-gray-300">
        name: <span className="text-green-400">\"Mathuppriya\"</span>,
      </p>

      <p className="ml-4 text-gray-300">
        stack: [<span className="text-green-400">\"Next.js\", \"React\", \"Tailwind\"</span>],
      </p>

      <p className="ml-4 text-gray-300">
        focus: <span className="text-green-400">\"Full Stack Development\"</span>,
      </p>

      <p className="ml-4 text-gray-300">
        building: <span className="text-green-400">\"Modern Web Experiences\"</span>
      </p>

      <p className="text-purple-400">
        {"}"}
      </p>

    </div>

    {/* Projects */}
    <div className="relative mt-6 grid gap-4">

      {/* Project Card */}
      <div className="rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:border-purple-400/40">

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-lg font-semibold">
              AI Workspace
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Modern productivity SaaS application
            </p>
          </div>

          <div className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
            In Progress
          </div>

        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">

        <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
          <h3 className="text-2xl font-bold">
            4
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Projects
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
          <h3 className="text-2xl font-bold">
            10+
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Technologies
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
          <h3 className="text-2xl font-bold">
            2026
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            Journey
          </p>
        </div>

      </div>

    </div>

  </div>

</motion.div>

      </div>
    </section>
  );
}