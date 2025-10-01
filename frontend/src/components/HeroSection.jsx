import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../data/translations";

const HeroSection = () => {
  const { language } = useLanguage();

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 
              className="hero-large"
              dangerouslySetInnerHTML={{ 
                __html: getTranslation(language, 'heroTitle') 
              }}
            />
            <p className="hero-description">
              {getTranslation(language, 'heroDescription')}
            </p>
            <button onClick={scrollToProducts} className="btn-primary hero-cta">
              {getTranslation(language, 'heroButton')}
              <ArrowRight size={16} className="btn-icon-arrow" />
            </button>
          </div>
          <div className="hero-visual">
            <div className="hero-accent-circle"></div>
            <img 
              src="https://customer-assets.emergentagent.com/job_silvion-vitality/artifacts/f64exg1f_ana%20sayfa.png" 
              alt="SILVION Pet Care Hero" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;