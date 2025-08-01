
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard, DollarSign, Sun, Moon, ChevronDown, Code, Zap, Settings, Link, Calendar, User, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [activePage, setActivePage] = useState('solutions');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode
  const navigate = useNavigate();
  
  useEffect(() => {
    // Apply the theme to the document when it changes
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setShowResourcesDropdown(false);
    setShowSolutionsDropdown(false);
  };

  const handleSolutionsClick = () => {
    setShowSolutionsDropdown(!showSolutionsDropdown);
    setActivePage('solutions');
  };

  const handleResourcesClick = () => {
    setShowResourcesDropdown(!showResourcesDropdown);
    setActivePage('resources');
  };

  const solutionsDropdownItems = {
    teamSize: [
      { label: 'For Individuals', desc: 'Personal scheduling made simple' },
      { label: 'For Teams', desc: 'Collaborative meeting management' },
      { label: 'For Enterprises', desc: 'Enterprise-level scheduling solutions' }
    ],
    useCase: [
      { label: 'Recruiting', desc: 'Automate hiring meetings' },
      { label: 'Education', desc: 'Scale learning support' },
      { label: 'Sales', desc: 'Streamline prospect meetings' },
      { label: 'Support', desc: 'Efficient customer interactions' }
    ]
  };

  const resourcesDropdownItems = [
    { label: 'Embed', route: '/resources/embed', desc: 'Embed Waterr Al agents into any site with simple code blocks', icon: Code },
    { label: 'Customization', route: '/resources/customization', desc: 'Configure workflows, agent tone, and advanced automation', icon: Settings },
    { label: 'Schedule', route: '/resources/schedule', desc: 'Interface to schedule recurring or instant Al agent sessions', icon: Calendar },
    { label: 'API', route: '/resources/api', desc: 'Coming soon - Control agents programmatically', icon: Zap },
    { label: 'Link', route: '/resources/link', desc: 'Shareable/trackable links to trigger meetings or agents', icon: Link },
    { label: 'Personal', route: '/resources/personal', desc: 'Personal dashboard for saved sessions, preferences, and history', icon: User },
    { label: 'Blog', route: '/blog', desc: 'Content hub for tutorials, insights, and Al news', icon: FileText },
  ];

  const handleResourceItemClick = (route: string) => {
    navigate(route);
    setShowResourcesDropdown(false);
  };

  const handleResourceDropdownClick = (id: string) => {
    setShowResourcesDropdown(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="sticky top-0 z-50 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
        <div className="p-3">
          <Logo />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
              <div className="relative">
                <ToggleGroupItem 
                  value="solutions"
                  className={cn(
                    "px-4 py-2 rounded-full transition-colors relative flex items-center gap-1",
                    activePage === 'solutions' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                  onClick={handleSolutionsClick}
                >
                  <CircleDot size={16} className="inline-block mr-1.5" /> Solutions
                  <ChevronDown size={14} className={`transition-transform ${showSolutionsDropdown ? 'rotate-180' : ''}`} />
                </ToggleGroupItem>
                
                {/* Solutions Dropdown */}
                {showSolutionsDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 bg-card border border-border rounded-xl shadow-2xl p-6 z-50">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">By Team Size</h4>
                        <div className="space-y-2">
                          {solutionsDropdownItems.teamSize.map((item, index) => (
                            <button
                              key={index}
                              onClick={handleNavClick('solutions')}
                              className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors group"
                            >
                              <div className="font-medium text-foreground group-hover:text-primary">
                                {item.label}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {item.desc}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">By Use Case</h4>
                        <div className="space-y-2">
                          {solutionsDropdownItems.useCase.map((item, index) => (
                            <button
                              key={index}
                              onClick={handleNavClick('solutions')}
                              className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors group"
                            >
                              <div className="font-medium text-foreground group-hover:text-primary">
                                {item.label}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {item.desc}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <ToggleGroupItem 
                  value="resources" 
                  className={cn(
                    "px-4 py-2 rounded-full transition-colors relative flex items-center gap-1",
                    activePage === 'resources' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                  onClick={handleResourcesClick}
                >
                  <LayoutDashboard size={16} className="inline-block mr-1.5" /> Resources
                  <ChevronDown size={14} className={`transition-transform ${showResourcesDropdown ? 'rotate-180' : ''}`} />
                </ToggleGroupItem>
                {showResourcesDropdown && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl p-2"
                    style={{ zIndex: 99999, pointerEvents: 'auto' }}
                  >
                    <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
                      {resourcesDropdownItems.map((item, idx) => (
                        <li key={idx}>
                          <button
                            onClick={() => handleResourceDropdownClick(item.route.substring(1))}
                            className="flex w-full items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            style={{ textAlign: 'left' }}
                          >
                            <item.icon size={22} className="text-neutral-400 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-neutral-900 dark:text-white">{item.label}</div>
                              <div className="text-sm text-neutral-500 dark:text-neutral-400">{item.desc}</div>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <ToggleGroupItem 
                value="pricing" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'pricing' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('pricing')}
              >
                <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <a 
                href="#solutions" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'solutions' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('solutions')}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Solutions
              </a>
              <div className="space-y-2">
                <button 
                  className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-between ${
                    activePage === 'resources' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  onClick={() => window.open('/resources', '_blank')}
                >
                  <span className="flex items-center">
                    <LayoutDashboard size={16} className="inline-block mr-1.5" /> Resources
                  </span>
                </button>
              </div>
              <a 
                href="#pricing" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'pricing' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('pricing')}
              >
                <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
              </a>
              
              {/* Add theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Switch 
                    checked={!isDarkMode} 
                    onCheckedChange={toggleTheme} 
                    className="data-[state=checked]:bg-primary"
                  />
                  <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle for desktop */}
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch 
              checked={!isDarkMode} 
              onCheckedChange={toggleTheme} 
              className="data-[state=checked]:bg-primary"
            />
            <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <div className="rounded-2xl">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted">Log in</Button>
          </div>
        </div>
      </header>
      
      {/* Backdrop for closing dropdowns */}
      {(showResourcesDropdown || showSolutionsDropdown) && (
        <div 
          className="fixed inset-0"
          style={{ zIndex: 10 }}
          onClick={() => {
            setShowResourcesDropdown(false);
            setShowSolutionsDropdown(false);
          }}
        />
      )}
    </div>
  );
};

export default Header;
