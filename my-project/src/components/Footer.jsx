import React from 'react';
import { ChevronUp, Download, Smartphone } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-footer-gradient text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          
          {/* Government Logo & Title */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <img 
                  src="https://atcnagpur.com/images/new_logo_amrut_mar.png" 
                  alt="Government Logo" 
                  className="w-12 h-12 object-contain drop-shadow-lg"
                />
              </div>
              <div>
                <p className="text-sm font-medium mb-1 text-gray-200">{t('footer.government')}</p>
                <h3 className="text-lg font-bold leading-tight drop-shadow-sm">
                  {t('hero.additionalCommissioner')}<br />
                  {t('footer.department')}, {t('about.government').split(',')[1]}
                </h3>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-2 text-gray-200 drop-shadow-sm">{t('footer.address')}</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Tribal Development House,</p>
                <p>First Floor,</p>
                <p>Gitpeth, Nagpur</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-gray-200">{t('footer.contact')}:</h4>
              <p className="text-sm text-gray-300">0712 2560127</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-gray-200">{t('footer.email')}:</h4>
              <a 
                href="mailto:atc.ngp-mh@mah.gov.in" 
                className="text-sm text-blue-300 hover:text-blue-200 transition-colors"
              >
                atc.ngp-mh@mah.gov.in
              </a>
            </div>
          </div>

          {/* Visitor Stats */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-200">{t('footer.totalVisitors')}</h4>
              <p className="text-2xl font-bold text-orange-300">92626</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-200">{t('footer.visitorsToday')}</h4>
              <p className="text-2xl font-bold text-green-300">52</p>
            </div>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="mb-4">
                <Smartphone className="w-12 h-12 mx-auto text-blue-300 mb-2" />
                <h3 className="text-lg font-bold mb-2">{t('footer.downloadApp')}</h3>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                  <Download className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-xs">{t('footer.downloadOn')}</div>
                    <div className="text-sm font-semibold">{t('footer.appStore')}</div>
                  </div>
                </button>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                  <Download className="w-4 h-4" />
                  <div className="text-left">
                    <div className="text-xs">{t('footer.getItOn')}</div>
                    <div className="text-sm font-semibold">{t('footer.googlePlay')}</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Links Section */}
        <div className="border-t border-gray-500 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Tribal Development Department, Government of Maharashtra. All rights reserved.</p>
              <p className="mt-1">Developed by Harsh Sharma</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

              {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Additional Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500"></div>
    </footer>
  );
};

export default Footer;