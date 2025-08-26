import { useState, useEffect } from 'react';
import { Mail, Briefcase, Folder, BookOpen, User, Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection, isVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'blogs', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a nav item
  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-stone-200' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Name/Logo - Only show on larger screens */}
            <div className={`text-xl sm:text-2xl font-extralight tracking-wide transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} hidden md:block`}>
              JGV
            </div>
            
            {/* Desktop Navigation - Icons with labels */}
            <div className="hidden md:flex space-x-4 lg:space-x-6">
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
            
            {/* Mobile Navigation - Icons only */}
            <div className="flex md:hidden space-x-2">
              {navItems.slice(0, 3).map(({ id, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    activeSection === id ? 'text-stone-900 bg-stone-100' : 'text-stone-600 hover:text-stone-800'
                  }`}
                >
                  <Icon size={18} />
                </button>
              ))}
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full text-stone-600 hover:text-stone-800 hover:bg-stone-100 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className={`fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-md z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 border-b border-stone-200">
              <div className="text-xl font-extralight tracking-wide">
                Jan Alfred G. Violanta
              </div>
            </div>
            
            <div className="p-4 space-y-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === id ? 'bg-stone-100 text-stone-900' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-light">{label}</span>
                </button>
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-stone-200">
              <div className="text-xs text-stone-500 text-center">
                © {new Date().getFullYear()} Jan Alfred G. Violanta
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;