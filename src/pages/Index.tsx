
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ApartmentCard from '../components/ApartmentCard';
import AvailabilityCalendar from '../components/AvailabilityCalendar';
import LocationMap from '../components/LocationMap';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

// Apartment images (using mountain/interior placeholders)
const groundFloorImages = [
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

const firstFloorImages = [
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

const IndexContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-muted scroll-smooth">
      <Header />
      
      <HeroSection />

      {/* Apartments Section */}
      <section id="apartments" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-times text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-fade-in">
            {t('apartments.title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ApartmentCard type="ground" images={groundFloorImages} />
            <ApartmentCard type="first" images={firstFloorImages} />
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section id="availability" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <AvailabilityCalendar />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-times text-3xl md:text-4xl font-bold text-center text-primary mb-8">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <LocationMap />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <FAQSection />
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
