import { 
  Target, 
  BookOpen, 
  Home, 
  Heart, 
  Briefcase, 
  Award, 
  Users,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-page-pattern">
      {/* Hero Section */}
      <div className="bg-about-hero text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-2 drop-shadow-md">
              {t('about.additionalCommissioner')}
            </p>
            <p className="text-lg opacity-90 drop-shadow-md">
              {t('about.government')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-vision-card text-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-white mr-3 drop-shadow-lg" />
              <h2 className="text-2xl font-bold text-white drop-shadow-md">{t('about.vision.title')}</h2>
            </div>
            <p className="text-white/90 leading-relaxed drop-shadow-sm">
              {t('about.vision.content')}
            </p>
          </div>
          
          <div className="bg-mission-card text-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-white mr-3 drop-shadow-lg" />
              <h2 className="text-2xl font-bold text-white drop-shadow-md">{t('about.mission.title')}</h2>
            </div>
            <p className="text-white/90 leading-relaxed drop-shadow-sm">
              {t('about.mission.content')}
            </p>
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="glass-card rounded-2xl shadow-xl p-8 mb-12 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center drop-shadow-sm">
            {t('about.focusAreas.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4 drop-shadow-lg" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('about.focusAreas.education.title')}</h3>
              <p className="text-gray-600">{t('about.focusAreas.education.description')}</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 border border-pink-200 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4 drop-shadow-lg" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('about.focusAreas.healthcare.title')}</h3>
              <p className="text-gray-600">{t('about.focusAreas.healthcare.description')}</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Briefcase className="w-12 h-12 text-green-600 mx-auto mb-4 drop-shadow-lg" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('about.focusAreas.livelihood.title')}</h3>
              <p className="text-gray-600">{t('about.focusAreas.livelihood.description')}</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 border border-orange-200 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Home className="w-12 h-12 text-orange-600 mx-auto mb-4 drop-shadow-lg" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('about.focusAreas.housing.title')}</h3>
              <p className="text-gray-600">{t('about.focusAreas.housing.description')}</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 border border-purple-200 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4 drop-shadow-lg" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('about.focusAreas.community.title')}</h3>
              <p className="text-gray-600">{t('about.focusAreas.community.description')}</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 border border-indigo-200 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4 drop-shadow-lg" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('about.focusAreas.cultural.title')}</h3>
              <p className="text-gray-600">{t('about.focusAreas.cultural.description')}</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white rounded-2xl p-8 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"></div>
          <h2 className="text-3xl font-bold text-center mb-8 relative z-10 drop-shadow-lg">{t('about.impact.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2,50,000+</div>
              <div className="text-lg opacity-90">{t('about.impact.beneficiaries')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-lg opacity-90">{t('about.impact.villages')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">45+</div>
              <div className="text-lg opacity-90">{t('about.impact.schemes')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">{t('about.impact.districts')}</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('about.contact.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">{t('about.contact.address')}</h3>
                <p className="text-gray-600">
                  Tribal Development House,<br />
                  First Floor, Gitpeth,<br />
                  Nagpur - 440001,<br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">{t('about.contact.phone')}</h3>
                <p className="text-gray-600">0712-2560127</p>
                <p className="text-gray-600">Toll Free: 1800-267-0007</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">{t('about.contact.email')}</h3>
                <p className="text-gray-600">atc.ngp-mh@mah.gov.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;