import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage, useTranslation } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    about: false,
    aboutDept: false,
    schemes: false,
    educational: false,
    personalBenefit: false,
    otherActivities: false,
    achievements: false,
    login: false,
    reachUs: false,
    contact: false
  });
  const [mobileDropdowns, setMobileDropdowns] = useState({
    about: false,
    aboutDept: false,
    schemes: false,
    educational: false,
    personalBenefit: false,
    otherActivities: false,
    achievements: false,
    login: false,
    reachUs: false,
    contact: false
  });
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLanguageChange = (e) => changeLanguage(e.target.value);
  const handleDropdown = (name, state) => setDropdowns(prev => ({ ...prev, [name]: state }));
  const handleMobileDropdown = (name) => setMobileDropdowns(prev => ({ ...prev, [name]: !prev[name] }));

  // Language selector component
  const LanguageSelector = ({ className = "" }) => (
    <select 
      value={language}
      onChange={handleLanguageChange}
      className={`bg-indigo-600 text-white border border-indigo-400 rounded focus:outline-none focus:border-indigo-300 focus:bg-indigo-700 transition-all ${className}`}
    >
      <option value="mr" className="text-gray-800 bg-white">मराठी</option>
      <option value="en" className="text-gray-800 bg-white">English</option>
      <option value="hi" className="text-gray-800 bg-white">हिंदी</option>
    </select>
  );

  // Desktop dropdown component
  const DesktopDropdown = ({ name, title, children, className = "w-56", isNested = false }) => (
    <div className="relative group">
      <button 
        className={`flex items-center ${isNested ? 'justify-between w-full' : ''} px-4 py-2 rounded-md hover:bg-white/20 transition-colors ${isNested ? 'text-sm text-gray-700 hover:bg-gray-100' : ''}`}
        onMouseEnter={() => handleDropdown(name, true)}
        onMouseLeave={() => handleDropdown(name, false)}
      >
        {title} <ChevronDown className={`w-4 h-4 ml-1 ${isNested ? '-rotate-90' : ''}`} />
      </button>
      {dropdowns[name] && (
        <div 
          className={`absolute ${isNested ? 'left-full top-0 ml-1' : 'left-0 mt-0'} ${className} bg-white rounded-md shadow-xl py-2 ${isNested ? 'z-[60]' : 'z-50'} border border-gray-200`}
          onMouseEnter={() => handleDropdown(name, true)}
          onMouseLeave={() => handleDropdown(name, false)}
          style={isNested ? { marginTop: '-8px' } : {}}
        >
          {children}
        </div>
      )}
    </div>
  );

  // Mobile dropdown component
  const MobileDropdown = ({ name, title, children }) => (
    <div className="space-y-1">
      <button 
        onClick={() => handleMobileDropdown(name)}
        className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-white/20 transition-colors"
      >
        {title} <ChevronDown className={`w-4 h-4 transform transition-transform ${mobileDropdowns[name] ? 'rotate-180' : ''}`} />
      </button>
      {mobileDropdowns[name] && (
        <div className="pl-4 space-y-1">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full">
      {/* Main Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg py-3 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Government Emblem & Text */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                alt="भारत सरकार" 
                className="w-12 h-12 lg:w-16 lg:h-16 drop-shadow-lg"
              />
              <div className="text-left">
                <p className="text-xs lg:text-sm text-gray-700 mb-1 font-medium">महाराष्ट्र शासन</p>
                <h1 className="text-sm lg:text-lg font-bold text-amber-800 leading-tight drop-shadow-sm">
                  {t('hero.additionalCommissioner')}<br />
                  {t('hero.department')}, नागपूर
                </h1>
              </div>
            </div>

            {/* Right side - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <img 
                src="https://atcnagpur.com/images/new_logo_amrut_mar.png" 
                alt="अमृत लोगो" 
                className="w-48 h-20 object-contain drop-shadow-lg"
              />
              <div className="text-right">
                <p className="text-xs text-gray-700">{t('header.forTribalBoysGirls')}</p>
                <p className="text-lg font-bold text-red-600 drop-shadow-sm">
                  {t('header.tollFree')}: 1800 267 0007
                </p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <span className="text-xs text-gray-600">{t('header.languageSelector')}</span>
                <LanguageSelector className="px-3 py-1 text-sm" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <LanguageSelector className="px-2 py-1 text-xs" />
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 py-2">
            <a href="#" className="px-4 py-2 rounded-md bg-white/20 font-medium">{t('nav.home')}</a>
            
            {/* About Dropdown */}
            <DesktopDropdown name="about" title={t('nav.about')}>
              <DesktopDropdown name="aboutDept" title={t('nav.aboutDepartment')} className="w-64" isNested={true}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.aboutDept.home')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.aboutDept.departmentalInfo')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.aboutDept.govtAashramshala')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.aboutDept.anudanitAashramshala')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.aboutDept.registeredSchools')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.aboutDept.citizenCharter')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.aboutDept.circularGR')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.aboutDept.map')}</a>
              </DesktopDropdown>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.citizenCharter')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.circularGR')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.map')}</a>
            </DesktopDropdown>
            
            {/* Schemes Dropdown */}
            <DesktopDropdown name="schemes" title={t('nav.schemes')} className="w-64">
              <DesktopDropdown name="educational" title={t('nav.schemeMenu.educationalSchemes')} className="w-64" isNested={true}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.educational.schoolEducation')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.educational.hostels')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.educational.scholarshipFees')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.educational.otherEducSchemes')}</a>
              </DesktopDropdown>
              <DesktopDropdown name="personalBenefit" title={t('nav.schemeMenu.personalBenefitSchemes')} className="w-64" isNested={true}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.personalBenefit.forYouth')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.personalBenefit.forFarmers')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.personalBenefit.forWomen')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.personalBenefit.gharkul')}</a>
              </DesktopDropdown>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.areaDevelSchemes')}</a>
              <DesktopDropdown name="otherActivities" title={t('nav.schemeMenu.otherActivities')} className="w-64" isNested={true}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.otherActivitiesMenu.shabdaakoshAbhiyaan')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.otherActivitiesMenu.gyaanRachanaavaad')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.otherActivitiesMenu.jagrutiLaghupat')}</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.otherActivitiesMenu.calendar')}</a>
              </DesktopDropdown>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">{t('nav.schemeMenu.planningSchemes')}</a>
            </DesktopDropdown>
            
            {/* Achievements Dropdown */}
            <DesktopDropdown name="achievements" title={t('nav.achievementsActivities')}>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.beneficiaries')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.deptAchievements')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.deptActivities')}</a>
            </DesktopDropdown>
            
            {/* Login Dropdown */}
            <DesktopDropdown name="login" title={t('nav.login')}>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.loginMenu.atcPO')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.loginMenu.hostelAttendance')}</a>
            </DesktopDropdown>
            
            {/* Reach Us Dropdown */}
            <DesktopDropdown name="reachUs" title={t('nav.reachUs')}>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.reachUsMenu.askQuery')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.reachUsMenu.feedbacks')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.reachUsMenu.postAchievements')}</a>
            </DesktopDropdown>
            
            <a href="#" className="px-4 py-2 rounded-md hover:bg-white/20 transition-colors">{t('nav.gallery')}</a>
            
            {/* Contact Dropdown */}
            <DesktopDropdown name="contact" title={t('nav.contact')} className="w-64">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.contactUsMenu.commissionerateNasik')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.contactUsMenu.secretary')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.contactUsMenu.commissioner')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.contactUsMenu.additionalCommissioner')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.contactUsMenu.projectOffice')}</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('nav.contactUsMenu.cvcNagpur')}</a>
            </DesktopDropdown>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-3 space-y-1">
              <a href="#" className="block px-4 py-2 rounded-md bg-white/20 font-medium">{t('nav.home')}</a>
              
              {/* Mobile About Dropdown */}
              <MobileDropdown name="about" title={t('nav.about')}>
                <MobileDropdown name="aboutDept" title={t('nav.aboutDepartment')}>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.aboutDept.home')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.aboutDept.departmentalInfo')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.aboutDept.govtAashramshala')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.aboutDept.anudanitAashramshala')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.aboutDept.registeredSchools')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.aboutDept.citizenCharter')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.aboutDept.circularGR')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.aboutDept.map')}</a>
                </MobileDropdown>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.citizenCharter')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.circularGR')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.map')}</a>
              </MobileDropdown>
              
              {/* Mobile Schemes Dropdown */}
              <MobileDropdown name="schemes" title={t('nav.schemes')}>
                <MobileDropdown name="educational" title={t('nav.schemeMenu.educationalSchemes')}>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.schemeMenu.educational.schoolEducation')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.schemeMenu.educational.hostels')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.schemeMenu.educational.scholarshipFees')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.schemeMenu.educational.otherEducSchemes')}</a>
                </MobileDropdown>
                <MobileDropdown name="personalBenefit" title={t('nav.schemeMenu.personalBenefitSchemes')}>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.schemeMenu.personalBenefit.forYouth')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.schemeMenu.personalBenefit.forFarmers')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.schemeMenu.personalBenefit.forWomen')}</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.schemeMenu.personalBenefit.gharkul')}</a>
                </MobileDropdown>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.schemeMenu.areaDevelSchemes')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.schemeMenu.planningSchemes')}</a>
              </MobileDropdown>
              
              {/* Mobile Achievements Dropdown */}
              <MobileDropdown name="achievements" title={t('nav.achievementsActivities')}>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.beneficiaries')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.deptAchievements')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.deptActivities')}</a>
              </MobileDropdown>
              
              {/* Mobile Login Dropdown */}
              <MobileDropdown name="login" title={t('nav.login')}>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.loginMenu.atcPO')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.loginMenu.hostelAttendance')}</a>
              </MobileDropdown>
              
              {/* Mobile Reach Us Dropdown */}
              <MobileDropdown name="reachUs" title={t('nav.reachUs')}>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.reachUsMenu.askQuery')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.reachUsMenu.feedbacks')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.reachUsMenu.postAchievements')}</a>
              </MobileDropdown>
              
              <a href="#" className="block px-4 py-2 rounded-md hover:bg-white/20 transition-colors">{t('nav.gallery')}</a>
              
              {/* Mobile Contact Dropdown */}
              <MobileDropdown name="contact" title={t('nav.contact')}>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.contactUsMenu.commissionerateNasik')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.contactUsMenu.secretary')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.contactUsMenu.commissioner')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.contactUsMenu.additionalCommissioner')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.contactUsMenu.projectOffice')}</a>
                <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-white/20">{t('nav.contactUsMenu.cvcNagpur')}</a>
              </MobileDropdown>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
