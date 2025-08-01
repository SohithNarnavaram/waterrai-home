import React, { useState } from 'react';
import { Users, Building, User, Code, MessageSquare, Heart, GraduationCap, Stethoscope } from 'lucide-react';

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState('Use Cases');

  const useCases = [
    {
      title: 'Sales Automation',
      description: 'AI reps that pitch, follow up, and close faster',
      icon: MessageSquare,
      features: ['Lead qualification', 'Follow-up automation', 'Deal closing']
    },
    {
      title: 'Support & Feedback',
      description: 'Real-time conversational ticketing + NPS',
      icon: Heart,
      features: ['Instant support', 'Customer feedback', 'Issue resolution']
    },
    {
      title: 'Onboarding Agent',
      description: 'Deliver policies, explain docs, gather inputs',
      icon: Users,
      features: ['Policy delivery', 'Document explanation', 'Data collection']
    },
    {
      title: 'HR & Compliance',
      description: 'Conduct exit interviews, reminders, Q&A',
      icon: Building,
      features: ['Exit interviews', 'Compliance reminders', 'HR Q&A']
    },
    {
      title: 'Education',
      description: 'Virtual tutoring and student engagement',
      icon: GraduationCap,
      features: ['Virtual tutoring', 'Student engagement', 'Learning assessment']
    },
    {
      title: 'Healthcare',
      description: 'Patient communication and appointment management',
      icon: Stethoscope,
      features: ['Patient communication', 'Appointment scheduling', 'Health monitoring']
    }
  ];

  const teamSizes = [
    {
      title: 'Individuals',
      description: 'Perfect for freelancers and consultants',
      icon: User,
      features: ['Personal assistant', 'Client management', 'Task automation']
    },
    {
      title: 'Small Teams',
      description: '2-10 people scaling their operations',
      icon: Users,
      features: ['Team coordination', 'Workflow automation', 'Client communication']
    },
    {
      title: 'Enterprises',
      description: 'Large organizations with complex needs',
      icon: Building,
      features: ['Enterprise integration', 'Custom workflows', 'Advanced analytics']
    },
    {
      title: 'Developers',
      description: 'API access and custom integrations',
      icon: Code,
      features: ['API access', 'Custom integrations', 'Developer tools']
    }
  ];

  const currentData = activeTab === 'Use Cases' ? useCases : teamSizes;

  const handleCardClick = () => {
    window.open('https://waterr.ai/create', '_blank');
  };

  return (
    <section id="solutions" className="w-full py-20 px-6 md:px-12 bg-card/30 section-texture-bg">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground">
            Solutions for every workflow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From sales automation to customer support, Waterr AI adapts to your specific needs
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center">
          <div className="nav-pill flex items-center p-1">
            {['Use Cases', 'Team Size'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`nav-pill-item ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                onClick={handleCardClick}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-2 text-sm text-primary font-medium group-hover:underline">
                    Learn more →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;