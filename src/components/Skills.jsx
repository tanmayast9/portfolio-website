import { motion } from "framer-motion";
import { skills } from "../data/content";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const programmingAndData = [
  { label: "Programming", items: skills.programming },
  { label: "Data & AI", items: skills.dataAndAI },
];

function SkillList({ label, items }) {
  return (
    <div>
      <h3 className="label mb-6 text-accent">{label}</h3>
      <ul className="flex flex-col" aria-label={`${label} skills`}>
        {items.map((skill, i) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.4 }}
            className="group border-b border-[var(--color-line)] py-4"
          >
            <span className="font-display text-xl font-medium text-offwhite/60 transition-colors group-hover:text-accent md:text-2xl">
              {skill}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionLabel index="04" title="Skills" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-offwhite">
            Tools I use and technologies I work with.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16">
          {/* Programming + Data & AI in one row */}
          <div className="grid gap-16 md:grid-cols-2">
            {programmingAndData.map((category, catIndex) => (
              <Reveal key={category.label} delay={catIndex * 0.08}>
                <SkillList label={category.label} items={category.items} />
              </Reveal>
            ))}
          </div>

          {/* Tools on its own row */}
          <Reveal delay={0.16}>
            <SkillList label="Tools" items={skills.tools} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
