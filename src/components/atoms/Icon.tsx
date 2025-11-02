import React from 'react';

export type IconType = 'chevron-left' | 'chevron-right';

interface IconProps {
  type: IconType;
  className?: string;
  'aria-hidden'?: boolean;
}

export const Icon: React.FC<IconProps> = ({ type, className = '', ...props }) => {
  const baseClasses = 'w-6 h-6';
  const classes = `${baseClasses} ${className}`.trim();

  if (type === 'chevron-left') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={classes}
        {...props}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    );
  }

  if (type === 'chevron-right') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={classes}
        {...props}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    );
  }

  return null;
};

