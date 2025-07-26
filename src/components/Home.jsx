import "./Home.css";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const CardData = [
    {
      title: "BLOCKCHAIN DEVELOPMENT",
      icon: "/images/blockchain-icon.svg",
      background: "/images/blockchain.svg",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "ARTIFICIAL INTELLIGENCE",
      icon: "/images/ai-icon.svg",
      background: "/images/ai.svg",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      icon: "/images/mobile-icon.svg",
      background: "/images/mobile.svg",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ];

  useEffect(() => {
    const animateCount = (target, setter) => {
      let count = 0;
      const increment = target / 100;

      const interval = setInterval(() => {
        count += increment;

        if (count >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(parseFloat(count.toFixed(2)));
        }
      }, 10);
    };

    animateCount(56, setCount1);
    animateCount(5575450, setCount2);
    animateCount(20.35, setCount3);
  }, []);

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

      {/* why section */}
      <div className="why-section">
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
              {CardData.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {index + 1}
                </span>
              ))}
            </div>

            <div className="carousel-container">
              {CardData.map((item, index) => {
                let cardClass = "feature-card";

                if (index === activeIndex) {
                  cardClass += " active";
                } else if (index === (activeIndex + 1) % CardData.length) {
                  cardClass += " behind-1";
                } else if (index === (activeIndex + 2) % CardData.length) {
                  cardClass += " behind-2";
                } else {
                  return null;
                }

                return (
                  <div
                    key={index}
                    className={cardClass}
                    style={{
                      backgroundImage: `url(${item.background})`,
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="card-icon">
                      <img src={item.icon} alt="Icon" />
                    </div>
                    <h3 className="card-title">
                      {item.title.split(" ").slice(0, -1).join(" ")}
                      <br />
                      {item.title.split(" ").slice(-1)}
                    </h3>
                    <p className="card-text">{item.description}</p>
                    <a href="#" className="card-view-link">
                      VIEW ↗
                    </a>
                  </div>
                );
              })}
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
      </div>

      {/* case study section */}
      <div className="case-studies-section">
        <div className="case-header">
          <div className="case-header-left">
            <h3 className="case-header-tag">Portfolio</h3>
            <h2 className="case-title">OUR CASE STUDIES</h2>
          </div>
          <a href="#" className="view-all-link">
            VIEW ALL &nbsp;↗
          </a>
        </div>

        <div className="case-studies-grid">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="case-card">
              <div className="case-image">
                <img src={`/images/case${i + 1}.png`} alt={`Case ${i + 1}`} />
              </div>
              <p className="case-meta">EDUCATION | WORDPRESS | B2B</p>
              <h3 className="case-heading">CREATIVE SOLUTION FOR BUSINESS</h3>
              <div className="devider"></div>
              <a href="#" className="case-link">
                VIEW CASE STUDY ↗
              </a>
            </div>
          ))}
        </div>

        <div className="second-case-studies-grid">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="second-case-card">
              <div className="second-case-image">
                <img
                  src={`/images/secondcase${i + 1}.png`}
                  alt={`Case ${i + 1}`}
                />
              </div>
              <p className="second-case-meta">EDUCATION | WORDPRESS | B2B</p>

              {i === 0 ? (
                <div className="first-case-header-row">
                  <h3 className="second-case-heading">
                    CREATIVE SOLUTION FOR BUSINESS
                  </h3>
                  <a href="#" className="second-case-link">
                    VIEW CASE STUDY ↗
                  </a>
                </div>
              ) : (
                <>
                  <h3 className="second-case-heading">
                    CREATIVE SOLUTION FOR BUSINESS
                  </h3>
                  <div className="devider"></div>
                  <a href="#" className="second-case-link view-case">
                    VIEW CASE STUDY ↗
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* About Company Section */}
      <div className="about-company">
        <p className="about-subtitle">ABOUT US</p>
        <h2 className="about-title">ABOUT OUR COMPANY</h2>
        <p className="about-desc">
          A global leader in next generation software services and consulting
        </p>
        <div className="company-stats">
          <div>
            <h3>{count1}+</h3>
            <p>Countries Where We Have Trusting Clients</p>
          </div>
          <div>
            <h3>USD$ {count3.toFixed(2)}</h3>
            <p>Billion Total Revenue (LTM)</p>
          </div>
          <div>
            <h3>{count2.toLocaleString()}+</h3>
            <p>Training Day(s) Conducted For Employees Globally</p>
          </div>
        </div>
      </div>

      <div
        className="testimonial-section"
        style={{
          backgroundImage: `url("/images/global.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top 91px",
        }}
      >
        <p className="testimonial-subtitle">PRAISE PLATTER</p>
        <h2 className="testimonial-heading">
          THEIR STORIES,
          <br />
          OUR PRIDE
        </h2>

        <div className="client-logos-absolute">
          <img
            src="/images/clients/goodfirms.png"
            alt="GoodFirms"
            className="logo goodfirms"
          />
          <img
            src="/images/clients/forbes.svg"
            alt="Forbes"
            className="logo forbes"
          />
          <img
            src="/images/clients/clutch.svg"
            alt="Clutch"
            className="logo clutch"
          />
          <img
            src="/images/clients/coinmarketcap.svg"
            alt="CoinMarketCap"
            className="logo coinmarketcap"
          />
          <img
            src="/images/clients/upwork.png"
            alt="Upwork"
            className="logo upwork"
          />
        </div>

        <div className="testimonial-pagination">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>

        <div className="testimonial-box">
          <div className="stars">
            <img
              src="/images/clients/Upwork1.png"
              alt="Upwork"
              className="upwork-logo"
            />
            <span>★★★★★ 4.5</span>
          </div>
          <p className="testimonial-text">
            “Satisfied! Their expertise in blockchain development and innovation
            is unparalleled”
          </p>
          <p className="testimonial-author">
            JAMSHED SAAD
            <br />
            <span className="author-title">CEO OF ZEN</span>
          </p>
        </div>
      </div>

      <div className="tech-section">
        <h3>USING THE LATEST TECHNOLOGIES</h3>
        <div className="tech-logos">
          {["TensorFlow", "yoast", "Jira", "near", "GitHub", "aws"].map(
            (tech, i) => (
              <img
                key={i}
                src={`/images/${tech.toLowerCase()}.png`}
                alt={tech}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
