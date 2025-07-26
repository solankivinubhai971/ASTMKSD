import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(53, 53, 53, 0.151), rgba(53, 53, 53, 0.151)), url("/images/background.png")`,
        }}
      >
        <div className="centered-icon-box">
          <div className="inner-dot" />
        </div>
        <div className="hero-content">
          <div className="hero-info-box">
            <div className="info-text">
              <p>Strategy, Design, Solution</p>
              <p>Development</p>
            </div>
            <div className="info-icon">&#8594;</div>
          </div>
          <div className="info-underline"></div>

          <div className="hero-title-container">
            <div className="hero-title-block">
              <h1 className="hero-title">SOFTWARE</h1>
              <div className="hero-title-with-badge">
                <h1 className="hero-title">
                  DEVELOPMEN<span className="t-letter">T</span>
                </h1>
                <span className="pro-badge">Pro</span>
              </div>

              <div className="hero-agency-inline">
                <h1 className="hero-title">AGENCY</h1>
                <p className="hero-description-inline">
                  With every single one of our clients, we bring forth deep
                  passion for
                  <span className="highlight">
                    {" "}
                    software development solution{" "}
                  </span>
                  which is what we deliver
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stat">
          <h2>25K+</h2>
          <p>
            Projects Completed
            <br />
            Successfully
          </p>
        </div>

        <div className="hero-side-elements">
          <div className="slider-name-box">
            <div className="slider-name-row">
              <p className="slider-name">SLIDER NAME</p>
              <div className="slider-line-group">
                <div className="line long"></div>
                <div className="line short"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ball">
          <img src="/images/ball.svg" alt="ball" className="ball" />
        </div>

        <div className="scroll-arrow">
          <img
            src="/images/arrow.svg"
            alt="Scroll Down Arrow"
            className="down-arrow-icon"
          />
        </div>
      </div>

      <section className="why-section">
        <div className="why-content">
          <div className="why-left">
            <p className="why-subtitle">WHY WE STARTED?</p>
            <h2 className="why-title">
              WE DESIGN, DEVELOP AND <br />
              MAINTAIN SOFTWARE FOR <br />
              BUSINESSES OR CONSUMERS
            </h2>
          </div>

          <div className="why-right">
            <div className="indicator-dots">
              <span className="dot active">1</span>
              <span className="dot">2</span>
              <span className="dot">3</span>
            </div>

            <div className="feature-card">
              <div className="card-icon">
                <img src="/images/blockchain-icon.svg" alt="Blockchain Icon" />
              </div>
              <h3 className="card-title">BLOCKCHAIN <br/> DEVELOPMENT</h3>
              <p className="card-text">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <a href="#" className="card-view-link">
                VIEW ↗
              </a>
            </div>
          </div>
        </div>

        <div className="brands">
          {[
            "coinmarketcap",
            "forbes",
            "novartis",
            "idfc",
            "cryptoland",
            "siemens",
            "dbx",
            "westernunion",
            "singtel",
            "caizcoin",
          ].map((logo, index) => (
            <img
              key={index}
              src={`/images/clients/${logo}.png`}
              alt={logo}
              className="brand-logo"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
