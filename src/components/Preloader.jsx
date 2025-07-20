import React from "react";
import "../styles/Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="spinner"></div>
      <p>Cargando razas de perros...</p>
    </div>
  );
}

export default Preloader;
