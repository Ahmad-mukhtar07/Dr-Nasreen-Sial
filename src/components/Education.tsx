import { education } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './ui/SectionHeading';

export function Education() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="education"
      className="section-padding scroll-mt-24 bg-cream-dark/50"
      aria-labelledby="education-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <SectionHeading
          id="education-heading"
          eyebrow="Qualifications"
          title="Education & qualifications"
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl bg-white p-6 border border-plum/5 shadow-sm"
            >
              <h3 className="font-serif text-lg text-plum">{item.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
