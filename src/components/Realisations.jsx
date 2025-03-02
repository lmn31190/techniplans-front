import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import translations from "../translations";
import "./realisation.css";

const Realisations = ({ language }) => {
  const [realisations, setRealisations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const sliderMaskRef = useRef(null);

  // Chargement des réalisations
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_CLE_API)
      .then((res) => setRealisations(res.data))
      .catch((err) => console.error("Erreur lors du chargement :", err));
  }, []);

  // Définition du nombre d'éléments visibles en fonction de la largeur de l'écran
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1290) {
        setItemsPerView(4);
      } else if (width >= 950){
        setItemsPerView(3);
      } else if (width >= 700) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Réinitialise currentIndex si nécessaire lors du changement de itemsPerView
  useEffect(() => {
    const maxIndex = Math.max(realisations.length - itemsPerView, 0);
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [itemsPerView, realisations.length, currentIndex]);

  // Auto-scroll toutes les 10 secondes
  useEffect(() => {
    if (realisations.length === 0) return;
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(realisations.length - itemsPerView, 0);
        return prevIndex === maxIndex ? 0 : prevIndex + 1;
      });
    }, 10000);
    return () => clearInterval(intervalId);
  }, [realisations.length, itemsPerView]);

  // Défilement manuel via flèches
  const scrollCarousel = (direction) => {
    if (realisations.length === 0) return;
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(realisations.length - itemsPerView, 0);
      if (direction === "right") {
        return prevIndex === maxIndex ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? maxIndex : prevIndex - 1;
      }
    });
  };

  return (
    <section id="realisations" className="realisations-section">
      <div className="realisations-container">
        <div className="section-title-wrapper">
          <p className="subtitle text-white-color">
            {translations[language].realisations.title}
          </p>
          <h2 className="text-white-color">
            {translations[language].realisations.subtitle}
          </h2>
        </div>
        <div className="slider-wrapper">
          <div className="slider">
            <div
              className="slider-mask"
              ref={sliderMaskRef}
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {realisations.length > 0 ? (
                realisations.map((realisation) => (
                  <div
                    key={realisation._id}
                    className="slider-item"
                    style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                  >
                    <Link to={`/realisation/${realisation._id}`} className="slider-link">
                      <div className="slider-image-container">
                        <img
                          src={realisation.imageUrl}
                          alt={realisation.title}
                          className="slider-image"
                        />
                        <div className="slider-overlay">
                          <div className="slider-text">
                            <h3 className="slider-title">{realisation.title}</h3>
                            <p className="slider-category">{realisation.category}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="empty-message">
                  {translations[language].realisations.empty}
                </p>
              )}
            </div>
          </div>
          <div className="slider-arrows-container">
            <button className="slider-arrow slider-arrow-left" onClick={() => scrollCarousel("left")}>
              <img src="/images/Left-Arrow.png" alt="Left Arrow" className="arrow-icon" />
            </button>
            <button className="slider-arrow slider-arrow-right" onClick={() => scrollCarousel("right")}>
              <img src="/images/Right-Arrow.png" alt="Right Arrow" className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Realisations;
