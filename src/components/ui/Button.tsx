import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, disabled, onClick, type = 'button', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-gold text-charcoal border-2 border-gold hover:bg-gold-dark hover:border-gold-dark',
      secondary: 'bg-cinnamon text-white border-2 border-cinnamon hover:bg-[#4B1E1E] hover:border-[#4B1E1E]',
      outline: 'bg-transparent text-gold border-2 border-gold hover:bg-gold/10',
      ghost: 'bg-transparent text-gold border-2 border-transparent hover:bg-gold/10'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm min-h-[36px]',
      md: 'px-4 py-2 text-sm min-h-[44px]',
      lg: 'px-6 py-3 text-base min-h-[48px]'
    };

    const classes = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          {...props}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';