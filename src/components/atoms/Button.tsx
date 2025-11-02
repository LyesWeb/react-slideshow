import React from 'react';
import { Icon, IconType } from './Icon';

export type ButtonVariant = 'previous' | 'next';

interface ButtonProps {
  variant: ButtonVariant;
  onClick: () => void;
  disabled?: boolean;
  'aria-label': string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  disabled = false,
  'aria-label': ariaLabel,
  className = '',
}) => {
  const iconType: IconType = variant === 'previous' ? 'chevron-left' : 'chevron-right';

  const baseClasses = `
    inline-flex items-center justify-center
    rounded-full
    bg-white/90 hover:bg-white
    text-gray-800
    shadow-md hover:shadow-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/90 disabled:hover:shadow-md
    w-12 h-12
  `.trim().replace(/\s+/g, ' ');

  const classes = `${baseClasses} ${className}`.trim();

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      <Icon type={iconType} aria-hidden={true} />
    </button>
  );
};

