import { contact, hero, PROFESSIONAL_TITLE, siteMeta } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { EmailIcon, WhatsAppIcon } from './icons/ContactIcons';
import { ButtonLink } from './ui/ButtonLink';

export function Hero() {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>();

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Consultation enquiry')}`;

  return (
    <section
      id="top"
      className="section-padding pb-12 md:pb-16 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-blush/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sage/20 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div ref={contentRef} className="reveal order-2 lg:order-1">
          <h1
            id="hero-heading"
            className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-plum leading-tight tracking-tight"
          >
            {hero.name}
          </h1>
          <p className="mt-3 text-teal font-medium text-lg md:text-xl">{PROFESSIONAL_TITLE}</p>
          <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">{hero.credentials}</p>
          <p className="mt-4 text-charcoal text-lg md:text-xl font-medium leading-snug">
            {hero.tagline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            <ButtonLink href={contact.whatsappLink} variant="whatsapp" external>
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              {hero.ctaWhatsApp}
            </ButtonLink>
            <ButtonLink href={mailto} variant="secondary">
              <EmailIcon className="h-5 w-5 shrink-0" />
              {hero.ctaEmail}
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-muted text-center md:text-left">{contact.location}</p>
        </div>

        <div ref={imageRef} className="reveal order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm md:max-w-md">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blush/60 to-sage/30"
              aria-hidden
            />
            <img
              src={siteMeta.profileImagePath}
              alt={siteMeta.profileImageAlt}
              width={480}
              height={560}
              className="relative rounded-[1.75rem] w-full aspect-[5/6] object-cover object-top shadow-lg shadow-plum/10"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
