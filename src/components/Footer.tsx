import {
  AHPRA_REGISTRATION_NO,
  contact,
  footerDisclaimer,
  hero,
  navLinks,
  PROFESSIONAL_TITLE,
} from '../content/siteContent';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-plum/10 bg-plum text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl">{hero.name}</p>
            <p className="mt-1 text-cream/80 text-sm">{PROFESSIONAL_TITLE}</p>
            {AHPRA_REGISTRATION_NO ? (
              <p className="mt-2 text-cream/70 text-xs">AHPRA Registration No. {AHPRA_REGISTRATION_NO}</p>
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

          <div className="text-sm text-cream/75 space-y-2">
            <p>
              <a href={contact.whatsappLink} className="hover:text-white" rel="noopener noreferrer" target="_blank">
                WhatsApp: {contact.whatsappNumber}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
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
