import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'underline' | 'block';

interface Props extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant;
}

export const Button = forwardRef<HTMLAnchorElement, Props>(
  ({ variant = 'underline', className, children, ...rest }, ref) => {
    if (variant === 'block') {
      return (
        <a
          ref={ref}
          className={cn(
            'group inline-flex items-center gap-3 px-5 py-3 font-mono text-micro border border-ink',
            'transition-colors hover:bg-ink hover:text-paper',
            className,
          )}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <a
        ref={ref}
        className={cn(
          'group relative inline-flex items-center gap-2 font-mono text-micro text-ink',
          'after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-ink',
          'after:origin-right after:scale-x-100 after:transition-transform after:duration-500 after:ease-out',
          'hover:after:origin-left hover:after:scale-x-0',
          'before:absolute before:left-0 before:right-0 before:-bottom-1 before:h-px before:bg-vermillion',
          'before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-out before:delay-100',
          'hover:before:scale-x-100 hover:text-vermillion',
          className,
        )}
        {...rest}
      >
        {children}
      </a>
    );
  },
);

Button.displayName = 'Button';
