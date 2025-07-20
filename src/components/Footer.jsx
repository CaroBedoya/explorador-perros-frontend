import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2025 <strong>Carolina Bedoya</strong> | Proyecto educativo{" "}
        <strong>TripleTen</strong> | Datos de{" "}
        <a
          href="https://dog.ceo/dog-api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dog CEO API
        </a>
      </p>
    </footer>
  );
}

export default Footer;
