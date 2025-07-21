import React from 'react';
import { cn } from '@/lib/utils';

interface SwipeProgressProps {
  currentIndex: number;
  total: number;
}

export const SwipeProgress: React.FC<SwipeProgressProps> = ({ currentIndex, total }) => {
  return (
    <div className="flex justify-center gap-2 px-6 py-4">
      {Array.from({ length: total }, (_, index) => (
        <div
          key={index}
          className={cn(
            "h-1 rounded-full transition-all duration-300",
            index === currentIndex
              ? "w-8 bg-primary"
              : index < currentIndex
              ? "w-4 bg-accent"
              : "w-4 bg-white/20"
          )}
        />
      ))}
    </div>
  );
};