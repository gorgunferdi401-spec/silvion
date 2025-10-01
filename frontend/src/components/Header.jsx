import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../data/translations";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="navigation-header">
      <div className="container">
        <div className="navigation-content">
          <div className="navigation-logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_aae45962-86ad-422c-8a6f-3a5b5ee88120/artifacts/bpebxdla_LOGOO.png" 
              alt="SILVION Pet Care" 
              className="logo-image"
            />
            <span className="header-brand-name">SILVION PET CARE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="navigation-menu">
            <button onClick={() => scrollToSection('home')} className="navigation-link">
              {getTranslation(language, 'home')}
            </button>
            <button onClick={() => scrollToSection('products')} className="navigation-link">
              {getTranslation(language, 'products')}
            </button>
            <button onClick={() => scrollToSection('about')} className="navigation-link">
              {getTranslation(language, 'about')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="navigation-link">
              {getTranslation(language, 'contact')}
            </button>
          </nav>

          {/* Language Selector */}
          <div className="navigation-utilities">
            <LanguageSelector />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-navigation">
            <button onClick={() => scrollToSection('home')} className="mobile-nav-link">
              Ana Sayfa
            </button>
            <button onClick={() => scrollToSection('products')} className="mobile-nav-link">
              Ürünler
            </button>
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
              Hakkımızda
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
              İletişim
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;