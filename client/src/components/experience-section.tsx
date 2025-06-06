import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const experiences = [
    {
      period: "2022 - Present",
      title: "Senior Java Developer",
      company: "TechCorp Solutions",
      description: "Leading a team of 5 developers in architecting microservices-based solutions. Improved system performance by 40% and reduced deployment time by 60%.",
      skills: ["Spring Boot", "Kubernetes", "AWS"],
      icon: "fas fa-user-tie",
      color: "bg-java-orange",
      textColor: "text-java-orange"
    },
    {
      period: "2019 - 2022",
      title: "Java Developer",
      company: "Enterprise Systems Inc.",
      description: "Developed and maintained enterprise Java applications serving 10K+ users. Implemented RESTful APIs and optimized database queries resulting in 50% faster response times.",
      skills: ["Spring MVC", "PostgreSQL", "Redis"],
      icon: "fas fa-code",
      color: "bg-java-blue",
      textColor: "text-java-blue"
    },
    {
      period: "2016 - 2019",
      title: "Junior Java Developer",
      company: "StartupTech",
      description: "Started my Java journey building web applications with Spring Framework. Collaborated with cross-functional teams to deliver features on tight deadlines.",
      skills: ["Core Java", "Spring", "MySQL"],
      icon: "fas fa-laptop-code",
      color: "bg-coffee",
      textColor: "text-coffee"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-xl text-muted-foreground">
            8+ years of progressive experience in Java development and system architecture
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-java-orange"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-shrink-0 w-16 h-16 ${exp.color} rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10 md:mx-auto`}>
                  <i className={exp.icon}></i>
                </div>
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <div className={`${exp.textColor} font-semibold text-sm mb-1`}>{exp.period}</div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <div className="text-muted-foreground font-medium mb-3">{exp.company}</div>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
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
