import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import QuietHoursSection from '@/components/sections/QuietHoursSection';
import GuidelinesSection from '@/components/sections/GuidelinesSection';
import PageLayout from '@/components/layout/PageLayout';
import LocationSection from '@/components/sections/LocationSection';

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
        <AmenitiesSection />
        <TestimonialsSection />
        <QuietHoursSection />
        <GuidelinesSection />
        <LocationSection />
    </PageLayout>
  );
}