import React from "react";
import Logo from "../assets/svg/LogoLatest.svg";
import CopyrightCircle from "../assets/svg/copyrightCircle.svg";
import ToggleButton from "../assets/png/toggleButton.png";
import Bargaining from "../assets/png/bargaining.png";

const App = () => {
  return (
    <>
      <div className="nav-bar fx center">
        <h2 className="fx center mr-20">
          <img className="logo" src={Logo} />
          <a className="ml-8" href="/">
            Flagge
          </a>
        </h2>
        <p>
          <a href="#features">Features</a>
        </p>
        <p>
          <a href="#pricing">Pricing</a>
        </p>
        <p className="ml-auto">
          <a href="/">Login</a>
        </p>
        <p>
          <a href="/">Get a Demo</a>
        </p>
      </div>
      <div className="pt-50 fwp center">
        <div className="hero pl-35 pr-35  mw-50 fx fcol center">
          <h1 className="title">Feature Flag of the future.</h1>
          <p className="description">
            Get full feature control in your finger tips, just a click away.
          </p>
          <div>
            <button className="primary">Get Started</button>
            <button className="ml-20">Contact us</button>
          </div>
        </div>
      </div>
      <section className="features fx center" id="features">
        <div className="left mw-50">
          <img className="bgImage" src={ToggleButton} />
        </div>
        <div className="right mw-50 text-center">
          <h2>Features</h2>
          <ul className="">
            <li>Lightning fast</li>
            <li>Toggle features ON/OFF</li>
            <li>A/B testing</li>
          </ul>
        </div>
      </section>
      <section id="pricing" className="pricing fx center">
        <div className="left mw-50 text-center">
          <h2>Pricing details</h2>
          <ul className="">
            <li>We give the best deals in the current market</li>
            <li>Toggle features ON/OFF</li>
            <li>A/B testing</li>
          </ul>
        </div>
        <div className="right mw-50">
          <img className="bgImage" src={Bargaining} />
        </div>
      </section>
      <footer className="footer">
        <div className="fx footerContent">
          <div className="grid column">
            <img className="footerLogo" src={Logo} />
            <p className="footerDescription">
              We empower all teams to deliver and control their software.
            </p>
          </div>
          <div className="fx fcol column pl-35 footerLinks">
            <h5>Support</h5>
            <ul>
              <li>Contact us</li>
              <li>Get a demo</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="fx fcol column pl-35 footerLinks">
            <h5>Company</h5>
            <ul>
              <li>Developers</li>
              <li>Our business model</li>
              <li>About us</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="Copyright fx actr">
          <img src={CopyrightCircle} />
          Flagge.co
        </p>
      </footer>
    </>
  );
};

export default App;
