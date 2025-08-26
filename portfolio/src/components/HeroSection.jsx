import { ChevronDown, MapPin, Mail, Cloud, Code, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = ({ scrollToSection, isVisible }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const roles = [
    { text: "AWS Certified Cloud Practitioner", icon: Cloud, color: "text-blue-500" },
    { text: "Full Stack Developer", icon: Code, color: "text-emerald-500" },
    { text: "Android Developer", icon: Smartphone, color: "text-amber-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
      
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const currentRoleData = roles[currentRole];
  const IconComponent = currentRoleData.icon;

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-6xl font-extralight mb-6 tracking-wider">
            Jan Alfred G. Violanta
          </h1>
          
          {/* Animated role display with smoother transitions */}
          <div className="h-12 mb-6 flex items-center justify-center">
            <div className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 shadow-sm min-w-[300px]">
              <div className={`flex items-center space-x-3 transition-all duration-600 ease-in-out transform ${
                isTransitioning ? 'opacity-0 scale-95 translate-y-1' : 'opacity-100 scale-100 translate-y-0'
              }`}>
                <IconComponent size={20} className={`${currentRoleData.color} transition-colors duration-600`} />
                <span className="text-stone-700 font-medium text-sm md:text-base whitespace-nowrap">
                  {currentRoleData.text}
                </span>
              </div>
            </div>
          </div>

          {/* Certification link */}
          <a
            href="https://www.credly.com/badges/d287fc7b-ab3a-4f96-8671-0018766d9177/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-600 hover:underline transition-colors mb-6"
          >
            <Cloud size={16} className="mr-2" />
            View AWS Certification
          </a>
          
          <p className="text-xl text-stone-600 mb-8 font-light leading-relaxed">
            Computer Science undergraduate passionate about cloud computing and modern web development
          </p>
          
          <div className="flex items-center justify-center space-x-6 md:space-x-8 text-stone-500 mb-12 flex-wrap">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin size={16} />
              <span>Cabuyao City, Laguna</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Mail size={16} />
              <span>violantajanalfred40@gmail.com</span>
            </div>
          </div>
          
          <div className="prose prose-lg mx-auto text-stone-600 leading-relaxed max-w-2xl">
            <p>
              Motivated and detail-oriented Computer Science undergraduate with experience in android and react 
              development with a foundational certification in AWS Cloud Computing and hands-on experience in cloud-based 
              projects. Passionate about learning and contributing to software and technical support teams.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <button 
            onClick={() => scrollToSection('experience')}
            className="animate-bounce text-stone-400 hover:text-stone-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #737373 1px, transparent 1px),
                            linear-gradient(to bottom, #737373 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;