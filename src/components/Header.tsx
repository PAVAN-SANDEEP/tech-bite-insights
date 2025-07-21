import React from 'react';
import { Zap, Calendar } from 'lucide-react';
import { Language } from '@/types/news';

interface HeaderProps {
  language: Language;
}

export const Header: React.FC<HeaderProps> = ({ language }) => {
  const getHeaderText = () => {
    switch (language) {
      case 'te':
        return {
          title: 'టెక్ బైట్ ఇన్‌సైట్స్',
          subtitle: 'రోజువారీ టెక్ అప్‌డేట్స్'
        };
      case 'hi':
        return {
          title: 'टेक बाइट इनसाइट्स',
          subtitle: 'दैनिक तकनीकी अपडेट'
        };
      default:
        return {
          title: 'Tech Bite Insights',
          subtitle: 'Daily Tech Updates'
        };
    }
  };

  const { title, subtitle } = getHeaderText();
  const today = new Date().toLocaleDateString();

  return (
    <div className="bg-gradient-primary p-6 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h1 className={`text-xl font-bold ${
              language === 'te' ? 'font-telugu' : 
              language === 'hi' ? 'font-hindi' : 'font-inter'
            }`}>
              {title}
            </h1>
            <p className={`text-white/80 text-sm ${
              language === 'te' ? 'font-telugu' : 
              language === 'hi' ? 'font-hindi' : 'font-inter'
            }`}>
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{today}</span>
        </div>
      </div>
    </div>
  );
};