import React, { useEffect, useState } from 'react';
import './contact.css';

const Contact = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // ✅ Ouvrir la lightbox
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  // ✅ Fermer la lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // ✅ Gestion de la touche ESC pour fermer la lightbox
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

  // ✅ Rediriger vers un lien externe lors du clic sur "Accepter"
  const handleAccept = () => {
    window.location.href = "https://calendly.com/oceane-techniplans/contact";
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="main-wrapper">
          <div className="section_header">
            <div className="w-layout-grid header_content-wrapper">
              <div className="slide-banner">

                <img
                  src="images/logo-removebg-preview-1.png"
                  loading="lazy"
                  alt=""
                  className="image-14"
                />

                <div className="banner-content">
                  <div className="quote-wrap">
                    <h3 className="heading-h3">Une idée ? Un projet ?</h3>
                    <p className="paragraph-4">
                      Remplissez ce formulaire pour obtenir un devis détaillé de votre demande !
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
                  <p>Retrouner à l'accueil</p></div>
                <form className="onboarding_form">
                  <div className="onboarding_step">
                    <div className="onboarding_step-content">
                      <h2>Comment puis-je vous aider ?</h2>
                      <p className="text-color-light">
                        Sélectionnez la thématique qui vous intéresse :
                      </p>
                      <div className="spacer-medium" />

                      <div className="form_radio-columns is-1">
                        <div className='mail' onClick={() => window.location.href = "https://form.jotform.com/250635438250353"}>
                          <img src="/images/mail.jpeg" alt="Contact" />
                          <span>Contact</span>
                        </div>
                        <div className='devis' onClick={() => window.location.href = "https://form.jotform.com/250635009658359"}>
                          <img src="/images/devis.png" alt="Devis" />
                          <span>Devis</span>
                        </div>
                        <div className='rdv' onClick={openLightbox}> {/* ✅ Ouvre la lightbox */}
                          <img src="/images/rdv.jpg" alt="Rendez-vous" />
                          <span>Prendre rendez-vous</span>
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

      {/* ✅ Lightbox sans modifier les classes existantes */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* ✅ Bouton de fermeture (croix) */}
            <button className="lightbox-close" onClick={closeLightbox}>✖</button>
            <h2>Information</h2>
            <p>Les rendez-vous se font uniquement via WhatsApp</p>
            <div className="lightbox-buttons">
              <button className="btn accept" onClick={handleAccept}>Accepter</button>
              <button className="btn cancel" onClick={closeLightbox}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

