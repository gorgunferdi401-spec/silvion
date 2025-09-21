import React from "react";
import { Eye } from "lucide-react";
import { mockProducts } from "../data/mockData";

const ProductsSection = () => {
  const handleProductClick = (product) => {
    if (product.brochure) {
      // Open PDF brochure in new tab
      window.open(product.brochure, '_blank');
    } else {
      alert(`${product.name} broşürü yakında eklenecek!`);
    }
  };

  return (
    <section id="products" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-1 section-title">Premium Ürün Serisi</h2>
          <p className="body-large section-description">
            Nano teknoloji ile geliştirilmiş, evcil hayvanlarınız için özel olarak tasarlanmış ürünlerimizi keşfedin.
          </p>
        </div>

        <div className="grid-product-showcase">
          {mockProducts.map((product) => (
            <div key={product.id} className="product-card hover-lift">
              <div className="product-card-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-card-image"
                />
                <div className="product-card-overlay">
                  <button 
                    onClick={() => handleProductClick(product.name)}
                    className="btn-secondary product-overlay-btn"
                  >
                    <Eye size={16} />
                    Detayları Gör
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