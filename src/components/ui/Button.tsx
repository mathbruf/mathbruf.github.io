import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type Variant = 'primary' | 'secondary';

interface Props extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant;
}

const variantClass: Record<Variant, string> = {
  primary:
    'bg-fg text-bg hover:bg-accent hover:text-bg border border-fg hover:border-accent',
  secondary:
    'text-fg border border-border hover:border-fg hover:text-fg bg-transparent',
};

export const Button = forwardRef<HTMLAnchorElement, Props>(
  ({ variant = 'primary', className = '', children, ...rest }, ref) => (
    <a
      ref={ref}
      className={`group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-none text-sm font-medium tracking-tight transition-all active:scale-[0.98] ${variantClass[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  ),
);

Button.displayName = 'Button';
