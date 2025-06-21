import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Smart Contact Manager",
      description:
        "Spring Boot contact manager with OAuth2 auth, Spring Security RBAC & JDBC persistence for multi-user contacts.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Spring Boot", "MySQL", "JDBC", "OAuth 2.0"],
      year: "2025",
      badge: {
        text: "Enterprise Ready",
        icon: "fas fa-star",
        color: "bg-yellow-400",
      },
      githubUrl: "https://github.com/asajwan811/SCM.git"
    },
    {
      title: "Hospital Database Management System",
      description:
        "Robust management system to streamline patient records, and appointments for efficient healthcare delivery.",
      image:
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Spring Boot", "OOPS", "Hibernate", "MySQL"],
      year: "2024",
      badge: {
        text: "Secure & Scalable",
        icon: "fas fa-shield-alt",
        color: "bg-green-400",
      },
      githubUrl: "https://github.com/asajwan811/hospital-management-system-using-spring-boot-master.git"
    },
    {
      title: "Backend of IRCTC",
      description:
        "A console-based IRCTC ticket booking system in Java, ticket booking, cancellation, email verification, and ticket generation.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Java", "OOPS", "Data Structures", "CLI"],
      year: "2024",
      badge: {
        text: "Real-time",
        icon: "fas fa-bolt",
        color: "bg-java-orange",
      },
      githubUrl: "https://github.com/asajwan811/Backend-of-irctc-ticket-Generator.git"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of enterprise-grade Java applications demonstrating
            scalability, performance, and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={`${project.title} - Clean modern coding environment with multiple monitors displaying code`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-java-orange transition-colors duration-200"
                      title="View on GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <i
                        className={`${project.badge.icon} ${project.badge.color} mr-1`}
                      ></i>
                      {project.badge.text}
                    </span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/asajwan811/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-java-orange text-java-orange hover:bg-java-orange hover:text-white px-8 py-3"
            >
              <i className="fab fa-github mr-2"></i>
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}