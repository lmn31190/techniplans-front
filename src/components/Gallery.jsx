import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Lightbox from "./Lightbox"; // Import du composant Lightbox
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Gallery = ({ images = [] }) => {
  const theme = useTheme();
  // Définir le nombre de colonnes : au minimum 2 colonnes
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // MD et plus
  const columns = isMdUp ? 3 : 2; // 2 colonnes pour XS et SM, 3 colonnes pour MD et plus

  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Fonction pour ouvrir le Lightbox
  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  // Fonction pour fermer le Lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Passer à l'image suivante (boucle)
  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Passer à l'image précédente (boucle)
  const prevImage = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Organisation des images avec des hauteurs adaptées au nombre de colonnes
  const arrangedImages = images.map((imgUrl, index) => {
    let height;
    if (columns === 3) {
      const row = Math.floor(index / 3);
      const column = index % 3;
      const heightsEven = [285.08, 601.98, 285.08];  // Lignes paires
      const heightsOdd  = [601.98, 285.08, 601.98];  // Lignes impaires
      height = row % 2 === 0 ? heightsEven[column] : heightsOdd[column];
    } else if (columns === 2) {
      const row = Math.floor(index / 2);
      const column = index % 2;
      const heightsEven = [350, 550];
      const heightsOdd  = [550, 350];
      height = row % 2 === 0 ? heightsEven[column] : heightsOdd[column];
    }
    return {
      url: imgUrl,
      height,
      order: index,
    };
  });

  // Fonction pour réordonner les images afin d'obtenir un rendu en maçonnerie
  const reorderForMasonry = (items, columnsCount) => {
    const rows = Math.ceil(items.length / columnsCount);
    const reordered = [];
    for (let j = 0; j < items.length; j++) {
      const r = j % rows;
      const c = Math.floor(j / rows);
      const origIndex = r * columnsCount + c;
      if (origIndex < items.length) {
        reordered[j] = items[origIndex];
      }
    }
    return reordered;
  };

  const orderedImages = reorderForMasonry(arrangedImages, columns);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          overflowY: "scroll",
          marginTop: { xs: "10px", sm: "20px" },
          padding: { xs: "5px", sm: "10px" },
        }}
      >
        <ImageList variant="masonry" cols={columns} gap={8}>
          {orderedImages.map((item) => (
            <ImageListItem
              key={item.order}
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img
                src={item.url}
                alt={`Image ${item.order + 1}`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: `${item.height}px`,
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0px 8px 16px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0px 4px 6px rgba(0, 0, 0, 0.1)";
                }}
                onClick={() => openLightbox(item.order)}
              />
              <ImageListItemBar
                position="below"
                title={`Image ${item.order + 1}`}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* Affichage du Lightbox si ouvert */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          selectedIndex={selectedIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
};

export default Gallery;
