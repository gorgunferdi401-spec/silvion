import React from "react";
import { Instagram, Facebook } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../data/translations";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-brand-header">
              <img 
                src="https://customer-assets.emergentagent.com/job_aae45962-86ad-422c-8a6f-3a5b5ee88120/artifacts/bpebxdla_LOGOO.png" 
                alt="SILVION Pet Care" 
                className="footer-logo"
              />
              <span className="footer-brand-name">SILVION PET CARE</span>
            </div>
            <p className="footer-tagline">
              {getTranslation(language, 'footerTagline')}
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Ürünler</h4>
            <ul className="footer-menu">
              <li><a href="#products" className="footer-link">Nano Spray</a></li>
              <li><a href="#products" className="footer-link">Nano Towel</a></li>
              <li><a href="#products" className="footer-link">Nano Wipes</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Hakkımızda</h4>
            <ul className="footer-menu">
              <li><a href="#about" className="footer-link">Markamız</a></li>
              <li><a href="#about" className="footer-link">Nano Teknoloji</a></li>
              <li><a href="#contact" className="footer-link">İletişim</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">İletişim</h4>
            <ul className="footer-menu">
              <li className="footer-contact">+90 (212) 555 0123</li>
              <li className="footer-contact">info@silvion.com.tr</li>
              <li className="footer-contact">İstanbul, Türkiye</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Takip Edin</h4>
            <div className="social-links-footer">
              <a 
                href="https://instagram.com/silvionpetcare"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-footer hover-lift"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/silvionpetcare"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-footer hover-lift"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} SILVION Pet Care. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;