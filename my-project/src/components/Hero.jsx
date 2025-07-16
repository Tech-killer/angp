import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useTranslation();
  const [displayedItems, setDisplayedItems] = useState({
    importantLinks: [],
    notifications: [],
    employeeCorner: [],
    dignitaries: []
  });
  const [selectedImage, setSelectedImage] = useState(null);

  // All available items for each section
  const allItems = {
    importantLinks: [
      { id: 1, icon: '✓', color: 'text-green-600', text: t('hero.nucleusBudgetScheme') },
      { id: 2, icon: '✓', color: 'text-green-600', text: t('hero.hostelAdmission') },
      { id: 3, icon: '✓', color: 'text-green-600', text: t('hero.scholarship') },
      { id: 4, icon: '🔗', color: 'text-blue-600', text: t('hero.casteVerification') },
      { id: 5, icon: '📄', color: 'text-purple-600', text: t('hero.eTender') },
      { id: 6, icon: '🏢', color: 'text-red-600', text: t('hero.atcNagpur') },
      { id: 7, icon: '▶️', color: 'text-red-600', text: t('hero.navchaitanyaChannel') }
    ],
    notifications: [
      { id: 1, gradient: 'from-blue-50 to-indigo-50', hover: 'from-indigo-50 to-blue-50', 
        border: 'border-blue-200', hoverBorder: 'border-blue-300', color: 'text-blue-700', 
        title: t('hero.recruitmentAdvertisement') },
      { id: 2, gradient: 'from-purple-50 to-pink-50', hover: 'from-pink-50 to-purple-50', 
        border: 'border-purple-200', hoverBorder: 'border-purple-300', color: 'text-purple-700', 
        title: t('hero.directServiceRecruitment2024List') },
      { id: 3, gradient: 'from-yellow-50 to-orange-50', hover: 'from-orange-50 to-yellow-50', 
        border: 'border-yellow-200', hoverBorder: 'border-yellow-300', color: 'text-orange-700', 
        title: t('hero.nucleusBudget') },
      { id: 4, gradient: 'from-teal-50 to-cyan-50', hover: 'from-cyan-50 to-teal-50', 
        border: 'border-teal-200', hoverBorder: 'border-teal-300', color: 'text-teal-700', 
        title: t('hero.seniorityList') }
    ],
    employeeCorner: [
      { id: 1, icon: '✓', text: t('hero.seniorityList') },
      { id: 2, icon: '📋', text: t('hero.leavePolicy') }
    ],
    dignitaries: [
      { id: 1, image: "https://atcnagpur.com/images/manyawar_eng_0.jpeg", title: t('hero.chiefGuest') },
    ]
  };

  // Number of items to show at a time in each section
  const visibleCount = {
    importantLinks: 3,
    notifications: 2,
    employeeCorner: 1,
    dignitaries: 2 // Show all dignitaries at once
  };

  // Initialize all sections with items immediately
  useEffect(() => {
    const initialItems = {};
    
    Object.keys(allItems).forEach(section => {
      initialItems[section] = allItems[section].slice(0, visibleCount[section]);
    });
    
    setDisplayedItems(initialItems);
  }, []);

  // Cycling effect for sections except dignitaries
  useEffect(() => {
    const sectionsToCycle = ['importantLinks', 'notifications', 'employeeCorner'];
    const intervals = {};
    
    sectionsToCycle.forEach(section => {
      let currentIndex = 0;
      
      intervals[section] = setInterval(() => {
        setDisplayedItems(prev => {
          // Get the next items to display
          const nextItems = [];
          for (let i = 0; i < visibleCount[section]; i++) {
            const itemIndex = (currentIndex + i) % allItems[section].length;
            nextItems.push(allItems[section][itemIndex]);
          }
          
          return {
            ...prev,
            [section]: nextItems
          };
        });
        
        currentIndex = (currentIndex + 1) % allItems[section].length;
      }, 3000); // Rotate every 3 seconds
    });

    return () => {
      Object.keys(intervals).forEach(section => {
        clearInterval(intervals[section]);
      });
    };
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full bg-page-pattern min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Important Links */}
          <div className="glass-card rounded-2xl shadow-lg p-6 gov-card-hover border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-orange-600">{t('hero.importantLinks')}</h2>
              <span className="government-orange text-white text-xs font-semibold px-3 py-1 rounded-full shadow uppercase tracking-wider">{t('hero.new')}</span>
            </div>
            <div className="space-y-2 min-h-[200px]">
              {displayedItems.importantLinks.length > 0 ? (
                displayedItems.importantLinks.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center space-x-2 py-2 px-3 border-b border-orange-100 hover:bg-orange-50 rounded-lg transition-all cursor-pointer group animate-fadeIn"
                  >
                    <span className={`${item.color} text-lg group-hover:scale-110 transition-transform`}>{item.icon}</span>
                    <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900">{item.text}</span>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-pulse flex space-x-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 rounded-xl border border-orange-200 shadow-inner">
              <div className="text-center">
                <p className="text-xs font-semibold text-gray-800 mb-1">{t('hero.forTribalBoysGirls')}</p>
                <p className="text-md font-bold text-orange-600">{t('hero.tollFree')}: 1800 267 0007</p>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="space-y-6 flex flex-col">
            {/* Latest Notifications */}
            <div className="glass-card rounded-2xl shadow-lg p-6 gov-card-hover border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-blue-600">{t('hero.latestNotifications')}</h2>
                <span className="government-blue text-white text-xs font-semibold px-3 py-1 rounded-full shadow uppercase tracking-wider">{t('hero.new')}</span>
              </div>
              <div className="space-y-3 min-h-[150px]">
                {displayedItems.notifications.length > 0 ? (
                  displayedItems.notifications.map((item) => (
                    <div 
                      key={item.id}
                      className={`p-3 bg-gradient-to-r ${item.gradient} rounded-xl hover:bg-gradient-to-r ${item.hover} transition-all border ${item.border} hover:${item.hoverBorder} cursor-pointer animate-fadeIn`}
                    >
                      <h3 className="font-semibold text-gray-800 text-xs mb-1 group-hover:${item.color}">{item.title}</h3>
                      <p className="text-xs text-gray-600">{t('hero.contentLoading')}</p>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col space-y-2">
                    {[...Array(visibleCount.notifications)].map((_, i) => (
                      <div key={i} className="animate-pulse h-16 bg-gray-100 rounded-xl"></div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Employee Corner */}
            <div className="glass-card rounded-2xl shadow-lg p-6 gov-card-hover border border-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 opacity-10 rounded-xl"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow">
                      <span className="text-white text-sm">👤</span>
                    </div>
                    <h3 className="text-lg font-bold text-green-700">{t('hero.employeeCorner')}</h3>
                  </div>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow animate-pulse uppercase">
                    {t('hero.new')}
                  </span>
                </div>
                
                <div className="min-h-[80px]">
                  {displayedItems.employeeCorner.length > 0 ? (
                    displayedItems.employeeCorner.map((item) => (
                      <div 
                        key={item.id}
                        className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 border border-green-200 hover:border-green-300 transition-all animate-fadeIn"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow">
                            <span className="text-white text-xs">{item.icon}</span>
                          </div>
                          <span className="text-xs font-semibold text-gray-800">{item.text}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="animate-pulse h-16 bg-gray-100 rounded-xl"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Dignitaries */}
          <div className="glass-card rounded-2xl shadow-lg p-6 gov-card-hover border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-purple-600">{t('hero.dignitaries')}</h2>
              <span className="government-purple text-white text-xs font-semibold px-3 py-1 rounded-full shadow uppercase tracking-wider">{t('hero.new')}</span>
            </div>

            <div className="min-h-[250px] space-y-4">
              {displayedItems.dignitaries.length > 0 ? (
                displayedItems.dignitaries.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200 hover:border-purple-300 transition-all animate-fadeIn cursor-pointer"
                    onClick={() => handleImageClick(item.image)}
                  >
                    <div className="flex flex-col items-center text-center">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-auto rounded-xl object-contain shadow border border-purple-200 hover:border-purple-300 transition-colors"
                        loading="lazy"
                      />
                      <p className="mt-2 text-sm font-medium text-gray-800">{item.title}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col space-y-4">
                  {[...Array(visibleCount.dignitaries)].map((_, i) => (
                    <div key={i} className="animate-pulse h-32 bg-gray-100 rounded-xl"></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button 
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
              onClick={closeModal}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Full view" 
              className="w-full h-full object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
      
      {/* Add this to your CSS or Tailwind config */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;