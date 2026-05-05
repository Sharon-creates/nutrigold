import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Target, Heart, ArrowLeft } from 'lucide-react';
import './About.css';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-page page-padding">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn flex items-center gap-2 mb-8 text-light hover-gold">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        
        <div className="about-hero animate-fade-in text-center">
          <h1 className="section-title">About Nutrigold</h1>
          <p className="section-subtitle">A legacy of trust, purity, and golden quality for your everyday meals.</p>
        </div>

        <div className="about-story grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 xl:gap-40 items-center">
          <div className="about-img animate-fade-in">
            <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80" alt="Nutrigold Factory Process" />
          </div>
          <div className="about-content animate-fade-in">
            <h2>Our Story</h2>
            <p>
              Nutrigold was born out of a simple necessity: to provide families with a cooking oil that is not only affordable but completely pure and hygienically processed. We realized that the heart of every home is the kitchen, and what goes into the food matters.
            </p>
            <p>
              From carefully selecting the finest seeds to utilizing a multi-stage refining process, we ensure that every drop of Nutrigold cooking oil is clear, healthy, and retains its nutritional value. We take pride in delivering the golden standard directly to your home.
            </p>
          </div>
        </div>

        <div className="why-choose-section section">
          <h2 className="section-title">Why Choose Nutrigold</h2>
          <div className="why-choose-list">
            <div className="why-card">
              <h3>Trusted Quality</h3>
              <p>Every bottle goes through a rigorous quality control process to ensure it meets our golden standards of purity and health.</p>
            </div>
            <div className="why-card">
              <h3>Premium Yet Affordable</h3>
              <p>We believe that high quality cooking shouldn’t break the bank. Nutrigold is priced perfectly for everyday family use.</p>
            </div>
            <div className="why-card">
              <h3>Nutrient Rich</h3>
              <p>Naturally packed with vitamins and essential fats to support a balanced and healthy household diet.</p>
            </div>
          </div>
        </div>

        <div className="about-values section">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="value-card">
              <div className="value-icon"><ShieldCheck size={36} /></div>
              <h3>Uncompromised Purity</h3>
              <p>We guarantee 100% pure oil, free from adulteration and cholesterol, keeping your family safe.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Heart size={36} /></div>
              <h3>Health First</h3>
              <p>Fortified with essential vitamins, we believe your everyday cooking oil should contribute to your well-being.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Target size={36} /></div>
              <h3>Cleanliness</h3>
              <p>Hygienically sealed in an untouched environment to ensure it reaches you exactly as it left our refinery.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
