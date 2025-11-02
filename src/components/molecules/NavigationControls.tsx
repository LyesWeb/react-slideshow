import React from 'react';
import { Button } from '../atoms/Button';

interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  className?: string;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  className = '',
}) => {
  const baseClasses = 'absolute inset-0 flex items-center justify-between px-4 pointer-events-none';
  const classes = `${baseClasses} ${className}`.trim();

  return (
    <div className={classes}>
      <div className="pointer-events-auto">
        <Button
          variant="previous"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          aria-label="Previous slide"
        />
      </div>
      <div className="pointer-events-auto">
        <Button
          variant="next"
          onClick={onNext}
          disabled={!canGoNext}
          aria-label="Next slide"
        />
      </div>
    </div>
  );
};

