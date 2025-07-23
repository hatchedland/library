import React from 'react';
import { BookOpen, Wifi, Zap } from 'lucide-react';
import Card from '@/components/ui/Card';
import { AMENITIES } from '@/data/amenities';
import { SectionTitle } from '../ui/Titles';
import SectionLayout from '../layout/SectionLayout';

const iconMap = {
  BookOpen,
  Wifi,
  Zap,
};

const AmenitiesSection: React.FC = () => {
  return (
    <SectionLayout>
<SectionTitle title="Amenities" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {AMENITIES.map((amenity) => {
          const IconComponent = iconMap[amenity.icon as keyof typeof iconMap];
          return (
            <Card key={amenity.id}>
              <IconComponent className="h-8 w-8 text-gray-700 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {amenity.title}
              </h3>
            </Card>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default AmenitiesSection;