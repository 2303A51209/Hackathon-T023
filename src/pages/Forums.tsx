
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageSquare, Plus, Search, User, Clock } from 'lucide-react';

const forumCategories = [
  { id: 1, name: 'Career Guidance', description: 'Get advice on career paths and opportunities', count: 48 },
  { id: 2, name: 'Academic Support', description: 'Discussion on coursework and academic challenges', count: 36 },
  { id: 3, name: 'Industry Trends', description: 'Stay updated with the latest industry trends', count: 25 },
  { id: 4, name: 'Placement Preparation', description: 'Tips and resources for placement interviews', count: 42 },
  { id: 5, name: 'Alumni Network', description: 'Connect with alumni from various institutions', count: 30 },
  { id: 6, name: 'Entrepreneurship', description: 'Discussions about startups and ventures', count: 18 },
];

const recentTopics = [
  { 
    id: 1, 
    title: 'Best resources for learning AI and ML in 2025', 
    category: 'Industry Trends',
    author: 'Priya Sharma',
    replies: 24,
    lastActive: '2 hours ago'
  },
  { 
    id: 2, 
    title: 'How to prepare for campus placements at top tech companies', 
    category: 'Placement Preparation',
    author: 'Rajesh Kumar',
    replies: 42,
    lastActive: '5 hours ago'
  },
  { 
    id: 3, 
    title: 'Advice needed for transitioning from engineering to management', 
    category: 'Career Guidance',
    author: 'Aisha Khan',
    replies: 18,
    lastActive: '1 day ago'
  },
  { 
    id: 4, 
    title: 'Feedback on my final year project idea: IoT-based smart agriculture', 
    category: 'Academic Support',
    author: 'Vikram Singh',
    replies: 15,
    lastActive: '2 days ago'
  },
];

const Forums = () => {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-rajasthan-blue">Discussion Forums</h1>
            <p className="text-muted-foreground">Connect, share, and learn from the community</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search discussions..." className="pl-8" />
            </div>
            <Button className="bg-rajasthan-blue hover:bg-rajasthan-blue/90">
              <Plus className="mr-2 h-4 w-4" /> New Topic
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Discussions</CardTitle>
                <CardDescription>Join the conversation or start your own</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTopics.map((topic) => (
                    <div key={topic.id} className="border rounded-lg p-4 hover:border-rajasthan-blue/50 hover:bg-slate-50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-rajasthan-blue hover:underline cursor-pointer">{topic.title}</h3>
                          <div className="flex items-center mt-2 text-sm text-muted-foreground">
                            <Badge variant="outline" className="mr-2">{topic.category}</Badge>
                            <div className="flex items-center mr-3">
                              <User className="h-3 w-3 mr-1" /> {topic.author}
                            </div>
                            <div className="flex items-center mr-3">
                              <MessageSquare className="h-3 w-3 mr-1" /> {topic.replies} replies
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" /> {topic.lastActive}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" /> Reply
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Discussions</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Categories</CardTitle>
                <CardDescription>Browse discussions by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {forumCategories.map((category) => (
                    <div 
                      key={category.id} 
                      className="flex justify-between items-center p-2 rounded-md hover:bg-slate-100 cursor-pointer transition-colors"
                    >
                      <div>
                        <h3 className="font-medium text-rajasthan-blue">{category.name}</h3>
                        <p className="text-xs text-muted-foreground">{category.description}</p>
                      </div>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Forum Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Be respectful and constructive in your comments</li>
                  <li>Stay on topic and keep discussions relevant</li>
                  <li>No spamming or self-promotion without permission</li>
                  <li>Respect privacy and confidentiality of others</li>
                  <li>Report inappropriate content to moderators</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Forums;
