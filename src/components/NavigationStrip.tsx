import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NavigationStrip = () => {
  const [activeTab, setActiveTab] = useState('Features');
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

  const tabs = ['Features', 'Solutions', 'Pricing'];

  const solutionsDropdown = {
    "Use Cases": [
      { title: "Sales Automation", desc: "AI reps that pitch, follow up, and close faster" },
      { title: "Support & Feedback", desc: "Real-time conversational ticketing + NPS" },
      { title: "Onboarding Agent", desc: "Deliver policies, explain docs, gather inputs" },
      { title: "HR & Compliance", desc: "Conduct exit interviews, reminders, Q&A" },
      { title: "Education", desc: "Virtual tutoring and student engagement" },
      { title: "Healthcare", desc: "Patient communication and appointment management" },
      { title: "Marketing", desc: "Lead qualification and customer research" },
      { title: "Telehealth", desc: "Remote patient consultations and follow-ups" }
    ],
    "Team Size": [
      { title: "Individuals", desc: "Perfect for freelancers and consultants" },
      { title: "Small Teams", desc: "2-10 people scaling their operations" },
      { title: "Enterprises", desc: "Large organizations with complex needs" },
      { title: "Developers", desc: "API access and custom integrations" }
    ]
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab(section);
    setShowSolutionsDropdown(false);
  };

  const handleSolutionsClick = () => {
    if (showSolutionsDropdown) {
      scrollToSection('solutions');
    } else {
      setShowSolutionsDropdown(true);
      setActiveTab('Solutions');
    }
  };

  const handleDropdownItemClick = () => {
    scrollToSection('solutions');
    setShowSolutionsDropdown(false);
  };

  return (
    <section className="w-full py-8 px-6 md:px-12 bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="nav-pill flex items-center p-1">
          {tabs.map((tab) => (
            <div key={tab} className="relative">
              {tab === 'Solutions' ? (
                <button
                  onClick={handleSolutionsClick}
                  className={`nav-pill-item flex items-center gap-1 ${
                    activeTab === tab ? 'active' : ''
                  }`}
                >
                  {tab}
                  <ChevronDown className={`h-4 w-4 transition-transform ${showSolutionsDropdown ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <button
                  onClick={() => scrollToSection(tab)}
                  className={`nav-pill-item ${activeTab === tab ? 'active' : ''}`}
                >
                  {tab}
                </button>
              )}
              
              {/* Solutions Dropdown */}
              {tab === 'Solutions' && showSolutionsDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-card border border-border rounded-xl shadow-2xl p-6 z-50">
                  <div className="grid grid-cols-2 gap-8">
                    {Object.entries(solutionsDropdown).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                          {category}
                        </h3>
                        <div className="space-y-2">
                          {items.map((item, index) => (
                            <button
                              key={index}
                              onClick={handleDropdownItemClick}
                              className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors group"
                            >
                              <div className="font-medium text-foreground group-hover:text-primary">
                                {item.title}
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">
                                {item.desc}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Backdrop for closing dropdown */}
      {showSolutionsDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowSolutionsDropdown(false)}
        />
      )}
    </section>
  );
};

export default NavigationStrip;