import { useId, useState } from 'react';
import type { ServiceCategory } from '../content/siteContent';
import { ServiceIcon } from './icons/ServiceIcons';

type ServiceCardProps = {
  service: ServiceCategory;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const hidden = service.hiddenItems ?? [];
  const hasHidden = hidden.length > 0;

  return (
    <article className="rounded-2xl bg-white border border-charcoal/5 shadow-sm shadow-charcoal/5 p-4 md:p-5">
      <div className="flex gap-3">
        <div className="shrink-0 inline-flex rounded-xl bg-blush/12 p-2 text-blush h-fit">
          <ServiceIcon name={service.icon} className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-sans font-medium text-charcoal text-base leading-snug">{service.title}</h3>
          <p className="mt-1.5 text-sm text-muted leading-relaxed">{service.description}</p>

          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${service.title} concerns`}>
            {service.visibleTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-cream-dark border border-charcoal/8 px-2.5 py-1 text-xs text-charcoal leading-snug"
              >
                {tag}
              </li>
            ))}
          </ul>

          {hasHidden ? (
            <>
              <div
                id={panelId}
                className="accordion-panel"
                data-open={expanded}
                aria-hidden={!expanded}
              >
                <div className="accordion-panel-inner">
                  <ul className="mt-3 space-y-1.5 text-sm text-muted list-disc pl-5">
                    {hidden.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                type="button"
                className="mt-3 text-sm font-medium text-sage hover:text-sage-dark underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage rounded"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setExpanded((e) => !e)}
              >
                {expanded ? 'Show less ↑' : 'See all concerns ↓'}
              </button>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}
