
import React from 'react';
import Header from '@/components/Header';
import WaterrHeroSection from '@/components/WaterrHeroSection';
import NavigationStrip from '@/components/NavigationStrip';
import SolutionsSection from '@/components/SolutionsSection';
import UseCasesSection from '@/components/UseCasesSection';
import DemoSection from '@/components/DemoSection';
import WaterrTestimonials from '@/components/WaterrTestimonials';
import WaterrPricing from '@/components/WaterrPricing';
import WaterrFooter from '@/components/WaterrFooter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <WaterrHeroSection />
        <NavigationStrip />
        <SolutionsSection />
        <UseCasesSection />
        <DemoSection />
        <WaterrTestimonials />
        <WaterrPricing />
      </main>
      <WaterrFooter />
    </div>
  );
};

export default Index;
