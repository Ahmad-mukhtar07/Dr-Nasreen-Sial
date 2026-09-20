import {
  AHPRA_REGISTRATION_NO,
  contact,
  footerDisclaimer,
  hero,
  navLinks,
  PROFESSIONAL_TITLE,
  siteMeta,
} from '../content/siteContent';
import { EmailIcon, WhatsAppIcon } from './icons/ContactIcons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-plum/10 bg-plum text-cream">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:px-8 md:py-12 lg:px-12 md:pb-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={siteMeta.logoPath}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 rounded-xl object-contain border-2 border-cream/35 bg-cream/5 p-0.5"
              />
              <div>
                <p className="font-serif text-xl leading-tight">{hero.name}</p>
                <p className="mt-1 text-cream/80 text-sm">{PROFESSIONAL_TITLE}</p>
              </div>
            </div>
            {AHPRA_REGISTRATION_NO ? (
              <p className="mt-3 text-cream/70 text-xs pl-[3.25rem]">
                AHPRA Registration No. {AHPRA_REGISTRATION_NO}
              </p>
            ) : null}
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-medium text-cream/90 mb-3">On this page</p>
            <ul className="space-y-2 text-sm text-cream/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm text-cream/75 space-y-3">
            <p>
              <a
                href={contact.whatsappLink}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-cream/90" />
                <span>{contact.whatsappNumber}</span>
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <EmailIcon className="h-4 w-4 shrink-0 text-cream/90" />
                <span>{contact.email}</span>
              </a>
            </p>
            <p>{contact.location}</p>
          </div>
        </div>

        <p className="mt-10 pt-8 border-t border-cream/15 text-xs text-cream/65 leading-relaxed max-w-3xl">
          {footerDisclaimer}
        </p>
        <p className="mt-4 text-xs text-cream/50">© {year} Dr. Nasreen A. Sial. All rights reserved.</p>
      </div>
    </footer>
  );
}
