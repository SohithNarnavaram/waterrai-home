import React from 'react';
import { Play } from 'lucide-react';

const DemoSection = () => {
  return (
    <section id="demo" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            See Waterr AI in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how our AI agents seamlessly join, participate, and deliver results in real meetings
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative rounded-xl overflow-hidden border border-border bg-card/50 aspect-video">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <button className="group flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110">
              <Play className="h-8 w-8 ml-1 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          {/* Video Preview Elements */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm text-foreground">
            Live Demo
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/80 backdrop-blur-sm rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">Waterr AI Agent</div>
                <div className="text-xs text-muted-foreground">Currently speaking...</div>
              </div>
              <div className="text-xs text-muted-foreground">2:34 / 4:12</div>
            </div>
          </div>
        </div>

        {/* Features Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {[
            {
              title: "Natural Conversations",
              desc: "AI that speaks and responds like a human team member"
            },
            {
              title: "Real-time Processing", 
              desc: "Instant analysis and intelligent responses during meetings"
            },
            {
              title: "Actionable Outcomes",
              desc: "Automated follow-ups and task creation from meeting content"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-4">
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;