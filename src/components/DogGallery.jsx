import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Loader from "./Loader";
import { API_URL } from "../config";
import "../styles/dogGallery.css";

function DogGallery({ breed }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/breed/${breed}/images`)
      .then((res) => {
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
      })
      .then((data) => {
        setImages(data.message.slice(0, 10));
      })
      .catch(() => setError("Error al cargar imágenes. Intenta nuevamente."))
      .finally(() => setLoading(false));
  }, [breed]);

  if (loading) return <Loader />;
  if (error)
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div className="gallery-container">
      <h3 className="gallery-title">
        Imágenes de la raza: {capitalize(breed)}
      </h3>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={breed}
            onClick={() => setSelectedImage(img)}
            className="gallery-image"
          />
        ))}
      </div>
      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}

export default DogGallery;
