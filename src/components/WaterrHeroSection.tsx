import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Rocket } from 'lucide-react';

const WaterrHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background section-texture-bg">
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[150px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-5xl text-center space-y-8 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Launch Tag */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-muted/50 text-primary border border-border">
            <Rocket className="h-4 w-4" />
            Launching AI Personas
          </span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-balance text-foreground leading-[0.9]">
          Real-Time AI Meeting Agents for{' '}
          <span className="text-primary">Humans Who Don't Have Time</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
          Waterr AI joins, speaks, listens, and delivers. It runs your meetings so you can run your business.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 items-center">
          <Button 
            onClick={() => window.open('/create', '_blank')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-10 transition-all duration-200 font-medium"
          >
            Try Waterr AI
          </Button>
          <Button 
            variant="outline" 
            onClick={scrollToDemo}
            className="border-border text-foreground hover:bg-muted text-lg h-14 px-10 transition-all duration-200 font-medium group"
          >
            <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>
        
        {/* Bottom text */}
        <div className="pt-4 text-muted-foreground">
          No credit card required • Free to start
        </div>
      </div>
    </section>
  );
};

export default WaterrHeroSection;