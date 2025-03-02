import React from 'react'
import translations from "../translations";

const Steps = ({ language }) => {
  return (
    <section id="steps" className="section light-background">
      <div className="base-container w-container">
        <div className="section-title-wrapper">
          <p
            data-w-id="5532033a-88f6-94ea-628a-d83e2ac6c16d"
            style={{ opacity: 0 }}
            className="subtitle"
          >
            {translations[language].steps?.title}
          </p>
          <h2
            data-w-id="0a751c80-3d6c-29a9-e022-752e50f28c41"
            style={{ opacity: 0 }}
            className="text-center"
          >
            {translations[language].steps?.description}
          </h2>
        </div>
        <div className="process-container">
          <div className="process-wrapper">
            <div className="process-step">
              <div
                id="w-node-_0a751c80-3d6c-29a9-e022-752e50f28c48-c8773274"
                className="process-item-container"
              >
                <img
                  src="./images/pexels-ivan-samkov-4491910.jpg"
                  loading="lazy"
                  sizes="(max-width: 767px) 56px, (max-width: 1279px) 41vw, 513px"
                  srcSet="images/pexels-ivan-samkov-4491910-p-500.jpg 500w, images/pexels-ivan-samkov-4491910-p-800.jpg 800w, images/pexels-ivan-samkov-4491910-p-1080.jpg 1080w, images/pexels-ivan-samkov-4491910-p-1600.jpg 1600w, images/pexels-ivan-samkov-4491910-p-2000.jpg 2000w, images/pexels-ivan-samkov-4491910-p-2600.jpg 2600w, images/pexels-ivan-samkov-4491910-p-3200.jpg 3200w, images/pexels-ivan-samkov-4491910.jpg 6240w"
                  alt=""
                  className="process-item-image"
                />
              </div>
              <div
                id="w-node-_0a751c80-3d6c-29a9-e022-752e50f28c4a-c8773274"
                className="process-item-indicator"
              >
                <div>1</div>
              </div>
              <div
                id="w-node-_0a751c80-3d6c-29a9-e022-752e50f28c4d-c8773274"
                className="process-item-description"
              >
                <h3 className="heading-4">{translations[language].steps?.step1}</h3>
                <p className="paragraph-3">
                {translations[language].steps?.step1Desc}
                </p>
              </div>
              <div
                id="w-node-_3f63c50a-4e74-a7df-5d63-6b6ed83a5204-c8773274"
                className="space active"
              />
            </div>
            <div className="process-step">
              <div
                id="w-node-_0a751c80-3d6c-29a9-e022-752e50f28c53-c8773274"
                className="process-item-description"
              >
                <h3 className="heading-3">
                {translations[language].steps?.step2}
                </h3>
                <p className="paragraph-2">
                {translations[language].steps?.step2Desc}
                </p>
              </div>
              <div
                id="w-node-_0a751c80-3d6c-29a9-e022-752e50f28c58-c8773274"
                className="process-item-indicator"
              >
                <div>2</div>
              </div>
              <div
                id="w-node-_0a751c80-3d6c-29a9-e022-752e50f28c5b-c8773274"
                className="process-item-container"
              >
                <img
                  src="./images/pexels-lexovertoom-1109541.jpg"
                  loading="lazy"
                  sizes="(max-width: 767px) 56px, (max-width: 1279px) 41vw, 513px"
                  height="Auto"
                  alt=""
                  srcSet="images/pexels-lexovertoom-1109541-p-500.jpg 500w, images/pexels-lexovertoom-1109541-p-800.jpg 800w, images/pexels-lexovertoom-1109541-p-1080.jpg 1080w, images/pexels-lexovertoom-1109541-p-1600.jpg 1600w, images/pexels-lexovertoom-1109541-p-2000.jpg 2000w, images/pexels-lexovertoom-1109541-p-2600.jpg 2600w, images/pexels-lexovertoom-1109541-p-3200.jpg 3200w, images/pexels-lexovertoom-1109541.jpg 5472w"
                  className="process-item-image"
                />
              </div>
            </div>
            <div className="process-step">
              <div
                id="w-node-_0a751c80-3d6c-29a9-e022-752e50f28c5e-c8773274"
                className="process-item-container"
              >
                <img
                  src="./images/pexels-karolina-grabowska-7681071.jpg"
                  loading="lazy"
                  sizes="(max-width: 767px) 56px, (max-width: 1279px) 41vw, 513px"
                  srcSet="images/pexels-karolina-grabowska-7681071-p-500.jpg 500w, images/pexels-karolina-grabowska-7681071-p-800.jpg 800w, images/pexels-karolina-grabowska-7681071-p-1080.jpg 1080w, images/pexels-karolina-grabowska-7681071-p-1600.jpg 1600w, images/pexels-karolina-grabowska-7681071-p-2000.jpg 2000w, images/pexels-karolina-grabowska-7681071-p-2600.jpg 2600w, images/pexels-karolina-grabowska-7681071-p-3200.jpg 3200w, images/pexels-karolina-grabowska-7681071.jpg 6720w"
                  alt=""
                  className="process-item-image"
                />
              </div>
              <div
                id="w-node-_0a751c80-3d6c-29a9-e022-752e50f28c60-c8773274"
                className="process-item-indicator"
              >
                <div>3</div>
              </div>
              <div
                id="w-node-_0a751c80-3d6c-29a9-e022-752e50f28c63-c8773274"
                className="process-item-description"
              >
                <h3 className="heading-2">{translations[language].steps?.step3}</h3>
                <p className="paragraph">
                {translations[language].steps?.step3Desc}
                </p>
              </div>
              <div
                id="w-node-f2d95fe1-1137-f29c-a37a-ca3bae99349d-c8773274"
                className="space active"
              />
            </div>
            <div className="process-timeline">
              <div className="process-timeline-progress" />
            </div>
            <div className="process-overlay-top" />
            <div className="process-overlay-bottom" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps