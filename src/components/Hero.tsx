import { contact, hero, HERO_THEME, PROFESSIONAL_TITLE, siteMeta } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { EmailIcon, WhatsAppIcon } from './icons/ContactIcons';
import { ButtonLink } from './ui/ButtonLink';

/**
 * Hero palettes aligned to the logo:
 * blush (#C28B8F), sage (#6D7B74), charcoal (#2E2C30), cream (#FBF7F2).
 */
const heroThemes = {
  /** Default: soft blush + cream — welcoming, women’s-health tone */
  classic: {
    section:
      'bg-gradient-to-br from-blush/[0.14] via-cream to-cream-dark/50',
    blobTop: 'bg-blush/40',
    blobMid: 'bg-blush/15',
    blobBottom: 'bg-sage/22',
    titleLine: 'text-blush-dark',
    showAccent: true,
    accentClass: 'from-blush via-blush/50 to-transparent',
    portraitWrap:
      'rounded-[2rem] bg-cream/95 p-1.5 shadow-[0_18px_44px_-20px_rgba(46,44,48,0.14)]',
    portraitImg: 'rounded-[1.65rem] ring-1 ring-charcoal/[0.06]',
  },
  /** Richer blush wash for a more pronounced pink-cream feel */
  warm: {
    section:
      'bg-gradient-to-br from-blush/25 via-cream-blush to-cream',
    blobTop: 'bg-blush/45',
    blobMid: 'bg-blush/20',
    blobBottom: 'bg-blush/15',
    titleLine: 'text-blush',
    showAccent: true,
    accentClass: 'from-blush-dark via-blush to-blush/30',
    portraitWrap:
      'rounded-[2rem] bg-cream/95 p-1.5 shadow-[0_18px_44px_-20px_rgba(194,139,143,0.18)]',
    portraitImg: 'rounded-[1.65rem] ring-1 ring-charcoal/[0.06]',
  },
  /** Calmer sage + cream (logo leaf green) — alternate, less pink */
  sage: {
    section: 'bg-gradient-to-br from-sage/[0.12] via-cream to-cream-dark/40',
    blobTop: 'bg-sage/25',
    blobMid: 'bg-sage/10',
    blobBottom: 'bg-blush/12',
    titleLine: 'text-sage-dark',
    showAccent: true,
    accentClass: 'from-sage via-sage/40 to-transparent',
    portraitWrap:
      'rounded-[2rem] bg-cream/95 p-1.5 shadow-[0_18px_44px_-20px_rgba(109,123,116,0.16)]',
    portraitImg: 'rounded-[1.65rem] ring-1 ring-charcoal/[0.06]',
  },
} as const;

export function Hero() {
  const theme = heroThemes[HERO_THEME];
  const contentRef = useScrollReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>();

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Consultation enquiry')}`;

  return (
    <section
      id="top"
      className={`section-padding pb-12 md:pb-16 relative overflow-hidden ${theme.section}`}
      aria-labelledby="hero-heading"
    >
      <div
        className={`pointer-events-none absolute -top-20 -right-16 h-[28rem] w-[28rem] rounded-full blur-3xl ${theme.blobTop}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute top-1/3 left-1/4 h-72 w-72 rounded-full blur-3xl ${theme.blobMid}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -bottom-16 -left-12 h-80 w-80 rounded-full blur-3xl ${theme.blobBottom}`}
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center relative">
        <div ref={contentRef} className="reveal order-2 lg:order-1">
          <h1
            id="hero-heading"
            className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-charcoal leading-tight tracking-tight"
          >
            {hero.name}
          </h1>
          {theme.showAccent ? (
            <div
              className={`mt-4 h-1 w-20 max-w-[35%] rounded-full bg-gradient-to-r ${theme.accentClass}`}
              aria-hidden
            />
          ) : null}
          <p className={`mt-4 font-medium text-lg md:text-xl ${theme.titleLine}`}>
            {PROFESSIONAL_TITLE}
          </p>
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
          <div className={`relative w-full max-w-sm md:max-w-md ${theme.portraitWrap}`}>
              <img
                src={siteMeta.profileImagePath}
                alt={siteMeta.profileImageAlt}
                width={480}
                height={560}
                className={`relative w-full aspect-[5/6] object-cover object-top ${theme.portraitImg}`}
                fetchPriority="high"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
