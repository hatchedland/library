'use client'

import React from 'react';
import Navigation from '@/components/layout/Navigation';
import { useToggle } from '@/hooks/useToggle';

const MobileMenu: React.FC = () => {
  const { value: isOpen, toggle } = useToggle();
  
  return (
    <div className="md:hidden">
      <button 
        onClick={toggle}
        className="text-gray-700 hover:text-gray-900"
        aria-label="Toggle mobile menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className="w-4 h-0.5 bg-current mb-1" />
          <span className="w-4 h-0.5 bg-current mb-1" />
          <span className="w-4 h-0.5 bg-current" />
        </div>
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4">
          <Navigation mobile />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
