import React, { useState } from 'react';
import { Calendar, BookOpen, BarChart3, GraduationCap, Briefcase, Zap, MapPin, FileText, Building, TrendingUp, Users, Brain, Heart, Stethoscope, Target, DollarSign, HeadphonesIcon, Monitor, Wrench, School } from 'lucide-react';
import newUseCasesData from '../data/Usecases.json';

const UseCasesSection = () => {
  // Extract and organize data from the new JSON structure
  const rawData = newUseCasesData.Sheet1 || [];
  
  // Get unique categories (clean up trailing spaces)
  const categories = [...new Set(rawData.map(item => item.Category?.trim()).filter(Boolean))].sort();
  
  // Set first category as default
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'Sales');

  // Group use cases by category
  const useCases = rawData.reduce((acc, item) => {
    const category = item.Category?.trim();
    if (category && item['Name ']) {
      if (!acc[category]) acc[category] = [];
      acc[category].push({
        title: item['Name ']?.trim(),
        description: item['Description ']?.trim(),
        whyAIBetter: item['Why AI can do it better']?.trim(),
        businessValue: item['Business Value']?.trim(),
        tags: item['Tags ']?.trim(),
        features: item['Feature to use ']?.trim(),
        category: category
      });
    }
    return acc;
  }, {} as Record<string, any[]>);

  // Icon mapping for different categories
  const getIconForCategory = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Sales': Target,
      'Marketing': Target,
      'HR': Users,
      'Support': HeadphonesIcon,
      'Technical': Wrench,
      'Product': Monitor,
      'Growth': TrendingUp,
      'CXOs': Briefcase,
      'Campus': School,
      'Training': GraduationCap,
      'Mundane': Zap
    };
    return iconMap[category] || Brain;
  };

  const currentUseCases = useCases[activeCategory] || [];
  
  // Debug: Log the number of use cases per category
  console.log(`Category: ${activeCategory}, Use Cases: ${currentUseCases.length}`);
  Object.keys(useCases).forEach(cat => {
    console.log(`${cat}: ${useCases[cat]?.length || 0} use cases`);
  });

  const handleCardClick = (useCase: any) => {
    window.open('https://waterr.ai/create', '_blank');
  };

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background section-texture-bg">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-muted/50 text-primary text-sm font-medium">
            Use cases
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground">
            Explore use cases from our official collection.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn how AI agents handle real-world tasks through step-by-step replays.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center gap-2 p-1 bg-muted/30 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-foreground text-background shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUseCases.map((useCase, index) => {
            const IconComponent = getIconForCategory(useCase.category);
            return (
              <div
                key={index}
                onClick={() => handleCardClick(useCase)}
                className="group cursor-pointer bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="space-y-4">
                  {/* Icon and Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      useCase.tags === 'End user' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {useCase.tags}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    {/* Business Value - Simplified */}
                    {useCase.businessValue && (
                      <div className="text-xs text-green-600 font-medium">
                        💼 {useCase.businessValue}
                      </div>
                    )}
                    
                    {/* Features */}
                    {useCase.features && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Features: </span>
                        <span className="bg-muted/50 px-2 py-1 rounded-full">
                          {useCase.features}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <button 
            onClick={() => window.open('https://waterr.ai/create', '_blank')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Explore All Use Cases →
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection; 