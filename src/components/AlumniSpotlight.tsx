
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const spotlightAlumni = [
  {
    name: "Priya Sharma",
    title: "Senior Software Engineer at Google",
    institution: "Rajasthan Technical University, 2015",
    image: "/placeholder.svg",
    quote: "The connections I made during my studies have been invaluable. I'm glad to give back to the community that shaped my career.",
    initials: "PS"
  },
  {
    name: "Rajesh Kumar",
    title: "CTO & Co-founder, InnovateRaj",
    institution: "Govt. Engineering College Bikaner, 2012",
    image: "/placeholder.svg",
    quote: "Mentorship changed my life. Now I'm passionate about guiding the next generation of tech talent from Rajasthan.",
    initials: "RK"
  },
  {
    name: "Aisha Khan",
    title: "AI Research Scientist, Microsoft",
    institution: "MNIT Jaipur, 2018",
    image: "/placeholder.svg",
    quote: "The technical foundation I received in Rajasthan prepared me for global opportunities. I'm proud to represent our state in tech.",
    initials: "AK"
  }
];

const AlumniSpotlight = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-rajasthan-blue mb-4">Alumni Spotlight</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from successful alumni who are making an impact in their fields and
            giving back to our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spotlightAlumni.map((alumni, index) => (
            <Card key={index} className="card-hover-effect overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-rajasthan-blue to-rajasthan-teal p-6 text-white">
                  <Avatar className="w-20 h-20 border-4 border-white mb-4">
                    <AvatarImage src={alumni.image} alt={alumni.name} />
                    <AvatarFallback className="bg-rajasthan-orange text-white">{alumni.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1">{alumni.name}</h3>
                  <p className="text-sm text-white/80 mb-2">{alumni.title}</p>
                  <p className="text-sm text-white/60 mb-4">{alumni.institution}</p>
                </div>
                <div className="p-6">
                  <p className="italic text-gray-600">"{alumni.quote}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSpotlight;
