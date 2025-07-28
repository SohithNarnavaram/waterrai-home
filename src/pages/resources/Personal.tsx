import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import Header from '@/components/Header';

const Personal = () => {
  const sessions = [
    { id: 1, title: 'Team Standup', date: '2024-01-15', duration: '25 min', status: 'completed' },
    { id: 2, title: 'Client Check-in', date: '2024-01-14', duration: '45 min', status: 'completed' },
    { id: 3, title: 'Onboarding Call', date: '2024-01-13', duration: '30 min', status: 'completed' },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Your Personal Page
            </h1>
            <h2 className="text-xl text-muted-foreground mb-8">
              Manage your AI sessions and settings
            </h2>
          </div>
        </section>

        {/* Body Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Settings Card */}
            <Card>
              <CardHeader>
                <CardTitle>Agent Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Agent Tone</div>
                    <div className="text-sm text-muted-foreground">Choose between formal or casual communication style</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Casual</span>
                    <Switch />
                    <span className="text-sm">Formal</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Auto-join Meetings</div>
                    <div className="text-sm text-muted-foreground">Automatically join scheduled meetings</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Send Summaries</div>
                    <div className="text-sm text-muted-foreground">Email meeting summaries after each session</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Session History */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sessions.map(session => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">{session.title}</div>
                        <div className="text-sm text-muted-foreground">{session.date} • {session.duration}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{session.status}</Badge>
                        <Button variant="outline" size="sm">
                          View Transcript
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Export Section */}
            <Card>
              <CardHeader>
                <CardTitle>Export & Download</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download your meeting transcripts, summaries, and session data.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline">Download All Transcripts</Button>
                  <Button variant="outline">Export Session Data</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default Personal;