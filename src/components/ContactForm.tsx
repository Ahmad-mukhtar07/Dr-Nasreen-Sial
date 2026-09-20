import { useState, type FormEvent } from 'react';
import { contact, contactSection, FORMSPREE_FORM_ID } from '../content/siteContent';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formspreeConfigured = Boolean(FORMSPREE_FORM_ID.trim());

  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const next: Record<string, string> = {};
    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();
    const method = data.get('contactMethod') as string;

    if (!name) next.name = 'Please enter your name.';
    if (!email) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email.';
    if (!method) next.contactMethod = 'Please select a preferred contact method.';
    if (!message) next.message = 'Please enter a message.';
    else if (message.length < 10) next.message = 'Please provide a bit more detail (at least 10 characters).';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if ((form.elements.namedItem('_gotcha') as HTMLInputElement)?.value) {
      return;
    }

    if (!validate(form)) return;

    if (!formspreeConfigured) {
      const data = new FormData(form);
      const body = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        data.get('phone') ? `Phone: ${data.get('phone')}` : null,
        `Preferred contact: ${data.get('contactMethod')}`,
        '',
        String(data.get('message')),
      ]
        .filter(Boolean)
        .join('\n');
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Consultation enquiry from website')}&body=${encodeURIComponent(body)}`;
      return;
    }

    setState('submitting');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setState('success');
        form.reset();
        setErrors({});
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div
        className="rounded-2xl bg-teal/10 border border-teal/20 p-6 text-charcoal"
        role="status"
      >
        <p className="font-medium text-plum">Thank you — your message has been sent.</p>
        <p className="mt-2 text-sm text-muted">
          Dr. Sial will respond using your preferred contact method when possible.
        </p>
        <button
          type="button"
          className="mt-4 text-sm text-teal font-medium hover:underline"
          onClick={() => setState('idle')}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {!formspreeConfigured ? (
        <p className="text-sm text-muted rounded-lg bg-cream-dark p-3 border border-plum/10">
          Online form delivery is not configured yet. Submitting will open your email app, or use{' '}
          <a href={contact.whatsappLink} className="text-teal underline">
            WhatsApp
          </a>{' '}
          for a faster reply.
        </p>
      ) : null}

      {/* Honeypot */}
      <label className="sr-only" htmlFor="_gotcha">
        Leave empty
      </label>
      <input
        type="text"
        id="_gotcha"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-plum mb-1">
          Name <span className="text-teal">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="w-full rounded-xl border border-plum/15 bg-white px-4 py-3 text-charcoal focus:border-teal"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 text-sm text-red-700" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-plum mb-1">
          Email <span className="text-teal">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-xl border border-plum/15 bg-white px-4 py-3 text-charcoal focus:border-teal"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="mt-1 text-sm text-red-700" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-plum mb-1">
          Phone <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-xl border border-plum/15 bg-white px-4 py-3 text-charcoal focus:border-teal"
        />
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-plum mb-2">
          Preferred contact method <span className="text-teal">*</span>
        </legend>
        <div className="flex flex-wrap gap-4">
          {(['Email', 'Phone', 'WhatsApp'] as const).map((opt) => (
            <label key={opt} className="inline-flex items-center gap-2 text-sm text-muted cursor-pointer">
              <input type="radio" name="contactMethod" value={opt} className="text-teal focus:ring-teal" />
              {opt}
            </label>
          ))}
        </div>
        {errors.contactMethod ? (
          <p className="mt-1 text-sm text-red-700" role="alert">
            {errors.contactMethod}
          </p>
        ) : null}
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-plum mb-1">
          Message <span className="text-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-xl border border-plum/15 bg-white px-4 py-3 text-charcoal focus:border-teal resize-y min-h-[120px]"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-red-700" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      {formspreeConfigured ? (
        <input type="hidden" name="_replyto" value="" />
      ) : null}
      <input type="hidden" name="_subject" value="Website consultation enquiry" />

      <p className="text-sm text-muted flex items-start gap-2">
        <span className="text-teal font-bold" aria-hidden>
          !
        </span>
        {contactSection.emergencyNotice}
      </p>

      {state === 'error' ? (
        <p className="text-sm text-red-700" role="alert">
          Something went wrong. Please email{' '}
          <a href={`mailto:${contact.email}`} className="underline">
            {contact.email}
          </a>{' '}
          or message on WhatsApp.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full sm:w-auto rounded-full bg-teal text-white px-6 py-3 font-medium hover:bg-teal-dark disabled:opacity-60 transition-colors"
      >
        {state === 'submitting'
          ? 'Sending…'
          : formspreeConfigured
            ? 'Send message'
            : 'Send via email app'}
      </button>
    </form>
  );
}
