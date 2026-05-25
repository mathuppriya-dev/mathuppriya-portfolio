"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Framer Motion",
  "Node.js",
  "GitHub",
  "Responsive Design",
  "UI/UX",
  "Frontend Engineering",
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Passionate about building modern digital experiences.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            I’m Mathuppriya — a frontend-focused full stack developer
            exploring premium UI systems, modern SaaS architecture,
            responsive web applications, and interactive user experiences.
          </p>

        </motion.div>

        {/* Skills Grid */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill, index) => (

            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-lg font-semibold">
                  {skill}
                </h3>

                <div className="h-3 w-3 rounded-full bg-purple-400 transition group-hover:scale-125" />

              </div>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Exploring and building modern scalable interfaces
                using {skill}.
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}