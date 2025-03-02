import React from 'react'
import translations from "../translations";

const Hero = ({ language }) => {
  return (
    <section
      id="hero"
      data-w-id="8336170c-bb27-a3b9-d54e-0882f72b8dc0"
      className="section home-banner"
    >
      <div className="main-wrapper">
        <div className="banner-home">
          <div className="base-container banner-first w-container">
            <div className="banner-content">
              <div className="negative-botton-margin">
                <h1
                  id="w-node-_459fc911-2764-88ab-933e-ac8cb6c584a2-c8773274"
                  data-w-id="459fc911-2764-88ab-933e-ac8cb6c584a2"
                  style={{ opacity: 0 }}
                  className="heading-banner"
                >
                  TechniPlans
                </h1>
              </div>
              <h3
                id="w-node-_89e8e02a-01cc-f5cd-b660-62ebaf7183f6-c8773274"
                data-w-id="89e8e02a-01cc-f5cd-b660-62ebaf7183f6"
                style={{ opacity: 0 }}
                className="heading"
              >
                {translations[language].home.title}
              </h3>
              <p
                data-w-id="18720026-f461-989b-8167-f5ea194d03dd"
                style={{ opacity: 0 }}
                className="text-color-white without-margin"
              >
                {translations[language].home.description}
              </p>
              <div
                id="w-node-da9fa7ca-8043-077b-7017-79f4dfa0e457-c8773274"
                data-w-id="da9fa7ca-8043-077b-7017-79f4dfa0e457"
                style={{ opacity: 0 }}
              >
                <a
                  data-w-id="56e67c21-23aa-fe9a-7998-7cb90bb11d55"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    color: "rgb(0,0,0)",
                    backgroundColor: "rgb(255,255,255)"
                  }}
                  href="/contact"
                  className="primary-button-white w-button"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div
            data-poster-url="./videos/video-poster-00001.jpg"
            data-video-urls="./videos/video-transcode.mp4,videos/video-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            className="background-video w-background-video w-background-video-atom"
          >
            <video
              id="58d7a102-65fc-d6f2-6acd-26082ebe6998-video"
              autoPlay
              loop
              style={{
                backgroundImage: 'url("videos/video-poster-00001.jpg")'
              }}
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src="videos/video-transcode.mp4" data-wf-ignore="true" />
              <source src="videos/video-transcode.webm" data-wf-ignore="true" />
            </video>
          </div>
          <div className="overflow-background" />
        </div>
        <div className="panel-lines-block">
          <div className="panel-lines display-none-mobile" />
        </div>
      </div>
    </section>
  )
}

export default Hero