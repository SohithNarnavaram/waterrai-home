import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Header from '@/components/Header';

const Customization = () => {
  const [activeView, setActiveView] = useState<'memo' | 'persona'>('memo');

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

            {/* Button Group */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg border border-border bg-muted p-1">
                <button
                  onClick={() => setActiveView('memo')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeView === 'memo' 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  AI Meeting Memo
                </button>
                <button
                  onClick={() => setActiveView('persona')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeView === 'persona' 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  AI Persona
                </button>
              </div>
            </div>

            {/* Dynamic Content Sections */}
            {activeView === 'memo' && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">AI Meeting Memo</CardTitle>
                  <p className="text-muted-foreground">Role: Project Manager (Jordan Lee)</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Goal</h3>
                    <p className="text-muted-foreground">
                      Facilitate a collaborative weekly progress meeting to review project updates, identify roadblocks, and align on next steps.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      This helps the AI agent simulate a team-centric environment focused on empathy, clarity, and accountability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Persona Overview</h3>
                    <p className="text-muted-foreground">
                      You are Jordan Lee, a Project Manager leading a weekly meeting with your technology team. Your objective is to create an open, productive space where team members can share updates, raise concerns, and align on priorities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Conversation Flow</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium mb-2">Introduction</h4>
                        <p className="text-sm text-muted-foreground mb-2">Set the tone and explain the structure.</p>
                        <div className="bg-muted p-3 rounded-md">
                          <p className="text-sm italic">
                            "Hey everyone, thanks for joining. Let's do a quick round of updates. Just let us know what you worked on this week, anything that's blocking you, and what you plan to tackle next."
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Use open, conversational tone. Keep it brief and inclusive.</p>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium mb-2">Project Updates</h4>
                        <p className="text-sm text-muted-foreground mb-2">Invite input from the team, get specifics, and surface blockers.</p>
                        <div className="bg-muted p-3 rounded-md space-y-2">
                          <p className="text-sm italic">"Who wants to kick us off with their update?"</p>
                          <p className="text-sm italic">"Can you share more about the issue you ran into with the new API integration?"</p>
                          <p className="text-sm italic">"If anyone has blockers or needs help, let's talk it through together."</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium mb-2">Roadblock Discussion</h4>
                        <p className="text-sm text-muted-foreground mb-2">Identify challenges and foster collaborative problem solving.</p>
                        <div className="bg-muted p-3 rounded-md space-y-2">
                          <p className="text-sm italic">"What do you think is the best way to resolve this? Has anyone faced a similar issue before?"</p>
                          <p className="text-sm italic">"Is there anything I or someone else can do to help move this forward?"</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium mb-2">Next Steps</h4>
                        <p className="text-sm text-muted-foreground mb-2">Clarify actions and responsibilities.</p>
                        <div className="bg-muted p-3 rounded-md space-y-2">
                          <p className="text-sm italic">"Let's recap the action items. Who's taking the lead on the database migration?"</p>
                          <p className="text-sm italic">"Does everyone feel clear on next steps and priorities for the coming week?"</p>
                        </div>
                      </div>

                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium mb-2">Closing</h4>
                        <p className="text-sm text-muted-foreground mb-2">Close on a high note and keep communication open.</p>
                        <div className="bg-muted p-3 rounded-md space-y-2">
                          <p className="text-sm italic">"Great job this week, everyone. I appreciate the collaboration and honesty."</p>
                          <p className="text-sm italic">"Anything else on your minds before we wrap up? Any wins or shoutouts to share?"</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Response Guidelines</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Use informal, supportive language - Example: "No worries, let's figure it out together"</li>
                      <li>• Encourage quieter members to participate - Example: "Haven't heard from you yet. Anything you want to add?"</li>
                      <li>• Identify recurring blockers, missed ownership, or lack of follow-up</li>
                      <li>• Maintain a solutions-focused tone and adapt support based on team needs</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeView === 'persona' && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">AI Persona Customization</CardTitle>
                  <p className="text-muted-foreground">Define how your AI agent presents itself across conversations</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Feature Examples */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Persona Card Preview</h3>
                      <div className="flex justify-center mb-4">
                        <img 
                          src="/lovable-uploads/c217a612-1fde-4b8c-b4eb-e05a5e034998.png" 
                          alt="Persona card example"
                          className="rounded-lg border border-border"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Your AI persona appears as a professional contact card with avatar, name, and title across all conversations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Persona Configuration</h3>
                      <div className="flex justify-center mb-4">
                        <img 
                          src="/lovable-uploads/d409ea43-29fb-43f7-8f85-fdad75162b83.png" 
                          alt="Persona editing interface"
                          className="rounded-lg border border-border max-w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Configure your AI agent's personality, role, and communication style with detailed form controls and dropdown options.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Avatar Selection</h3>
                      <div className="flex justify-center mb-4">
                        <img 
                          src="/lovable-uploads/fec6a8b7-9b05-436d-87b5-bed8865354c3.png" 
                          alt="Avatar selection grid"
                          className="rounded-lg border border-border max-w-full h-auto"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Choose from a diverse collection of professional avatars to represent your AI agent. Click to select and preview in real-time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

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