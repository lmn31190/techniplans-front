import React from 'react'
import translations from "../translations";

const Services = ({ language }) => {
  return (
    <section id="services" className="services">
      <div className="section-title-wrapper">
        <p
          data-w-id="a07f352a-5f95-ca5e-5ecf-d5e9c4adde7e"
          style={{ opacity: 0 }}
          className="subtitle"
        >
          {translations[language].services?.title}
        </p>
        <h2
          data-w-id="a07f352a-5f95-ca5e-5ecf-d5e9c4adde80"
          style={{ opacity: 0 }}
          className="text-center"
        >
          {translations[language].services?.design}
        </h2>
      </div>
      <div className="w-layout-grid services_component">
        <div
          id="w-node-_9c39b439-20a2-e69d-f12a-c9dcadacbff3-c8773274"
          className="services_content-wrapper"
        >
          <div className="w-layout-grid services_content-grid">
            <div
              id="w-node-_83b1a2f5-914f-248c-c9d1-c4ed35ee59af-c8773274"
              data-w-id="83b1a2f5-914f-248c-c9d1-c4ed35ee59af"
              className="services_content_block"
            >
              <h2 className="services_h2">
              {translations[language].services?.design}
              </h2>
              <p className="services_paragraphe">
              {translations[language].services?.designDesc}
              </p>
              <img
                src="./images/3c3e648b-1780-4246-b6b3-a8e7d56b8bb9-transformed.jpeg"
                loading="lazy"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 87vw, (max-width: 991px) 90vw, 100vw"
                srcSet="images/3c3e648b-1780-4246-b6b3-a8e7d56b8bb9-transformed-p-500.jpeg 500w, images/3c3e648b-1780-4246-b6b3-a8e7d56b8bb9-transformed-p-800.jpeg 800w, images/3c3e648b-1780-4246-b6b3-a8e7d56b8bb9-transformed.jpeg 1000w"
                alt=""
                className="services_img _1 hide-desktop"
              />
            </div>
            <div
              id="w-node-_4646997e-4fd4-d6f0-2d8b-f0a1a6976320-c8773274"
              data-w-id="4646997e-4fd4-d6f0-2d8b-f0a1a6976320"
              className="services_content_block"
            >
              <h2 className="services_h2">{translations[language].services?.catalog}</h2>
              <p className="services_paragraphe">
              {translations[language].services?.catalogDesc}
              </p>
              <img
                src="./images/Minimalist-Modern-House-For-Sale-Poster.png"
                loading="lazy"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 87vw, (max-width: 991px) 90vw, 100vw"
                srcSet="images/Minimalist-Modern-House-For-Sale-Poster-p-500.png 500w, images/Minimalist-Modern-House-For-Sale-Poster-p-800.png 800w, images/Minimalist-Modern-House-For-Sale-Poster-p-1080.png 1080w, images/Minimalist-Modern-House-For-Sale-Poster.png 1587w"
                alt=""
                className="services_img _2 hide-desktop"
              />
            </div>
          </div>
        </div>
        <div
          id="w-node-_0b0b9522-2eef-9b04-a79a-eaf05508487d-c8773274"
          className="services_img-wrapper hide-tablet"
        >
          <div className="services_img-conainer">
            <img
              src="./images/3c3e648b-1780-4246-b6b3-a8e7d56b8bb9-transformed.jpeg"
              loading="lazy"
              style={{ opacity: 0 }}
              sizes="(max-width: 991px) 100vw, (max-width: 1279px) 95vw, (max-width: 1439px) 96vw, (max-width: 1919px) 97vw, 99vw"
              alt=""
              srcSet="images/3c3e648b-1780-4246-b6b3-a8e7d56b8bb9-transformed-p-500.jpeg 500w, images/3c3e648b-1780-4246-b6b3-a8e7d56b8bb9-transformed-p-800.jpeg 800w, images/3c3e648b-1780-4246-b6b3-a8e7d56b8bb9-transformed.jpeg 1000w"
              className="services_img _1"
            />
            <img
              src="./images/Minimalist-Modern-House-For-Sale-Poster-1.png"
              loading="lazy"
              style={{ opacity: 0 }}
              sizes="(max-width: 991px) 100vw, (max-width: 1279px) 95vw, (max-width: 1439px) 96vw, (max-width: 1919px) 97vw, 99vw"
              alt=""
              srcSet="images/Minimalist-Modern-House-For-Sale-Poster-1-p-500.png 500w, images/Minimalist-Modern-House-For-Sale-Poster-1-p-800.png 800w, images/Minimalist-Modern-House-For-Sale-Poster-1-p-1080.png 1080w, images/Minimalist-Modern-House-For-Sale-Poster-1.png 1587w"
              className="services_img _2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services