import React from 'react';
import { Star } from 'lucide-react';

const WaterrTestimonials = () => {
  const testimonials = [
    {
      quote: "Waterr AI completely transformed our sales process. Our team can focus on closing deals while AI handles all the initial prospecting and follow-ups automatically.",
      author: "Sarah Chen",
      position: "Head of Sales at TechFlow",
      avatar: "bg-primary/20"
    },
    {
      quote: "The AI personas are incredibly natural. Our clients don't even realize they're talking to AI until we tell them. It's been a game-changer for our customer support.",
      author: "Marcus Rodriguez",
      position: "Customer Success Director at CloudSync",
      avatar: "bg-accent/20"
    },
    {
      quote: "We're processing 3x more customer inquiries without hiring additional staff. Waterr AI handles the routine questions perfectly and escalates complex issues seamlessly.",
      author: "Emma Thompson",
      position: "Operations Manager at FinanceForward",
      avatar: "bg-secondary/40"
    }
  ];
  
  return (
    <section id="testimonials" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground">
            Trusted by teams worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            See how Waterr AI transforms business operations across industries
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/70 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-lg mb-8 text-foreground/90 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${testimonial.avatar} flex items-center justify-center`}>
                  <div className="h-6 w-6 rounded-full bg-foreground/20"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaterrTestimonials;