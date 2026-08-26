import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="03" title="Selected Work" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-offwhite">
            Projects that tell a story.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Interactive project list */}
          <div className="lg:col-span-5">
            <ul className="divide-y divide-[var(--color-line)]">
              {projects.map((project, i) => (
                <li key={project.number}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    className={`group flex w-full items-baseline gap-4 py-6 text-left transition-colors md:py-8 ${
                      activeIndex === i ? "text-accent" : "text-offwhite/50"
                    }`}
                    aria-current={activeIndex === i ? "true" : undefined}
                  >
                    <span className="font-display text-sm font-bold">
                      {project.number}
                    </span>
                    <span
                      className={`font-display text-xl font-semibold transition-colors md:text-2xl ${
                        activeIndex === i
                          ? "text-offwhite"
                          : "group-hover:text-offwhite/80"
                      }`}
                    >
                      {project.title}
                    </span>
                    <span className="label ml-auto hidden text-muted sm:inline">
                      {project.year}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Project detail panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.number}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="border border-[var(--color-line)] p-8 md:p-12"
              >
                <p className="label text-accent">{active.year}</p>
                <h3 className="mt-4 font-display text-3xl font-bold text-offwhite md:text-4xl">
                  {active.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-muted">
                  {active.description}
                </p>

                <div className="mt-8">
                  <p className="label mb-3">Technologies</p>
                  <ul className="flex flex-wrap gap-2">
                    {active.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="border border-[var(--color-line)] px-3 py-1.5 text-sm text-offwhite/70"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* EDIT: Replace github and live links in content.js */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-offwhite/20 px-5 py-2.5 text-sm text-offwhite transition-colors hover:border-accent hover:text-accent"
                  >
                    GitHub
                    <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={active.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-medium text-offwhite transition-colors hover:bg-accent-soft"
                  >
                    Live Demo
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
