type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ id, eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-10 md:mb-14 max-w-2xl">
      {eyebrow ? (
        <p className="text-teal font-medium text-sm tracking-wide uppercase mb-2">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="font-serif text-3xl md:text-4xl text-plum tracking-tight">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-muted text-lg leading-relaxed">{subtitle}</p> : null}
    </header>
  );
}
