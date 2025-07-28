import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Copy, Check, Settings, Globe, Code2 } from 'lucide-react';
import Header from '@/components/Header';

const Embed = () => {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [allowFullscreen, setAllowFullscreen] = useState(true);
  const [responsive, setResponsive] = useState(true);
  const [copied, setCopied] = useState(false);

  const embedCode = `<iframe src="https://waterr.ai/embed/488/ai-sales-roleplay-challenge" width="${width}px" height="${height}px" frameborder="0"${allowFullscreen ? ' allowfullscreen' : ''} allow="camera; microphone; autoplay; display-capture"${responsive ? ' style="max-width: 100%;"' : ''}></iframe>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen" style={{ backgroundColor: '#eeeeee' }}>
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#1a1832' }}>
              Add Waterr AI to Any Website
            </h1>
            <h2 className="text-xl text-gray-600 mb-8">
              Easily integrate your real-time meeting agent into any site or platform using one embed snippet.
            </h2>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 text-white"
              style={{ backgroundColor: '#1a1832' }}
              onClick={() => window.open('https://waterr.ai/', '_blank')}
            >
              Customize Agent
            </Button>
          </div>
        </section>

        {/* What Is Embedding Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#1a1832' }}>
                  <Globe className="w-6 h-6" />
                  What Is Embedding?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Embedding lets you deploy a live Waterr AI assistant on your own website, product dashboard, or client portal — without writing any backend logic.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Live Embed Configuration Tool */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#1a1832' }}>
                  <Settings className="w-6 h-6" />
                  Live Embed Configuration Tool
                </CardTitle>
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

                <div className="space-y-4">
                  <Label>Embed Code Preview</Label>
                  <div className="relative">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{embedCode}</code>
                    </pre>
                    <Button
                      onClick={copyToClipboard}
                      className="absolute top-2 right-2 p-2"
                      variant="secondary"
                      size="sm"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600">
                    This code updates automatically as you change the settings above.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#1a1832' }}>
                  <Code2 className="w-6 h-6" />
                  How to Embed in 3 Simple Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      style={{ backgroundColor: '#1a1832' }}
                    >
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Configure Settings</h3>
                      <p className="text-gray-700">Select width and height, enable responsive if needed.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      style={{ backgroundColor: '#1a1832' }}
                    >
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Copy the Code</h3>
                      <p className="text-gray-700">Copy the embed code from the preview above.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      style={{ backgroundColor: '#1a1832' }}
                    >
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Embed on Your Site</h3>
                      <p className="text-gray-700">Paste into your website's HTML or CMS widget section.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Need Help Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#1a1832' }}>
                  Need Help?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Want help customizing? Contact us or schedule a demo with a human.
                </p>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 text-white"
                  style={{ backgroundColor: '#1a1832' }}
                  onClick={() => window.open('https://waterr.ai/', '_blank')}
                >
                  Talk to Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default Embed;