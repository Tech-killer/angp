import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-page-pattern min-h-screen">
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:items-stretch">
          {/* Left Sidebar - Important Links */}
          <div className="glass-card rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 gov-card-hover border border-gray-100 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-orange-600 tracking-wide">{t('hero.importantLinks')}</h2>
              <span className="government-orange text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">{t('hero.new')}</span>
            </div>
            <div className="space-y-3 flex-grow">
              <div className="flex items-center space-x-3 py-3 px-4 border-b border-orange-100 hover:bg-orange-50 rounded-xl transition-all duration-300 cursor-pointer group">
                <span className="text-green-600 text-lg group-hover:scale-110 transition-transform">✓</span>
                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900">{t('hero.nucleusBudgetScheme')}</span>
              </div>
              <div className="flex items-center space-x-3 py-3 px-4 border-b border-orange-100 hover:bg-orange-50 rounded-xl transition-all duration-300 cursor-pointer group">
                <span className="text-green-600 text-lg group-hover:scale-110 transition-transform">✓</span>
                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900">{t('hero.hostelAdmission')}</span>
              </div>
              <div className="flex items-center space-x-3 py-3 px-4 border-b border-orange-100 hover:bg-orange-50 rounded-xl transition-all duration-300 cursor-pointer group">
                <span className="text-green-600 text-lg group-hover:scale-110 transition-transform">✓</span>
                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900">{t('hero.scholarship')}</span>
              </div>
              <div className="flex items-center space-x-3 py-3 px-4 border-b border-orange-100 hover:bg-orange-50 rounded-xl transition-all duration-300 cursor-pointer group">
                <span className="text-blue-600 text-lg group-hover:scale-110 transition-transform">🔗</span>
                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900">{t('hero.casteVerification')}</span>
              </div>
              <div className="flex items-center space-x-3 py-3 px-4 border-b border-orange-100 hover:bg-orange-50 rounded-xl transition-all duration-300 cursor-pointer group">
                <span className="text-purple-600 text-lg group-hover:scale-110 transition-transform">📄</span>
                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900">{t('hero.eTender')}</span>
              </div>
              <div className="flex items-center space-x-3 py-3 px-4 border-b border-orange-100 hover:bg-orange-50 rounded-xl transition-all duration-300 cursor-pointer group">
                <span className="text-red-600 text-lg group-hover:scale-110 transition-transform">🏢</span>
                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900">{t('hero.atcNagpur')}</span>
              </div>
              <div className="flex items-center space-x-3 py-3 px-4 hover:bg-orange-50 rounded-xl transition-all duration-300 cursor-pointer group">
                <span className="text-red-600 text-lg group-hover:scale-110 transition-transform">▶️</span>
                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900">{t('hero.navchaitanyaChannel')}</span>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="mt-6 p-5 bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 rounded-2xl border border-orange-200 shadow-inner">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-800 mb-2 tracking-wide">{t('hero.forTribalBoysGirls')}</p>
                <p className="text-lg font-bold text-orange-600 tracking-wider">{t('hero.tollFree')}: 1800 267 0007</p>
              </div>
            </div>
          </div>

          {/* Center Content - Latest Notifications */}
          <div className="space-y-6 flex flex-col h-full">
            {/* Latest Notifications */}
            <div className="glass-card rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 gov-card-hover border border-gray-100 flex-grow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-blue-600 tracking-wide">{t('hero.latestNotifications')}</h2>
                <span className="government-blue text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">{t('hero.new')}</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 border border-blue-200 hover:border-blue-300 cursor-pointer group">
                  <h3 className="font-semibold text-gray-800 text-sm mb-2 group-hover:text-blue-700 transition-colors">{t('hero.recruitmentAdvertisement')}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{t('hero.contentLoading')}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:from-pink-50 hover:to-purple-50 transition-all duration-300 border border-purple-200 hover:border-purple-300 cursor-pointer group">
                  <h3 className="font-semibold text-gray-800 text-sm mb-2 group-hover:text-purple-700 transition-colors">{t('hero.directServiceRecruitment2024List')}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{t('hero.contentLoading')}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl hover:from-orange-50 hover:to-yellow-50 transition-all duration-300 border border-yellow-200 hover:border-yellow-300 cursor-pointer group">
                  <h3 className="font-semibold text-gray-800 text-sm mb-2 group-hover:text-orange-700 transition-colors">{t('hero.nucleusBudget')}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{t('hero.contentLoading')}</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl hover:from-cyan-50 hover:to-teal-50 transition-all duration-300 border border-teal-200 hover:border-teal-300 cursor-pointer group">
                  <h3 className="font-semibold text-gray-800 text-sm mb-2 group-hover:text-teal-700 transition-colors">{t('hero.seniorityList')}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{t('hero.contentLoading')}</p>
                </div>
              </div>
            </div>

            {/* Employee Corner - In Center Column */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 opacity-8 rounded-3xl"></div>
              <div className="relative bg-white border-2 border-green-300 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-green-400">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-lg">👤</span>
                    </div>
                    <h3 className="text-lg font-bold text-green-700 tracking-wide">{t('hero.employeeCorner')}</h3>
                  </div>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg animate-pulse uppercase tracking-wider">
                    {t('hero.new')}
                  </span>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 hover:border-green-300 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800 tracking-wide">{t('hero.seniorityList')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col h-full space-y-6">
            {/* Dignitaries Section */}
            <div className="glass-card rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 gov-card-hover border border-gray-100 flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-purple-600 tracking-wide">{t('hero.dignitaries')}</h2>
                <span className="government-purple text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">{t('hero.new')}</span>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 border border-purple-200 hover:border-purple-300">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://atcnagpur.com/images/manyawar_eng_0.jpeg" 
                    alt="Dignitary"
                    className="w-full max-w-xs h-auto rounded-2xl object-contain shadow-xl border-2 border-purple-200 hover:border-purple-300 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Achievements / Success Stories Section */}
            <div className="glass-card rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 gov-card-hover border border-gray-100 flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-amber-600 tracking-wide">Achievements</h2>
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">NEW</span>
              </div>

              <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl hover:from-yellow-50 hover:to-amber-50 transition-all duration-300 border border-amber-200 hover:border-amber-300">
                <div className="flex flex-col items-center text-center space-y-3">
                  <img 
                    src="https://atcnagpur.com/people_achievements/2025051204492925Bhaskar%20Halami.png" 
                    alt="Achievement Story - Bhaskar Halami"
                    className="w-full max-w-48 h-32 rounded-2xl object-cover shadow-xl border-2 border-amber-200 hover:border-amber-300 transition-colors"
                  />
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-gray-800 tracking-wide">Success Story</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Inspiring journey of tribal youth achieving excellence.
                    </p>
                    <div className="flex items-center justify-center space-x-2 mt-2 p-2 bg-amber-100 rounded-xl">
                      <span className="text-amber-600 text-sm">🏆</span>
                      <span className="text-xs font-semibold text-amber-700 tracking-wide">Community Achievement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
