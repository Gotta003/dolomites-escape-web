
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Home, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ApartmentCardProps {
  type: 'ground' | 'first';
  images: string[];
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ type, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleBookNow = () => {
    const email = 'reception@gianniroccapartments.com';
    const subject = `Booking Request - ${t(`apartments.${type}.title`)}`;
    const body = `Hello,\n\nI would like to book the ${t(`apartments.${type}.title`)} apartment.\n\nPlease contact me with availability and details.\n\nThank you!`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const airbnbUrl = type === 'ground' 
    ? 'https://airbnb.com/rooms/ground-floor-apartment'
    : 'https://airbnb.com/rooms/first-floor-apartment';

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-scale">
      {/* Image Slider */}
      <div className="relative h-64 md:h-80">
        <img
          src={images[currentImageIndex]}
          alt={`${t(`apartments.${type}.title`)} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Image indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-times text-2xl font-bold text-primary mb-4">
          {t(`apartments.${type}.title`)}
        </h3>

        <div className="flex items-center space-x-6 mb-4 text-gray-600">
          <div className="flex items-center space-x-2">
            <Home size={18} />
            <span className="text-sm">{t(`apartments.${type}.rooms`)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users size={18} />
            <span className="text-sm">{t(`apartments.${type}.capacity`)}</span>
          </div>
        </div>

        <div className="text-2xl font-bold text-primary mb-4">
          {t(`apartments.${type}.price`)}
        </div>

        <div className="text-sm text-primary mb-6 font-medium">
          {t('apartments.direct')}
        </div>

        <div className="flex flex-col space-y-3">
          <button
            onClick={handleBookNow}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
          >
            {t('apartments.book')}
          </button>
          
          <a
            href={airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 w-full"
          >
            <span>{t('apartments.airbnb')}</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
