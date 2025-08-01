import { Code, Settings, Calendar, Zap, Link as LinkIcon, User, FileText } from 'lucide-react';

const resources = [
  { id: 'resource-embed', label: 'Embed', desc: 'Embed Waterr Al agents into any site with simple code blocks', icon: Code, route: '/resources/embed' },
  { id: 'resource-customization', label: 'Customization', desc: 'Configure workflows, agent tone, and advanced automation', icon: Settings, route: '/resources/customization' },
  { id: 'resource-schedule', label: 'Schedule', desc: 'Interface to schedule recurring or instant Al agent sessions', icon: Calendar, route: '/resources/schedule' },
  { id: 'resource-api', label: 'API', desc: 'Coming soon - Control agents programmatically', icon: Zap, route: '/resources/api' },
  { id: 'resource-link', label: 'Link', desc: 'Shareable/trackable links to trigger meetings or agents', icon: LinkIcon, route: '/resources/link' },
  { id: 'resource-personal', label: 'Personal', desc: 'Personal dashboard for saved sessions, preferences, and history', icon: User, route: '/resources/personal' },
  { id: 'resource-blog', label: 'Blog', desc: 'Content hub for tutorials, insights, and Al news', icon: FileText, route: '/blog' },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="w-full py-20 px-6 md:px-12 bg-background section-texture-bg">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground">
            Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to integrate and customize Waterr AI for your workflows
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="group cursor-pointer bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => window.open(item.route, '_blank')}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:shadow-lg">
                  <item.icon
                    size={28}
                    className="text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}