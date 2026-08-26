import { experience } from "../data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="02" title="Experience & Leadership" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-offwhite">
            Roles that shaped how I learn and lead.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-[var(--color-line)]">
          {experience.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.05}>
              <article className="group grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14">
                {/* Number + year */}
                <div className="md:col-span-2">
                  <span className="font-display text-4xl font-bold text-offwhite/10 transition-colors group-hover:text-accent/40 md:text-5xl">
                    {item.number}
                  </span>
                  <p className="label mt-2 text-muted">{item.year}</p>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl font-semibold text-offwhite transition-colors group-hover:text-accent md:text-3xl">
                    {item.title}
                  </h3>
                </div>

                {/* What I learned */}
                <div className="md:col-span-6">
                  <p className="label mb-3 text-accent">What I learned</p>
                  <p className="text-base leading-relaxed text-muted md:text-lg">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
