import { useEffect } from 'react';
import { contact, hero, PROFESSIONAL_TITLE, siteMeta } from '../content/siteContent';

export function SiteMeta() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: hero.name,
      jobTitle: PROFESSIONAL_TITLE,
      email: contact.email,
      image: siteMeta.profileImagePath,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'SA',
        addressCountry: 'AU',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'person-schema';
    document.head.appendChild(script);

    return () => {
      document.getElementById('person-schema')?.remove();
    };
  }, []);

  return null;
}
