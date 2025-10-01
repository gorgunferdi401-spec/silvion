import React from "react";
import { Shield, Zap, Heart, Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../data/translations";

const AboutSection = () => {
  const { language } = useLanguage();

  const getLocalizedFeatures = () => [
    {
      icon: Shield,
      title: getTranslation(language, 'safeFormula'),
      description: getTranslation(language, 'safeFormulaDesc')
    },
    {
      icon: Zap,
      title: getTranslation(language, 'nanoTech'),
      description: getTranslation(language, 'nanoTechDesc')
    },
    {
      icon: Heart,
      title: getTranslation(language, 'petFriendly'),
      description: getTranslation(language, 'petFriendlyDesc')
    },
    {
      icon: Award,
      title: getTranslation(language, 'premiumQuality'),
      description: getTranslation(language, 'premiumQualityDesc')
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container">
        <div className="grid-two-column">
          <div className="about-content">
            <h2 className="heading-1">{getTranslation(language, 'aboutTitle')}</h2>
            <p className="body-large about-description">
              {getTranslation(language, 'aboutDescription')}
            </p>
          </div>

          <div className="about-features">
            <div className="features-grid">
              {getLocalizedFeatures().map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="feature-card hover-lift">
                    <div className="feature-icon">
                      <Icon size={24} />
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;