import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'floral' | 'wood' | 'resin' | 'default';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide';

  const variants = {
    floral: 'bg-floral text-cinnamon',
    wood: 'bg-wood text-white',
    resin: 'bg-resin text-white',
    default: 'bg-gray-100 text-gray-800'
  };

  return (
    <span className={cn(baseClasses, variants[variant], className)}>
      {children}
    </span>
  );
}