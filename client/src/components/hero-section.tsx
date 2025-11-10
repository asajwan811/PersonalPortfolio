import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Animate subtitle
      gsap.fromTo(subtitleRef.current, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          delay: 0.5
        }
      );

      // Animate buttons with stagger
      gsap.fromTo(".hero-btn", 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.8
        }
      );

      // Animate social icons
      gsap.fromTo(".social-icon", 
        { y: 15, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 1.2
        }
      );

      // Animate image with a subtle scale effect
      gsap.fromTo(imageRef.current, 
        { scale: 0.9, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power2.out",
          delay: 0.4
        }
      );

      // Animate floating badge with bounce effect
      gsap.fromTo(badgeRef.current, 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8, 
          ease: "elastic.out(1, 0.5)",
          delay: 1.5
        }
      );

      // Continuous floating animation for the badge
      gsap.to(badgeRef.current, {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      // Add GSAP smooth scroll
      gsap.to(window, {
        duration: 1.2,
        scrollTo: offsetPosition,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <section ref={heroRef} id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-java-orange font-medium">
                <i className="fas fa-code"></i>
                <span>Java Developer</span>
              </div>
              <h1 ref={titleRef} className="text-4xl lg:text-6xl font-bold leading-tight">
                Building Robust{" "}
                <span className="text-java-orange">Enterprise</span>{" "}
                Solutions
              </h1>
              <p ref={subtitleRef} className="text-xl text-muted-foreground leading-relaxed">
                3+ years crafting scalable Java applications with Spring Boot, microservices architecture, 
                and cloud-native technologies. Passionate about clean code and system optimization.
              </p>
            </div>
            
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="hero-btn bg-java-orange hover:bg-java-orange-light text-white px-8 py-3"
              >
                <i className="fas fa-briefcase mr-2"></i>
                View Projects
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="hero-btn border-java-orange text-java-orange hover:bg-java-orange hover:text-white px-8 py-3"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </Button>
            </div>
            
            <div ref={socialRef} className="flex items-center space-x-6 pt-4">
              <a href="https://github.com/asajwan811" target="_blank" 
    rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-java-orange text-xl transition-colors duration-200">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/abhinavj33t/" target="_blank" 
    rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-java-orange text-xl transition-colors duration-200">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:abhinavjeetsingh9@gmail.com" target="_blank" 
    rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-java-orange text-xl transition-colors duration-200">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace with dual monitors and coffee setup" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div ref={badgeRef} className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg border">
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