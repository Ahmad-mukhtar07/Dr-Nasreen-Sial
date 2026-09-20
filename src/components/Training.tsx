import { useState } from 'react';
import { CPD_VISIBLE_COUNT, cpdCourses } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionHeading } from './ui/SectionHeading';

export function Training() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? cpdCourses : cpdCourses.slice(0, CPD_VISIBLE_COUNT);
  const hasMore = cpdCourses.length > CPD_VISIBLE_COUNT;

  return (
    <section id="training" className="section-padding scroll-mt-24" aria-labelledby="training-heading">
      <div ref={ref} className="reveal mx-auto max-w-6xl">
        <SectionHeading
          id="training-heading"
          eyebrow="Professional development"
          title="CPD, certificates & courses"
        />
        <div className="overflow-x-auto rounded-2xl border border-plum/10 bg-white shadow-sm">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-plum/10 bg-cream-dark/80">
                <th scope="col" className="px-4 py-3 font-medium text-plum w-[38%] md:w-48">
                  Date
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-plum">
                  Course / certificate
                </th>
              </tr>
            </thead>
            <tbody>
              {visible.map((row) => (
                <tr key={row.title} className="border-b border-plum/5 last:border-0">
                  <td className="px-4 py-3 text-teal align-top whitespace-nowrap">{row.date}</td>
                  <td className="px-4 py-3 text-muted align-top">{row.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {hasMore ? (
          <button
            type="button"
            className="mt-4 text-teal font-medium text-sm hover:text-teal-dark underline-offset-4 hover:underline"
            aria-expanded={expanded}
            onClick={() => setExpanded((e) => !e)}
          >
            {expanded ? 'Show fewer' : `Show all (${cpdCourses.length})`}
          </button>
        ) : null}
      </div>
    </section>
  );
}
