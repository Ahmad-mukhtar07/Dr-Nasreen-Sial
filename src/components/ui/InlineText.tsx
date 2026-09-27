import { Fragment } from 'react';

/** Renders plain text with optional `<sub>...</sub>` segments from siteContent. */
export function InlineText({ text }: { text: string }) {
  const parts = text.split(/(<sub>.*?<\/sub>)/g);

  return (
    <>
      {parts.map((part, index) => {
        const subMatch = part.match(/^<sub>(.*?)<\/sub>$/);
        if (subMatch) {
          return <sub key={index}>{subMatch[1]}</sub>;
        }
        return part ? <Fragment key={index}>{part}</Fragment> : null;
      })}
    </>
  );
}
