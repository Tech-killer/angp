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

  // Photo gallery with 9 frames - split into 5 circular (top) and 4 rectangular (bottom)
  const photoGallery = [
    { id: 1, image: "https://myneta.info/images_candidate/mynetai_ews5maharashtra2019/67b59abc851d0d6f8471c452ce52be9ea1355795.jpeg", title: "Dr. Ashok Ramji Uike", category: "Hon'ble Minister, Tribal Development." },
    { id: 2, image: "https://i.ibb.co/VYwWm4K9/0-C771-B18-89-CC-4551-9-D6-D-3-AB25-DA30-D2-C.png", title: "Shri. Indranil Manoharrao Naik", category: "Hon'ble State Minister, Tribal Development Department." },
    { id: 3, image: "https://atcnagpur.com/images/VijayWaghmare.jpg", title: " Shri. Vijay Waghmare (IAS)", category: "Hon'ble Secretary, Tribal Development Department, Maharashtra." },
    { id: 4, image: "https://atcnagpur.com/images/leena_bansod.png", title: "Smt. Leena Bansod (IAS)", category: " Hon'ble Commissioner, Maharashtra." },
    { id: 5, image: "https://atcnagpur.com/images/ayushi_singh.png", title: "Smt. Ayushi Singh, (IAS)", category:"Hon'ble Additional Tribal Commissioner, Nagpur, Maharashtra." },
    { id: 6, image: "https://cdnbbsr.s3waas.gov.in/s3c8758b517083196f05ac29810b924aca/uploads/2024/07/202407311873496196-scaled.jpg", title: "Shri C. P. Radhakrishnan", category: "Hon'ble Governor of Maharashtra" },
    { id: 7, image: "https://bjpbengal.org/wp-content/uploads/2021/02/Devendra_Fadnavis.jpg", title: "Shri. Devendra Fadnavis", category: "Hon’ble Chief Minister, Maharashtra State." },
    { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7n4aEyaxZVy95CVsIK7DnBwyfiplAmMHOQ&s", title: "Shri. Eknath Shinde", category: " Hon’ble Deputy Chief Minister, Maharashtra State." },
    { id: 9, image: "https://miro.medium.com/v2/resize:fit:2400/1*b8hCSGgUAO0xM34IdH2HaQ.jpeg", title: "Shri. Ajit Pawar", category: " Hon’ble Deputy Chief Minister, Maharashtra State." }
  ];
  
  // Split photos into circular (top 5) and rectangular (bottom 4)
  const circularPhotos = photoGallery.slice(0, 5);
  const rectangularPhotos = photoGallery.slice(5, 9);

  // Number of items to show at a time in each section
  const visibleCount = {
    importantLinks: 3,
    notifications: 2,
    employeeCorner: 1,
    dignitaries: 2
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
        {/* Upper Half - Original Content + Circular Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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


        {/* Photo Gallery (Green, Square) - 4 Photos */}
        <div className="glass-card rounded-2xl shadow-lg p-6 gov-card-hover border border-gray-200 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-emerald-600">Photo Gallery</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {rectangularPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative flex flex-col items-center cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => handleImageClick(photo.image)}
              >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mb-3">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover rounded-2xl border-4 border-white shadow-2xl group-hover:border-emerald-400 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <span className="text-white text-lg">📷</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-base font-semibold text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">{photo.title}</h3>
                  <span className="inline-block bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 text-sm px-3 py-1 rounded-full group-hover:from-emerald-200 group-hover:to-green-200 transition-all">
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Photos (Purple/Indigo, Circular) - 5 Photos */}
        <div className="glass-card rounded-2xl shadow-lg p-6 gov-card-hover border border-gray-200 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-indigo-600">Featured Photos</h2>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow uppercase tracking-wider">
              Highlights
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {circularPhotos.map((photo) => (
              <div 
                key={photo.id}
                className="group relative flex flex-col items-center cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => handleImageClick(photo.image)}
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mb-3">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:border-indigo-300 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-7 h-7 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <span className="text-white text-sm">📷</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-1">{photo.title}</h3>
                  <span className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs px-2 py-1 rounded-full group-hover:from-indigo-200 group-hover:to-purple-200 transition-all">
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Modal for selected image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button 
                className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
                onClick={closeModal}
              >
                &times;
              </button>
              <img 
                src={selectedImage} 
                alt="Full view" 
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
        {/* Styles */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .aspect-w-16 {
            position: relative;
            width: 100%;
          }
          .aspect-h-12 {
            padding-bottom: 75%;
          }
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Hero;
