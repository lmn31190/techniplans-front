import React, { useState, useEffect } from 'react';
import './contact.css';

const ContactEN = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    if (isLightboxOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  const handleAccept = () => {
    window.location.href = "https://calendly.com/oceane-techniplans/techniplans-fr-clone"; // Change the link if needed
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="main-wrapper">
          <div className="section_header">
            <div className="w-layout-grid header_content-wrapper">
              <div className="slide-banner">
                <a href="/" className="link-block w-inline-block">
                  <img
                    src="/images/logo-en.png"
                    loading="lazy"
                    alt="Logo"
                    className="image-14"
                  />
                </a>
                <div className="banner-content">
                  <div className="quote-wrap">
                    <h3 className="heading-h3">An idea? A project?</h3>
                    <p className="paragraph-4">
                      Fill out this form to get a detailed quote for your request!
                    </p>
                  </div>
                </div>
                <div className="background" />
              </div>

              <div className="onboarding_form-block w-form">
              <div className='returnMenu' onClick={() => window.location.href = "/"}>
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                  </svg>
                  <p>Return to home</p></div>
                <form className="onboarding_form">
                  <div className="onboarding_step">
                    <div className="onboarding_step-content">
                      <h2>How can I help you?</h2>
                      <p className="text-color-light">
                        Select the topic that interests you:
                      </p>
                      <div className="spacer-medium" />

                      <div className="form_radio-columns is-1">
                        <div className='mail' onClick={() => window.location.href = "https://form.jotform.com/250635097936365"}>
                          <img src="/images/mail.jpeg" alt="Contact" />
                          <span>Contact</span>
                        </div>
                        <div className='devis' onClick={() => window.location.href = "https://form.jotform.com/250635510652350"}>
                          <img src="/images/devis.png" alt="Quote" />
                          <span>Quote</span>
                        </div>
                        <div className='rdv' onClick={openLightbox}>
                          <img src="/images/rdv.jpg" alt="Appointment" />
                          <span>Make an appointment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✖</button>
            <h2>Information</h2>
            <p>Appointments are only made via WhatsApp</p>
            <div className="lightbox-buttons">
              <button className="btn accept" onClick={handleAccept}>Accept</button>
              <button className="btn cancel" onClick={closeLightbox}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactEN;
