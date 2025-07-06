import { 
  BookOpen,
  Heart,
  Briefcase,
  ChevronRight,
  FileText,
  Download,
  Calendar,
  Award,
  Users,
  Phone,
  ExternalLink
} from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Schemes = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-page-pattern">
      {/* Hero Section */}
      <div className="bg-scheme-hero text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {t('schemes.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-2 drop-shadow-md">
              {t('schemes.subtitle')}
            </p>
            <p className="text-lg opacity-90 drop-shadow-md">
              {t('schemes.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Education Schemes */}
        <div className="glass-card rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-all duration-300 gov-card-hover">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-orange-600 mr-3 drop-shadow-lg" />
            <h2 className="text-3xl font-bold text-gray-800 drop-shadow-sm">{t('schemes.education.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 pl-6 py-4 rounded-r-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('schemes.education.preMatric.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.education.preMatric.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="government-orange text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {t('schemes.education.preMatric.eligibility')}
                </span>
                <button className="text-orange-600 hover:text-orange-800 flex items-center font-medium hover:bg-orange-50 px-2 py-1 rounded transition-all">
                  {t('schemes.buttons.applyNow')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 pl-6 py-4 rounded-r-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('schemes.education.postMatric.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.education.postMatric.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="government-blue text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {t('schemes.education.postMatric.eligibility')}
                </span>
                <button className="text-blue-600 hover:text-blue-800 flex items-center font-medium hover:bg-blue-50 px-2 py-1 rounded transition-all">
                  {t('schemes.buttons.applyNow')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 pl-6 py-4 rounded-r-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('schemes.education.hostel.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.education.hostel.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="government-green text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {t('schemes.education.hostel.type')}
                </span>
                <button className="text-green-600 hover:text-green-800 flex items-center font-medium hover:bg-green-50 px-2 py-1 rounded transition-all">
                  {t('schemes.buttons.learnMore')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">{t('schemes.education.coaching.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.education.coaching.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {t('schemes.education.coaching.type')}
                </span>
                <button className="text-blue-600 hover:text-blue-800 flex items-center">
                  {t('schemes.buttons.enroll')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Economic Development Schemes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">{t('schemes.economic.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">{t('schemes.economic.individual.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.economic.individual.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {t('schemes.economic.individual.amount')}
                </span>
                <button className="text-green-600 hover:text-green-800 flex items-center">
                  {t('schemes.buttons.apply')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">{t('schemes.economic.skill.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.economic.skill.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {t('schemes.economic.skill.type')}
                </span>
                <button className="text-green-600 hover:text-green-800 flex items-center">
                  {t('schemes.buttons.register')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">{t('schemes.economic.agriculture.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.economic.agriculture.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {t('schemes.economic.agriculture.type')}
                </span>
                <button className="text-green-600 hover:text-green-800 flex items-center">
                  {t('schemes.buttons.details')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">{t('schemes.economic.forestRights.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.economic.forestRights.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {t('schemes.economic.forestRights.type')}
                </span>
                <button className="text-green-600 hover:text-green-800 flex items-center">
                  {t('schemes.buttons.process')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Health & Infrastructure Schemes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">{t('schemes.health.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">{t('schemes.health.healthcare.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.health.healthcare.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                  {t('schemes.health.healthcare.type')}
                </span>
                <button className="text-pink-600 hover:text-pink-800 flex items-center">
                  {t('schemes.buttons.locations')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">{t('schemes.health.housing.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.health.housing.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                  {t('schemes.health.housing.type')}
                </span>
                <button className="text-pink-600 hover:text-pink-800 flex items-center">
                  {t('schemes.buttons.eligibility')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">{t('schemes.health.roads.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.health.roads.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                  {t('schemes.health.roads.type')}
                </span>
                <button className="text-pink-600 hover:text-pink-800 flex items-center">
                  {t('schemes.buttons.projects')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">{t('schemes.health.water.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('schemes.health.water.description')}
              </p>
              <div className="flex items-center space-x-4">
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                  {t('schemes.health.water.type')}
                </span>
                <button className="text-pink-600 hover:text-pink-800 flex items-center">
                  {t('schemes.buttons.status')} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">{t('schemes.process.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. {t('schemes.process.step1.title')}</h3>
              <p className="text-sm opacity-90">{t('schemes.process.step1.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. {t('schemes.process.step2.title')}</h3>
              <p className="text-sm opacity-90">{t('schemes.process.step2.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. {t('schemes.process.step3.title')}</h3>
              <p className="text-sm opacity-90">{t('schemes.process.step3.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">4. {t('schemes.process.step4.title')}</h3>
              <p className="text-sm opacity-90">{t('schemes.process.step4.description')}</p>
            </div>
          </div>
        </div>

        {/* Important Links */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('schemes.links.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="#" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5 text-indigo-600" />
              <span>{t('schemes.links.applicationForms')}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
            </a>
            
            <a href="#" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span>{t('schemes.links.guidelines')}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
            </a>
            
            <a href="#" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span>{t('schemes.links.importantDates')}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
            </a>
            
            <a href="#" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Users className="w-5 h-5 text-indigo-600" />
              <span>{t('schemes.links.beneficiaryList')}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
            </a>
            
            <a href="#" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <Phone className="w-5 h-5 text-indigo-600" />
              <span>{t('schemes.links.contactDirectory')}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
            </a>
            
            <a href="#" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span>{t('schemes.links.faq')}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schemes;