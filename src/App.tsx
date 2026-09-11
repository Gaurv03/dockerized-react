import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedBuilds } from './components/FeaturedBuilds';
import { BuildEstimator } from './components/BuildEstimator';
import { GarageServices } from './components/GarageServices';
import { WorkshopStory } from './components/WorkshopStory';
import { TrailJournal } from './components/TrailJournal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialItemForBooking, setInitialItemForBooking] = useState<string>('');

  const openBookingModalWithItem = (item?: string) => {
    setInitialItemForBooking(item || 'The Rainier Enduro Works');
    setBookingModalOpen(true);
  };

  const handleReserveConfig = (configSummary: string) => {
    openBookingModalWithItem(`Custom Configurator Spec: ${configSummary}`);
  };

  const handleSelectBuildForBooking = (buildName: string) => {
    openBookingModalWithItem(`Custom Rig Build: ${buildName}`);
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    openBookingModalWithItem(`Workshop Service: ${serviceTitle}`);
  };

  return (
    <div className="app-container">
      {/* Top Navigation */}
      <Navbar onOpenBooking={() => openBookingModalWithItem()} />

      <main>
        {/* Atmospheric PNW Hero */}
        <Hero onOpenBooking={() => openBookingModalWithItem()} />

        {/* Featured Custom Garage Builds */}
        <FeaturedBuilds onSelectBuildForBooking={handleSelectBuildForBooking} />

        {/* Interactive Custom Bike Estimator / Configurator */}
        <BuildEstimator onReserveConfig={handleReserveConfig} />

        {/* Garage Capabilities & Dyno Tuning Services */}
        <GarageServices onSelectService={handleSelectServiceForBooking} />

        {/* Bellingham Workshop Heritage & Craftsmanship Creed */}
        <WorkshopStory onOpenBooking={() => openBookingModalWithItem()} />

        {/* Pacific Northwest Trail Journal & Field Testing */}
        <TrailJournal />

        {/* Workshop Location, Trail Conditions & Direct Dispatch */}
        <ContactSection />
      </main>

      {/* Mountain Divider & Footer */}
      <Footer />

      {/* Interactive Booking / Consultation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialBuildOrService={initialItemForBooking}
      />
    </div>
  );
};

export default App;
