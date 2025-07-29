import React, { useState } from 'react';
import { Calendar, BookOpen, BarChart3, GraduationCap, Briefcase, Zap, MapPin, FileText, Building, TrendingUp, Users, Brain } from 'lucide-react';

const UseCasesSection = () => {
  const [activeCategory, setActiveCategory] = useState('Featured');

  const categories = ['Featured', 'Research', 'Life', 'Data Analysis', 'Education', 'Productivity', 'WTF'];

  const useCases = {
    Featured: [
      {
        title: 'Trip to Japan in april',
        description: 'AI agent integrates comprehensive travel information to create personalized itineraries and produces a custom travel plan book tailored specifically for you.',
        icon: MapPin,
        category: 'Travel Planning'
      },
      {
        title: 'Interactive course on the momentum theorem',
        description: 'AI agent develops engaging video presentations for middle school educators, clearly explaining the momentum theorem through accessible and educational content.',
        icon: GraduationCap,
        category: 'Education'
      },
      {
        title: 'Comparative analysis of insurance policies',
        description: 'Looking to compare insurance options? AI agent generates clear, structured comparison tables highlighting key policy differences with actionable insights.',
        icon: BarChart3,
        category: 'Analysis'
      },
      {
        title: 'B2B supplier sourcing',
        description: 'AI agent conducts comprehensive research across extensive networks to identify the most suitable suppliers for your specific requirements.',
        icon: Building,
        category: 'Business'
      }
    ],
    Research: [
      {
        title: 'Research on AI products for the clothing industry',
        description: 'AI agent conducted in-depth analysis of artificial intelligence solutions specifically designed for fashion and apparel businesses.',
        icon: Brain,
        category: 'Industry Research'
      },
      {
        title: 'List of YC companies',
        description: 'AI agent expertly navigated the YC W25 database to identify all current cohort companies with detailed analysis and categorization.',
        icon: TrendingUp,
        category: 'Market Research'
      },
      {
        title: 'Online store operation analysis',
        description: 'Upload your Amazon store data and get comprehensive analysis of performance metrics, optimization opportunities, and growth strategies.',
        icon: BarChart3,
        category: 'Business Analysis'
      },
      {
        title: 'Campaign explanation maps',
        description: 'Custom-designed visualization tools that break down complex marketing campaigns into easy-to-understand strategic roadmaps.',
        icon: FileText,
        category: 'Marketing'
      }
    ],
    Life: [
      {
        title: 'Personal finance optimization',
        description: 'AI agent analyzes your spending patterns and creates personalized budgets and investment strategies for your financial goals.',
        icon: TrendingUp,
        category: 'Finance'
      },
      {
        title: 'Health and wellness planning',
        description: 'Comprehensive wellness plans including workout routines, meal planning, and lifestyle recommendations based on your preferences.',
        icon: Users,
        category: 'Health'
      },
      {
        title: 'Home organization system',
        description: 'AI-powered decluttering and organization strategies tailored to your living space and lifestyle needs.',
        icon: Building,
        category: 'Lifestyle'
      },
      {
        title: 'Event planning assistant',
        description: 'From birthday parties to corporate events, get detailed planning assistance with timelines, vendor recommendations, and checklists.',
        icon: Calendar,
        category: 'Events'
      }
    ],
    'Data Analysis': [
      {
        title: 'Sales performance dashboard',
        description: 'Comprehensive analysis of sales data with predictive insights and performance optimization recommendations.',
        icon: BarChart3,
        category: 'Sales Analytics'
      },
      {
        title: 'Customer behavior patterns',
        description: 'Deep dive analysis of customer interactions, purchase patterns, and engagement metrics to drive business decisions.',
        icon: Users,
        category: 'Customer Analytics'
      },
      {
        title: 'Market trend analysis',
        description: 'AI-powered analysis of market trends, competitor positioning, and opportunity identification for strategic planning.',
        icon: TrendingUp,
        category: 'Market Intelligence'
      },
      {
        title: 'Financial forecasting',
        description: 'Advanced financial modeling and forecasting based on historical data and market conditions.',
        icon: FileText,
        category: 'Financial Analysis'
      }
    ],
    Education: [
      {
        title: 'Personalized study plans',
        description: 'AI-generated study schedules and learning paths tailored to individual learning styles and academic goals.',
        icon: BookOpen,
        category: 'Study Planning'
      },
      {
        title: 'Interactive lesson creation',
        description: 'Transform complex topics into engaging, interactive lessons with multimedia content and assessments.',
        icon: GraduationCap,
        category: 'Content Creation'
      },
      {
        title: 'Academic research assistant',
        description: 'Comprehensive research support including source finding, citation management, and literature review assistance.',
        icon: FileText,
        category: 'Research Support'
      },
      {
        title: 'Language learning companion',
        description: 'Personalized language learning experiences with conversational practice and cultural context.',
        icon: Brain,
        category: 'Language Learning'
      }
    ],
    Productivity: [
      {
        title: 'Automated workflow optimization',
        description: 'AI agent analyzes your daily tasks and creates optimized workflows to maximize efficiency and reduce manual work.',
        icon: Zap,
        category: 'Workflow'
      },
      {
        title: 'Meeting summarization',
        description: 'Automatic generation of meeting summaries, action items, and follow-up tasks from recorded conversations.',
        icon: FileText,
        category: 'Meetings'
      },
      {
        title: 'Email management system',
        description: 'Smart email categorization, automated responses, and priority management to streamline communication.',
        icon: Briefcase,
        category: 'Communication'
      },
      {
        title: 'Project timeline creation',
        description: 'AI-generated project timelines with milestone tracking, resource allocation, and risk assessment.',
        icon: Calendar,
        category: 'Project Management'
      }
    ],
    WTF: [
      {
        title: 'AI-generated poetry for pets',
        description: 'Create personalized poems about your pets based on their personality, quirks, and your relationship with them.',
        icon: Brain,
        category: 'Creative'
      },
      {
        title: 'Dream interpretation analysis',
        description: 'Upload your dream journal and get AI-powered interpretations with psychological insights and pattern recognition.',
        icon: Zap,
        category: 'Mystical'
      },
      {
        title: 'Conspiracy theory fact-checker',
        description: 'AI agent analyzes popular conspiracy theories and provides evidence-based fact-checking with source verification.',
        icon: FileText,
        category: 'Fact-checking'
      },
      {
        title: 'Alien invasion preparedness',
        description: 'Comprehensive survival guide for hypothetical alien invasion scenarios with strategic planning and resource management.',
        icon: MapPin,
        category: 'Survival'
      }
    ]
  };

  const currentUseCases = useCases[activeCategory as keyof typeof useCases] || useCases.Featured;

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentUseCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                onClick={() => handleCardClick(useCase)}
                className="group cursor-pointer bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    <div className="text-xs text-muted-foreground font-medium">
                      {useCase.category}
                    </div>
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