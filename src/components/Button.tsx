import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-body font-medium rounded-sm transition-all duration-300';
  
  const variants = {
    primary: 'bg-bio-teal text-porcelain hover:bg-bio-teal/90 shadow-card hover:shadow-lg',
    secondary: 'bg-muted-gold text-graphite hover:bg-muted-gold/90',
    outline: 'border-2 border-graphite text-graphite hover:bg-graphite hover:text-porcelain',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

