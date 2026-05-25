export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">

  {/* Background Lights */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute left-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

    <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

  </div>

  {/* Main Content */}
  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-20 px-6 py-32 lg:flex-row lg:items-center">

    {/* LEFT CONTENT */}
    <div className="flex-1">

      <p className="mb-6 text-sm uppercase tracking-[0.3em] text-cyan-400">
        Full Stack Developer
      </p>

      <h1 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl md:text-7xl xl:text-[90px]">
        Crafting cinematic digital experiences for the modern internet.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        I’m Mathuppriya — a software engineering undergraduate focused on
        premium web applications, modern frontend experiences, and scalable
        digital products.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <button className="rounded-full bg-white px-8 py-4 font-medium text-black transition hover:scale-105">
          View Projects
        </button>

        <a
          href="/resume/Mathuppriya Naguleswaran SE-intern-CV.pdf"
          download
          className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-xl transition hover:bg-white/10"
        >
          Download CV
        </a>

      </div>

      {/* Tech Stack */}
      <div className="mt-14 flex flex-wrap gap-4 text-sm text-zinc-400">

        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3">
          Next.js
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3">
          React
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3">
          TypeScript
        </div>

        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3">
          Flutter
        </div>

      </div>

    </div>

    {/* RIGHT CONTENT */}
    <div className="relative flex flex-1 justify-center">

      {/* Floating Glow */}
      <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Main Glass Card */}
      <div className="relative overflow-hidden rounded-[40px] bg-white/[0.04] p-8 shadow-2xl backdrop-blur-2xl">

        {/* Profile Image */}
        <div className="relative flex justify-center">

          <img
            src="/images/profile.png"
            alt="Mathuppriya"
            className="h-72 w-72 rounded-full object-cover ring-4 ring-cyan-400/20 shadow-2xl"
          />

        </div>

        {/* Info */}
        <div className="mt-8 text-center">

          <h2 className="text-3xl font-bold">
            Mathuppriya
          </h2>

          <p className="mt-3 text-zinc-400">
            Software Engineer & AI Innovator
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
  );
}