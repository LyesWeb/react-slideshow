import React, { useState, useEffect, useCallback } from 'react';
import { NavigationControls } from '../molecules/NavigationControls';

export interface SlideShowProps {
  images: string[];
  defaultIndex?: number;
  className?: string;
}

export const SlideShow: React.FC<SlideShowProps> = ({
  images,
  defaultIndex = 0,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);

  // Ensure the default index is within bounds
  useEffect(() => {
    if (defaultIndex >= 0 && defaultIndex < images.length) {
      setCurrentIndex(defaultIndex);
    }
  }, [defaultIndex, images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
    );
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  }, []);

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < images.length - 1;

  const baseClasses = 'relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl';
  const classes = `${baseClasses} ${className}`.trim();

  if (!images || images.length === 0) {
    return (
      <div className={classes}>
        <div className="flex items-center justify-center bg-gray-200 text-gray-500 h-96">
          <p>No images to display</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={classes}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image slideshow"
    >
      {/* Slide container */}
      <div className="relative aspect-video bg-gray-100">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1} of ${images.length}`}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
        />
        
        {/* Screen reader announcement */}
        <div
          className="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          Slide {currentIndex + 1} of {images.length}
        </div>

        {/* Navigation controls */}
        <NavigationControls
          onPrevious={goToPrevious}
          onNext={goToNext}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

