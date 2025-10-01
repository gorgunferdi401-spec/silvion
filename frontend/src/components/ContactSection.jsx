import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../data/translations";

const ContactSection = () => {
  const { language } = useLanguage();

  const getLocalizedContactInfo = () => [
    {
      icon: Phone,
      label: getTranslation(language, 'phone'),
      value: "+90 (212) 555 0123",
      action: "tel:+902125550123"
    },
    {
      icon: Mail,
      label: getTranslation(language, 'email'),
      value: "info@silvion.com.tr",
      action: "mailto:info@silvion.com.tr"
    },
    {
      icon: MapPin,
      label: getTranslation(language, 'address'),
      value: "İstanbul, Türkiye",
      action: null
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/silvionpetcare",
      handle: "@silvionpetcare"
    },
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://facebook.com/silvionpetcare",
      handle: "SILVION Pet Care"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-1 section-title">{getTranslation(language, 'contactTitle')}</h2>
          <p className="body-large section-description">
            {getTranslation(language, 'contactDescription')}
          </p>
        </div>

        <div className="contact-content-grid">
          <div className="contact-info-left">
            <h3 className="heading-3 contact-subtitle">{getTranslation(language, 'contactInfo')}</h3>
            <div className="contact-items">
              {getLocalizedContactInfo().map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      <Icon size={20} />
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{item.label}</span>
                      {item.action ? (
                        <a href={item.action} className="contact-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-value">{item.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="social-media-right">
            <h3 className="heading-3 contact-subtitle">Sosyal Medya</h3>
            <div className="social-links">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link hover-lift"
                  >
                    <div className="social-icon">
                      <Icon size={24} />
                    </div>
                    <div className="social-info">
                      <span className="social-platform">{social.label}</span>
                      <span className="social-handle">{social.handle}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;