import { beyondTech } from "../data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function BeyondTech() {
  // Duplicate items for seamless infinite marquee
  const items = [...beyondTech, ...beyondTech];

  return (
    <section id="beyond" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="05" title="Beyond Tech" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-offwhite">
            Interests that keep me curious.
          </h2>
        </Reveal>
      </div>

      {/* Scrolling marquee — EDIT items in content.js */}
      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-charcoal to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-charcoal to-transparent" />

        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="marquee-track flex shrink-0 items-center gap-12 whitespace-nowrap px-6">
            {items.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold text-offwhite/10 transition-colors hover:text-accent/30"
              >
                {item}
                <span className="mx-12 text-accent/40">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Accessible static list for screen readers */}
        <ul className="sr-only">
          {beyondTech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
