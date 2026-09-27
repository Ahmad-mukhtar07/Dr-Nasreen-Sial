import type { ServiceCategory } from '../../content/siteContent';
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

function IconMenstrual(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function IconHormone(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="8" r="2.5" />
      <circle cx="12" cy="16" r="2.5" />
      <path d="M9.5 9.5 11 12M14.5 9.5 13 12M11 14h2" />
    </svg>
  );
}

function IconVaginal(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12 21s-6-3.5-6-9a6 6 0 1 1 12 0c0 5.5-6 9-6 9z" />
      <path d="M9.5 11.5h5M12 9v5" />
    </svg>
  );
}

function IconFertility(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

function IconContraception(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M7 12h10" />
    </svg>
  );
}

function IconPregnancy(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <circle cx="12" cy="5.5" r="2.5" />
      <path d="M12 8v2.5c0 2.5 4 3.5 4 7a4 4 0 0 1-8 0c0-3.5 4-4.5 4-7V8" />
      <ellipse cx="12" cy="17.5" rx="3.5" ry="2.5" />
    </svg>
  );
}

function IconMenopause(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <circle cx="12" cy="12" r="4" />
      <path d="M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M3 12h2M19 12h2" />
      <path d="M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" opacity="0.55" />
    </svg>
  );
}

function IconGeneral(props: IconProps) {
  return (
    <svg {...stroke} {...props}>
      <path d="M9 3h6l1 2h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3z" />
      <path d="M9 12h6M9 16h4" />
      <path d="M8 3v3M16 3v3" />
    </svg>
  );
}

const map = {
  menstrual: IconMenstrual,
  hormone: IconHormone,
  vaginal: IconVaginal,
  fertility: IconFertility,
  contraception: IconContraception,
  pregnancy: IconPregnancy,
  menopause: IconMenopause,
  general: IconGeneral,
} as const;

export function ServiceIcon({ name, className }: { name: ServiceCategory['icon']; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} />;
}
