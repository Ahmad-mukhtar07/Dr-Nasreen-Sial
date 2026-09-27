import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'whatsapp' | 'ghost';

const variants: Record<Variant, string> = {
  primary:
    'bg-blush text-white hover:bg-blush-dark shadow-sm shadow-blush/25',
  secondary:
    'bg-white text-charcoal border border-charcoal/15 hover:border-sage/50 hover:bg-cream-dark',
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
