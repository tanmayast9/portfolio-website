import { personal, contact } from "../data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="06" title="Contact" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="max-w-4xl font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-tight text-offwhite">
            {contact.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Email — body font + break for long address alignment */}
            <a
              href={`mailto:${personal.email}`}
              className="group flex min-h-[140px] flex-col border border-[var(--color-line)] p-8 transition-colors hover:border-accent"
            >
              <p className="label text-accent">Email</p>
              <p className="mt-4 break-all text-base leading-snug text-offwhite transition-colors group-hover:text-accent">
                {personal.email}
              </p>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[140px] flex-col border border-[var(--color-line)] p-8 transition-colors hover:border-accent"
            >
              <p className="label text-accent">LinkedIn</p>
              <p className="mt-4 font-display text-lg leading-snug text-offwhite transition-colors group-hover:text-accent">
                Connect with me
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </p>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[140px] flex-col border border-[var(--color-line)] p-8 transition-colors hover:border-accent sm:col-span-2 lg:col-span-1"
            >
              <p className="label text-accent">GitHub</p>
              <p className="mt-4 font-display text-lg leading-snug text-offwhite transition-colors group-hover:text-accent">
                View my code
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
