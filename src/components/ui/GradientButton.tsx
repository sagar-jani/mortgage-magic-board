
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-out shadow-button',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
          'active:scale-95 transform hover:scale-[1.02]',
          {
            'text-white bg-humbletech-cyan hover:bg-humbletech-cyan-dark': variant === 'primary',
            'text-humbletech-cyan bg-white border border-gray-100 hover:bg-gray-50': variant === 'secondary',
            'text-humbletech-cyan bg-transparent border border-humbletech-cyan hover:bg-humbletech-cyan/5': variant === 'outline',
            'text-sm px-4 py-2': size === 'sm',
            'text-base px-5 py-2.5': size === 'md',
            'text-[16px] px-6 py-3': size === 'lg',
          },
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

GradientButton.displayName = 'GradientButton';

export default GradientButton;
