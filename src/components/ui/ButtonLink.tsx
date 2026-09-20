import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'whatsapp' | 'ghost';

const variants: Record<Variant, string> = {
  primary:
    'bg-teal text-white hover:bg-teal-dark shadow-sm shadow-teal/20',
  secondary:
    'bg-white text-plum border border-plum/20 hover:border-plum/40 hover:bg-cream-dark',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1fb855] shadow-sm',
  ghost: 'text-plum hover:bg-plum/5',
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  external?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
};

export function ButtonLink({
  href,
  variant = 'primary',
  className = '',
  children,
  external,
  onClick,
  'aria-label': ariaLabel,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
