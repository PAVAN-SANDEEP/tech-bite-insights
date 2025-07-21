import React from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw, CheckCircle } from 'lucide-react';
import { Language } from '@/types/news';

interface EmptyStateProps {
  language: Language;
  onRestart: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ language, onRestart }) => {
  const getText = () => {
    switch (language) {
      case 'te':
        return {
          title: 'అన్ని కార్డులు పూర్తయ్యాయి!',
          subtitle: 'మీరు నేటి అన్ని టెక్ అప్‌డేట్స్‌ను చూశారు',
          button: 'మళ్లీ ప్రారంభించండి'
        };
      case 'hi':
        return {
          title: 'सभी कार्ड पूरे हो गए!',
          subtitle: 'आपने आज के सभी तकनीकी अपडेट देख लिए हैं',
          button: 'फिर से शुरू करें'
        };
      default:
        return {
          title: 'All Cards Complete!',
          subtitle: 'You\'ve seen all today\'s tech updates',
          button: 'Start Over'
        };
    }
  };

  const { title, subtitle, button } = getText();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-6">
        <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
        <h2 className={`text-2xl font-bold text-gradient-primary mb-2 ${
          language === 'te' ? 'font-telugu' : 
          language === 'hi' ? 'font-hindi' : 'font-inter'
        }`}>
          {title}
        </h2>
        <p className={`text-muted-foreground ${
          language === 'te' ? 'font-telugu' : 
          language === 'hi' ? 'font-hindi' : 'font-inter'
        }`}>
          {subtitle}
        </p>
      </div>
      
      <Button
        onClick={onRestart}
        className="gradient-primary hover:opacity-90 transition-opacity"
        size="lg"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        {button}
      </Button>
    </div>
  );
};