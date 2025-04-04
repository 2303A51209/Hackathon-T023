
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Connect, Collaborate & Grow with <span className="text-rajasthan-orange">TechConnect Rajasthan</span>
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Bridging the gap between alumni and students in Technical Education Department, Government of Rajasthan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-rajasthan-orange hover:bg-rajasthan-orange/90 text-white font-bold">
                Find a Mentor
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rajasthan-blue">
                Join Our Community
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-6 text-center animate-pulse-slow">
                  <h3 className="text-3xl font-bold mb-2">500+</h3>
                  <p className="text-sm">Active Alumni</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6 text-center animate-pulse-slow">
                  <h3 className="text-3xl font-bold mb-2">50+</h3>
                  <p className="text-sm">Technical Institutions</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6 text-center animate-pulse-slow">
                  <h3 className="text-3xl font-bold mb-2">200+</h3>
                  <p className="text-sm">Mentorship Matches</p>
                </div>
                <div className="bg-white/20 rounded-lg p-6 text-center animate-pulse-slow">
                  <h3 className="text-3xl font-bold mb-2">30+</h3>
                  <p className="text-sm">Events Organized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
