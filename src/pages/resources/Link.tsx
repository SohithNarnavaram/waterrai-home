import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';

const Link = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Share Agent Links
            </h1>
            <h2 className="text-xl text-muted-foreground mb-8">
              Create async, interactive sessions
            </h2>
          </div>
        </section>

        {/* Body Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Generate shareable links that launch specific AI agent conversations. 
              Perfect for onboarding, support tickets, surveys, or any interactive session 
              that needs to happen on the user's schedule.
            </p>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Example Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <div className="font-mono text-sm text-primary">waterr.ai/demo/onboarding</div>
                    <div className="text-xs text-muted-foreground mt-1">New user onboarding flow</div>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <div className="font-mono text-sm text-primary">waterr.ai/user/exit-bot</div>
                    <div className="text-xs text-muted-foreground mt-1">Exit interview agent</div>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <div className="font-mono text-sm text-primary">waterr.ai/support/tech-help</div>
                    <div className="text-xs text-muted-foreground mt-1">Technical support session</div>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Generate Link
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Link;