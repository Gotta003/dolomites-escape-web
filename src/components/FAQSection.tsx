
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { t } = useLanguage();

  const faqItems = [
    { q: 'faq.checkin.q', a: 'faq.checkin.a' },
    { q: 'faq.pets.q', a: 'faq.pets.a' },
    { q: 'faq.smoking.q', a: 'faq.smoking.a' },
    { q: 'faq.parking.q', a: 'faq.parking.a' },
    { q: 'faq.wifi.q', a: 'faq.wifi.a' },
    { q: 'faq.kitchen.q', a: 'faq.kitchen.a' },
    { q: 'faq.cleaning.q', a: 'faq.cleaning.a' },
    { q: 'faq.deposit.q', a: 'faq.deposit.a' },
    { q: 'faq.cancellation.q', a: 'faq.cancellation.a' },
    { q: 'faq.activities.q', a: 'faq.activities.a' }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="font-times text-2xl font-bold text-primary mb-6">
        {t('faq.title')}
      </h3>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
            >
              <span className="font-medium text-gray-800">
                {t(item.q)}
              </span>
              {openItems.includes(index) ? (
                <ChevronUp size={20} className="text-primary" />
              ) : (
                <ChevronDown size={20} className="text-primary" />
              )}
            </button>
            
            <div className={`px-6 transition-all duration-300 overflow-hidden ${
              openItems.includes(index) 
                ? 'py-4 max-h-96 opacity-100' 
                : 'py-0 max-h-0 opacity-0'
            }`}>
              <p className="text-gray-600 leading-relaxed">
                {t(item.a)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
