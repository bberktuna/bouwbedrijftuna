import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">

      <header className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Bouwbedrijf Tuna" />
        </div>
        <nav>
          <a href="#diensten">Diensten</a>
          <a href="#projecten">Projecten</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Bouwbedrijf Tuna</h1>
            <p>
              Betrouwbare partner voor renovatie, nieuwbouw en complete
              bouwprojecten in Nederland.
            </p>
            <a href="#contact" className="btn-primary">
              Vraag Offerte Aan
            </a>
          </div>
        </div>
      </section>

<section id="diensten" className="section">
  <h2>Onze Specialisaties</h2>

  <div className="cards">

    <div className="card">
      <h3>Bekisting</h3>
      <p>
        Professionele bekisting voor funderingen, vloeren en betonconstructies.
        Nauwkeurig maatwerk met oog voor detail en veiligheid.
      </p>
    </div>

    <div className="card">
      <h3>Wapening</h3>
      <p>
        Vakkundige plaatsing van betonwapening volgens technische tekeningen.
        Sterke en duurzame constructies gegarandeerd.
      </p>
    </div>

    <div className="card">
      <h3>Betonreparatie</h3>
      <p>
        Herstel van beschadigd beton, scheuren en constructieve problemen.
        Duurzame oplossingen voor langdurige bescherming.
      </p>
    </div>

    <div className="card">
      <h3>Beton Storten</h3>
      <p>
        Professioneel storten en afwerken van betonvloeren en funderingen.
        Strakke afwerking en hoge kwaliteit.
      </p>
    </div>

  </div>
</section>

      <section id="projecten" className="section dark">
        <h2>Recente Projecten</h2>

        <div className="gallery">
          <img src="/project1.jpg" alt="Project 1" />
          <img src="/project2.jpg" alt="Project 2" />
          <img src="/project3.jpg" alt="Project 3" />
          <img src="/project4.jpg" alt="Project 4" />
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Email: info@bouwbedrijftuna.nl</p>
        <p>Telefoon: +31 6 25135960</p>
        <a href="mailto:info@bouwbedrijftuna.nl" className="btn-secondary">
          Direct Contact
        </a>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Bouwbedrijf Tuna — Alle rechten voorbehouden
      </footer>

    </div>
  );
}

export default App;