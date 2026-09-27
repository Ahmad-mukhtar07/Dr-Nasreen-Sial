import { clinicalSkills } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './ui/SectionHeading';

export function ClinicalSkills() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="clinical-skills"
      className="section-padding scroll-mt-24 bg-cream-dark/50"
      aria-labelledby="clinical-skills-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <SectionHeading
          id="clinical-skills-heading"
          eyebrow="Procedural experience"
          title="Clinical & procedural skills"
          subtitle="Surgical and procedural background for colleagues and clinical readers."
        />
        <ul className="flex flex-wrap gap-2">
          {clinicalSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-white border border-charcoal/10 px-4 py-2 text-sm text-charcoal shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
