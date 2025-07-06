import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const Slider = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left

  // Photos of Nagpur tribal people
  const tribalPhotos = [
    {
      id: 1,
      src: "https://atcnagpur.com/people_achievements/2025051204492925Bhaskar%20Halami.png",
      title: "Bhaskar Halami",
      description: "Educational Excellence Achievement",
      location: "Nagpur District"
    },
    {
      id: 2,
      src: "https://atcnagpur.com/images/manyawar_eng_0.jpeg",
      title: "Community Leader",
      description: "Tribal Development Initiative",
      location: "Maharashtra"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      title: "Cultural Heritage",
      description: "Traditional Arts & Crafts",
      location: "Tribal Village"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594736797933-d0c6e1d48b11?w=400&h=300&fit=crop",
      title: "Youth Empowerment",
      description: "Education & Skill Development",
      location: "Nagpur Region"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      title: "Women's Progress",
      description: "Self Help Group Success",
      location: "Tribal Community"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      title: "Agricultural Innovation",
      description: "Modern Farming Techniques",
      location: "Rural Nagpur"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: "Health Initiative",
      description: "Community Healthcare Program",
      location: "Tribal Area"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      title: "Digital Literacy",
      description: "Technology Training Program",
      location: "Nagpur District"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isHovered) return;

    const autoScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const cardWidth = 320 + 24; // card width + gap
      
      // Check if we've reached the end or beginning
      if (scrollDirection === 1 && scrollLeft + clientWidth >= scrollWidth - 10) {
        setScrollDirection(-1); // Reverse direction
      } else if (scrollDirection === -1 && scrollLeft <= 10) {
        setScrollDirection(1); // Reverse direction
      }
      
      // Smooth scroll
      container.scrollBy({
        left: scrollDirection * 1, // Slow scroll speed
        behavior: 'auto'
      });
    };

    const intervalId = setInterval(autoScroll, 20); // Smooth animation every 20ms

    return () => clearInterval(intervalId);
  }, [isHovered, scrollDirection]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-wide">
            Our Community Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating the achievements and progress of tribal communities in Nagpur and surrounding regions.
          </p>
        </div>

        {/* Scrolling Photos Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-20 pointer-events-none"></div>
          
          {/* Scrollable container with auto-scroll */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto pb-4 px-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {tribalPhotos.map((photo) => (
              <div
                key={photo.id}
                className="flex-shrink-0 w-80 group cursor-pointer"
                style={{ minWidth: '320px' }}
              >
                {/* Photo Card */}
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-gray-300 transform hover:scale-105">
                  {/* Photo */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Location Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                        📍 {photo.location}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {photo.description}
                    </p>
                    
                    {/* Action Button */}
                    <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-200">
                      View Story
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-Scroll Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <span className="text-sm text-gray-600 font-medium">
              {isHovered ? 'Auto-scroll paused - hover to control' : 'Auto-scrolling stories'}
            </span>
            <div className="flex space-x-1">
              <span className={`w-2 h-2 bg-orange-400 rounded-full ${!isHovered ? 'animate-pulse' : ''}`}></span>
              <span className={`w-2 h-2 bg-orange-300 rounded-full ${!isHovered ? 'animate-pulse delay-100' : ''}`}></span>
              <span className={`w-2 h-2 bg-orange-200 rounded-full ${!isHovered ? 'animate-pulse delay-200' : ''}`}></span>
            </div>
            {isHovered && (
              <span className="text-xs text-gray-500">⏸️</span>
            )}
            {!isHovered && (
              <span className="text-xs text-gray-500">▶️</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
