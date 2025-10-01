import React from "react";
import { Eye } from "lucide-react";
import { mockProducts } from "../data/mockData";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../data/translations";

const ProductsSection = () => {
  const { language } = useLanguage();

  const handleProductClick = (product) => {
    // Determine which brochure to open based on current language
    let brochureUrl = null;
    
    if (language === 'tr' && product.brochureTr) {
      // Open Turkish brochure if Turkish language is selected
      brochureUrl = product.brochureTr;
    } else if (language === 'bg' && product.brochureBg) {
      // Open Bulgarian brochure if Bulgarian language is selected
      brochureUrl = product.brochureBg;
    } else if (product.brochure) {
      // Open default/English brochure for English and fallback
      brochureUrl = product.brochure;
    }
    
    if (brochureUrl) {
      window.open(brochureUrl, '_blank');
    } else {
      alert(`${product.name} broşürü yakında eklenecek!`);
    }
  };

  // Get localized product data
  const getLocalizedProducts = () => {
    return mockProducts.map((product, index) => {
      const productKeys = ['productSprayName', 'productTowelName', 'productWipesName'];
      const descKeys = ['productSprayDesc', 'productTowelDesc', 'productWipesDesc'];
      const featureKeys = [
        ['antibacterial', 'fastAction', 'naturalFormula'],
        ['nanoFiber', 'antibacterial', 'highAbsorption'],
        ['gentleFormula', 'practicalUse', 'dermatologist']
      ];

      return {
        ...product,
        name: getTranslation(language, productKeys[index]),
        description: getTranslation(language, descKeys[index]),
        features: featureKeys[index].map(key => getTranslation(language, key))
      };
    });
  };

  return (
    <section id="products" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-1 section-title">{getTranslation(language, 'productsTitle')}</h2>
          <p className="body-large section-description">
            {getTranslation(language, 'productsDescription')}
          </p>
        </div>

        <div className="grid-product-showcase">
          {getLocalizedProducts().map((product) => (
            <div key={product.id} className="product-card hover-lift">
              <div className="product-card-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-card-image"
                />
                <div className="product-card-overlay">
                  <button 
                    onClick={() => handleProductClick(product)}
                    className="btn-secondary product-overlay-btn"
                  >
                    <Eye size={16} />
                    {getTranslation(language, 'detailsButton')}
                  </button>
                </div>
              </div>
              <div className="product-card-content">
                <h3 className="product-card-title">{product.name}</h3>
                <p className="product-card-description">{product.description}</p>
                <div className="product-card-features">
                  {product.features.map((feature, index) => (
                    <span key={index} className="product-feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;