import { highlights } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Highlights() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal border-y border-plum/10 bg-white/60" aria-label="Career highlights">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-12 lg:px-12">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {highlights.map((item) => (
            <li key={item.label} className="text-center md:text-left">
              <p className="font-serif text-2xl md:text-3xl text-teal">{item.value}</p>
              <p className="mt-1 text-sm text-muted leading-snug">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
