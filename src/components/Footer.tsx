
import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="font-times text-xl font-bold mb-4">
              Gianni Rocca Apartments
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+391234567890" className="text-sm hover:underline">
                  {t('footer.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:reception@giannirocca

apartments.com" className="text-sm hover:underline">
                  {t('footer.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Airbnb Links */}
          <div>
            <h4 className="font-times text-xl font-bold mb-4">
              {t('apartments.airbnb')}
            </h4>
            <div className="space-y-3">
              <a
                href="https://airbnb.com/rooms/ground-floor-apartment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:underline"
              >
                <span>{t('apartments.ground.title')}</span>
                <ExternalLink size={14} />
              </a>
              <a
                href="https://airbnb.com/rooms/first-floor-apartment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:underline"
              >
                <span>{t('apartments.first.title')}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-times text-xl font-bold mb-4">Legal</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm hover:underline">
                {t('footer.legal.terms')}
              </a>
              <a href="#" className="block text-sm hover:underline">
                {t('footer.legal.privacy')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            {t('footer.credit')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
