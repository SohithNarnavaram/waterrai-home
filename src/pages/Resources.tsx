import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Settings, Calendar, Zap, Link as LinkIcon, User, FileText } from 'lucide-react';

const resources = [
  { label: 'Embed', route: '/resources/embed', desc: 'Embed Waterr Al agents into any site with simple code blocks', icon: Code },
  { label: 'Customization', route: '/resources/customization', desc: 'Configure workflows, agent tone, and advanced automation', icon: Settings },
  { label: 'Schedule', route: '/resources/schedule', desc: 'Interface to schedule recurring or instant Al agent sessions', icon: Calendar },
  { label: 'API', route: '/resources/api', desc: 'Coming soon - Control agents programmatically', icon: Zap },
  { label: 'Link', route: '/resources/link', desc: 'Shareable/trackable links to trigger meetings or agents', icon: LinkIcon },
  { label: 'Personal', route: '/resources/personal', desc: 'Personal dashboard for saved sessions, preferences, and history', icon: User },
  { label: 'Blog', route: '/blog', desc: 'Content hub for tutorials, insights, and Al news', icon: FileText },
];

const Resources = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {resources.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.route)}
            className="w-full text-left p-6 rounded-xl border border-border bg-card shadow hover:bg-muted transition-colors group flex items-start gap-4"
          >
            <item.icon size={32} className="text-muted-foreground group-hover:text-primary mt-1 flex-shrink-0" />
            <div>
              <div className="font-semibold text-lg text-foreground group-hover:text-primary">{item.label}</div>
              <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Resources;