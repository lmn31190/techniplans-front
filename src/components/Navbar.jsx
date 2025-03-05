import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // ✅ Importer useLocation
import translations from "../translations";
import './navbar.css'

const Navbar = ({ language }) => {
  const location = useLocation(); // ✅ Obtenir l'URL actuelle
  const isRealisationDetail = location.pathname.startsWith("/realisation/"); // ✅ Vérifier si on est sur une page détail
  const [isOpen, setIsOpen] = useState(false);



  useEffect(() => {
    console.log("✅ Navbar affichée !");

    setTimeout(() => {
      if (typeof window.Webflow !== "undefined" && typeof window.Webflow.require === "function") {
        console.log("🔄 Webflow rechargé dans la Navbar !");
        window.Webflow.require("ix2").init();
      }

      const navbar = document.querySelector(".w-nav");
      if (navbar) {
        navbar.style.display = "block";
        navbar.style.opacity = "1";
        navbar.style.visibility = "visible";
      }

      document.querySelectorAll(".w-nav-menu").forEach(menu => {
        menu.style.display = "flex";
        menu.style.opacity = "1";
      });

      document.querySelectorAll(".w-nav-link").forEach(link => {
        link.style.display = "inline-block";
      });

    }, 500);
  }, []);

  return (

    <div className="navMenu">
      <div className="navContainer">

        <div className="navLogo">
          <a href="/" aria-current="page">
            <img
              src={language === "fr" ? "/images/logo-removebg-preview-1.png" : "/images/logo-en-transparent.png"}
              loading="lazy"
              alt="Logo"
              className="image-8"
            />
          </a>
        </div>
        <nav className={`navBar ${isOpen ? "open" : ""}`}>
          <ul className="navWrapper">

            {isRealisationDetail ? (
              <>
                <li><a href="/">{translations[language].navbar.home}</a></li>
                <li><a href="/contact">{translations[language].navbar.contact}</a></li>
              </>

            ) : (
              <>
                <li><a href="#about" onClick={() => setIsOpen(!isOpen)}>{translations[language].navbar.about}</a></li>
                <li><a href="#steps" onClick={() => setIsOpen(!isOpen)}>{translations[language].navbar.steps}</a></li>
                <li><a href="#services" onClick={() => setIsOpen(!isOpen)}>{translations[language].navbar.services}</a></li>
                <li><a href="#realisations" onClick={() => setIsOpen(!isOpen)}>{translations[language].navbar.projects}</a></li>
                <li><a href="/contact">{translations[language].navbar.contact}</a></li>
              </>
            )}
          </ul>
        </nav>
        <div className="burgerBtn" onClick={() => setIsOpen(!isOpen)}>
          <img src="/images/menu.png" loading="lazy" alt="Menu" className="image-7" />
        </div>
      </div>

    </div>





    // <div
    //   data-collapse="all"
    //   data-animation="default"
    //   data-duration={0}
    //   data-w-id="f0b39d49-5bd5-142d-7cb3-37da3662a959"
    //   data-easing="ease"
    //   data-easing2="ease"
    //   role="banner"
    //   className="main-nav w-nav"
    // >
    //   <div className="container-w1 gutter-outside w-container">
    //     <div className="main-nav-inner">
    //       <a
    //         href="/"
    //         aria-current="page"
    //         className="logo-wrapper w-nav-brand w--current"
    //       >
    //         <img
    //           // src="/images/logo-removebg-preview-1.png"
    //           src={`${language === "fr" ? "/images/logo-removebg-preview-1.png" : "/images/logo-en-transparent.png"}`}
    //           loading="lazy"
    //           alt="Logo"
    //           className="image-8"
    //         />
    //       </a>
    //       <nav role="navigation" className="nav-wrapper w-nav-menu">

    //         <div className="nav-items">
    //           <div className="nav-link-1">
    //             <a href="/" className="nav-link-3">{translations[language].navbar.home}</a>
    //           </div>
    //           {/** ✅ Afficher seulement Contact si on est sur RealisationDetail */}
    //           {isRealisationDetail ? (
    //             <div className="nav-link-5">
    //               <a href="/contact" className="nav-link-3 btn">{translations[language].navbar.contact}</a>
    //             </div>
    //           ) : (
    //             <>
    //               <div className="nav-link-2">
    //                 <a href="#about" className="nav-link-3">{translations[language].navbar.about}</a>
    //               </div>
    //               <div className="nav-link-2">
    //                 <a href="#steps" className="nav-link-3 _2">{translations[language].navbar.steps}</a>
    //               </div>
    //               <div className="nav-link-2">
    //                 <a href="#services" className="nav-link-3 _2">{translations[language].navbar.services}</a>
    //               </div>
    //               <div className="nav-link-3">
    //                 <a href="#realisations" className="nav-link-3 _3">{translations[language].navbar.projects}</a>
    //               </div>
    //               <div className="nav-link-5">
    //                 <a href="/contact" className="nav-link-3 btn">{translations[language].navbar.contact}</a>
    //               </div>
    //             </>
    //           )}
    //         </div>
    //         <div className="bg-noise" />
    //       </nav>
    //       <div className="nav-toggle-btn w-nav-button" >
    //         <img
    //           src="/images/menu.png"
    //           loading="lazy"
    //           alt="Menu"
    //           className="image-7"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
