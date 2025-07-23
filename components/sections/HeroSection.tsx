'use client'

import React from 'react';
import { SITE_CONFIG } from '@/lib/constants';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/banner.jpg)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Focus</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {SITE_CONFIG.description}
          </p>
          <Button variant="primary" size="lg">
            Explore Study Spaces
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;