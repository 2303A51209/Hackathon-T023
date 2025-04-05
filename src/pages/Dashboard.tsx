
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DashboardLayout from '@/components/DashboardLayout';
import { BookOpen, Calendar, MessageSquare, Users, User, Award, Briefcase } from 'lucide-react';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6">
        <h1 className="text-2xl font-bold text-rajasthan-blue mb-6">Welcome to TechConnect Rajasthan!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Users className="mr-2 text-rajasthan-orange h-5 w-5" />
                Alumni Connected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">532</p>
              <p className="text-sm text-muted-foreground">From 45+ institutions</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <MessageSquare className="mr-2 text-rajasthan-orange h-5 w-5" />
                Active Discussions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">128</p>
              <p className="text-sm text-muted-foreground">Across 15 categories</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Calendar className="mr-2 text-rajasthan-orange h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">8</p>
              <p className="text-sm text-muted-foreground">In the next 30 days</p>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-xl font-semibold text-rajasthan-blue mb-4">Platform Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-rajasthan-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <User className="text-rajasthan-blue h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">Profile Directory</h3>
              <p className="text-muted-foreground mb-4">Browse through alumni from different institutions and connect with them.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/directory">Explore Directory</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-rajasthan-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="text-rajasthan-blue h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">Discussion Forums</h3>
              <p className="text-muted-foreground mb-4">Join meaningful conversations on career, academics, and industry trends.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/forums">Join Discussions</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-rajasthan-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-rajasthan-blue h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">Mentorship Program</h3>
              <p className="text-muted-foreground mb-4">Get guidance from experienced professionals in your field of interest.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/mentorship">Find a Mentor</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-rajasthan-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="text-rajasthan-blue h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">Events & Webinars</h3>
              <p className="text-muted-foreground mb-4">Attend virtual and in-person events organized by alumni and department.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/events">View Events</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-rajasthan-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="text-rajasthan-blue h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">Resource Library</h3>
              <p className="text-muted-foreground mb-4">Access to study materials, career guides, and industry reports.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/resources">Browse Resources</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-rajasthan-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="text-rajasthan-blue h-6 w-6" />
              </div>
              <h3 className="font-medium text-lg mb-2">Job Opportunities</h3>
              <p className="text-muted-foreground mb-4">Explore internships and job opportunities shared by alumni.</p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/jobs">View Opportunities</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
