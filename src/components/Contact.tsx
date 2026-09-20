import { contact, contactSection } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ButtonLink } from './ui/ButtonLink';
import { ContactForm } from './ContactForm';
import { SectionHeading } from './ui/SectionHeading';

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section-padding scroll-mt-24" aria-labelledby="contact-heading">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <SectionHeading
          id="contact-heading"
          title={contactSection.heading}
          subtitle={contactSection.subheading}
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-4 sm:items-start">
            <ButtonLink
              href={contact.whatsappLink}
              variant="whatsapp"
              external
              className="w-full sm:w-auto text-base !px-8 !py-4"
            >
              Message on WhatsApp
            </ButtonLink>
            <ButtonLink
              href={`mailto:${contact.email}`}
              variant="secondary"
              className="w-full sm:w-auto text-base !px-8 !py-4"
            >
              Email {contact.email}
            </ButtonLink>
            <dl className="text-sm text-muted space-y-2 pt-2">
              <div>
                <dt className="font-medium text-plum">Location</dt>
                <dd>{contact.location}</dd>
              </div>
              <div>
                <dt className="font-medium text-plum">WhatsApp</dt>
                <dd>{contact.whatsappNumber}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl bg-white p-6 md:p-8 border border-plum/5 shadow-sm">
            <h3 className="font-serif text-xl text-plum mb-4">Enquiry form</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
