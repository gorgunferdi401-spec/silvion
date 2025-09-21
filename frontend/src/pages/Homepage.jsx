import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;