import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);

  const experience = [
    {
      role: "Information Officer",
      company: "AWS Cloud Club Philippines",
      location: "Remote",
      period: "Aug 2024 - Present",
      description: "Led digital communication strategy for a 5,000+ member community, disseminating critical learning resources and AWS certification updates. Orchestrated multi-channel content distribution across social platforms, increasing engagement rates by 40%. Coordinated nationwide event communications and maintained real-time updates on emerging AWS services and best practices.",
      highlights: ["Community Management", "Information Management", "Leadership"]
    },
    {
      role: "Technical Blog Writer",
      company: "Self Initiated",
      location: "Remote",
      period: "Dec 2024 – Mar 2025",
      description: "Authored comprehensive technical articles focused on cloud architecture and AWS implementation strategies. Created in-depth tutorials covering serverless computing, containerization, and infrastructure-as-code practices. Built a growing readership through practical, hands-on guides that bridge theoretical concepts with real-world applications.",
      highlights: ["Technical Writing", "Cloud Architecture", "Best Practices"]
    },
    {
      role: "Information Head Officer",
      company: "AWS Cloud Club - University of Cabuyao",
      location: "Cabuyao, Laguna",
      period: "Oct 2024 - Aug 2025", 
      description: "Spearheaded organizational transparency initiatives and digital transformation of club operations. Implemented comprehensive record management systems using Google Workspace, improving operational efficiency by 60%. Led cross-functional teams in managing official communication channels.",
      highlights: ["Leadership", "Digital Transformation", "Information Management"]
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
          <p className="text-stone-500 mt-4 font-light">Professional journey and contributions</p>
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
                {/* Timeline dot */}
                <div className={`absolute left-[26px] w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-700 ${
                  visibleItems.has(index) 
                    ? 'bg-stone-400 scale-100' 
                    : 'bg-stone-200 scale-75'
                }`}></div>

                {/* Experience card */}
                <div className="ml-20 group-hover:translate-x-2 transition-transform duration-500">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-stone-100 group-hover:shadow-lg group-hover:border-stone-200 transition-all duration-500">
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-light text-stone-800 mb-2 group-hover:text-stone-900 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-stone-600 font-medium text-lg mb-1">{exp.company}</p>
                        <div className="flex items-center text-stone-500 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      <div className="flex items-center text-stone-500 bg-stone-50 px-3 py-2 rounded-full text-sm font-medium">
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
                          className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full border border-stone-200 group-hover:bg-stone-200 group-hover:text-stone-700 transition-all duration-300"
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
      </div>
    </section>
  );
};

export default ExperienceSection;