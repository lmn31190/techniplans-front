import React, { useState, useEffect } from "react";
import translations from "../translations";
import Hero from "../components/Hero";
import About from "../components/About";
import Steps from "../components/Steps";
import Services from "../components/Services";
import Realisations from "../components/Realisations";
import SliderImg from "../components/SliderImg";

const Home = () => {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const userLanguage = navigator.language.startsWith("fr") ? "fr" : "en";
        setLanguage(userLanguage);
    }, []);

    return (
        <div>
            <Hero language={language} />
            <About language={language} />
            <Steps language={language} />
            <Services language={language} />
            <Realisations language={language} />
            <SliderImg language={language} />
        </div>
    );
};

export default Home;
