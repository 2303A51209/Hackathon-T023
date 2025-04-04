
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-rajasthan-blue text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <span className="text-rajasthan-orange">Tech</span>Connect
          <span className="text-rajasthan-orange ml-1">Rajasthan</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-rajasthan-orange transition-colors">Home</Link>
          <Link to="/alumni" className="hover:text-rajasthan-orange transition-colors">Alumni</Link>
          <Link to="/mentorship" className="hover:text-rajasthan-orange transition-colors">Mentorship</Link>
          <Link to="/forums" className="hover:text-rajasthan-orange transition-colors">Forums</Link>
          <Link to="/events" className="hover:text-rajasthan-orange transition-colors">Events</Link>
        </div>
        
        <div className="hidden md:flex space-x-2">
          <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-rajasthan-blue">
            Login
          </Button>
          <Button className="bg-rajasthan-orange text-white hover:bg-rajasthan-orange/90">
            Sign Up
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-rajasthan-blue text-white py-4 px-6 absolute top-16 left-0 right-0 z-40 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-rajasthan-orange transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/alumni" className="hover:text-rajasthan-orange transition-colors" onClick={toggleMenu}>Alumni</Link>
            <Link to="/mentorship" className="hover:text-rajasthan-orange transition-colors" onClick={toggleMenu}>Mentorship</Link>
            <Link to="/forums" className="hover:text-rajasthan-orange transition-colors" onClick={toggleMenu}>Forums</Link>
            <Link to="/events" className="hover:text-rajasthan-orange transition-colors" onClick={toggleMenu}>Events</Link>
            
            <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-rajasthan-blue w-full">
                Login
              </Button>
              <Button className="bg-rajasthan-orange text-white hover:bg-rajasthan-orange/90 w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
