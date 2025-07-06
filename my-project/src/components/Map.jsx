import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

function Map() {
    const { t } = useTranslation();
    
    return (
        <div className="py-12 bg-map-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 drop-shadow-sm">{t('map.title')}</h2>
                    <p className="mt-4 text-lg text-gray-700 drop-shadow-sm">{t('map.description')}</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50" style={{ height: "500px" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1860.5830265486647!2d79.065361!3d21.145789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f56e556a47%3A0xd955d985235ae805!2sAdivasi%20Vikas%20Bhavan%20And%20Scheduled%20Tribe%20Caste%20Validity%20Committee%20Office!5e0!3m2!1sen!2sin!4v1751092947438!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: "block" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="hover:scale-105 transition-transform duration-500"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Map;