import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid gap-8">
          <div className="footer-col brand-col">
            <img src="/logo.png?v=2" alt="Nutrigold Logo" className="footer-img-logo" />
            <p className="footer-desc">
              Pure, healthy, and high-quality vegetable oil for every home. We bring the golden standard of cooking to your kitchen.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop Now</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links">
              <li><Link to="/product/1l">Nutrigold 1 Liter</Link></li>
              <li><Link to="/product/3l">Nutrigold 3 Liters</Link></li>
              <li><Link to="/product/5l">Nutrigold 5 Liters</Link></li>
              <li><Link to="/product/25l">Nutrigold 25 Liters</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Our Locations</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} style={{minWidth: "18px", marginTop: "4px"}} />
                <div style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                  <strong style={{lineHeight: 1}}>Headquarters:</strong>
                  <span>Plot 1, Doro-Webo street, Ajibawo, Atan Ota, Ogun state</span>
                </div>
              </li>
              <li>
                <MapPin size={18} style={{minWidth: "18px", marginTop: "4px"}} />
                <div style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                  <strong style={{lineHeight: 1}}>Branch:</strong>
                  <span>6, Goldrim plaza, off yayabator road by Ajayi junction, ogba, Lagos State</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Details</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={18} style={{minWidth: "18px"}} />
                <span>
                  <a href="tel:08079248456" style={{textDecoration: "none", color: "inherit", transition: "color 0.3s"}} onMouseOver={(e) => e.target.style.color = 'var(--white)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>08079248456</a>, 
                  <a href="tel:08123453429" style={{marginLeft: "4px", textDecoration: "none", color: "inherit", transition: "color 0.3s"}} onMouseOver={(e) => e.target.style.color = 'var(--white)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>08123453429</a>
                </span>
              </li>
              <li>
                <Mail size={18} style={{minWidth: "18px"}} />
                <span>
                  <a href="mailto:Nutrigold2025@gmail.com" style={{textDecoration: "none", color: "inherit", transition: "color 0.3s"}} onMouseOver={(e) => e.target.style.color = 'var(--white)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>Nutrigold2025@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nutrigold. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
