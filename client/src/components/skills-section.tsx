import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Register ScrollTrigger plugin if not already registered
gsap.registerPlugin(ScrollTrigger);

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      icon: "fab fa-java",
      title: "Core Java",
      description: "Java 17+, Multithreading",
      proficiency: 80,
      color: "text-java-orange",
      bgColor: "bg-java-orange/10"
    },
    {
      icon: "fas fa-leaf",
      title: "Spring Ecosystem",
      description: "Spring Boot, Security, Data JPA",
      proficiency: 70,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: "fas fa-cubes",
      title: "Database & Microservices",
      description: "MySQL, Docker, Hibernate",
      proficiency: 70,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud & DevOps",
      description: "AWS, CI/CD, Infrastructure as Code",
      proficiency: 30,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const technologies = [
    { icon: "fab fa-java", name: "Java", color: "text-java-orange" },
    { icon: "fas fa-leaf", name: "Spring", color: "text-green-500" },
    { icon: "fab fa-docker", name: "Docker", color: "text-blue-500" },
    { icon: "fa-regular fa-list-check", name: "Hibernate", color: "text-orange-500" },
    { icon: "fas fa-database", name: "MySQL", color: "text-gray-600 dark:text-gray-400" },
    { icon: "fa-solid fa-lock", name: "Security", color: "text-gray-600 dark:text-gray-400" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title and subtitle
      gsap.fromTo([titleRef.current, subtitleRef.current], 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate skill cards with stagger
      gsap.fromTo(".skill-card", 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate progress bars
      gsap.fromTo(".progress-bar", 
        { width: 0 },
        { 
          width: "100%", 
          duration: 1.5, 
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 65%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate technology icons
      gsap.fromTo(".tech-icon", 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Add hover animation to skill cards
      const skillCards = gsap.utils.toArray(".skill-card");
      skillCards.forEach((card: any) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            duration: 0.3
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3
          });
        });
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl lg:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p ref={subtitleRef} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastering the Java ecosystem and modern development practices to deliver enterprise-grade solutions
          </p>
        </div>
        
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="skill-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${skill.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${skill.icon} ${skill.color} text-2xl`}></i>
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Proficiency</span>
                    <span className="font-medium">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="progress-bar h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div ref={techRef}>
          <h3 className="text-2xl font-bold text-center mb-12">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`tech-icon w-12 h-12 mx-auto mb-2 flex items-center justify-center text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-200`}>
                  <i className={tech.icon}></i>
                </div>
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}