import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
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
            <h1 className="hero-large">
              Doğanın Gücü,<br />
              Dostunuzun Sağlığı
            </h1>
            <p className="hero-description">
              Nano teknoloji ile güçlendirilmiş premium pet care ürünlerimizle, 
              evcil hayvanlarınızın sağlıklı ve mutlu yaşamına katkıda bulunuyoruz.
            </p>
            <button onClick={scrollToProducts} className="btn-primary hero-cta">
              Ürünlerimizi Keşfet
              <ArrowRight size={16} className="btn-icon-arrow" />
            </button>
          </div>
          <div className="hero-visual">
            <div className="hero-accent-circle"></div>
            <img 
              src="https://customer-assets.emergentagent.com/job_aae45962-86ad-422c-8a6f-3a5b5ee88120/artifacts/bpebxdla_LOGOO.png" 
              alt="SILVION Pet Care" 
              className="hero-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;