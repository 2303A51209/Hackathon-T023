
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const upcomingEvents = [
  {
    id: 1,
    title: "AI Revolution in Rajasthan Tech Industry",
    type: "Webinar",
    date: "April 15, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "Online",
    organizer: "Tech Alumni Association, RTU",
    attendees: 124,
    image: "https://placehold.co/600x400/228be6/FFFFFF/png?text=AI+Revolution"
  },
  {
    id: 2,
    title: "Annual Alumni Meet 2025",
    type: "In-Person",
    date: "April 25, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "MNIT Jaipur Campus, Rajasthan",
    organizer: "MNIT Alumni Cell",
    attendees: 215,
    image: "https://placehold.co/600x400/4263eb/FFFFFF/png?text=Alumni+Meet"
  },
  {
    id: 3,
    title: "Career Guidance Workshop for Final Year Students",
    type: "Hybrid",
    date: "May 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Govt. Engineering College, Bikaner & Online",
    organizer: "Placement Cell, GEC Bikaner",
    attendees: 78,
    image: "https://placehold.co/600x400/15aabf/FFFFFF/png?text=Career+Guidance"
  },
  {
    id: 4,
    title: "Startup Ecosystem in Rajasthan: Opportunities & Challenges",
    type: "Panel Discussion",
    date: "May 12, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Online",
    organizer: "iStart Rajasthan",
    attendees: 96,
    image: "https://placehold.co/600x400/f03e3e/FFFFFF/png?text=Startup+Ecosystem"
  }
];

const pastEvents = [
  {
    id: 1,
    title: "Technical Education: Past, Present and Future",
    type: "Seminar",
    date: "March 20, 2025",
    location: "RTU Kota",
    organizer: "Technical Education Department",
    attendees: 180,
    image: "https://placehold.co/600x400/f76707/FFFFFF/png?text=Technical+Education"
  },
  {
    id: 2,
    title: "Industry-Academia Collaboration Workshop",
    type: "Workshop",
    date: "March 10, 2025",
    location: "Online",
    organizer: "CII Rajasthan & Technical Education Department",
    attendees: 145,
    image: "https://placehold.co/600x400/d9480f/FFFFFF/png?text=Industry+Academia"
  }
];

const myEvents = [
  {
    id: 1,
    title: "AI Revolution in Rajasthan Tech Industry",
    type: "Webinar",
    date: "April 15, 2025",
    time: "6:00 PM - 7:30 PM",
    status: "Registered",
    image: "https://placehold.co/600x400/228be6/FFFFFF/png?text=AI+Revolution"
  },
  {
    id: 2,
    title: "Technical Education: Past, Present and Future",
    type: "Seminar",
    date: "March 20, 2025",
    time: "10:00 AM - 1:00 PM",
    status: "Attended",
    image: "https://placehold.co/600x400/f76707/FFFFFF/png?text=Technical+Education"
  }
];

const Events = () => {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-rajasthan-blue">Events & Webinars</h1>
            <p className="text-muted-foreground">Stay connected through alumni and department events</p>
          </div>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList className="grid w-full md:w-auto grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="my">My Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Discover events and webinars organized by alumni and department</CardDescription>
                  </div>
                  <div className="mt-4 md:mt-0 flex gap-2 w-full md:w-auto">
                    <div className="relative flex-grow md:flex-grow-0 md:w-64">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search events..." className="pl-8" />
                    </div>
                    <Button variant="outline" className="flex items-center">
                      <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover" 
                        />
                        <Badge 
                          className={`absolute top-2 right-2 ${
                            event.type === 'Webinar' ? 'bg-blue-500' : 
                            event.type === 'In-Person' ? 'bg-green-500' : 
                            event.type === 'Hybrid' ? 'bg-purple-500' : 'bg-orange-500'
                          }`}
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg mb-2">{event.title}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            {event.attendees} attending
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-grow" size="sm">Register</Button>
                          <Button variant="outline" size="sm">More Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Events</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="past">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Past Events</CardTitle>
                <CardDescription>Review events that have already taken place</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pastEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="aspect-video relative opacity-80">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover" 
                        />
                        <Badge 
                          className={`absolute top-2 right-2 ${
                            event.type === 'Webinar' ? 'bg-blue-500' : 
                            event.type === 'Workshop' ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg mb-2">{event.title}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            {event.attendees} attended
                          </div>
                        </div>
                        <Button variant="outline" className="w-full" size="sm">
                          View Resources
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="my">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>My Events</CardTitle>
                <CardDescription>Events you've registered for or attended</CardDescription>
              </CardHeader>
              <CardContent>
                {myEvents.length > 0 ? (
                  <div className="space-y-4">
                    {myEvents.map((event) => (
                      <Card key={event.id}>
                        <CardContent className="p-4 flex flex-col sm:flex-row gap-4">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="rounded-md w-full sm:w-40 h-24 object-cover"
                          />
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                              <div>
                                <h3 className="font-medium">{event.title}</h3>
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge 
                                    className={event.type === 'Webinar' ? 'bg-blue-500' : 'bg-amber-500'}
                                  >
                                    {event.type}
                                  </Badge>
                                  <Badge 
                                    className={event.status === 'Registered' ? 'bg-emerald-500' : 'bg-gray-500'}
                                  >
                                    {event.status}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <div className="text-sm flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-4">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                                {event.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                                {event.time}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 self-end sm:self-center mt-2 sm:mt-0">
                            {event.status === 'Registered' ? (
                              <Button size="sm">Join Event</Button>
                            ) : (
                              <Button size="sm" variant="outline">View Resources</Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">You haven't registered for any events yet.</p>
                    <Button>Browse Upcoming Events</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Events;
