import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/banner-perros.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <img
          src={bannerImage}
          alt="Explorador de razas de perros"
          className="banner-img"
        />
        <div className="banner-text">
          <h1>Catálogo de Razas de Perros</h1>
          <p>
            Explora una lista completa de razas de perros obtenida desde una API
            externa. Haz clic en el botón para ver las razas disponibles y sus
            imágenes.
          </p>
          <Link to="/razas" className="btn-primary">
            Explorar Razas
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
