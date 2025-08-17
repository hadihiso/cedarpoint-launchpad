import { Target } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Mission
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We provide practical coding skills to students in Tyre, with hands-on projects 
            and portfolio-ready results. Our mission is to bridge the gap between education 
            and industry needs, empowering the next generation of tech professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;