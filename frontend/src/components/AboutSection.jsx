import React from "react";
import { Shield, Zap, Heart, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Güvenli Formül",
      description: "Doğal bileşenlerle formüle edilmiş, zararsız ve etkili ürünler"
    },
    {
      icon: Zap,
      title: "Nano Teknoloji", 
      description: "İleri teknoloji ile enhanced edilmiş, hızlı ve etkili çözümler"
    },
    {
      icon: Heart,
      title: "Evcil Dostu",
      description: "Pet-safe formülasyonlar ile dostlarınızın güvenliği önceliğimiz"
    },
    {
      icon: Award,
      title: "Premium Kalite",
      description: "Yüksek standartlarda üretilmiş, kalite garantili ürünler"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container">
        <div className="grid-two-column">
          <div className="about-content">
            <h2 className="heading-1">Neden SILVION?</h2>
            <p className="body-large about-description">
              Evcil hayvanlarımızın sağlığında yenilikçi yaklaşımımızla, doğanın gücünü 
              nano teknoloji ile birleştiriyoruz. Güvenli, etkili ve premium ürünlerimizle 
              dostlarımızın sağlıklı yaşamına katkıda bulunuyoruz.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Yıl Tecrübe</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Mutlu Müşteri</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Memnuniyet</span>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="features-grid">
              {features.map((feature, index) => {
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