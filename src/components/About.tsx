import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-purple-500 rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated high school junior with a passion for technology and innovation. 
              Currently pursuing my education while exploring the fascinating world of programming, 
              design, and problem-solving.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with curiosity and has evolved into a genuine likeness for 
              creating digital solutions. I believe in the power of technology to transform ideas 
              into reality and make a positive impact on people's lives.
            </p>
          </div>
          
          <Card className="bg-card hover:bg-card-hover transition-all duration-300 border-border/50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Education</h3>
                    <p className="text-muted-foreground">High School Junior</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">School</h3>
                    <p className="text-muted-foreground">Jefferson Academy Secondary</p>
                    <p className="text-sm text-muted-foreground">Broomfield, CO</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Focus</h3>
                    <p className="text-muted-foreground">Technology & Innovation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;