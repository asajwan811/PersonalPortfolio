export function Footer() {
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

  const quickLinks = [
    { label: "Home", href: "home" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Experience", href: "experience" },
    { label: "Contact", href: "contact" }
  ];

  const updates = [
    { text: "Just completed a microservices workshop", time: "2 days ago" },
    { text: "New blog post about Spring Boot 3", time: "1 week ago" },
    { text: "Speaking at Java Conference 2024", time: "2 weeks ago" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-coffee text-java-orange text-xl"></i>
              <span className="font-bold text-xl">Alex Chen</span>
            </div>
            <p className="text-gray-400 mb-4">
              Senior Java Developer passionate about building scalable, maintainable, and high-performance applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-java-orange transition-colors duration-200">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-java-orange transition-colors duration-200">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-java-orange transition-colors duration-200">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Latest Updates</h4>
            <div className="space-y-3">
              {updates.map((update, index) => (
                <div key={index} className="text-sm">
                  <div className="text-gray-400">{update.text}</div>
                  <div className="text-xs text-gray-500">{update.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Alex Chen. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <i className="fas fa-coffee text-java-orange"></i>
            <span>Powered by Java</span>
            <span>•</span>
            <span>Built with ❤️ and ☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
