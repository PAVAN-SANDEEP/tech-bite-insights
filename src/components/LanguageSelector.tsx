import React from 'react';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { Language, LANGUAGES } from '@/types/news';
import { cn } from '@/lib/utils';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center gap-2 p-4">
      <Languages className="w-5 h-5 text-muted-foreground" />
      <div className="flex gap-1 bg-muted/20 rounded-lg p-1">
        {(Object.keys(LANGUAGES) as Language[]).map((lang) => (
          <Button
            key={lang}
            variant="ghost"
            size="sm"
            onClick={() => onLanguageChange(lang)}
            className={cn(
              "text-xs px-3 py-1 h-8 transition-all duration-200",
              currentLanguage === lang
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/40",
              lang === 'te' && "font-telugu",
              lang === 'hi' && "font-hindi"
            )}
          >
            {LANGUAGES[lang]}
          </Button>
        ))}
      </div>
    </div>
  );
};