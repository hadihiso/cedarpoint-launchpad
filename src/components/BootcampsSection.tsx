import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Shield, ArrowRight, Clock, Users } from "lucide-react";

const BootcampsSection = () => {
  const bootcamps = [
    {
      icon: Code,
      title: "Python Bootcamp",
      description: "Master Python programming from basics to advanced concepts. Build real-world projects and create your professional portfolio.",
      duration: "8 weeks",
      outcome: "Full-stack Python Developer",
      highlights: ["Web Development", "Data Science", "Automation", "Portfolio Projects"],
    },
    {
      icon: Shield,
      title: "Cybersecurity Bootcamp",
      description: "Learn cybersecurity fundamentals, ethical hacking, and network security. Prepare for industry certifications.",
      duration: "10 weeks",
      outcome: "Cybersecurity Specialist",
      highlights: ["Ethical Hacking", "Network Security", "Risk Assessment", "Certification Prep"],
    },
  ];

  return (
    <section id="bootcamps" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Bootcamps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intensive, hands-on training programs designed to launch your tech career
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bootcamps.map((bootcamp, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <bootcamp.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{bootcamp.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground text-sm mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      {bootcamp.duration}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{bootcamp.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-primary mr-2" />
                    <span className="font-semibold text-primary">Outcome: {bootcamp.outcome}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">What you'll learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {bootcamp.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="default" 
                  className="w-full group-hover:bg-primary/90 transition-colors"
                >
                  See Curriculum
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

export default BootcampsSection;