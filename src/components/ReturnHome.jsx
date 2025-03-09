import React, { useEffect, useState } from 'react';
import "./returnHome.css"
import translations from "../translations";

const ReturnHome = () => {
    const [language, setLanguage] = useState("fr");
    
        useEffect(() => {
            const userLanguage = navigator.language.startsWith("en") ? "en" : "fr";
            setLanguage(userLanguage);
        }, []);
    
    return (
        <div className='returnMenu' onClick={() => window.location.href = "/"}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
            <p>{translations[language].returnHome.text}</p>

        </div>
    )
}

export default ReturnHome