import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';

const Customization = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Build Your Own AI Agent
            </h1>
            <h2 className="text-xl text-muted-foreground mb-8">
              Customize tone, workflows, and skills
            </h2>
          </div>
        </section>

        {/* Body Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Create AI agents that match your brand voice and business processes. 
              Configure conversation flows, set response tones, and define custom 
              actions that integrate with your existing tools and workflows.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Voice & Tone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Set your agent's personality from professional to friendly, 
                    with custom responses that match your brand.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Design conversation paths, conditional logic, and automated 
                    handoffs to human team members.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connect to your CRM, helpdesk, calendar, and other tools 
                    for seamless data flow.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Customizing
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Customization;