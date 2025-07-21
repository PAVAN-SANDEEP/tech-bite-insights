import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { LanguageSelector } from './LanguageSelector';
import { SwipeCard } from './SwipeCard';
import { SwipeProgress } from './SwipeProgress';
import { EmptyState } from './EmptyState';
import { sampleNewsData } from '@/data/newsData';
import { Language } from '@/types/news';

const STORAGE_KEY = 'tech-bite-language';

export const TechBiteApp: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFirstTime, setIsFirstTime] = useState(true);

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language;
    if (savedLanguage && ['en', 'te', 'hi'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
      setIsFirstTime(false);
    }
  }, []);

  // Save language preference
  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem(STORAGE_KEY, language);
    setIsFirstTime(false);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    // Move to next card
    setCurrentCardIndex((prev) => prev + 1);
  };

  const handleRestart = () => {
    setCurrentCardIndex(0);
  };

  const currentCard = sampleNewsData[currentCardIndex];
  const hasCards = currentCardIndex < sampleNewsData.length;

  if (isFirstTime) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🚀</span>
            </div>
            <h1 className="text-3xl font-bold text-gradient-primary mb-2">
              Tech Bite Insights
            </h1>
            <p className="text-muted-foreground mb-8">
              Daily tech updates in your preferred language
            </p>
          </div>
          
          <div className="w-full max-w-sm">
            <p className="text-sm text-muted-foreground mb-4">
              Choose your preferred language
            </p>
            <div className="grid grid-cols-1 gap-3">
              {(['en', 'te', 'hi'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className="p-4 bg-card border border-border rounded-lg hover:bg-muted/50 transition-colors text-left"
                >
                  <div className={`font-medium ${
                    lang === 'te' ? 'font-telugu' : 
                    lang === 'hi' ? 'font-hindi' : 'font-inter'
                  }`}>
                    {lang === 'en' ? 'English' : 
                     lang === 'te' ? 'తెలుగు' : 'हिंदी'}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {lang === 'en' ? 'Get updates in English' : 
                     lang === 'te' ? 'తెలుగులో అప్‌డేట్స్ పొందండి' : 
                     'हिंदी में अपडेट प्राप्त करें'}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header language={currentLanguage} />
      
      <LanguageSelector 
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />

      <div className="flex-1 relative">
        {hasCards ? (
          <>
            {/* Card Stack */}
            <div className="absolute inset-0">
              {/* Next card (background) */}
              {sampleNewsData[currentCardIndex + 1] && (
                <SwipeCard
                  key={`next-${currentCardIndex + 1}`}
                  card={sampleNewsData[currentCardIndex + 1]}
                  language={currentLanguage}
                  onSwipe={() => {}}
                  isActive={false}
                />
              )}
              
              {/* Current card */}
              <SwipeCard
                key={`current-${currentCardIndex}`}
                card={currentCard}
                language={currentLanguage}
                onSwipe={handleSwipe}
                isActive={true}
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0">
              <SwipeProgress 
                currentIndex={currentCardIndex} 
                total={sampleNewsData.length} 
              />
            </div>
          </>
        ) : (
          <EmptyState 
            language={currentLanguage} 
            onRestart={handleRestart} 
          />
        )}
      </div>
    </div>
  );
};