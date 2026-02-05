
import React from 'react';
import { Page } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b-2 border-village-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Rouge Unique et Agrandi */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="relative w-14 h-14 mr-4 flex-shrink-0">
               <div className="absolute inset-0 bg-village-red rounded-xl rotate-3 group-hover:rotate-6 transition-transform shadow-md"></div>
               <div className="absolute inset-0 bg-village-red rounded-xl -rotate-3 group-hover:-rotate-12 transition-transform opacity-30"></div>
               <div className="absolute inset-0 flex items-center justify-center text-white font-black font-display text-3xl z-10">I</div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-black font-display leading-none text-village-red tracking-tighter uppercase transition-transform group-hover:scale-105 origin-left">
                Iguersafene
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mt-1">Village du Monde</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-village-green text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:text-village-green hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-village-green hover:bg-gray-50 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`block w-full text-left px-4 py-4 rounded-xl text-base font-bold transition-colors ${
                  currentPage === item.id
                    ? 'bg-village-green text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-village-green'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
