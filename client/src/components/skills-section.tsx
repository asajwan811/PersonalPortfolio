import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const skills = [
    {
      icon: "fab fa-java",
      title: "Core Java",
      description: "Java 17+, JVM Optimization, Multithreading",
      proficiency: 95,
      color: "text-java-orange",
      bgColor: "bg-java-orange/10"
    },
    {
      icon: "fas fa-leaf",
      title: "Spring Ecosystem",
      description: "Spring Boot, Security, Data JPA",
      proficiency: 92,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: "fas fa-cubes",
      title: "Microservices",
      description: "Docker, Kubernetes, Service Mesh",
      proficiency: 88,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud & DevOps",
      description: "AWS, CI/CD, Infrastructure as Code",
      proficiency: 85,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const technologies = [
    { icon: "fab fa-java", name: "Java", color: "text-java-orange" },
    { icon: "fas fa-leaf", name: "Spring", color: "text-green-500" },
    { icon: "fab fa-docker", name: "Docker", color: "text-blue-500" },
    { icon: "fab fa-aws", name: "AWS", color: "text-orange-500" },
    { icon: "fas fa-database", name: "PostgreSQL", color: "text-gray-600 dark:text-gray-400" },
    { icon: "fas fa-fire", name: "Redis", color: "text-red-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastering the Java ecosystem and modern development practices to deliver enterprise-grade solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`w-12 h-12 mx-auto mb-2 flex items-center justify-center text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-200`}>
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
