import { contact, servicesSection } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ServiceCard } from './ServiceCard';
import { WhatsAppIcon } from './icons/ContactIcons';
import { ButtonLink } from './ui/ButtonLink';

export function Services() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="services"
      className="section-padding scroll-mt-24 bg-cream-dark/40"
      aria-labelledby="services-heading"
    >
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <header className="mb-8 md:mb-10 max-w-2xl">
          <h2
            id="services-heading"
            className="font-serif text-3xl md:text-4xl text-charcoal tracking-tight"
          >
            {servicesSection.heading}
          </h2>
          <p className="mt-3 text-muted text-base md:text-lg leading-relaxed max-w-[90ch]">
            {servicesSection.subline}
          </p>
          <p className="mt-5 pt-4 border-t border-charcoal/10 text-sm text-muted leading-relaxed">
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage font-medium hover:text-sage-dark underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage rounded"
            >
              {servicesSection.reassurance}
            </a>
          </p>
        </header>

        <ul className="grid gap-3 md:gap-4 md:grid-cols-2">
          {servicesSection.categories.map((service) => (
            <li key={service.title}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>

        <div className="mt-8 md:mt-10 rounded-2xl bg-blush/12 border border-blush/25 px-5 py-6 md:px-8 md:py-8">
          <h3 className="font-serif text-xl md:text-2xl text-charcoal">
            {servicesSection.onlineBanner.heading}
          </h3>
          <p className="mt-2 text-muted text-sm md:text-base leading-relaxed max-w-2xl">
            {servicesSection.onlineBanner.body}
          </p>
          <ButtonLink
            href={contact.whatsappLink}
            variant="whatsapp"
            external
            className="mt-5"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            {servicesSection.onlineBanner.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
