import { about } from "../data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="01" title="About" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="max-w-4xl font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-offwhite">
            Exploring technology with purpose and curiosity.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            {about.text}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="mt-10 flex flex-wrap gap-3" aria-label="Focus areas">
            {about.labels.map((label) => (
              <li
                key={label}
                className="label border border-[var(--color-line)] px-4 py-2 text-offwhite/70 transition-colors hover:border-accent hover:text-accent"
              >
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
