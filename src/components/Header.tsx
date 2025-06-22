
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.apartments', href: '#apartments' },
    { key: 'nav.availability', href: '#availability' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.location', href: '#location' },
    { key: 'nav.faq', href: '#faq' },
    { key: 'nav.contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div 
            className={`font-times font-bold text-xl transition-colors ${
              isScrolled ? 'text-primary' : 'text-white mountain-shadow'
            }`}
          >
            Gianni Rocca
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors hover:text-primary ${
                  isScrolled ? 'text-gray-700' : 'text-white mountain-shadow'
                }`}
              >
                {t(item.key)}
              </button>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pt-4 pb-2 bg-white/95 backdrop-blur-sm rounded-lg mt-4 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                {t(item.key)}
              </button>
            ))}
            <div className="px-4 py-2 border-t border-gray-200 mt-2">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
