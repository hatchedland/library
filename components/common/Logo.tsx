import React from 'react';
import { BookOpen } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
 
    </div>
  );
};

export default Logo;