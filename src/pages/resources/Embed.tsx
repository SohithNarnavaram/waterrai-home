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
              Add Waterr AI to Your Website
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Easily integrate your real-time meeting agent into any site or platform using one embed snippet.
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

        {/* Intro Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#1a1832' }}>
              Effortlessly Embed Your Waterr AI Scenario on Your Website
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Waterr AI offers a seamless, customizable embedding experience, ensuring visitors stay engaged on your site — just like top-tier tools such as Cal.com.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800">Without Embed</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-red-700">❌ Redirects users to new tab</p>
                  <p className="text-red-700">❌ Interrupts site experience</p>
                  <p className="text-red-700">❌ Minimal control over UX</p>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">With Waterr AI Embed</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-green-700">✅ Embedded directly on your website</p>
                  <p className="text-green-700">✅ Fully integrated, no redirection</p>
                  <p className="text-green-700">✅ Full styling + responsive customization</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Embed Config Section */}
        <section className="py-16 px-4" id="embed-config">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl" style={{ color: '#1a1832' }}>
                  Embed Scenario
                </CardTitle>
                <p className="text-gray-600">
                  Configure settings and copy the embed code for your website. The embed URL works without authentication.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="width">Width (px)</Label>
                    <Input
                      id="width"
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(parseInt(e.target.value) || 800)}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (px)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(parseInt(e.target.value) || 600)}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="fullscreen"
                      checked={allowFullscreen}
                      onCheckedChange={(checked) => setAllowFullscreen(checked === true)}
                    />
                    <Label htmlFor="fullscreen">Allow fullscreen</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="responsive"
                      checked={responsive}
                      onCheckedChange={(checked) => setResponsive(checked === true)}
                    />
                    <Label htmlFor="responsive">Responsive design</Label>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="space-y-4">
                  <Label>Live Preview</Label>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <iframe 
                      src={directLink}
                      width={Math.min(width, 400)}
                      height={Math.min(height, 300)}
                      frameBorder="0"
                      allowFullScreen={allowFullscreen}
                      allow="camera; microphone; autoplay; display-capture; fullscreen"
                      style={{ maxWidth: '100%' }}
                      className="mx-auto block"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Embed Code</Label>
                  <div className="relative">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{embedCode}</code>
                    </pre>
                  </div>
                  <p className="text-sm text-gray-600">
                    This code updates automatically as you change the settings above.
                  </p>
                  
                  <div className="flex gap-3">
                    <Button
                      onClick={() => copyToClipboard(embedCode, 'Embed code')}
                      className="flex items-center gap-2"
                      style={{ backgroundColor: '#1a1832' }}
                    >
                      <Copy className="w-4 h-4" />
                      Copy Embed Code
                    </Button>
                    <Button
                      onClick={() => copyToClipboard(directLink, 'Direct link')}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Copy Direct Link
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits List */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#1a1832' }}>
              Why Embed Waterr AI?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Embed as many scenarios as needed on the same page</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Matches your brand with custom sizing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Paste one line of code — no developer needed</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Responsive across devices and fullscreen compatible</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Keeps users on your domain and improves retention</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Logos Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-8">Trusted by fast-growing companies around the world</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">Framer</div>
              <div className="text-2xl font-bold text-gray-400">AngelList</div>
              <div className="text-2xl font-bold text-gray-400">Storyblok</div>
              <div className="text-2xl font-bold text-gray-400">Antimetal</div>
              <div className="text-2xl font-bold text-gray-400">Lumistry</div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a1832' }}>
                  Need help embedding?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Contact our team or join the community
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-6 py-3"
                    style={{ backgroundColor: '#1a1832' }}
                    onClick={() => window.open('mailto:hello@waterr.ai', '_blank')}
                  >
                    Email Support
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-6 py-3"
                    onClick={() => window.open('https://discord.gg/waterr', '_blank')}
                  >
                    Join Discord
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default Embed;