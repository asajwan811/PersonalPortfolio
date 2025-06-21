import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-java-orange font-medium">
                <i className="fas fa-code"></i>
                <span>Java Developer</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Building Robust{" "}
                <span className="text-java-orange">Enterprise</span>{" "}
                Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                3+ years crafting scalable Java applications with Spring Boot, microservices architecture, 
                and cloud-native technologies. Passionate about clean code and system optimization.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-java-orange hover:bg-java-orange-light text-white px-8 py-3"
              >
                <i className="fas fa-briefcase mr-2"></i>
                View Projects
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-java-orange text-java-orange hover:bg-java-orange hover:text-white px-8 py-3"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <a href="https://github.com/asajwan811" target="_blank" 
    rel="noopener noreferrer" className="text-muted-foreground hover:text-java-orange text-xl transition-colors duration-200">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/abhinavj33t/" target="_blank" 
    rel="noopener noreferrer" className="text-muted-foreground hover:text-java-orange text-xl transition-colors duration-200">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:abhinavjeetsingh9@gmail.com" target="_blank" 
    rel="noopener noreferrer" className="text-muted-foreground hover:text-java-orange text-xl transition-colors duration-200">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace with dual monitors and coffee setup" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg border animate-float">
              <div className="flex items-center space-x-2">
                <i className="fas fa-coffee text-java-orange text-2xl"></i>
                <div>
                  <div className="font-semibold">Always Brewing</div>
                  <div className="text-sm text-muted-foreground">Quality Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
