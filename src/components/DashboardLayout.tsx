
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, MessageSquare, User, Home, Users, Calendar, BookOpen, MessageCircle, Award, LogOut, Settings, Menu, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { title: 'Dashboard', path: '/dashboard', icon: Home },
    { title: 'Directory', path: '/directory', icon: Users },
    { title: 'Forums', path: '/forums', icon: MessageCircle },
    { title: 'Mentorship', path: '/mentorship', icon: Award },
    { title: 'Events', path: '/events', icon: Calendar },
    { title: 'Resources', path: '/resources', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex">
        {/* Mobile sidebar toggle */}
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <Button 
            className="rounded-full w-12 h-12 p-0 bg-rajasthan-blue"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Sidebar */}
        <aside 
          className={`w-64 bg-white shadow-md z-40 fixed lg:relative inset-y-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } transition-transform duration-300 ease-in-out lg:flex lg:flex-col lg:justify-between overflow-y-auto`}
        >
          <div className="p-4">
            <div className="flex items-center mb-8 pl-2">
              <Link to="/dashboard" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-rajasthan-blue">TechConnect</span>
              </Link>
            </div>
            
            <div className="space-y-6">
              <div className="px-2 space-y-1">
                {navItems.map((item) => (
                  <Link to={item.path} key={item.title}>
                    <Button
                      variant={location.pathname === item.path ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        location.pathname === item.path 
                          ? "bg-rajasthan-blue text-white hover:bg-rajasthan-blue/90" 
                          : ""
                      }`}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t">
            <div className="flex items-center p-2">
              <Avatar className="h-9 w-9 mr-2">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>UR</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  User Name
                </p>
                <p className="text-xs text-gray-500 truncate">
                  user@example.com
                </p>
              </div>
              <Link to="/settings">
                <Button variant="ghost" size="sm" className="ml-2 p-0 h-8 w-8">
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          {/* Top bar */}
          <div className="bg-white shadow-sm border-b px-4 py-2 flex justify-between items-center">
            <div className="flex items-center lg:hidden">
              <Button variant="ghost" size="sm" onClick={toggleSidebar}>
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex items-center ml-auto space-x-3">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="h-4 w-4 p-0 flex items-center justify-center absolute -top-1 -right-1 bg-rajasthan-orange">
                  3
                </Badge>
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <MessageSquare className="h-5 w-5" />
                <Badge className="h-4 w-4 p-0 flex items-center justify-center absolute -top-1 -right-1 bg-rajasthan-orange">
                  5
                </Badge>
              </Button>
              
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  <User className="h-5 w-5 mr-1" />
                  Profile
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Page content */}
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardLayout;
