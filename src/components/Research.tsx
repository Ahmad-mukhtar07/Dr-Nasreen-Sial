import { research } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './ui/SectionHeading';

export function Research() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="research"
      className="section-padding scroll-mt-24 bg-cream-dark/50"
      aria-labelledby="research-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <SectionHeading
          id="research-heading"
          eyebrow="Scholarship"
          title="Research, audit & publications"
        />

        <div className="space-y-10">
          <div>
            <h3 className="font-serif text-xl text-plum mb-4">Published work</h3>
            <ul className="space-y-4">
              {research.published.map((pub) => (
                <li
                  key={pub.citation}
                  className="rounded-2xl bg-white p-5 border border-plum/5 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-wide text-teal font-medium">{pub.type}</p>
                  <p className="mt-2 text-muted leading-relaxed">{pub.citation}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl text-plum mb-4">Audit &amp; research projects</h3>
            <ul className="space-y-4">
              {research.audits.map((audit) => (
                <li
                  key={audit.title}
                  className="rounded-2xl bg-white p-5 border border-plum/5 shadow-sm"
                >
                  <h4 className="font-medium text-charcoal leading-snug">{audit.title}</h4>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{audit.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
