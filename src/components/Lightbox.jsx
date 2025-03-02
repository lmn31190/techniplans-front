import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography"; // Import pour afficher du texte

// Composant Lightbox
const Lightbox = ({ images, selectedIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    // Fermer avec la touche "Échap" et naviguer avec les flèches
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose} // Fermer en cliquant sur l'arrière-plan
    >
      {/* Bouton Fermer */}
      <IconButton
        sx={{ position: "absolute", top: 20, right: 20, color: "white" }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      {/* Bouton Précédent */}
      <IconButton
        sx={{ position: "absolute", left: 20, color: "white" }}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Image affichée */}
      <img
        src={images[selectedIndex]}
        alt="lightbox"
        style={{ maxHeight: "80vh", maxWidth: "90vw", objectFit: "contain" }}
      />

      {/* ✅ Ajout du compteur sous l'image */}
      <Typography
        variant="h6"
        sx={{
          color: "white",
          marginTop: "10px",
          fontWeight: "bold",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "5px 10px",
          borderRadius: "8px",
        }}
      >
        {selectedIndex + 1} / {images.length} {/* Affichage X/Y */}
      </Typography>

      {/* Bouton Suivant */}
      <IconButton
        sx={{ position: "absolute", right: 20, color: "white" }}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Lightbox;
