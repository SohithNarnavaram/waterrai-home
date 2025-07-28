import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Copy, Check, ArrowLeft, Share, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

const Embed = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [allowFullscreen, setAllowFullscreen] = useState(true);
  const [responsive, setResponsive] = useState(true);
  const [copied, setCopied] = useState(false);

  const embedCode = `<iframe src="https://waterr.ai/embed/488/ai-sales-roleplay-challenge" width="${width}px" height="${height}px" frameborder="0"${allowFullscreen ? ' allowfullscreen' : ''} allow="camera; microphone; autoplay; display-capture; fullscreen"${responsive ? ' style="max-width: 100%;"' : ''}></iframe>`;

  const directLink = "https://waterr.ai/embed/488/ai-sales-roleplay-challenge";

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      description: `${type} copied to clipboard!`,
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToEmbed = () => {
    document.getElementById('embed-config')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header Area */}
        <div className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollToEmbed}
                    className="flex items-center gap-2"
                  >
                    <Share className="w-4 h-4" />
                    Embed
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Jump to embed configuration</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#1a1832' }}>
              Embed Waterr AI into Your Website
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Copy and paste your AI scenario snippet to instantly integrate interactive experiences onto your site
            </p>
            
            {/* Hero Screenshot */}
            <div className="max-w-2xl mx-auto">
              <img 
                src="/lovable-uploads/666a58c9-58d0-4341-85e2-8da2d3e0147f.png" 
                alt="Waterr AI Embed Configuration Interface"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Explanatory Copy Block */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#1a1832' }}>
              Get your Waterr AI scenario on your website using the Embed feature
            </h2>
            
            <div className="space-y-8 text-lg text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1a1832' }}>
                  Without utilizing the embed:
                </h3>
                <ul className="space-y-2 ml-4">
                  <li>• Add your Waterr AI scenario link to your page</li>
                  <li>• The link opens in a new tab or in the same tab, replacing your website</li>
                  <li>• The participant would go through your scenario and then return to your website when finished</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1a1832' }}>
                  When using the Waterr AI embed:
                </h3>
                <p className="mb-4">
                  Visitors can view and interact with your AI scenario directly inside your own webpage, making it feel like an integrated part of your site. You can fully customize the embed styling to match your brand.
                </p>
                <p>
                  Using the inline embed, the entire scenario experience happens within your website, ensuring a seamless end-user journey from start to finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Benefits Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a1832' }}>
                Embedding should be simple and adding a scenario to your website should be effortless
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  With Waterr AI, embedding an interactive scenario is as easy as clicking a button. The platform supports multiple formats that you can embed wherever needed.
                </p>
                <p>
                  You can choose to display your scenario inline, as a pop-up, or behind a button. Customize the look of your embed without touching any code.
                </p>
                <p>
                  Once ready, Waterr AI generates a clean HTML snippet you can paste directly into your website.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold" style={{ color: '#1a1832' }}>
                    Simply matched styles
                  </h3>
                  <p className="text-gray-600">
                    Make your embed blend seamlessly with your brand and layout
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold" style={{ color: '#1a1832' }}>
                    Many embeds, one page
                  </h3>
                  <p className="text-gray-600">
                    Display multiple Waterr AI scenarios together for onboarding, training, or demos
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold" style={{ color: '#1a1832' }}>
                    Copy and paste
                  </h3>
                  <p className="text-gray-600">
                    Just copy the snippet and drop it into your website. It works out of the box
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Embed;