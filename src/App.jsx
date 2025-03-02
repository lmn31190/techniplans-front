import React, { useContext } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import RealisationDetail from "./Pages/RealisationDetail";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactEN from './Pages/ContactEN';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext';

const AppContent = () => {
  const location = useLocation();
  const { language } = useContext(LanguageContext);
  const isErrorPage = location.pathname === "/404";
  const isContactPage = location.pathname === "/contact";
  const isLanguagePage = location.pathname === "/language";

  return (
    <div>
      {!isErrorPage && !isContactPage && !isLanguagePage && <Navbar language={language} />}

      <Routes>
        <Route index element={<Home key={language} language={language} />} />
        <Route path='/contact' element={language === "fr" ? <Contact key={language} /> : <ContactEN key={language} />} />
        <Route path='/realisation/:id' element={<RealisationDetail language={language} key={language} />} />
        <Route path='/404' element={<Error key={language} />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      {!isErrorPage && !isContactPage && !isLanguagePage && <Footer language={language} />}
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
