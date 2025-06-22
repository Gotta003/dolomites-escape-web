
import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LocationMap = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="font-times text-2xl font-bold text-primary mb-4">
          {t('location.title')}
        </h3>
        <p className="text-gray-600 mb-6">
          {t('location.description')}
        </p>
      </div>

      {/* Map Container */}
      <div className="relative h-96">
        {/* Static map placeholder - in a real app, you'd use Google Maps API */}
        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-primary mx-auto mb-2" />
            <div className="text-gray-700 font-semibold">Rocca Pietore</div>
            <div className="text-sm text-gray-500">Dolomites, Italy</div>
          </div>
        </div>
        
        {/* In a real implementation, you would use Google Maps like this: */}
        {/* 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.123456789!2d11.7891234!3d46.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRocca%20Pietore%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        */}
      </div>

      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Nearby Peaks:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Marmolada (3,343m)</li>
              <li>• Monte Civetta (3,220m)</li>
              <li>• Monte Pelmo (3,168m)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Activities:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Ski Resort (5 min)</li>
              <li>• Hiking Trails</li>
              <li>• Via Ferrata Routes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
