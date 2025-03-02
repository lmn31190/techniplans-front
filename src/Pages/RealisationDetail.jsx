import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Gallery from "../components/Gallery";


const RealisationDetail = () => {
  const { id } = useParams();
  const [realisation, setRealisation] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CLE_API}/${id}`)
      .then(response => setRealisation(response.data))
      .catch(error => console.error("Erreur de récupération :", error));
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      if (typeof window.Webflow !== "undefined" && typeof window.Webflow.require === "function") {
        console.log("🔄 Webflow rechargé sur RealisationDetail");
        try {
          window.Webflow.require("ix2").init();
        } catch (error) {
          console.error("⚠️ Erreur Webflow :", error);
        }
      } else {
        console.warn("⚠️ Webflow non disponible après le délai.");
      }
    }, 500); // Délai pour éviter les erreurs de chargement
  }, []);
  
  


  if (!realisation) return <p>Chargement...</p>;

  return (
    <>
      <section className="section banner-project">
        <div className="base-container banner-project w-container">
          <div className="banner-projects">
            <div className="project-banner-top">
              <h1 className="text-color-white">{realisation.title}</h1>
              <p className="paragraph-large text-white">{realisation.description}</p>
            </div>
            <div className="project-banner-bottom">
              <div className="project-template-info-wrap">
                <p className="paragraph-large text-color-white">Client</p>
                <p className="paragraph-gray">{realisation.client}</p>
              </div>
              <div className="project-template-info-wrap">
                <p className="paragraph-large text-color-white">Location</p>
                <p className="paragraph-gray">{realisation.location}</p>
              </div>
              <div className="project-template-info-wrap">
                <p className="paragraph-large text-color-white">Services</p>
                <p className="paragraph-gray">{realisation.services.join(", ")}</p>
              </div>
              <div className="project-template-info-wrap last-child">
                <p className="paragraph-large text-color-white">Share on</p>
                <div className="project-template-social-icons">
                  <a href="https://www.facebook.com/" target="_blank" className="project-template-social-link"></a>
                  <a href="https://www.instagram.com/" target="_blank" className="project-template-social-link"></a>
                  <a href="https://twitter.com/" target="_blank" className="project-template-social-link last-child"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img loading="lazy" alt={realisation.title} src={realisation.imageUrl} className="hero-image" />
        <div className="gradient-hero" />
      </section>
      <Gallery images={realisation.gallery || []} />
    </>
  );
};

export default RealisationDetail;
