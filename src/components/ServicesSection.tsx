import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, BarChart, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Mini Websites",
      description: "Professional responsive websites tailored for small businesses and personal portfolios.",
      price: "Starting at $299",
      timeline: "1-2 weeks",
    },
    {
      icon: Zap,
      title: "Automation Scripts",
      description: "Custom Python scripts to automate repetitive tasks and boost productivity.",
      price: "Starting at $199",
      timeline: "3-5 days",
    },
    {
      icon: BarChart,
      title: "Data Analysis",
      description: "Transform your raw data into actionable insights with comprehensive analysis reports.",
      price: "Starting at $249",
      timeline: "1 week",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional tech solutions designed to help your business grow and succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-primary">{service.price}</div>
                  <div className="text-sm text-muted-foreground">Timeline: {service.timeline}</div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;