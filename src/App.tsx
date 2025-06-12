import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AcademicPrograms from './components/AcademicPrograms';
import PostgraduateStudies from './components/PostgraduateStudies';
import CampusLife from './components/CampusLife';
import Testimonials from './components/Testimonials';
import AdmissionsCTA from './components/AdmissionsCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AcademicPrograms />
      <PostgraduateStudies />
      <CampusLife />
      <Testimonials />
      <AdmissionsCTA />
      <Footer />
    </div>
  );
}

export default App;