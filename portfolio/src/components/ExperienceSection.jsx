import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, Users, FileText } from 'lucide-react';

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);

  const experience = [
    {
      role: "Lead Information Officer",
      company: "AWS Cloud Club Philippines",
      location: "Remote",
      period: "Oct 2025 - Present",
      description: "Leading strategic communications and information management for the national AWS Cloud Club community. Overseeing cross-regional collaboration, mentorship programs, and nationwide event coordination. Implementing standardized communication frameworks across 40+ university chapters to enhance information flow and community engagement.",
      highlights: ["Strategic Leadership", "Cross-Regional Collaboration", "Community Building", "Mentorship"]
    },
    {
      role: "Assistant Secretary",
      company: "AWS Cloud Club - University of Cabuyao",
      location: "Cabuyao, Laguna",
      period: "Aug 2025 - Present",
      description: "Supporting executive operations and administrative functions for the university chapter. Facilitating inter-departmental coordination, managing official documentation, and ensuring efficient communication flow between leadership and members. Contributing to strategic planning and operational excellence initiatives.",
      highlights: ["Executive Support", "Administrative Management", "Strategic Coordination", "Documentation"]
    },
    {
      role: "Information Head Officer",
      company: "AWS Cloud Club - University of Cabuyao",
      location: "Cabuyao, Laguna",
      period: "Oct 2024 - Aug 2025", 
      description: "Spearheaded organizational transparency initiatives and digital transformation of club operations. Implemented comprehensive record management systems using Google Workspace, improving operational efficiency by 60%. Led cross-functional teams in managing official communication channels and information dissemination strategies.",
      highlights: ["Leadership", "Digital Transformation", "Information Management", "Process Optimization"]
    },
    {
      role: "Technical Blog Writer",
      company: "Self Initiated",
      location: "Remote",
      period: "Dec 2024 – Mar 2025",
      description: "Authored comprehensive technical articles focused on cloud architecture and AWS implementation strategies. Created in-depth tutorials covering serverless computing, containerization, and infrastructure-as-code practices. Built a growing readership through practical, hands-on guides that bridge theoretical concepts with real-world applications.",
      highlights: ["Technical Writing", "Cloud Architecture", "Best Practices", "Knowledge Sharing"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]));
            }, index * 150);
          }
        });
      },
      { threshold: 0.3 }
    );

    const experienceItems = sectionRef.current?.querySelectorAll('[data-index]');
    experienceItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative overflow-hidden" ref={sectionRef}>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-stone-100 rounded-full opacity-40 blur-2xl"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-8 h-[1px] bg-stone-300"></div>
            <Briefcase size={20} className="text-stone-400" />
            <div className="w-8 h-[1px] bg-stone-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-wider text-stone-800">
            Experience
          </h2>
          <p className="text-stone-500 mt-4 font-light">Leadership journey and professional contributions</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-stone-200 to-transparent"></div>
          
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <div 
                key={index}
                data-index={index}
                className={`relative group transition-all duration-1000 ease-out ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-x-0 translate-y-0' 
                    : 'opacity-0 translate-x-8 translate-y-4'
                }`}
              >
                {/* Timeline dot with role-specific icons */}
                <div className={`absolute left-[26px] w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-700 flex items-center justify-center ${
                  visibleItems.has(index) 
                    ? 'bg-stone-400 scale-100' 
                    : 'bg-stone-200 scale-75'
                }`}>
                  {index === 0 && <Users size={8} className="text-white" />}
                  {index === 1 && <FileText size={8} className="text-white" />}
                </div>

                {/* Experience card */}
                <div className="ml-20 group-hover:translate-x-2 transition-transform duration-500">
                  <div className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border transition-all duration-500 ${
                    index < 2 
                      ? 'border-blue-100 group-hover:border-blue-200 group-hover:shadow-lg' 
                      : 'border-stone-100 group-hover:border-stone-200 group-hover:shadow-lg'
                  }`}>
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-light text-stone-800 group-hover:text-stone-900 transition-colors">
                            {exp.role}
                          </h3>
                          {index < 2 && (
                            <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-stone-600 font-medium text-lg mb-1">{exp.company}</p>
                        <div className="flex items-center text-stone-500 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      <div className={`flex items-center px-3 py-2 rounded-full text-sm font-medium ${
                        index < 2 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'bg-stone-50 text-stone-500'
                      }`}>
                        <Calendar size={14} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-stone-600 leading-relaxed mb-6 text-base">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${
                            index < 2
                              ? 'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-100 group-hover:text-blue-700'
                              : 'bg-stone-100 text-stone-600 border-stone-200 group-hover:bg-stone-200 group-hover:text-stone-700'
                          }`}
                          style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career progression note */}
        <div className="mt-12 pt-8 border-t border-stone-100">
          <div className="flex items-center justify-center text-stone-500 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Current positions</span>
            </div>
            <div className="w-4 h-[1px] bg-stone-300 mx-4"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-stone-300 rounded-full"></div>
              <span>Previous experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;