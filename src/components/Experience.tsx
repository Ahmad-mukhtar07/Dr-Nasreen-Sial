import { clinicalSkills, experience } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './ui/SectionHeading';

export function Experience() {
  const ref = useScrollReveal<HTMLDivElement>();
  const skillsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-padding scroll-mt-24" aria-labelledby="experience-heading">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <SectionHeading
          id="experience-heading"
          eyebrow="Career"
          title="Experience"
          subtitle="Clinical leadership and surgical practice across Pakistan and Saudi Arabia."
        />

        <ol className="relative border-l-2 border-teal/25 ml-3 md:ml-4 space-y-10">
          {experience.map((entry) => (
            <li key={`${entry.role}-${entry.period}`} className="relative pl-8 md:pl-10">
              <span
                className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-teal bg-cream"
                aria-hidden
              />
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-plum/5">
                <p className="text-sm font-medium text-teal">{entry.period}</p>
                <h3 className="mt-1 font-serif text-xl text-plum">{entry.role}</h3>
                <p className="text-muted">
                  {entry.organisation} · {entry.location}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted list-disc pl-5">
                  {entry.bullets.map((b) => (
                    <li key={b.slice(0, 50)}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div ref={skillsRef} className="reveal mt-16 md:mt-20">
          <h3 className="font-serif text-2xl text-plum mb-6">Clinical &amp; procedural skills</h3>
          <ul className="flex flex-wrap gap-2">
            {clinicalSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-cream-dark border border-plum/10 px-4 py-2 text-sm text-charcoal"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
