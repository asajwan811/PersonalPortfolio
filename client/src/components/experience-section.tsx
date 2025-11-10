import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      period: "June 2025 - Aug 2025",
      title: "Web Developer Internship",
      company: "Oxizun",
      description: "Keen on mastering MERN stack, focusing on ReactJs, PHP, and Javascript.",
      skills: ["Javascript", "ReactJs", "PHP"],
      icon: "fa-solid fa-building-user",
      color: "bg-java-orange",
      textColor: "text-java-orange"
    },
    {
      period: "2022 - Present",
      title: "Learning Phase",
      company: "",
      description: "Keen on mastering Java and its ecosystem, focusing on Spring Boot, microservices, and cloud technologies.",
      skills: ["Spring Boot", "Docker", "Cloud Services"],
      icon: "fas fa-user-tie",
      color: "bg-java-gray",
      textColor: "text-java-orange"
    },
    {
      period: "June 2023 - August 2023",
      title: "Java Developer Intern",
      company: "Solitaire Infosys.",
      description: "Developed 3+ scalable web application using Spring Boot and Hibernate, reducing server response time by 25%.",
      skills: ["Spring MVC", "MySQL", "Hibernate"],
      icon: "fas fa-code",
      color: "bg-java-blue",
      textColor: "text-java-blue"
    },
    {
      period: "2021 - 2022",
      title: "Started my Bachelors in Engineering as well as my Java Journey.",
      company: "Chandigarh University",
      description: "Started my Java journey building console-based java applications using OOPS.",
      skills: ["Core Java", "OOPS", "MySQL"],
      icon: "fas fa-laptop-code",
      color: "bg-coffee",
      textColor: "text-coffee"
    }
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

      // Animate timeline line
      gsap.fromTo(timelineLineRef.current, 
        { scaleY: 0, transformOrigin: "top center" },
        { 
          scaleY: 1, 
          duration: 1.5, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate timeline icons with stagger
      gsap.fromTo(".timeline-icon", 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.3,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animate timeline cards with stagger
      gsap.fromTo(".timeline-card", 
        { x: (index) => index % 2 === 0 ? -50 : 50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 65%",
            toggleActions: "play none none none"
          }
        }
      );

      // Add hover animations to cards
      const cards = gsap.utils.toArray(".timeline-card");
      cards.forEach((card: any) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            duration: 0.3,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          });
        });
      });

      // Pulse animation for timeline icons
      gsap.to(".timeline-icon", {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl lg:text-4xl font-bold mb-4">Professional Journey</h2>
          <p ref={subtitleRef} className="text-xl text-muted-foreground">
            3+ years of progressive experience in Java development and system architecture
          </p>
        </div>
        
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div 
            ref={timelineLineRef}
            className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-java-orange to-java-blue"
          ></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-shrink-0 w-16 h-16 ${exp.color} rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10 md:mx-auto timeline-icon`}>
                  <i className={exp.icon}></i>
                </div>
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <Card className="shadow-lg timeline-card">
                    <CardContent className="p-6">
                      <div className={`${exp.textColor} font-semibold text-sm mb-1`}>{exp.period}</div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      {exp.company && (
                        <div className="text-muted-foreground font-medium mb-3">{exp.company}</div>
                      )}
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="text-xs skill-badge"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}