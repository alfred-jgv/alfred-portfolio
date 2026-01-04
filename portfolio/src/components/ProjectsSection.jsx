import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Folder, Cloud, Smartphone, Globe, Database, ShoppingCart, FileText, CheckSquare, Github, Server, Loader, Cpu, Brain } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Cloud Load Balancing Simulation System",
      description: "Advanced load balancing simulator implementing Particle Swarm Optimization (PSO) and Ant Colony Optimization (ACO) algorithms for intelligent workload distribution based on Google cluster traces.",
      longDescription: "A research-grade simulation platform that demonstrates advanced metaheuristic algorithms for cloud load balancing. Implements Particle Swarm Optimization (PSO) and Ant Colony Optimization (ACO) to optimize server resource allocation using real Google cluster workload data. Features include real-time algorithm performance comparison, dynamic workload distribution visualization, server health monitoring, and comprehensive performance metrics analysis.",
      tech: ["React", "Tailwind CSS", "JavaScript", "PSO Algorithm", "ACO Algorithm", "Load Balancing Concepts"],
      categories: ["cloud", "web"],
      icon: Cpu,
      featured: true,
      status: "COMPLETED",
      github: "https://github.com/Thesis-It-PLSE1117/Final-Thesis-System-Repo"
    },
    {
      title: "Self-Destructing File Uploader",
      description: "Serverless file handling system with intelligent automatic cleanup. Features secure upload endpoints, time-based file deletion, and comprehensive error handling using modern AWS architecture patterns.",
      longDescription: "A sophisticated cloud-native solution that demonstrates advanced serverless patterns. Implements secure file upload workflows with automatic cleanup mechanisms, featuring JWT authentication, presigned URLs, and Lambda-based processing pipelines.",
      tech: ["React", "Tailwind CSS", "AWS Lambda", "S3", "API Gateway"],
      categories: ["cloud", "web"],
      icon: Cloud,
      featured: true,
      status: "COMPLETED",
      github: "https://github.com/alfred-jgv/self-destructing-file-app"
    },
    {
      title: "Accessible Menu with AI Integration",
      description: "Revolutionary accessibility-first dining application integrating Amazon Transcribe for voice commands and Polly for audio feedback, making restaurant menus universally accessible.",
      longDescription: "An innovative React application that breaks down accessibility barriers in dining experiences. Features real-time voice recognition, text-to-speech capabilities, and adaptive UI components designed for users with visual or motor impairments.",
      tech: ["React", "Tailwind CSS", "Amazon Transcribe", "Polly", "AWS SDK"],
      categories: ["ai", "web", "cloud"],
      icon: Brain,
      featured: true,
      status: "COMPLETED",
      github: "https://github.com/alfred-jgv/accessibility-menu-proj"
    },
    {
      title: "Campus Cavern E-Commerce",
      description: "Comprehensive e-commerce platform specifically designed for educational institutions. Enables campus organizations to create digital storefronts and sell branded merchandise to students, faculty, and alumni.",
      longDescription: "A full-featured marketplace built for the unique needs of campus communities. Features multi-vendor capabilities, organization-specific storefronts, integrated payment processing, and robust inventory management tailored for educational environments.",
      tech: ["React", "Tailwind CSS", "Vite", "Bootstrap"],
      categories: ["web"],
      icon: ShoppingCart,
      featured: false,
      status: "COMPLETED",
      github: "https://github.com/alfred-jgv/campus-cavern",
      teamSize: "CSA-7 Development Team"
    },
    {
      title: "Cake & Roll - Firebase CRUD",
      description: "Full-featured Android application for pastry shop management built with Kotlin. Implements comprehensive CRUD operations with real-time Firebase Firestore integration and secure user authentication.",
      longDescription: "A production-quality Android app showcasing modern mobile development practices. Features real-time database synchronization, offline capability, user authentication flows, and intuitive material design components for seamless inventory management.",
      tech: ["Kotlin", "Android Studio", "Firebase Firestore", "Firebase Auth", "Material Design"],
      categories: ["mobile"],
      icon: Smartphone,
      featured: false,
      status: "Learning Project",
      github: "https://github.com/alfred-jgv/cake-and-roll"
    },
    {
      title: "Note App with Smart Checklists",
      description: "Personal productivity Android application featuring dual-mode functionality for both traditional notes and interactive checklists. Built with SQLite for reliable offline data persistence.",
      longDescription: "A thoughtfully designed productivity app that combines note-taking with task management. Features advanced search capabilities, local data encryption, and an intuitive UI that adapts to different content types while maintaining optimal performance.",
      tech: ["Kotlin", "Android Studio", "SQLite", "Material Components", "Room Database"],
      categories: ["mobile"],
      icon: CheckSquare,
      featured: false,
      status: "Personal Project",
      github: "https://github.com/alfred-jgv/note-app"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'cloud', label: 'Cloud Solutions', count: projects.filter(p => p.categories.includes('cloud')).length },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.categories.includes('mobile')).length },
    { id: 'web', label: 'Web Applications', count: projects.filter(p => p.categories.includes('web')).length },
    { id: 'ai', label: 'AI Integration', count: projects.filter(p => p.categories.includes('ai')).length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleProjects(prev => new Set([...prev, index]));
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectItems = sectionRef.current?.querySelectorAll('[data-index]');
    projectItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredProjects]);

  // Helper function to display categories
  const getCategoryLabels = (categories) => {
    const labels = {
      'cloud': 'Cloud Solution',
      'web': 'Web Application',
      'mobile': 'Mobile App',
      'ai': 'AI Integration'
    };
    return categories.map(cat => labels[cat]).join(' • ');
  };

  return (
    <section id="projects" className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-stone-50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-100 rounded-full opacity-15 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[1px] bg-stone-300"></div>
            <Folder size={20} className="text-stone-400" />
            <div className="w-6 sm:w-8 h-[1px] bg-stone-300"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-wider text-stone-800 mb-3 sm:mb-4 px-4">
            Projects
          </h2>
          <p className="text-stone-500 font-light max-w-2xl mx-auto text-sm sm:text-base px-4">
            A showcase of innovative solutions spanning cloud architecture, mobile development, and AI integration
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex-shrink-0 ${
                activeFilter === category.id
                  ? 'bg-stone-800 text-white shadow-lg'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <span className="hidden sm:inline">{category.label}</span>
              <span className="sm:hidden">
                {category.label.split(' ')[0]}
                {category.label.includes('Applications') ? ' Apps' : 
                 category.label.includes('Solutions') ? ' Sol.' : 
                 category.label.includes('Integration') ? ' AI' : ''}
              </span>
              <span className="ml-1 sm:ml-2 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 sm:space-y-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-stone-500">No projects found in this category.</p>
            </div>
          ) : (
            <>
              {/* Featured Projects */}
              {filteredProjects.filter(p => p.featured).length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {filteredProjects.filter(p => p.featured).map((project, index) => {
                    const IconComponent = project.icon;
                    const originalIndex = projects.findIndex(p => p.title === project.title);
                    return (
                      <div 
                        key={`${project.title}-${activeFilter}-${index}`}
                        data-index={originalIndex}
                        className={`group relative transition-all duration-700 ease-out ${
                          visibleProjects.has(originalIndex) 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8'
                        }`}
                      >
                        {/* Featured badge */}
                        <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 z-10">
                          <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white text-xs px-2 sm:px-3 py-1 rounded-full shadow-lg">
                            Featured
                          </div>
                        </div>

                        {/* Project Card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-100 group-hover:shadow-xl group-hover:border-stone-200 group-hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                          
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4 sm:mb-6">
                            <div className="flex items-center space-x-3 min-w-0 flex-1">
                              <div className="p-2 sm:p-3 bg-stone-100 rounded-xl sm:rounded-2xl group-hover:bg-stone-200 transition-colors duration-300 flex-shrink-0">
                                <IconComponent size={20} className="text-stone-600 sm:w-6 sm:h-6" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className="text-xs text-stone-500 font-medium uppercase tracking-wider block truncate">
                                  {getCategoryLabels(project.categories)}
                                </span>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                                    project.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                                    project.status === 'Learning Project' ? 'bg-blue-100 text-blue-700' :
                                    project.status === 'Personal Project' ? 'bg-purple-100 text-purple-700' :
                                    'bg-stone-100 text-stone-600'
                                  }`}>
                                    {project.status}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-grow">
                            <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 text-stone-800 group-hover:text-stone-900 transition-colors duration-300 leading-tight">
                              {project.title}
                            </h3>
                            
                            <p className="text-stone-600 leading-relaxed font-light mb-4 sm:mb-6 text-sm sm:text-base">
                              {project.longDescription || project.description}
                            </p>

                            {project.teamSize && (
                              <p className="text-xs text-stone-500 mb-4 italic">
                                Developed by: {project.teamSize}
                              </p>
                            )}
                          </div>

                          {/* Tech Stack */}
                          <div className="mb-4 sm:mb-6">
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="px-2 sm:px-3 py-1 bg-stone-100 text-stone-700 text-xs rounded-full font-medium group-hover:bg-stone-200 transition-all duration-300 whitespace-nowrap"
                                  style={{ transitionDelay: `${techIndex * 50}ms` }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="mt-auto">
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors duration-200 font-medium group-hover:opacity-100 opacity-70"
                            >
                              <Github size={16} />
                              <span className="text-sm">View on GitHub</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Regular Projects */}
              {filteredProjects.filter(p => !p.featured).length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredProjects.filter(p => !p.featured).map((project, index) => {
                    const IconComponent = project.icon;
                    const originalIndex = projects.findIndex(p => p.title === project.title);
                    return (
                      <div 
                        key={`${project.title}-${activeFilter}-${index}`}
                        data-index={originalIndex}
                        className={`group relative transition-all duration-700 ease-out ${
                          visibleProjects.has(originalIndex) 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8'
                        }`}
                      >
                        {/* Project Card */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-100 group-hover:shadow-xl group-hover:border-stone-200 group-hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                          
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4 sm:mb-6">
                            <div className="flex items-center space-x-3 min-w-0 flex-1">
                              <div className="p-2 sm:p-3 bg-stone-100 rounded-xl sm:rounded-2xl group-hover:bg-stone-200 transition-colors duration-300 flex-shrink-0">
                                <IconComponent size={20} className="text-stone-600 sm:w-6 sm:h-6" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className="text-xs text-stone-500 font-medium uppercase tracking-wider block truncate">
                                  {getCategoryLabels(project.categories)}
                                </span>
                                <div className="flex items-center space-x-2 mt-1">
                                  <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                                    project.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                                    project.status === 'Learning Project' ? 'bg-blue-100 text-blue-700' :
                                    project.status === 'Personal Project' ? 'bg-purple-100 text-purple-700' :
                                    'bg-stone-100 text-stone-600'
                                  }`}>
                                    {project.status}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-grow">
                            <h3 className="text-xl font-light mb-3 sm:mb-4 text-stone-800 group-hover:text-stone-900 transition-colors duration-300 leading-tight">
                              {project.title}
                            </h3>
                            
                            <p className="text-stone-600 leading-relaxed font-light mb-4 sm:mb-6 text-sm">
                              {project.description}
                            </p>

                            {project.teamSize && (
                              <p className="text-xs text-stone-500 mb-4 italic">
                                Developed by: {project.teamSize}
                              </p>
                            )}
                          </div>

                          {/* Tech Stack */}
                          <div className="mb-4 sm:mb-6">
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="px-2 sm:px-3 py-1 bg-stone-100 text-stone-700 text-xs rounded-full font-medium group-hover:bg-stone-200 transition-all duration-300 whitespace-nowrap"
                                  style={{ transitionDelay: `${techIndex * 50}ms` }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="mt-auto">
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors duration-200 font-medium group-hover:opacity-100 opacity-70"
                            >
                              <Github size={16} />
                              <span className="text-sm">View on GitHub</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <p className="text-stone-500 mb-4 sm:mb-6 text-sm sm:text-base">Interested in seeing more of my work?</p>
          <a 
            href="https://github.com/alfred-jgv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <span>View Full Portfolio on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;