import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';

const API = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    useCase: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Early access request:', formData);
    // Handle form submission
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Coming Soon
              </Badge>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Developer API
            </h1>
            <h2 className="text-xl text-muted-foreground mb-8">
              Control agents programmatically
            </h2>
          </div>
        </section>

        {/* Body Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Build custom integrations with our REST API. Create, manage, and deploy 
              AI agents directly from your applications. Perfect for developers who want 
              to integrate conversational AI into their existing workflows.
            </p>

            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Request Early Access</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="useCase">Use Case</Label>
                    <Textarea
                      id="useCase"
                      placeholder="Tell us how you plan to use the API..."
                      value={formData.useCase}
                      onChange={(e) => setFormData({...formData, useCase: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Request Early Access
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default API;