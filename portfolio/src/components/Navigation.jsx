import { Mail, Briefcase, Folder, BookOpen, User } from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection, isVisible }) => {
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'blogs', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-extralight tracking-wide transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Jan Alfred G. Violanta
          </div>
          
          {/* Navigation */}
          <div className="flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }, index) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`group flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 hover:bg-stone-100/50 ${
                  activeSection === id ? 'text-stone-900 bg-stone-100' : 'text-stone-600 hover:text-stone-800'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(-10px)'
                }}
              >
                <Icon size={16} className="transition-all duration-300" />
                <span className="text-sm font-light tracking-wide">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;