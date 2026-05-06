import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Heart, Droplets } from 'lucide-react';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  const images = [
    "/slide-1.png",
    "/slide-2.png",
    "/slide-3.png",
    "/slide-4.png",
    "/slide-5.png",
    "/slide-6.png"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="hero-content animate-fade-in">
            <div className="badge">
              <ShieldCheck size={16} />
              <span>Pure Quality You Can Trust</span>
            </div>
            <h1 className="hero-title">Pure, Healthy Cooking Oil for Every Home.</h1>
            <p className="hero-text">
              Experience the golden standard of cooking. Nutrigold is hygienically processed and rich in nutrients to enhance every meal you prepare.
            </p>
            <div className="hero-btns flex gap-6">
              <Link to="/shop" className="btn btn-primary">Shop Now</Link>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
          <div className="hero-image-wrapper animate-fade-in">
            <div className="glow-bg"></div>
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt="Premium Nutrigold Cooking Oil" 
                className={`hero-image slide-img ${index === currentSlide ? 'active' : ''}`}
                loading="eager"
                decoding="async"
                {...(index === 0 ? { fetchpriority: "high" } : {})}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits section">
        <div className="container">
          <h2 className="section-title">Healthy Choice for Everyday Cooking</h2>
          <p className="section-subtitle">Why thousands of families trust Nutrigold for their daily meals.</p>
          
          <div className="benefits-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="benefit-card">
              <div className="benefit-icon"><Droplets size={32} /></div>
              <h3>100% Pure & Clear</h3>
              <p>Triple filtered for maximum clarity. Enhances the natural taste of your food without overpowering it.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Heart size={32} /></div>
              <h3>Heart Healthy</h3>
              <p>Cholesterol free and fortified with Vitamin A to support your family's daily nutritional needs.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><CheckCircle size={32} /></div>
              <h3>Hygienically Processed</h3>
              <p>Produced in state of the art facilities ensuring untouched, premium quality from farm to bottle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured section bg-cream">
        <div className="container">
          <h2 className="section-title">Available Sizes</h2>
          <p className="section-subtitle">Choose the perfect size for your family's cooking needs.</p>
          
          <div className="products-grid grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`} className="product-img-wrapper">
                  <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
                  <div className="product-size-badge">{product.size}</div>
                </Link>
                <div className="product-info">
                  <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
                  <Link to={`/product/${product.id}`} className="btn btn-outline product-btn">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
