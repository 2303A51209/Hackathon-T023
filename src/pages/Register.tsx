
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is where registration logic would go
    // For now, just show a toast message
    toast({
      title: "Registration functionality",
      description: "Backend user creation will be implemented with Supabase",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rajasthan-blue to-rajasthan-teal py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-rajasthan-blue">
            Create an Account
          </CardTitle>
          <CardDescription className="text-center">
            Join the TechConnect Rajasthan community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-type">I am a</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Current Student</SelectItem>
                    <SelectItem value="alumni">Alumni</SelectItem>
                    <SelectItem value="faculty">Faculty Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Institution selection would be added based on user type */}
              <Button type="submit" className="w-full bg-rajasthan-blue hover:bg-rajasthan-blue/90">
                Create Account
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-rajasthan-blue hover:underline">
            Sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
