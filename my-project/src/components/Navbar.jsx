import React, { useState, useCallback, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const { t } = useTranslation();
  
  // Refs for hover timing
  const hoverTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);
  const nestedHoverTimeoutRef = useRef(null);
  const nestedLeaveTimeoutRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    setMobileDropdowns({});
    setActiveDropdown(null);
    setActiveNestedDropdown(null);
  }, []);

  const handleDropdownEnter = useCallback((name) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    setActiveDropdown(name);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveNestedDropdown(null);
    }, 150);
  }, []);

  const handleNestedDropdownEnter = useCallback((name) => {
    if (nestedHoverTimeoutRef.current) {
      clearTimeout(nestedHoverTimeoutRef.current);
    }
    if (nestedLeaveTimeoutRef.current) {
      clearTimeout(nestedLeaveTimeoutRef.current);
    }
    setActiveNestedDropdown(name);
  }, []);

  const handleNestedDropdownLeave = useCallback(() => {
    nestedLeaveTimeoutRef.current = setTimeout(() => {
      setActiveNestedDropdown(null);
    }, 150);
  }, []);

  const handleMobileDropdown = useCallback((name) => {
    setMobileDropdowns(prev => ({ 
      ...prev, 
      [name]: !prev[name] 
    }));
  }, []);

  // Desktop dropdown component with optimized hover handling
  const DesktopDropdown = ({ name, title, children, className = "w-56", isNested = false }) => {
    const isActive = isNested ? activeNestedDropdown === name : activeDropdown === name;
    
    return (
      <div 
        className={`relative ${isNested ? 'group' : ''}`}
        onMouseEnter={() => isNested ? handleNestedDropdownEnter(name) : handleDropdownEnter(name)}
        onMouseLeave={isNested ? handleNestedDropdownLeave : handleDropdownLeave}
      >
        <button 
          className={`flex items-center ${isNested ? 'justify-between w-full' : ''} px-4 py-2 rounded-md hover:bg-white/20 transition-colors duration-150 ${isNested ? 'text-sm text-gray-700 hover:bg-gray-100' : ''}`}
          onClick={() => isNested && handleNestedDropdownEnter(name)}
        >
          {title} 
          <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
        </button>
        
        {isActive && (
          <div 
            className={`absolute ${isNested ? 'left-full -top-2 ml-1' : 'left-0 mt-1'} ${className} bg-white rounded-md shadow-xl py-2 z-[1000] border border-gray-200 animate-in fade-in-0 zoom-in-95 duration-100`}
          >
            {children}
          </div>
        )}
      </div>
    );
  };

  // Mobile dropdown component
  const MobileDropdown = ({ name, title, children }) => (
    <div className="space-y-1">
      <button 
        onClick={() => handleMobileDropdown(name)}
        className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-white/20 transition-colors duration-150 active:bg-white/30"
      >
        {title} 
        <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${mobileDropdowns[name] ? 'rotate-180' : ''}`} />
      </button>
      
      {mobileDropdowns[name] && (
        <div className="pl-4 space-y-1 border-l-2 border-indigo-300 ml-2 animate-in slide-in-from-left-2 duration-200">
          {children}
        </div>
      )}
    </div>
  );

  // Link component for consistent styling
  const NavLink = ({ href = "#", children, className = "", onClick }) => (
    <a 
      href={href} 
      onClick={onClick}
      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150 whitespace-nowrap ${className}`}
    >
      {children}
    </a>
  );

  const MobileNavLink = ({ href = "#", children, className = "", onClick }) => (
    <a 
      href={href} 
      onClick={onClick}
      className={`block px-4 py-2 text-sm rounded-md hover:bg-white/20 transition-colors duration-150 active:bg-white/30 ${className}`}
    >
      {children}
    </a>
  );

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-between py-3">
          <span className="text-white font-medium">Menu</span>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-white hover:bg-white/20 transition-colors duration-150 active:bg-white/30"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 py-2">
          <a href="#" className="px-4 py-2 rounded-md bg-white/20 font-medium hover:bg-white/30 transition-colors duration-150">
            {t('nav.home')}
          </a>
          
          {/* About Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleDropdownEnter('about')}
            onMouseLeave={handleDropdownLeave}
          >
            <button 
              className="flex items-center px-4 py-2 rounded-md hover:bg-white/20 transition-colors duration-150"
            >
              {t('nav.about')} 
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'about' && (
              <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-xl py-2 z-[1000] border border-gray-200 animate-in fade-in-0 zoom-in-95 duration-100">
                <DesktopDropdown name="aboutDept" title={t('nav.aboutDepartment')} className="w-64" isNested>
                  <NavLink>{t('nav.aboutDept.home')}</NavLink>
                  <NavLink>{t('nav.aboutDept.departmentalInfo')}</NavLink>
                  <NavLink>{t('nav.aboutDept.govtAashramshala')}</NavLink>
                  <NavLink>{t('nav.aboutDept.anudanitAashramshala')}</NavLink>
                  <NavLink>{t('nav.aboutDept.registeredSchools')}</NavLink>
                  <NavLink>{t('nav.aboutDept.citizenCharter')}</NavLink>
                  <NavLink>{t('nav.aboutDept.circularGR')}</NavLink>
                  <NavLink>{t('nav.aboutDept.map')}</NavLink>
                </DesktopDropdown>
                <NavLink>{t('nav.citizenCharter')}</NavLink>
                <NavLink>{t('nav.circularGR')}</NavLink>
                <NavLink>{t('nav.map')}</NavLink>
              </div>
            )}
          </div>
          
          {/* Schemes Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleDropdownEnter('schemes')}
            onMouseLeave={handleDropdownLeave}
          >
            <button 
              className="flex items-center px-4 py-2 rounded-md hover:bg-white/20 transition-colors duration-150"
            >
              {t('nav.schemes')} 
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'schemes' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'schemes' && (
              <div className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-xl py-2 z-[1000] border border-gray-200 animate-in fade-in-0 zoom-in-95 duration-100">
                <DesktopDropdown name="educational" title={t('nav.schemeMenu.educationalSchemes')} className="w-64" isNested>
                  <NavLink>{t('nav.schemeMenu.educational.schoolEducation')}</NavLink>
                  <NavLink>{t('nav.schemeMenu.educational.hostels')}</NavLink>
                  <NavLink>{t('nav.schemeMenu.educational.scholarshipFees')}</NavLink>
                  <NavLink>{t('nav.schemeMenu.educational.otherEducSchemes')}</NavLink>
                </DesktopDropdown>
                <DesktopDropdown name="personalBenefit" title={t('nav.schemeMenu.personalBenefitSchemes')} className="w-64" isNested>
                  <NavLink>{t('nav.schemeMenu.personalBenefit.forYouth')}</NavLink>
                  <NavLink>{t('nav.schemeMenu.personalBenefit.forFarmers')}</NavLink>
                  <NavLink>{t('nav.schemeMenu.personalBenefit.forWomen')}</NavLink>
                  <NavLink>{t('nav.schemeMenu.personalBenefit.gharkul')}</NavLink>
                </DesktopDropdown>
                <NavLink>{t('nav.schemeMenu.areaDevelSchemes')}</NavLink>
                <DesktopDropdown name="otherActivities" title={t('nav.schemeMenu.otherActivities')} className="w-64" isNested>
                  <NavLink>{t('nav.schemeMenu.otherActivitiesMenu.shabdaakoshAbhiyaan')}</NavLink>
                  <NavLink>{t('nav.schemeMenu.otherActivitiesMenu.gyaanRachanaavaad')}</NavLink>
                  <NavLink>{t('nav.schemeMenu.otherActivitiesMenu.jagrutiLaghupat')}</NavLink>
                  <NavLink>{t('nav.schemeMenu.otherActivitiesMenu.calendar')}</NavLink>
                </DesktopDropdown>
                <NavLink>{t('nav.schemeMenu.planningSchemes')}</NavLink>
              </div>
            )}
          </div>
          
          {/* Achievements Dropdown */}
          <DesktopDropdown name="achievements" title={t('nav.achievementsActivities')}>
            <NavLink>{t('nav.beneficiaries')}</NavLink>
            <NavLink>{t('nav.deptAchievements')}</NavLink>
            <NavLink>{t('nav.deptActivities')}</NavLink>
          </DesktopDropdown>
          
          {/* Login Dropdown */}
          <DesktopDropdown name="login" title={t('nav.login')}>
            <NavLink>{t('nav.loginMenu.atcPO')}</NavLink>
            <NavLink>{t('nav.loginMenu.hostelAttendance')}</NavLink>
          </DesktopDropdown>
          
          {/* Reach Us Dropdown */}
          <DesktopDropdown name="reachUs" title={t('nav.reachUs')}>
            <NavLink>{t('nav.reachUsMenu.askQuery')}</NavLink>
            <NavLink>{t('nav.reachUsMenu.feedbacks')}</NavLink>
            <NavLink>{t('nav.reachUsMenu.postAchievements')}</NavLink>
          </DesktopDropdown>
          
          <a href="#" className="px-4 py-2 rounded-md hover:bg-white/20 transition-colors duration-150">
            {t('nav.gallery')}
          </a>
          
          {/* Contact Dropdown */}
          <DesktopDropdown name="contact" title={t('nav.contact')} className="w-64">
            <NavLink>{t('nav.contactUsMenu.commissionerateNasik')}</NavLink>
            <NavLink>{t('nav.contactUsMenu.secretary')}</NavLink>
            <NavLink>{t('nav.contactUsMenu.commissioner')}</NavLink>
            <NavLink>{t('nav.contactUsMenu.additionalCommissioner')}</NavLink>
            <NavLink>{t('nav.contactUsMenu.projectOffice')}</NavLink>
            <NavLink>{t('nav.contactUsMenu.cvcNagpur')}</NavLink>
          </DesktopDropdown>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
            <a href="#" className="block px-4 py-2 rounded-md bg-white/20 font-medium hover:bg-white/30 transition-colors duration-150">
              {t('nav.home')}
            </a>
            
            {/* Mobile About Dropdown */}
            <MobileDropdown name="about" title={t('nav.about')}>
              <MobileDropdown name="aboutDept" title={t('nav.aboutDepartment')}>
                <MobileNavLink>{t('nav.aboutDept.home')}</MobileNavLink>
                <MobileNavLink>{t('nav.aboutDept.departmentalInfo')}</MobileNavLink>
                <MobileNavLink>{t('nav.aboutDept.govtAashramshala')}</MobileNavLink>
                <MobileNavLink>{t('nav.aboutDept.anudanitAashramshala')}</MobileNavLink>
                <MobileNavLink>{t('nav.aboutDept.registeredSchools')}</MobileNavLink>
                <MobileNavLink>{t('nav.aboutDept.citizenCharter')}</MobileNavLink>
                <MobileNavLink>{t('nav.aboutDept.circularGR')}</MobileNavLink>
                <MobileNavLink>{t('nav.aboutDept.map')}</MobileNavLink>
              </MobileDropdown>
              <MobileNavLink>{t('nav.citizenCharter')}</MobileNavLink>
              <MobileNavLink>{t('nav.circularGR')}</MobileNavLink>
              <MobileNavLink>{t('nav.map')}</MobileNavLink>
            </MobileDropdown>
            
            {/* Mobile Schemes Dropdown */}
            <MobileDropdown name="schemes" title={t('nav.schemes')}>
              <MobileDropdown name="educational" title={t('nav.schemeMenu.educationalSchemes')}>
                <MobileNavLink>{t('nav.schemeMenu.educational.schoolEducation')}</MobileNavLink>
                <MobileNavLink>{t('nav.schemeMenu.educational.hostels')}</MobileNavLink>
                <MobileNavLink>{t('nav.schemeMenu.educational.scholarshipFees')}</MobileNavLink>
                <MobileNavLink>{t('nav.schemeMenu.educational.otherEducSchemes')}</MobileNavLink>
              </MobileDropdown>
              <MobileDropdown name="personalBenefit" title={t('nav.schemeMenu.personalBenefitSchemes')}>
                <MobileNavLink>{t('nav.schemeMenu.personalBenefit.forYouth')}</MobileNavLink>
                <MobileNavLink>{t('nav.schemeMenu.personalBenefit.forFarmers')}</MobileNavLink>
                <MobileNavLink>{t('nav.schemeMenu.personalBenefit.forWomen')}</MobileNavLink>
                <MobileNavLink>{t('nav.schemeMenu.personalBenefit.gharkul')}</MobileNavLink>
              </MobileDropdown>
              <MobileNavLink>{t('nav.schemeMenu.areaDevelSchemes')}</MobileNavLink>
              <MobileDropdown name="otherActivities" title={t('nav.schemeMenu.otherActivities')}>
                <MobileNavLink>{t('nav.schemeMenu.otherActivitiesMenu.shabdaakoshAbhiyaan')}</MobileNavLink>
                <MobileNavLink>{t('nav.schemeMenu.otherActivitiesMenu.gyaanRachanaavaad')}</MobileNavLink>
                <MobileNavLink>{t('nav.schemeMenu.otherActivitiesMenu.jagrutiLaghupat')}</MobileNavLink>
                <MobileNavLink>{t('nav.schemeMenu.otherActivitiesMenu.calendar')}</MobileNavLink>
              </MobileDropdown>
              <MobileNavLink>{t('nav.schemeMenu.planningSchemes')}</MobileNavLink>
            </MobileDropdown>
            
            {/* Mobile Achievements Dropdown */}
            <MobileDropdown name="achievements" title={t('nav.achievementsActivities')}>
              <MobileNavLink>{t('nav.beneficiaries')}</MobileNavLink>
              <MobileNavLink>{t('nav.deptAchievements')}</MobileNavLink>
              <MobileNavLink>{t('nav.deptActivities')}</MobileNavLink>
            </MobileDropdown>
            
            {/* Mobile Login Dropdown */}
            <MobileDropdown name="login" title={t('nav.login')}>
              <MobileNavLink>{t('nav.loginMenu.atcPO')}</MobileNavLink>
              <MobileNavLink>{t('nav.loginMenu.hostelAttendance')}</MobileNavLink>
            </MobileDropdown>
            
            {/* Mobile Reach Us Dropdown */}
            <MobileDropdown name="reachUs" title={t('nav.reachUs')}>
              <MobileNavLink>{t('nav.reachUsMenu.askQuery')}</MobileNavLink>
              <MobileNavLink>{t('nav.reachUsMenu.feedbacks')}</MobileNavLink>
              <MobileNavLink>{t('nav.reachUsMenu.postAchievements')}</MobileNavLink>
            </MobileDropdown>
            
            <a href="#" className="block px-4 py-2 rounded-md hover:bg-white/20 transition-colors duration-150">
              {t('nav.gallery')}
            </a>
            
            {/* Mobile Contact Dropdown */}
            <MobileDropdown name="contact" title={t('nav.contact')}>
              <MobileNavLink>{t('nav.contactUsMenu.commissionerateNasik')}</MobileNavLink>
              <MobileNavLink>{t('nav.contactUsMenu.secretary')}</MobileNavLink>
              <MobileNavLink>{t('nav.contactUsMenu.commissioner')}</MobileNavLink>
              <MobileNavLink>{t('nav.contactUsMenu.additionalCommissioner')}</MobileNavLink>
              <MobileNavLink>{t('nav.contactUsMenu.projectOffice')}</MobileNavLink>
              <MobileNavLink>{t('nav.contactUsMenu.cvcNagpur')}</MobileNavLink>
            </MobileDropdown>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;