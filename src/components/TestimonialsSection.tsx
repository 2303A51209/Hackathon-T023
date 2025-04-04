
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "The mentorship program helped me secure my dream job at a top tech company. My mentor provided invaluable guidance on industry trends and interview preparation.",
    name: "Vikram Singh",
    role: "Software Developer",
    institution: "Engineering College Ajmer",
    image: "/placeholder.svg",
    initials: "VS"
  },
  {
    quote: "As an alumnus, giving back through this platform has been incredibly rewarding. I've mentored three students who are now successful professionals in their fields.",
    name: "Meena Kumari",
    role: "Data Scientist",
    institution: "MNIT Jaipur",
    image: "/placeholder.svg",
    initials: "MK"
  },
  {
    quote: "The resources and connections available through TechConnect helped me navigate my early career challenges. The alumni network is truly supportive and inspiring.",
    name: "Abdul Rahman",
    role: "UX Designer",
    institution: "RTU Kota",
    image: "/placeholder.svg",
    initials: "AR"
  },
  {
    quote: "Finding a mentor in my field changed everything. The personalized guidance and encouragement gave me confidence to pursue opportunities I wouldn't have considered.",
    name: "Lakshmi Patel",
    role: "IoT Specialist",
    institution: "College of Technology, Udaipur",
    image: "/placeholder.svg",
    initials: "LP"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-rajasthan-blue mb-4">What Our Community Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from students and alumni who have experienced the power of our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover-effect h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6 flex-grow">
                  <svg className="w-8 h-8 text-rajasthan-orange mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                  <p className="text-gray-600 italic">{testimonial.quote}</p>
                </div>
                <div className="flex items-center mt-4">
                  <Avatar className="mr-3">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-rajasthan-blue text-white">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-rajasthan-blue">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.institution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
