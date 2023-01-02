import React, { useRef } from "react";

import "../Styles/Pages/Home.scss";

import Navbar from "../Global Components/Navbar.jsx";
import Footer from "../Global Components/Footer.jsx";
import Banner from "../Global Components/Banner";

import AboutUsCard from "../Global Components/AboutUsCard";
import HeaderImage from "../Assets/landing-header.jpg";
import SponsorSteliaLogo from "../Assets/landing-sponsors/stelia.png";
import SponsorMultimaticLogo from "../Assets/landing-sponsors/multimatic.png";
import SponsorFusiaLogo from "../Assets/landing-sponsors/FusiA.png";
import SponsorSATLogo from "../Assets/landing-sponsors/Superior Alloy Technology.png";

// the text is in a JSON file to allow easier editing for people inexperienced with web dev
import Text from "../Text/Pages/Home.json";

function Home() {
  // image element needs a reference so a style can be set on load
  const backgroundRef = useRef(null);

  return (
    <div className="landing">
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="landing-bg--wrapper">
        <img
          ref={backgroundRef}
          className="landing-header--bg"
          src={HeaderImage}
          onLoad={() => backgroundRef.current.classList.add("loaded")}
        ></img>
      </div>
      <header className="landing-header">
        <h1 className="landing-header--centre">{Text.title}</h1>
        <h2 className="landing-header--centre landing-header--nomargin">
          {Text.subtitle}
        </h2>

        <div className="landing-divider landing-divider--white">
          <hr></hr>
        </div>

        <div className="landing-header--subtitle">
          <h2>{Text.catchline}</h2>
          <h2 className="landing-header--wrapping">{Text.description}</h2>
        </div>
      </header>

      <main className="landing-content">
        <AboutUsCard text={Text.aboutUs}></AboutUsCard>

        <div className="landing-divider landing-divider--content">
          <hr></hr>
        </div>

        <div className="landing-sponsors">
          <h2>{Text.sponsors}</h2>

          <div className="landing-sponsors--grid">
            <a
              className="landing-sponsor"
              href="https://stelia-northamerica.com"
            >
              <img src={SponsorSteliaLogo}></img>
            </a>
            <a className="landing-sponsor" href="https://www.multimatic.com/">
              <img src={SponsorMultimaticLogo}></img>
            </a>
            <a className="landing-sponsor" href="https://www.fusia-groupe.com/">
              <img src={SponsorFusiaLogo}></img>
            </a>
            <a className="landing-sponsor" href="http://supalloy.com/">
              <img src={SponsorSATLogo}></img>
            </a>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Home;
