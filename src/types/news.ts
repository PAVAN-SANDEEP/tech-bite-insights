export interface NewsCard {
  id: string;
  title: {
    en: string;
    te: string;
    hi: string;
  };
  content: {
    en: {
      what: string;
      why: string;
      how: string;
    };
    te: {
      what: string;
      why: string;
      how: string;
    };
    hi: {
      what: string;
      why: string;
      how: string;
    };
  };
  category: string;
  image?: string;
  actionLink?: string;
  createdAt: string;
}

export type Language = 'en' | 'te' | 'hi';

export const LANGUAGES = {
  en: 'English',
  te: 'తెలుగు',
  hi: 'हिंदी'
} as const;