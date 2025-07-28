import React from 'react';
import { Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';

const WaterrFooter = () => {
  const footerSections = {
    product: {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Roadmap", href: "/roadmap" },
      ]
    },
    company: {
      title: "Company", 
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Docs", href: "/docs" },
        { name: "Help Center", href: "/help" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "API", href: "/api" },
        { name: "Community", href: "/community" },
      ]
    }
  };

  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/company/waterrai/?viewAsMember=true", 
      icon: Linkedin 
    },
    { 
      name: "Twitter", 
      href: "https://x.com/waterr_ai", 
      icon: Twitter 
    },
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/waterr.ai/?utm_source=ig_web_button_share_sheet", 
      icon: Instagram 
    },
    { 
      name: "Product Hunt", 
      href: "https://producthunt.com/products/waterr-ai", 
      icon: ExternalLink 
    },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('http')) {
      window.open(href, '_blank');
    } else {
      // Internal route - could be handled by router in a real app
      console.log('Navigate to:', href);
    }
  };

  return (
    <footer className="w-full py-16 px-6 md:px-12 bg-background border-t border-border section-texture-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <div className="h-4 w-4 rounded-sm bg-primary-foreground"></div>
              </div>
              <span className="text-xl font-semibold text-foreground">Waterr AI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              AI that shows up for you — even when you don't.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={social.name}
                    onClick={() => handleLinkClick(social.href)}
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Footer Sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © 2024 Waterr AI. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <button 
              onClick={() => handleLinkClick('/privacy')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLinkClick('/terms')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WaterrFooter;