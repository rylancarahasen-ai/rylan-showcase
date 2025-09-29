import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Send, Github } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:rylan.carahasen@icloud.com";
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-purple-500 rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborations, or just chat about technology and innovation.
          </p>
        </div>
        
        <Card className="bg-card border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <CardContent className="p-12">
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Get In Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out for collaborations, questions, or just to say hello!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-lg font-medium text-foreground mb-2">Email</p>
                  <p className="text-primary text-lg">rylan.carahasen@icloud.com</p>
                </div>
                
                <Button 
                  onClick={handleEmailClick}
                  className="bg-gradient-to-r from-primary to-purple-500 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-lg px-8 py-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </div>
              
              <div className="pt-8 border-t border-border/50">
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <MessageCircle className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Open to</p>
                    <p className="text-sm font-medium text-foreground">Collaboration</p>
                  </div>
                  
                  <div className="text-center">
                    <Mail className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Response time</p>
                    <p className="text-sm font-medium text-foreground">24-48 hours</p>
                  </div>
                  
                  <div className="text-center cursor-pointer" onClick={() => window.open('https://github.com/rylancarahasen-ai', '_blank')}>
                    <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Check out</p>
                    <p className="text-sm font-medium text-foreground hover:text-primary transition-colors">My Github</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;