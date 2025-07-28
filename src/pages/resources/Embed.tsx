import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';

const Embed = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Embed Waterr AI
            </h1>
            <h2 className="text-xl text-muted-foreground mb-8">
              Add our AI assistant into any platform or tool
            </h2>
          </div>
        </section>

        {/* Body Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Easily plug Waterr AI into your website, app, or dashboard using one simple code snippet.
            </p>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Embed Code</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <code>
                    &lt;script src="https://waterr.ai/embed.js" data-agent="onboarding"&gt;&lt;/script&gt;
                  </code>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Customize Agent →
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Embed;