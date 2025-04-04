
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AlumniSpotlight from '@/components/AlumniSpotlight';
import MentorshipCTA from '@/components/MentorshipCTA';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <AlumniSpotlight />
        <MentorshipCTA />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
