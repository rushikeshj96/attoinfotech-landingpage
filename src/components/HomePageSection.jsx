import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/global.css";
import digitalExp from "../assets/img/digital-experience.png";
import development from "../assets/img/development.svg";
import cloud from "../assets/img/cloud-services.svg";
import cpu from "../assets/img/cpu.svg";




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
                    <div className="digital-experience-seciton text-center">
                        <img src={digitalExp} alt='' style={{width:'75%'}}/>
                    </div>

                    
                </div>

                <div className="col-md-6">
                        <div className="digi-card">
                            <div className="digi-icons">
                                <img src={development} alt="development" srcset="" />
                            </div>

                            <div className="digi-details">
                                <h4 className="card-heading">
                                    Customer Software Development
                                </h4>
                                <p className="text-desc ">
                                Tech startups are driving innovation in healthcare by developing cutting-edge technologies that enhance patient care From telemedicine platforms
                                </p>
                            </div>
                        </div>


                        <div className="digi-card">
                            <div className="digi-icons">
                                <img src={cloud} alt="development" srcset="" />
                            </div>

                            <div className="digi-details">
                                <h4 className="card-heading">
                                Cloud Services and Solutions
                                </h4>
                                <p className="text-desc ">
                                Tech startups are driving innovation in healthcare by developing cutting-edge technologies that enhance patient care From telemedicine platforms
                                </p>
                            </div>
                        </div>


                        <div className="digi-card">
                            <div className="digi-icons">
                                <img src={cpu} alt="development" srcset="" />
                            </div>

                            <div className="digi-details">
                                <h4 className="card-heading">
                                Artificial Intelligence and Learning Integration
                                </h4>
                                <p className="text-desc ">
                                Tech startups are driving innovation in healthcare by developing cutting-edge technologies that enhance patient care From telemedicine platforms
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default HomePageSection