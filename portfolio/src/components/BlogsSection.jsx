import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, ExternalLink, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const BlogsSection = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(new Set());
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const blogs = [
    {
      title: "Building a Self-Destructing File Uploader with AWS Lambda, API Gateway, S3, and React",
      date: "Apr 10",
      year: "2025",
      description: "Serverless file handling system with intelligent automatic cleanup using modern AWS architecture patterns.",
      category: "AWS",
      tags: ["Lambda", "S3", "API Gateway"],
      readTime: "6 min read",
      url: "https://dev.to/alfred_ajv/building-a-self-destructing-file-uploader-with-aws-lambda-api-gateway-s3-and-react-23bn"
    },
    {
      title: "Enhancing Accessibility: Integrating Amazon Transcribe & Polly into an Assistive Menu",
      date: "Feb 25",
      year: "2025",
      description: "Revolutionary accessibility-first dining application integrating Amazon services for voice commands and audio feedback.",
      category: "AWS",
      tags: ["Transcribe", "Polly", "React"],
      readTime: "4 min read",
      url: "https://dev.to/alfred_ajv/enhancing-accessibility-integrating-amazon-transcribe-polly-into-an-assistive-menu-3ppf"
    },
    {
      title: "Amazon Lightsail: Instances, Access, and Best Practices",
      date: "Dec 20",
      year: "2024",
      description: "Comprehensive guide to Amazon Lightsail covering instances, access management, and operational best practices.",
      category: "AWS",
      tags: ["Lightsail", "Cloud", "Beginners"],
      readTime: "4 min read",
      url: "https://dev.to/alfred_ajv/amazon-lightsail-instances-access-and-best-practices-c1"
    },
    {
      title: "Coming Soon",
      date: "September",
      year: "2025",
      description: "Coming Soon",
      category: "Serverless",
      tags: ["Architecture", "AWS", "Best Practices"],
      readTime: "- - -",
      url: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleBlogs(prev => new Set([...prev, index]));
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const blogItems = sectionRef.current?.querySelectorAll('[data-index]');
    blogItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Handle scroll position and arrow visibility
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; // Scroll by 80% of container width
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="blogs" className="min-h-screen py-8 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-stone-50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-amber-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-100 rounded-full opacity-15 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[1px] bg-stone-300"></div>
            <BookOpen size={20} className="text-stone-400" />
            <div className="w-6 sm:w-8 h-[1px] bg-stone-300"></div>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extralight tracking-wider text-stone-800 mb-3 sm:mb-4 px-4">
            Latest Writings
          </h2>
          <p className="text-stone-500 font-light max-w-2xl mx-auto text-xs sm:text-base px-4">
            Technical insights, tutorials, and experiences from my development journey
          </p>
        </div>

        {/* Scrollable Blogs Container with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-stone-600" />
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-stone-600" />
            </button>
          )}

          {/* Blogs Horizontal Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide scroll-smooth snap-x snap-mandatory touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-4 sm:space-x-6 pl-4 sm:pl-0 pr-4">
              {blogs.map((blog, index) => (
                <article 
                  key={index}
                  data-index={index}
                  className={`group flex-shrink-0 w-[85vw] sm:w-96 border border-stone-200 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-3xl p-5 sm:p-8 shadow-sm hover:shadow-lg hover:border-stone-300 transition-all duration-500 overflow-hidden snap-start ${
                    visibleBlogs.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex flex-col gap-2 mb-3">
                        <span className="text-xs text-stone-500 uppercase tracking-wider font-medium bg-stone-100 px-2.5 py-1 rounded-full self-start">
                          {blog.category}
                        </span>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-stone-500 text-xs">
                            <Calendar size={12} className="mr-1" />
                            <span>{blog.date} '{blog.year.slice(2)}</span>
                          </div>
                          <div className="flex items-center text-stone-500 text-xs">
                            <Clock size={12} className="mr-1" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg sm:text-2xl font-light mb-3 group-hover:text-stone-900 transition-colors duration-300 leading-tight line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      <p className="text-stone-600 leading-relaxed font-light mb-4 text-sm sm:text-base line-clamp-3">
                        {blog.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {blog.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-stone-100 text-stone-700 text-xs rounded-full font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Read Article Button */}
                    <div className="pt-4 border-t border-stone-100 mt-auto">
                      <a 
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-stone-600 hover:text-stone-900 transition-colors duration-200 font-medium group/btn"
                      >
                        <BookOpen size={16} />
                        <span className="text-sm">Read on DEV</span>
                        <ExternalLink size={14} className="opacity-0 group-hover/btn:opacity-70 transition-opacity duration-200" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-16 px-4">
          <p className="text-stone-500 mb-4 sm:mb-6 text-xs sm:text-base">Want to read more of my writings?</p>
          <a 
            href="https://dev.to/alfred_ajv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 sm:px-8 py-2.5 sm:py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-xs sm:text-base"
          >
            <span>View All Articles on DEV.to</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default BlogsSection;