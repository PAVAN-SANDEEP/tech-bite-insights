import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronRight, Zap, Lightbulb, Target } from 'lucide-react';
import { NewsCard, Language } from '@/types/news';
import { cn } from '@/lib/utils';

interface SwipeCardProps {
  card: NewsCard;
  language: Language;
  onSwipe: (direction: 'left' | 'right') => void;
  isActive: boolean;
}

export const SwipeCard: React.FC<SwipeCardProps> = ({ 
  card, 
  language, 
  onSwipe, 
  isActive 
}) => {
  const [isSwipeStarted, setIsSwipeStarted] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isActive) return;
    startX.current = e.touches[0].clientX;
    setIsSwipeStarted(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isActive || !isSwipeStarted) return;
    
    currentX.current = e.touches[0].clientX;
    const deltaX = currentX.current - startX.current;
    
    if (cardRef.current) {
      const rotation = deltaX * 0.1;
      cardRef.current.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`;
      
      if (Math.abs(deltaX) > 50) {
        setSwipeDirection(deltaX > 0 ? 'right' : 'left');
      } else {
        setSwipeDirection(null);
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isActive || !isSwipeStarted) return;
    
    const deltaX = currentX.current - startX.current;
    const threshold = 100;
    
    if (Math.abs(deltaX) > threshold) {
      const direction = deltaX > 0 ? 'right' : 'left';
      onSwipe(direction);
    } else {
      // Reset card position
      if (cardRef.current) {
        cardRef.current.style.transform = 'translateX(0px) rotate(0deg)';
      }
    }
    
    setIsSwipeStarted(false);
    setSwipeDirection(null);
  };

  const getFontClass = () => {
    switch (language) {
      case 'te': return 'font-telugu';
      case 'hi': return 'font-hindi';
      default: return 'font-inter';
    }
  };

  const handleActionClick = () => {
    if (card.actionLink) {
      window.open(card.actionLink, '_blank');
    }
  };

  return (
    <Card
      ref={cardRef}
      className={cn(
        "absolute inset-4 overflow-hidden card-swipe touch-target",
        "gradient-dark border-primary/20 glow-card",
        getFontClass(),
        !isActive && "pointer-events-none opacity-80 scale-95",
        swipeDirection === 'right' && "border-accent/50",
        swipeDirection === 'left' && "border-destructive/50"
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              {card.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {new Date(card.createdAt).toLocaleDateString()}
            </span>
          </div>
          <h1 className="text-xl font-bold text-gradient-primary leading-tight">
            {card.title[language]}
          </h1>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 space-y-6 overflow-y-auto">
          {/* What */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-semibold text-primary">
                {language === 'te' ? 'ఏమిటి' : language === 'hi' ? 'क्या है' : 'What'}
              </h3>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {card.content[language].what}
            </p>
          </div>

          {/* Why */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-secondary" />
              <h3 className="text-sm font-semibold text-secondary">
                {language === 'te' ? 'ఎందుకు' : language === 'hi' ? 'क्यों' : 'Why'}
              </h3>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {card.content[language].why}
            </p>
          </div>

          {/* How */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-accent" />
              <h3 className="text-sm font-semibold text-accent">
                {language === 'te' ? 'ఎలా' : language === 'hi' ? 'कैसे' : 'How'}
              </h3>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {card.content[language].how}
            </p>
          </div>
        </div>

        {/* Action Button */}
        {card.actionLink && (
          <div className="p-6 pt-4">
            <Button
              onClick={handleActionClick}
              className="w-full gradient-primary hover:opacity-90 transition-opacity"
              size="lg"
            >
              <span className="flex items-center gap-2">
                {language === 'te' ? 'మరింత తెలుసుకోండి' : 
                 language === 'hi' ? 'और जानें' : 'Learn More'}
                <ExternalLink className="w-4 h-4" />
              </span>
            </Button>
          </div>
        )}

        {/* Swipe Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-8 h-1 bg-white/20 rounded-full">
            <div className="h-full bg-primary rounded-full transition-all duration-300" 
                 style={{ width: isActive ? '100%' : '0%' }} />
          </div>
        </div>

        {/* Swipe Direction Indicator */}
        {swipeDirection && (
          <div className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "text-4xl font-bold opacity-70",
            swipeDirection === 'right' ? "text-accent" : "text-destructive"
          )}>
            {swipeDirection === 'right' ? '✓' : '✗'}
          </div>
        )}
      </div>
    </Card>
  );
};