import { areasOfCare } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { AreaIcon, type AreaIconName } from './icons/AreaIcons';
import { SectionHeading } from './ui/SectionHeading';

export function AreasOfCare() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="areas-of-care"
      className="section-padding scroll-mt-24 bg-cream-dark/50"
      aria-labelledby="areas-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <SectionHeading
          id="areas-heading"
          title={areasOfCare.heading}
          subtitle={areasOfCare.intro}
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areasOfCare.items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl bg-white p-5 shadow-sm shadow-plum/5 border border-plum/5 hover:border-sage/40 transition-colors"
            >
              <div className="mb-3 inline-flex rounded-xl bg-teal/10 p-2.5 text-teal">
                <AreaIcon name={item.icon as AreaIconName} className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg text-plum leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted italic max-w-3xl">{areasOfCare.footnote}</p>
      </div>
    </section>
  );
}
