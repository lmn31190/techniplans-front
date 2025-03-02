import React from 'react'
import translations from '../translations'

const Footer = ({language}) => {
  return (
    <div className="footer">
      <div className="base-container w-container">
        <div className="footer-wrapper">
          <div
            id="w-node-daf981fd-9b17-a0fb-7466-2c35634f2c75-634f2c73"
            className="footer-top-wrapper"
          >
            <div
              id="w-node-b52440be-7dc3-9322-df96-ad1d39ee3cb8-634f2c73"
              data-w-id="b52440be-7dc3-9322-df96-ad1d39ee3cb8"
              className="big-text-footer"
            >
              TECHNIPLANS
            </div>
            <div
              id="w-node-ec074abe-44f1-7c57-b0a4-97ba05e6e442-634f2c73"
              data-w-id="ec074abe-44f1-7c57-b0a4-97ba05e6e442"
              className="big-text-footer"
            >
              {translations[language].footer.slogan}
            </div>
            <div
              id="w-node-fdfca8cf-91cc-dbb3-1271-aee4069f9e40-634f2c73"
              className="footer-button"
            >
              <a
                data-w-id="a858ad10-dcc8-eb38-33c7-5199529856dc"
                href="/contact"
                className="primary-button margin-top-medium w-button"
              >
                {translations[language].footer.contact}
              </a>
            </div>
          </div>
          <div className="footer-bottom-wrapper">
            <img
              src="/images/timothy-rhyne.jpg"
              loading="lazy"
              sizes="(max-width: 991px) 100vw, (max-width: 1439px) 33vw, 35vw"
              srcSet="/images/timothy-rhyne-p-500.jpg 500w, /images/timothy-rhyne-p-800.jpg 800w, images/timothy-rhyne.jpg 985w"
              alt="Architecture"
              className="image-footer-absolute"
            />
            <div
              id="w-node-_03aca095-f26c-2ba6-5838-959a5abf91f9-634f2c73"
              className="footer-image"
            />
            <div
              id="w-node-_8fff50a1-3d5c-2904-5b03-f17601c6acf0-634f2c73"
              className="footer-links-wrapper"
            >
              <a
                data-w-id="434445b3-0031-14d3-f102-1fdadb9a9c3d"
                href="/#about"
                className="footer-link w-inline-block"
              >
                <p className="footer-text">{translations[language].footer.about}</p>
                <div className="underline" />
              </a>
              <a
                data-w-id="2c5d6e85-cf3e-ed88-cf14-02f6b6e17c6e"
                href="/#services"
                className="footer-link w-inline-block"
              >
                <p className="footer-text">{translations[language].footer.services}</p>
                <div className="underline" />
              </a>
              <a
                data-w-id="b21cf3d0-d29c-8ad8-1ff9-63cabbc1b8ac"
                href="/#realisations"
                className="footer-link w-inline-block"
              >
                <p className="footer-text">{translations[language].footer.projects}</p>
                <div className="underline" />
              </a>
              <a
                data-w-id="b4358706-67f6-2151-ca27-e44fa8542233"
                href="/contact"
                className="footer-link w-inline-block"
              >
                <p className="footer-text">{translations[language].footer.contact}</p>
                <div className="underline" />
              </a>
            </div>
            <div
              id="w-node-a8c0808a-e773-aa91-795c-0ceefe8a87a3-634f2c73"
              className="footer-icons-wrapper"
            >
              <a
                href="https://www.facebook.com/TechniplansDessinatriceProjeteuse/"
                target="_blank"
                className="footer-icon-links"
              >
                
              </a>
              <a
                href="https://www.instagram.com/techniplans_/?locale=en_gb"
                target="_blank"
                className="footer-icon-links"
              >
                
              </a>
              <a
                href="https://www.linkedin.com/in/oc%C3%A9ane-lagrange-03a04924a/"
                target="_blank"
                className="footer-icon-links icon"
              >
                in
              </a>
            </div>
            <div
              id="w-node-daf981fd-9b17-a0fb-7466-2c35634f2ca5-634f2c73"
              className="footer-wrap"
            >
              <div className="footer-copyright">
              {translations[language].footer.copyright}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="promotion-labels-wrapper" />
    </div>
  )
}

export default Footer