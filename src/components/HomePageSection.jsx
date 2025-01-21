import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/global.css";
import digitalExp from "../assets/img/digital-experience.png";

function HomePageSection() {
  return (
    <section className="section-padding">
        <div className="container">
            <div className="row">
                <h2 className="primary-heading primaryCSS text-center width-600">
                Turning Ideas into Impactful
                </h2>
                <h2 className="primary-heading primaryCSS text-center width-600">
                Digital Experiences
                </h2>

                <p className="text-desc text-center mb-0 mt-3">
                Tech startups are driving innovation in healthcare by developing cutting-edge technologies that enhance patient care From telemedicine platforms to 
                </p>
                <p className="text-desc text-center ">
                AI-powered diagnostic tools, these startups are making healthcare more accessible, efficient, and personalized. This article delves ground
                </p>
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="digital-experience-seciton">
                        <img src={digitalExp} alt='' style={{width:'100%'}}/>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomePageSection