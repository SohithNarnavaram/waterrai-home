import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';

const Blog = () => {
  const articles = [
    {
      title: 'AI Took My Exit Interview',
      excerpt: 'How our AI agent conducted better exit interviews than humans, uncovering insights we never knew we were missing.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Case Study'
    },
    {
      title: 'Why Listening Agents Are the Future',
      excerpt: 'The shift from reactive chatbots to proactive AI agents that truly understand context and intent.',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Industry'
    },
    {
      title: 'Building Trust with AI Conversations',
      excerpt: 'How to design AI interactions that feel natural, helpful, and trustworthy to your users.',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Design'
    },
    {
      title: 'The End of Meeting Fatigue',
      excerpt: 'How AI agents can attend meetings on your behalf while keeping you informed and engaged.',
      date: '2024-01-08',
      readTime: '4 min read',
      category: 'Productivity'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Waterr Blog
            </h1>
            <h2 className="text-xl text-muted-foreground mb-8">
              Stories, updates, and behind-the-scenes
            </h2>
          </div>
        </section>

        {/* Body Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center">
              Insights from the frontlines of conversational AI. Learn how teams are using 
              AI agents to transform their workflows, improve customer experiences, and 
              reclaim their time.
            </p>

            <div className="grid gap-8 mb-12">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      <Button variant="ghost" size="sm">Read More →</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Submit Your Story
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Have an interesting use case? We'd love to feature it.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;