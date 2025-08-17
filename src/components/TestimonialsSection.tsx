import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      program: "Python Bootcamp Graduate",
      quote: "CedarPoint Learning completely transformed my career. The hands-on approach and practical projects gave me the confidence to land my first developer job within 3 months of graduation.",
      rating: 5,
    },
    {
      name: "Mohammed Hassan",
      program: "Cybersecurity Bootcamp Graduate",
      quote: "The instructors are incredibly knowledgeable and supportive. I went from knowing nothing about cybersecurity to earning my first certification. Highly recommend!",
      rating: 5,
    },
    {
      name: "Layla Khoury",
      program: "Mini Website Service Client",
      quote: "They created a stunning website for my small business in just one week. Professional, affordable, and exactly what I needed to establish my online presence.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from students who transformed their careers with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 relative z-10">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.program}</div>
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