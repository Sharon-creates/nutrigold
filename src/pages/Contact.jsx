import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const bodyText = `Name: ${name}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:Nutrigold2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page page-padding">
      <div className="container">

        
        <div className="contact-header text-center animate-fade-in">
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">Have questions or want to partner with us? Reach out today.</p>
        </div>

        <div className="contact-layout grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[150px] mt-12">
          
          <div className="contact-info animate-fade-in">
            <h2>Contact Information</h2>
            <p className="mb-8 text-light">
              We'd love to hear from you. Please fill out the form or reach out using our direct contact details below. Our support team is always ready to assist.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Headquarters</h4>
                  <p>Plot 1, Doro-Webo street, Ajibawo, Atan Ota, Ogun state</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Branch Office</h4>
                  <p>6, Goldrim plaza, off yayabator road by Ajayi junction, ogba, Lagos State</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>
                    <a href="tel:08079248456" style={{transition: "color 0.3s"}} onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>08079248456</a><br />
                    <a href="tel:08123453429" style={{transition: "color 0.3s"}} onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>08123453429</a>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p><a href="mailto:Nutrigold2025@gmail.com" style={{transition: "color 0.3s"}} onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>Nutrigold2025@gmail.com</a></p>
                </div>
              </div>
            </div>
            
            <a href="https://wa.me/2348079248456" target="_blank" rel="noopener noreferrer" className="btn btn-outline inline-flex items-center justify-center gap-4 mt-8 w-max">
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="contact-form-wrapper animate-fade-in">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="How can we help?" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn flex items-center justify-center gap-4">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
