import { motion } from "framer-motion";
import { personal } from "../data/content";
import HeroVisual from "./HeroVisual";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 md:pt-28"
    >
      {/* Subtle animated background — no box around portrait */}
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <HeroVisual />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-12 md:px-10 lg:gap-20">
        {/* Text */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="label mb-6 text-accent">{personal.role}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="whitespace-nowrap font-display text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-offwhite">
              {personal.name}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 font-display text-xl text-offwhite/80 md:text-2xl">
              {personal.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              {personal.intro}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 border border-offwhite/20 bg-offwhite px-6 py-3 text-sm font-medium tracking-wide text-charcoal transition-colors hover:bg-accent hover:text-offwhite"
              >
                View My Work
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-offwhite/20 px-6 py-3 text-sm font-medium tracking-wide text-offwhite transition-colors hover:border-accent hover:text-accent"
              >
                Let's Connect
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="label mt-12 text-muted">{personal.location}</p>
          </Reveal>
        </div>

        {/* Portrait beside text — no separate box */}
        <motion.div
          className="relative flex items-end justify-center md:justify-end"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute bottom-[5%] h-[60%] w-[70%] rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />
          <img
            src={personal.heroImage}
            alt={`Portrait of ${personal.name}`}
            className="relative z-10 max-h-[min(70vh,520px)] w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-hidden="true"
      >
        <div className="label flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-8 w-px bg-muted" />
        </div>
      </motion.div>
    </section>
  );
}
