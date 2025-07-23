import React from 'react';
import { NAVIGATION_ITEMS } from '@/lib/constants';

interface NavigationProps {
  className?: string;
  mobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ className, mobile = false }) => {
  const baseStyles = mobile 
    ? 'flex flex-col space-y-2' 
    : 'hidden md:flex space-x-8';
    
  return (
    <nav className={`${baseStyles} ${className}`}>
      {NAVIGATION_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;