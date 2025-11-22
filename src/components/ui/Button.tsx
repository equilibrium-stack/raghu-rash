import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-sage text-white border-2 border-sage hover:bg-[#6B8F75] hover:border-[#6B8F75]',
      secondary: 'bg-cinnamon text-white border-2 border-cinnamon hover:bg-[#4B1E1E] hover:border-[#4B1E1E]',
      outline: 'bg-transparent text-cinnamon border-2 border-cinnamon hover:bg-cinnamon/10',
      ghost: 'bg-transparent text-sage border-2 border-transparent hover:bg-sage/10'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm min-h-[36px]',
      md: 'px-4 py-2 text-sm min-h-[44px]',
      lg: 'px-6 py-3 text-base min-h-[48px]'
    };

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';