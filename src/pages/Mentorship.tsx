
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MessageSquare, Calendar, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';

const mentors = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Senior Software Engineer at Google",
    expertise: ["Machine Learning", "Android Development", "Career Growth"],
    institution: "Rajasthan Technical University, 2015",
    rating: 4.9,
    reviews: 24,
    availability: "Weekends",
    image: "/placeholder.svg",
    initials: "PS"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    title: "CTO & Co-founder, InnovateRaj",
    expertise: ["Entrepreneurship", "Startup Funding", "Product Development"],
    institution: "Govt. Engineering College Bikaner, 2012",
    rating: 4.8,
    reviews: 32,
    availability: "Weekday Evenings",
    image: "/placeholder.svg",
    initials: "RK"
  },
  {
    id: 3,
    name: "Aisha Khan",
    title: "AI Research Scientist, Microsoft",
    expertise: ["Artificial Intelligence", "Deep Learning", "Research"],
    institution: "MNIT Jaipur, 2018",
    rating: 4.7,
    reviews: 18,
    availability: "Flexible",
    image: "/placeholder.svg",
    initials: "AK"
  },
  {
    id: 4,
    name: "Vikram Singh",
    title: "Project Manager at TCS",
    expertise: ["Project Management", "Leadership", "IT Consulting"],
    institution: "Rajasthan Technical University, 2010",
    rating: 4.6,
    reviews: 27,
    availability: "Weekends",
    image: "/placeholder.svg",
    initials: "VS"
  },
];

const myMentorships = [
  {
    id: 1,
    mentor: "Priya Sharma",
    mentorTitle: "Senior Software Engineer at Google",
    status: "Active",
    nextSession: "Apr 10, 2025 • 6:00 PM",
    topic: "Career transition to AI/ML field",
    image: "/placeholder.svg",
    initials: "PS"
  },
  {
    id: 2,
    mentor: "Vikram Singh",
    mentorTitle: "Project Manager at TCS",
    status: "Scheduled",
    nextSession: "Apr 15, 2025 • 5:30 PM",
    topic: "Resume review and interview preparation",
    image: "/placeholder.svg",
    initials: "VS"
  }
];

const Mentorship = () => {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-rajasthan-blue">Mentorship Program</h1>
            <p className="text-muted-foreground">Connect with experienced professionals for guidance</p>
          </div>
        </div>

        <Tabs defaultValue="find" className="space-y-4">
          <TabsList className="grid w-full md:w-auto grid-cols-3">
            <TabsTrigger value="find">Find a Mentor</TabsTrigger>
            <TabsTrigger value="my">My Mentorships</TabsTrigger>
            <TabsTrigger value="become">Become a Mentor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="find" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Find Your Mentor</CardTitle>
                <CardDescription>Connect with professionals who can guide your career journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-grow">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search by name, expertise, or institution..." className="pl-8" />
                  </div>
                  <Button variant="outline" className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" /> Filter Options
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mentors.map((mentor) => (
                    <Card key={mentor.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="p-4 sm:p-6 flex flex-col sm:border-r">
                            <Avatar className="w-16 h-16 mb-4">
                              <AvatarImage src={mentor.image} alt={mentor.name} />
                              <AvatarFallback className="bg-rajasthan-orange text-white">{mentor.initials}</AvatarFallback>
                            </Avatar>
                            <h3 className="font-medium text-lg mb-1">{mentor.name}</h3>
                            <p className="text-sm text-muted-foreground mb-1">{mentor.title}</p>
                            <p className="text-xs text-muted-foreground mb-3">{mentor.institution}</p>
                            <div className="flex items-center mb-3">
                              <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                              <span className="text-sm font-medium mr-1">{mentor.rating}</span>
                              <span className="text-xs text-muted-foreground">({mentor.reviews} reviews)</span>
                            </div>
                            <p className="text-xs flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              Available: {mentor.availability}
                            </p>
                          </div>
                          <div className="p-4 sm:p-6 flex-grow">
                            <h4 className="text-sm font-medium mb-2">Expertise</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {mentor.expertise.map((skill, index) => (
                                <Badge key={index} variant="outline">{skill}</Badge>
                              ))}
                            </div>
                            <div className="mt-auto flex flex-col sm:flex-row gap-2">
                              <Button size="sm" className="bg-rajasthan-blue hover:bg-rajasthan-blue/90">
                                Request Mentorship
                              </Button>
                              <Button size="sm" variant="outline">
                                <MessageSquare className="h-4 w-4 mr-1" /> Message
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Mentors</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="my">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>My Mentorship Sessions</CardTitle>
                <CardDescription>Track your ongoing and upcoming mentorship sessions</CardDescription>
              </CardHeader>
              <CardContent>
                {myMentorships.length > 0 ? (
                  <div className="space-y-4">
                    {myMentorships.map((session) => (
                      <Card key={session.id}>
                        <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={session.image} alt={session.mentor} />
                            <AvatarFallback className="bg-rajasthan-orange text-white">{session.initials}</AvatarFallback>
                          </Avatar>
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                              <div>
                                <h3 className="font-medium">{session.mentor}</h3>
                                <p className="text-sm text-muted-foreground">{session.mentorTitle}</p>
                              </div>
                              <Badge className={session.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'}>
                                {session.status}
                              </Badge>
                            </div>
                            <div className="text-sm flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-4">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                {session.nextSession}
                              </div>
                              <div className="flex items-center">
                                <MessageSquare className="h-4 w-4 mr-1 text-muted-foreground" />
                                {session.topic}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 self-end sm:self-center mt-2 sm:mt-0">
                            <Button size="sm">Join Session</Button>
                            <Button size="sm" variant="outline">Message</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">You don't have any active mentorship sessions yet.</p>
                    <Button>Find a Mentor</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="become">
            <Card>
              <CardHeader>
                <CardTitle>Become a Mentor</CardTitle>
                <CardDescription>
                  Share your knowledge and experience with students and junior professionals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Benefits of Being a Mentor</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-rajasthan-orange mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Make a meaningful impact in the careers of aspiring professionals</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-rajasthan-orange mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Build your professional network and reputation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-rajasthan-orange mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Sharpen your leadership and communication skills</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-rajasthan-orange mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Gain fresh perspectives from the next generation of professionals</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">How It Works</h3>
                  <ol className="text-sm space-y-2 list-decimal pl-5">
                    <li>Complete your mentor profile with your expertise and experience</li>
                    <li>Set your availability and mentoring preferences</li>
                    <li>Review and accept mentorship requests from students</li>
                    <li>Schedule and conduct regular mentoring sessions</li>
                    <li>Track your impact and receive feedback from mentees</li>
                  </ol>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-rajasthan-blue hover:bg-rajasthan-blue/90">Apply to Become a Mentor</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Mentorship;
