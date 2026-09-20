import { about, siteMeta } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './ui/SectionHeading';

export function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding scroll-mt-24" aria-labelledby="about-heading">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <SectionHeading id="about-heading" eyebrow="About" title="Background & approach" />
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3 space-y-5 text-muted text-lg leading-relaxed">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <p className="text-charcoal text-base pt-2">
              <span className="font-medium text-plum">Beyond medicine:</span>{' '}
              {about.beyondMedicine}
            </p>
          </div>
          <div className="lg:col-span-2 hidden lg:block">
            <img
              src={siteMeta.profileImagePath}
              alt=""
              loading="lazy"
              width={400}
              height={480}
              className="rounded-2xl w-full aspect-[5/6] object-cover object-top shadow-md shadow-plum/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
