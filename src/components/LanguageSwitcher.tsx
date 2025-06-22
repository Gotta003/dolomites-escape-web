
import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'it' as Language, flag: '🇮🇹', name: 'Italiano' },
    { code: 'en' as Language, flag: '🇬🇧', name: 'English' },
    { code: 'de' as Language, flag: '🇩🇪', name: 'Deutsch' }
  ];

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-all ${
            language === lang.code
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="text-sm">{lang.flag}</span>
          <span className="text-xs font-medium">{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
