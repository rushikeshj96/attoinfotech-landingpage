import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/global.css";
import heroSectionImg from "../assets/img/heroSectionImg.png";
import { Button } from "react-bootstrap";
function HeroSection() {
  return (
    <section className="hero-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
            <div className="herosectiondetails">
              <h1 className="main-heading primaryCSS">
                Number #1,Southern Asia Digital Product Agency
              </h1>
              <p className="text-para-main mt-4">
              We bring the results while helping you achieve cost and time savings without taking on risk or management overhead.
              </p>

              <Button className="primary-btn mt-5">See Our Portfolio</Button>
            </div>
          </div>

          <div className="col-md-1 col-sm-12 col-xs-12"></div>
          <div className="col-md-6">
            <div className="hero-section-img">
              <img src={heroSectionImg} alt="" style={{width:"100%"}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
