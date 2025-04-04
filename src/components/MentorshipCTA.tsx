
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MentorshipCTA = () => {
  return (
    <section className="py-16 bg-rajasthan-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Accelerate Your Career With Expert Mentorship
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Connect with industry professionals who can guide you through career challenges,
              share valuable insights, and help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-rajasthan-orange hover:bg-rajasthan-orange/90 text-white">
                Find a Mentor
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rajasthan-blue">
                Become a Mentor
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">What Our Mentorship Offers:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-rajasthan-orange mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>One-on-one guidance from industry professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-rajasthan-orange mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Career path advice and planning assistance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-rajasthan-orange mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Resume reviews and interview preparation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-rajasthan-orange mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Industry insights and networking opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-rajasthan-orange mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Skill development and technical growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipCTA;
