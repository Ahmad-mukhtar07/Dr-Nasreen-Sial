import { useEffect, useState } from 'react';
import { contact, hero, navLinks, siteMeta } from '../content/siteContent';
import { WhatsAppIcon } from './icons/ContactIcons';
import { ButtonLink } from './ui/ButtonLink';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-plum/10 bg-cream/95 backdrop-blur-md shadow-sm py-2'
          : 'border-transparent bg-cream/80 backdrop-blur-sm py-3 md:py-4'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 md:px-8 lg:px-12">
        <a
          href="#top"
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0 group"
        >
          <img
            src={siteMeta.logoPath}
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-[0.65rem] object-contain shadow-sm ring-1 ring-plum/10 transition-shadow group-hover:shadow-md"
          />
          <span className="font-serif text-base sm:text-lg text-plum leading-tight md:text-xl truncate">
            Dr. Nasreen A. Sial
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-muted hover:text-plum transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href={contact.whatsappLink}
            variant="whatsapp"
            external
            className="ml-2 !py-2 !px-4 text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ButtonLink
            href={contact.whatsappLink}
            variant="whatsapp"
            external
            className="!py-2 !px-3 text-xs"
            aria-label="Message on WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </ButtonLink>
          <button
            type="button"
            className="rounded-lg p-2 text-plum hover:bg-plum/5"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" aria-hidden>
                <path strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" aria-hidden>
                <path strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="lg:hidden border-t border-plum/10 bg-cream px-5 py-4"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-plum hover:bg-plum/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <ButtonLink
                href={contact.whatsappLink}
                variant="whatsapp"
                external
                className="w-full"
                onClick={closeMenu}
              >
                Message on {hero.ctaWhatsApp.replace('Message on ', '')}
              </ButtonLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
