import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const WaterrPricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$20",
      period: "per month",
      altPrice: "$0.12/min",
      description: "Perfect for individuals and small teams getting started",
      features: [
        "Up to 100 AI meetings/month",
        "Basic AI personas",
        "Standard integrations",
        "Email support",
        "Meeting transcripts",
        "Basic analytics"
      ],
      buttonText: "Get Started",
      buttonAction: "https://waterr.ai/create",
      popular: false
    },
    {
      name: "Growth",
      price: "$99",
      period: "per month",
      description: "Ideal for growing teams that need advanced AI capabilities",
      features: [
        "Unlimited AI meetings",
        "Custom AI personas",
        "Advanced integrations",
        "Priority support",
        "Real-time analytics",
        "Custom workflows",
        "API access",
        "Team collaboration tools"
      ],
      buttonText: "Start Free Trial",
      buttonAction: "https://waterr.ai/create",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex AI meeting needs",
      features: [
        "Unlimited everything",
        "White-label solutions",
        "Advanced security & compliance",
        "Dedicated infrastructure",
        "Custom AI training",
        "Dedicated account manager",
        "24/7 premium support",
        "SLA guarantees"
      ],
      buttonText: "Contact Sales",
      buttonAction: "mailto:sales@waterr.ai",
      popular: false
    }
  ];
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-card/20 section-texture-bg">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground">
            Transparent pricing for every stage
          </h2>
          <p className="text-xl text-muted-foreground">
            Scale your AI meeting operations with plans that grow with your business
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-xl border flex flex-col h-full transition-all duration-300 ${
                plan.popular 
                  ? "border-primary/50 bg-card shadow-xl shadow-primary/10 scale-105" 
                  : "border-border bg-card/50 hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1.5 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  <Star className="h-4 w-4 fill-current" />
                  Most Popular
                </div>
              )}
              
              {/* Plan Details */}
              <div className="mb-auto">
                <h3 className="text-2xl font-semibold tracking-tight mb-2 text-foreground">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  {plan.altPrice && (
                    <div className="text-sm text-muted-foreground mt-1">
                      or {plan.altPrice}
                    </div>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {plan.description}
                </p>
                
                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-auto">
                <Button 
                  onClick={() => {
                    if (plan.buttonAction.startsWith('mailto:')) {
                      window.location.href = plan.buttonAction;
                    } else {
                      window.open(plan.buttonAction, '_blank');
                    }
                  }}
                  className={`w-full h-12 font-medium ${
                    plan.popular 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* Full Pricing Chart Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="default"
            size="lg"
            onClick={() => window.open('/pricing', '_blank')}
            className="text-lg px-8 py-6"
          >
            Full Pricing Chart
          </Button>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center text-muted-foreground">
          Have questions?{' '}
          <a 
            href="mailto:sales@waterr.ai" 
            className="text-primary hover:underline font-medium"
          >
            Contact our sales team
          </a>
        </div>
      </div>
    </section>
  );
};

export default WaterrPricing;