import React from 'react';
import { Search } from 'lucide-react';
import Navigation from './Navigation';
import MobileMenu from '@/components/common/MobileMenu';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
            <img src="/logo.png" alt="Logo" className='w-14' />
          <Navigation />
          
          <div className="flex items-center space-x-4">
            <Button>Reserve a Spot</Button>
            <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900" />
          </div>
          
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;