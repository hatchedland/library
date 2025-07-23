import React from 'react';
import { cn } from '@/lib/utils';
import { CardProps } from '@/lib/types';

const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = 'md',
}) => {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <div className={cn('bg-gray-50 rounded-lg', paddingStyles[padding], className)}>
      {children}
    </div>
  );
};

export default Card;