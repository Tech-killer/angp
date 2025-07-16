import React from 'react';
import { useLanguage, useTranslation } from '../contexts/LanguageContext';

const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const handleLanguageChange = (e) => changeLanguage(e.target.value);

  // Language selector component
  const LanguageSelector = ({ className = "" }) => (
    <select 
      value={language}
      onChange={handleLanguageChange}
      className={`bg-indigo-600 text-white border border-indigo-400 rounded focus:outline-none focus:border-indigo-300 focus:bg-indigo-700 transition-all cursor-pointer ${className}`}
    >
      <option value="mr" className="text-gray-800 bg-white">मराठी</option>
      <option value="en" className="text-gray-800 bg-white">English</option>
      <option value="hi" className="text-gray-800 bg-white">हिंदी</option>
    </select>
  );

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg py-4 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Government Emblem & Text */}
          <div className="flex items-center space-x-4 lg:space-x-5">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="भारत सरकार" 
  className="w-16 h-16 lg:w-20 lg:h-20 drop-shadow-lg"
            />
            <div className="text-left">
              <p className="text-sm lg:text-base text-gray-700 mb-1 font-medium">महाराष्ट्र शासन</p>
              <h1 className="text-base lg:text-xl font-bold text-amber-800 leading-tight drop-shadow-sm">
                {t('hero.additionalCommissioner')}<br />
                {t('hero.department')}, नागपूर
              </h1>
            </div>
          </div>

          {/* Right side - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <img 
              src="https://atcnagpur.com/images/new_logo_amrut_mar.png" 
              alt="अमृत लोगो" 
              className="w-56 h-24 object-contain drop-shadow-lg"
            />
            <div className="text-right">
              <p className="text-sm text-gray-700">{t('header.forTribalBoysGirls')}</p>
              <p className="text-xl font-bold text-red-600 drop-shadow-sm">
                {t('header.tollFree')}: 1800 267 0007
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-600">{t('header.languageSelector')}</span>
              <LanguageSelector className="px-4 py-1.5 text-base" />
            </div>
          </div>

          {/* Mobile Language Selector */}
          <div className="lg:hidden flex items-center">
            <LanguageSelector className="px-3 py-1.5 text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;