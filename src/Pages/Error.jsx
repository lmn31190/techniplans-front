import React, { useEffect, useState } from "react";
import translations from "../translations";

const Error = () => {
    const [language, setLanguage] = useState("fr");

    useEffect(() => {
        const userLanguage = navigator.language.startsWith("en") ? "en" : "fr";
        setLanguage(userLanguage);

        if (window.Webflow) {
            window.Webflow.destroy();
            window.Webflow.ready();
            window.Webflow.require("ix2").init();
        }
    }, []);

    return (
        <div>
            <div className="_404-logo-wrapper">
                <a href="/" className="w-nav-brand">
                    <img
                        src="/images/logo.jpg"
                        loading="lazy"
                        sizes="(max-width: 1279px) 30px, (max-width: 1439px) 2vw, 200px"
                        height="100px"
                        alt="Logo"
                        srcSet="/images/logo-p-500.jpg 500w, /images/logo-p-800.jpg 800w, /images/logo.jpg 1024w"
                    />
                </a>
            </div>
            <div className="utility-page-wrap black-background">
                <div className="_404-block">
                    <div className="_404-text text-color-white">404</div>
                </div>
                <div className="_404-content-wrapper">
                    <h2 className="text-center text-color-white">{translations[language].error.title}</h2>
                    <p className="_404-paragraph text-color-white">
                        {translations[language].error.message}
                    </p>
                    <a href="/" className="primary-button-white w-button">
                        {translations[language].error.back}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Error;
