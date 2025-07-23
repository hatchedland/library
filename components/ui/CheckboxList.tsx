import React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxListProps {
  items: Array<{ id: string; text: string }>;
  className?: string;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ items, className }) => {
  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => (
        <div key={item.id} className="flex items-start space-x-3">
          <div className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;