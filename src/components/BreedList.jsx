import React, { useEffect, useState } from "react";
import DogGallery from "./DogGallery";
import Loader from "./Loader";
import { API_URL } from "../config";
import "../styles/BreedList.css";
import bannerImg from "../assets/banner-razas.jpg";

function BreedList() {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/breeds/list/all`)
      .then((res) => {
        if (!res.ok) throw new Error("Error en la API");
        return res.json();
      })
      .then((data) => {
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
        setFilteredBreeds(breedList);
      })
      .catch(() => setError("Error al cargar las razas. Intenta nuevamente."))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredBreeds(breeds.filter((breed) => breed.includes(value)));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && selectedBreed) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedBreed]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <Loader />;
  if (error)
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div className="breedlist-container">
      <div className="banner">
        <img
          src={bannerImg}
          alt="Explorador de Razas de Perros"
          className="banner-img"
        />
        <div className="banner-text">
          <h1>Explorador de Razas de Perros</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar raza..."
              value={search}
              onChange={handleSearch}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </div>

      <div className="breed-list">
        {filteredBreeds.map((breed) => (
          <button
            key={breed}
            className={`breed-button ${
              selectedBreed === breed ? "active" : ""
            }`}
            onClick={() => setSelectedBreed(breed)}
          >
            {breed.charAt(0).toUpperCase() + breed.slice(1)}
          </button>
        ))}
      </div>

      {selectedBreed && <DogGallery breed={selectedBreed} />}

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}

export default BreedList;
