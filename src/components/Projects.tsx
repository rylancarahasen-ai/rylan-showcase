import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    
    {
      title: "AI Projects Repository",
      description: "A collection of my AI and machine learning projects, experiments, and learning journey on GitHub.",
      technologies: ["AI", "Machine Learning", "Python", "GitHub"],
      status: "Active",
      type: "AI Development",
      githubUrl: "https://github.com/rylancarahasen-ai",
      liveUrl: null,
      hasLiveDemo: false
    },
    {
      title: "Tranquil Waters",
      description: "A peaceful fishing application that brings the tranquility of lakeside fishing to your screen.",
      technologies: ["Web App", "Interactive", "Recreation"],
      status: "Live",
      type: "Web Application",
      githubUrl: null,
      liveUrl: "http://localhost:8080/",
      hasLiveDemo: true
    },
    {
      title: "Name Weaver",
      description:"A simple name generator that can creates fantasy styled names for males and females.",
      technologies:["Web App","Interactive","Generator"],
      status: "Live",
      type: "Web Application",
      githubUrl: null,
      liveUrl: "https://name-weaver-tales.lovable.app/",
      hasLiveDemo: true
    },
    {
      title: "AI Projects Repository",
      description: "A collection of my AI and machine learning projects, experiments, and learning journey on GitHub.",
      technologies: ["AI", "Machine Learning", "Python", "GitHub"],
      status: "Active",
      type: "AI Development",
      githubUrl: "https://github.com/rylancarahasen-ai",
      liveUrl: null,
      hasLiveDemo: false
    },
    {
      title: "Lakeside Serenity Fishing",
      description: "A peaceful fishing application that brings the tranquility of lakeside fishing to your screen.",
      technologies: ["Web App", "Interactive", "Recreation"],
      status: "Live",
      type: "Web Application",
      githubUrl: null,
      liveUrl: "https://lakeside-serenity-fishing-5656a02e.base44.app/",
      hasLiveDemo: true
    },
    {
      title: "Name Weaver",
      description: "A simple name generator that can creates fantasy styled names for males and females.",
      technologies: ["Web App", "Interactive", "Generator"],
      status: "Live",
      type: "Web Application",
      githubUrl: null,
      liveUrl: "https://name-weaver-tales.lovable.app/",
      hasLiveDemo: true
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio showcasing my projects and skills. Built with React, TypeScript, and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      status: "In Progress",
      type: "Web Development",
      githubUrl: null,
      liveUrl: null,
      hasLiveDemo: false
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-purple-500 rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work, experiments, and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card hover:bg-card-hover transition-all duration-300 border-border/50 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.type}
                  </Badge>
                  <Code2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <Badge 
                    className={`${
                      project.status === 'In Progress' ? 'bg-primary/20 text-primary' :
                      project.status === 'Ongoing' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                      project.status === 'Live' ? 'bg-green-600/20 text-green-500' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {project.status}
                  </Badge>
                  
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="hover:text-primary"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    {project.hasLiveDemo && (
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="hover:text-primary"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            More projects coming soon! Follow my journey as I continue to learn and build.
          </p>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;