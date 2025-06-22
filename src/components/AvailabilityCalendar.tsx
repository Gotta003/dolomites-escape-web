
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type DayStatus = 'available' | 'occupied' | 'unavailable';

interface CalendarDay {
  date: number;
  status: DayStatus;
  isToday: boolean;
  isCurrentMonth: boolean;
}

const AvailabilityCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedApartment, setSelectedApartment] = useState<'all' | 'ground' | 'first'>('all');
  const { t } = useLanguage();

  // Mock availability data - in a real app, this would come from an API
  const generateCalendarDays = (year: number, month: number): CalendarDay[] => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days: CalendarDay[] = [];
    const today = new Date();
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === today.toDateString();
      
      // Mock status logic - random for demo
      let status: DayStatus = 'available';
      const random = Math.random();
      if (random < 0.2) status = 'occupied';
      else if (random < 0.3) status = 'unavailable';
      
      days.push({
        date: date.getDate(),
        status,
        isToday,
        isCurrentMonth
      });
    }
    
    return days;
  };

  const days = generateCalendarDays(currentDate.getFullYear(), currentDate.getMonth());

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const getStatusColor = (status: DayStatus) => {
    switch (status) {
      case 'available': return 'bg-mountain-available';
      case 'occupied': return 'bg-mountain-occupied';
      case 'unavailable': return 'bg-mountain-unavailable';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <h3 className="font-times text-2xl font-bold text-primary mb-4 lg:mb-0">
          {t('calendar.title')}
        </h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Apartment Filter */}
          <select
            value={selectedApartment}
            onChange={(e) => setSelectedApartment(e.target.value as typeof selectedApartment)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="all">{t('calendar.all')}</option>
            <option value="ground">{t('apartments.ground.title')}</option>
            <option value="first">{t('apartments.first.title')}</option>
          </select>

          {/* Legend */}
          <div className="flex flex-wrap items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-mountain-available"></div>
              <span>{t('calendar.legend.available')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-mountain-occupied"></div>
              <span>{t('calendar.legend.occupied')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-mountain-unavailable"></div>
              <span>{t('calendar.legend.unavailable')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        
        <h4 className="font-times text-xl font-semibold">
          {t(`month.${currentDate.getMonth()}`)} {currentDate.getFullYear()}
        </h4>
        
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['D', 'L', 'M', 'M', 'G', 'V', 'S'].map((day, index) => (
          <div key={index} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${
              day.isCurrentMonth ? '' : 'opacity-30'
            } ${day.isToday ? 'today' : ''} ${day.status}`}
          >
            {day.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailabilityCalendar;
