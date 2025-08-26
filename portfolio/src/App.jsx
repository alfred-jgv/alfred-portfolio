import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import BlogsSection from './components/BlogsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-light">
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        isVisible={isVisible} 
      />
      
      <HeroSection 
        scrollToSection={scrollToSection} 
        isVisible={isVisible} 
      />
      
      <ExperienceSection />
      
      <ProjectsSection />
      
      <BlogsSection />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default App;