
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'it' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  it: {
    // Navigation
    'nav.apartments': 'Appartamenti',
    'nav.availability': 'Disponibilità',
    'nav.about': 'Chi Siamo',
    'nav.location': 'Posizione',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contatti',
    
    // Hero
    'hero.title': 'Gianni Rocca Apartments',
    'hero.subtitle': 'Nel cuore delle Dolomiti',
    'hero.cta': 'Verifica Disponibilità',
    
    // Apartments
    'apartments.title': 'I Nostri Appartamenti',
    'apartments.ground.title': 'Piano Terra',
    'apartments.ground.rooms': '3 camere',
    'apartments.ground.capacity': '4 persone',
    'apartments.ground.price': '€1.000/settimana',
    'apartments.first.title': 'Primo Piano + Mansarda',
    'apartments.first.rooms': '3 camere + mansarda',
    'apartments.first.capacity': '6 persone',
    'apartments.first.price': '€1.300/settimana',
    'apartments.book': 'Prenota Ora',
    'apartments.airbnb': 'Vedi su Airbnb',
    'apartments.direct': 'Prenota direttamente per il miglior prezzo!',
    
    // Calendar
    'calendar.title': 'Disponibilità',
    'calendar.legend.available': 'Disponibile',
    'calendar.legend.occupied': 'Occupato',
    'calendar.legend.unavailable': 'Non Disponibile',
    'calendar.filter': 'Filtra per appartamento',
    'calendar.all': 'Tutti gli appartamenti',
    
    // About
    'about.title': 'Chi Siamo',
    'about.description': 'Casa indipendente completamente ristrutturata nel 2024, situata nel cuore delle Dolomiti a Rocca Pietore. La struttura dispone di parcheggio privato, giardino, deposito sci e biciclette. Gli animali domestici sono benvenuti. Perfetta per vacanze estive e invernali in montagna.',
    
    // Location
    'location.title': 'La Nostra Posizione',
    'location.description': 'Situati a Rocca Pietore, ai piedi della maestosa Marmolada e circondati dalle vette del Civetta, Pelmo e Tofane. La posizione ideale per esplorare le Dolomiti patrimonio UNESCO.',
    
    // FAQ
    'faq.title': 'Domande Frequenti',
    'faq.checkin.q': 'Quali sono gli orari di check-in e check-out?',
    'faq.checkin.a': 'Check-in: dalle 15:00 alle 19:00. Check-out: entro le 10:00. Orari diversi su richiesta.',
    'faq.pets.q': 'Sono ammessi animali domestici?',
    'faq.pets.a': 'Sì, accettiamo animali domestici previo accordo.',
    'faq.smoking.q': 'È permesso fumare?',
    'faq.smoking.a': 'Non è permesso fumare all\'interno degli appartamenti.',
    'faq.parking.q': 'È disponibile il parcheggio?',
    'faq.parking.a': 'Sì, parcheggio privato gratuito disponibile.',
    'faq.wifi.q': 'È disponibile il WiFi?',
    'faq.wifi.a': 'Sì, WiFi gratuito in tutti gli appartamenti.',
    'faq.kitchen.q': 'La cucina è completamente attrezzata?',
    'faq.kitchen.a': 'Sì, tutte le cucine sono completamente attrezzate.',
    'faq.cleaning.q': 'È inclusa la pulizia finale?',
    'faq.cleaning.a': 'La pulizia finale è inclusa nel prezzo.',
    'faq.deposit.q': 'È richiesta una cauzione?',
    'faq.deposit.a': 'Sì, cauzione di €200 restituita al check-out se non ci sono danni.',
    'faq.cancellation.q': 'Qual è la politica di cancellazione?',
    'faq.cancellation.a': 'Cancellazione gratuita fino a 7 giorni prima dell\'arrivo.',
    'faq.activities.q': 'Quali attività sono disponibili nelle vicinanze?',
    'faq.activities.a': 'Sci, escursionismo, mountain bike, arrampicata e molto altro nelle Dolomiti.',
    
    // Footer
    'footer.address': 'Via Roma 123, 32020 Rocca Pietore (BL), Italia',
    'footer.phone': '+39 123 456 7890',
    'footer.email': 'reception@gianniroccapartments.com',
    'footer.legal.terms': 'Termini e Condizioni',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.credit': 'Made in Italy by Gottardelli Matteo',
    
    // Months
    'month.0': 'Gennaio',
    'month.1': 'Febbraio',
    'month.2': 'Marzo',
    'month.3': 'Aprile',
    'month.4': 'Maggio',
    'month.5': 'Giugno',
    'month.6': 'Luglio',
    'month.7': 'Agosto',
    'month.8': 'Settembre',
    'month.9': 'Ottobre',
    'month.10': 'Novembre',
    'month.11': 'Dicembre',
  },
  en: {
    // Navigation
    'nav.apartments': 'Apartments',
    'nav.availability': 'Availability',
    'nav.about': 'About',
    'nav.location': 'Location',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Gianni Rocca Apartments',
    'hero.subtitle': 'In the heart of the Dolomites',
    'hero.cta': 'Check Availability',
    
    // Apartments
    'apartments.title': 'Our Apartments',
    'apartments.ground.title': 'Ground Floor',
    'apartments.ground.rooms': '3 rooms',
    'apartments.ground.capacity': '4 people',
    'apartments.ground.price': '€1,000/week',
    'apartments.first.title': 'First Floor + Attic',
    'apartments.first.rooms': '3 rooms + attic',
    'apartments.first.capacity': '6 people',
    'apartments.first.price': '€1,300/week',
    'apartments.book': 'Book Now',
    'apartments.airbnb': 'View on Airbnb',
    'apartments.direct': 'Book directly for the best price!',
    
    // Calendar
    'calendar.title': 'Availability',
    'calendar.legend.available': 'Available',
    'calendar.legend.occupied': 'Occupied',
    'calendar.legend.unavailable': 'Unavailable',
    'calendar.filter': 'Filter by apartment',
    'calendar.all': 'All apartments',
    
    // About
    'about.title': 'About Us',
    'about.description': 'Independent house completely renovated in 2024, located in the heart of the Dolomites in Rocca Pietore. The property features private parking, garden, ski and bike storage. Pets are welcome. Perfect for summer and winter mountain holidays.',
    
    // Location
    'location.title': 'Our Location',
    'location.description': 'Located in Rocca Pietore, at the foot of the majestic Marmolada and surrounded by the peaks of Civetta, Pelmo and Tofane. The ideal location to explore the UNESCO World Heritage Dolomites.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.checkin.q': 'What are the check-in and check-out times?',
    'faq.checkin.a': 'Check-in: 3:00 PM - 7:00 PM. Check-out: by 10:00 AM. Different times upon request.',
    'faq.pets.q': 'Are pets allowed?',
    'faq.pets.a': 'Yes, we accept pets upon agreement.',
    'faq.smoking.q': 'Is smoking allowed?',
    'faq.smoking.a': 'Smoking is not allowed inside the apartments.',
    'faq.parking.q': 'Is parking available?',
    'faq.parking.a': 'Yes, free private parking is available.',
    'faq.wifi.q': 'Is WiFi available?',
    'faq.wifi.a': 'Yes, free WiFi in all apartments.',
    'faq.kitchen.q': 'Is the kitchen fully equipped?',
    'faq.kitchen.a': 'Yes, all kitchens are fully equipped.',
    'faq.cleaning.q': 'Is final cleaning included?',
    'faq.cleaning.a': 'Final cleaning is included in the price.',
    'faq.deposit.q': 'Is a deposit required?',
    'faq.deposit.a': 'Yes, €200 deposit returned at check-out if no damage.',
    'faq.cancellation.q': 'What is the cancellation policy?',
    'faq.cancellation.a': 'Free cancellation up to 7 days before arrival.',
    'faq.activities.q': 'What activities are available nearby?',
    'faq.activities.a': 'Skiing, hiking, mountain biking, climbing and much more in the Dolomites.',
    
    // Footer
    'footer.address': 'Via Roma 123, 32020 Rocca Pietore (BL), Italy',
    'footer.phone': '+39 123 456 7890',
    'footer.email': 'reception@gianniroccapartments.com',
    'footer.legal.terms': 'Terms and Conditions',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.credit': 'Made in Italy by Gottardelli Matteo',
    
    // Months
    'month.0': 'January',
    'month.1': 'February',
    'month.2': 'March',
    'month.3': 'April',
    'month.4': 'May',
    'month.5': 'June',
    'month.6': 'July',
    'month.7': 'August',
    'month.8': 'September',
    'month.9': 'October',
    'month.10': 'November',
    'month.11': 'December',
  },
  de: {
    // Navigation
    'nav.apartments': 'Apartments',
    'nav.availability': 'Verfügbarkeit',
    'nav.about': 'Über uns',
    'nav.location': 'Lage',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Gianni Rocca Apartments',
    'hero.subtitle': 'Im Herzen der Dolomiten',
    'hero.cta': 'Verfügbarkeit Prüfen',
    
    // Apartments
    'apartments.title': 'Unsere Apartments',
    'apartments.ground.title': 'Erdgeschoss',
    'apartments.ground.rooms': '3 Zimmer',
    'apartments.ground.capacity': '4 Personen',
    'apartments.ground.price': '€1.000/Woche',
    'apartments.first.title': 'Erste Etage + Dachboden',
    'apartments.first.rooms': '3 Zimmer + Dachboden',
    'apartments.first.capacity': '6 Personen',
    'apartments.first.price': '€1.300/Woche',
    'apartments.book': 'Jetzt Buchen',
    'apartments.airbnb': 'Auf Airbnb Ansehen',
    'apartments.direct': 'Direkt buchen für den besten Preis!',
    
    // Calendar
    'calendar.title': 'Verfügbarkeit',
    'calendar.legend.available': 'Verfügbar',
    'calendar.legend.occupied': 'Belegt',
    'calendar.legend.unavailable': 'Nicht Verfügbar',
    'calendar.filter': 'Nach Apartment Filtern',
    'calendar.all': 'Alle Apartments',
    
    // About
    'about.title': 'Über Uns',
    'about.description': 'Unabhängiges Haus, komplett renoviert in 2024, im Herzen der Dolomiten in Rocca Pietore gelegen. Die Unterkunft verfügt über private Parkplätze, Garten, Ski- und Fahrradkeller. Haustiere sind willkommen. Perfekt für Sommer- und Winterurlaub in den Bergen.',
    
    // Location
    'location.title': 'Unsere Lage',
    'location.description': 'In Rocca Pietore gelegen, am Fuße der majestätischen Marmolada und umgeben von den Gipfeln der Civetta, Pelmo und Tofane. Der ideale Standort, um die UNESCO-Welterbe Dolomiten zu erkunden.',
    
    // FAQ
    'faq.title': 'Häufig Gestellte Fragen',
    'faq.checkin.q': 'Was sind die Check-in und Check-out Zeiten?',
    'faq.checkin.a': 'Check-in: 15:00 - 19:00 Uhr. Check-out: bis 10:00 Uhr. Andere Zeiten auf Anfrage.',
    'faq.pets.q': 'Sind Haustiere erlaubt?',
    'faq.pets.a': 'Ja, wir akzeptieren Haustiere nach Vereinbarung.',
    'faq.smoking.q': 'Ist Rauchen erlaubt?',
    'faq.smoking.a': 'Rauchen ist in den Apartments nicht gestattet.',
    'faq.parking.q': 'Ist Parken verfügbar?',
    'faq.parking.a': 'Ja, kostenlose private Parkplätze sind verfügbar.',
    'faq.wifi.q': 'Ist WiFi verfügbar?',
    'faq.wifi.a': 'Ja, kostenloses WiFi in allen Apartments.',
    'faq.kitchen.q': 'Ist die Küche voll ausgestattet?',
    'faq.kitchen.a': 'Ja, alle Küchen sind voll ausgestattet.',
    'faq.cleaning.q': 'Ist die Endreinigung inbegriffen?',
    'faq.cleaning.a': 'Die Endreinigung ist im Preis inbegriffen.',
    'faq.deposit.q': 'Ist eine Kaution erforderlich?',
    'faq.deposit.a': 'Ja, €200 Kaution wird beim Check-out zurückerstattet, wenn keine Schäden vorliegen.',
    'faq.cancellation.q': 'Was ist die Stornierungsrichtlinie?',
    'faq.cancellation.a': 'Kostenlose Stornierung bis zu 7 Tage vor der Ankunft.',
    'faq.activities.q': 'Welche Aktivitäten sind in der Nähe verfügbar?',
    'faq.activities.a': 'Ski fahren, Wandern, Mountainbiken, Klettern und vieles mehr in den Dolomiten.',
    
    // Footer
    'footer.address': 'Via Roma 123, 32020 Rocca Pietore (BL), Italien',
    'footer.phone': '+39 123 456 7890',
    'footer.email': 'reception@gianniroccapartments.com',
    'footer.legal.terms': 'Geschäftsbedingungen',
    'footer.legal.privacy': 'Datenschutzrichtlinie',
    'footer.credit': 'Made in Italy by Gottardelli Matteo',
    
    // Months
    'month.0': 'Januar',
    'month.1': 'Februar',
    'month.2': 'März',
    'month.3': 'April',
    'month.4': 'Mai',
    'month.5': 'Juni',
    'month.6': 'Juli',
    'month.7': 'August',
    'month.8': 'September',
    'month.9': 'Oktober',
    'month.10': 'November',
    'month.11': 'Dezember',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType =>  {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
