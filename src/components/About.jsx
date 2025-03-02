import React from 'react'
import translations from "../translations";

const About = ({ language }) => {
  return (
    <section
      id="about"
      data-w-id="6a3f3305-e347-cb3d-30ca-c62ce5ea878d"
      className="section overflow"
    >
      <div className="base-container w-container">
        <div className="benefits-wrapper margin-bottom-xlarge">
          <div
            id="w-node-_7e8f2520-51ba-038a-c50b-7520e8986c12-c8773274"
            className="intro-content"
          >
            <div className="intro-content-wrap">
              <p
                data-w-id="223e3ece-774b-dabd-82ff-71f4c76c7c61"
                style={{ opacity: 0 }}
                className="subtitle"
              >
                {translations[language].about?.title}
              </p>
              <h2
                data-w-id="5cb74c10-462b-4fe8-1249-e52ca31a313b"
                style={{ opacity: 0 }}
                className="margin-bottom-medium"
              >
                {translations[language].about?.heading}
              </h2>
              <p
                data-w-id="4c329287-571d-2d47-f9f8-9710f6723be2"
                style={{ opacity: 0 }}
                className="paragraph-large"
              >
                {translations[language].about?.description}
              </p>
              <div
                data-w-id="e78b808f-e3f0-b46d-4101-79c63fef537d"
                style={{ opacity: 0 }}
              >
                <a
                  href="#steps"
                  data-w-id="b2f62671-8c9a-c006-91d3-ab8970e315c0"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    backgroundColor: "rgba(0,0,0,0)",
                    color: "rgb(0,0,0)"
                  }}
                  className="secondary-button margin-top-large w-button"
                >
                  {translations[language].about?.learnMore}
                </a>
              </div>
            </div>
          </div>
          <div
            id="w-node-e97c8fac-28e9-288b-3473-8c1f2312d6ae-c8773274"
            className="intro-right-image"
          >
            <div
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(1.1, 1.1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(1.1, 1.1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(1.1, 1.1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(1.1, 1.1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
              }}
              className="hero-background-image benefit-intro-background"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About