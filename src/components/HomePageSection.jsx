import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/global.css";
import digitalExp from "../assets/img/digital-experience.png";
import development from "../assets/img/development.svg";
import cloud from "../assets/img/cloud-services.svg";
import cpu from "../assets/img/cpu.svg";
import branding from "../assets/img/branding.svg";
import develop from "../assets/img/web-development.svg";
import uiux from "../assets/img/uiux.svg";
import micro from "../assets/img/microtext.svg";
import research from "../assets/img/research.svg";
import social from "../assets/img/social-media.svg";







function HomePageSection() {
  return (
    <div>
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
    
    <section className="section-padding">
        <div className="container">
            <div className="row">
            <h2 className="primary-heading primaryCSS text-center width-600">
            Our Digital Marketing Services 
                </h2>
                <h2 className="primary-heading primaryCSS text-center width-600">
                That Drive Results
                </h2>

                <p className="text-desc text-center mt-2">
                We work together with our client to execute impactful product.
                </p>
            </div>

            <div className="row">
                <div className="col-md-4">
                <div className="digi-card">
                            <div className="digi-icons">
                                <img src={branding} alt="development" srcset="" />
                            </div>

                            <div className="digi-details">
                                <h4 className="card-heading">
                                Branding Identity
                                </h4>
                                <p className="text-desc ">
                                We make logo and concept for your brand needs. </p>
                            </div>
                        </div>
                </div>

                <div className="col-md-4">
                <div className="digi-card">
                            <div className="digi-icons">
                                <img src={develop} alt="development" srcset="" />
                            </div>

                            <div className="digi-details">
                                <h4 className="card-heading">
                                Development
                                </h4>
                                <p className="text-desc ">
                                We code your apps, website 
and dashboard to you.</p>
                            </div>
                        </div>
                </div>

                <div className="col-md-4">
                <div className="digi-card">
                            <div className="digi-icons">
                                <img src={uiux} alt="development" srcset="" />
                            </div>

                            <div className="digi-details">
                                <h4 className="card-heading">
                                UI/UX design
                                </h4>
                                <p className="text-desc ">
                                Making beautifull and intuitive
design digital product. </p>
                            </div>
                        </div>
                </div>


                <div className="col-md-4">
                <div className="digi-card">
                            <div className="digi-icons">
                                <img src={micro} alt="development" srcset="" />
                            </div>

                            <div className="digi-details">
                                <h4 className="card-heading">
                                Microstock
                                </h4>
                                <p className="text-desc ">
                                We produce million asset for your business needs.
                                </p>
                            </div>
                        </div>
                </div>


                <div className="col-md-4">
                <div className="digi-card">
                            <div className="digi-icons">
                                <img src={social} alt="development" srcset="" />
                            </div>

                            <div className="digi-details">
                                <h4 className="card-heading">
                                Social Media
                                </h4>
                                <p className="text-desc ">
                                Managing clients social media  to reach audiences.
                                </p>
                            </div>
                        </div>
                </div>


                <div className="col-md-4">
                <div className="digi-card">
                            <div className="digi-icons">
                                <img src={research} alt="development" srcset="" />
                            </div>

                            <div className="digi-details">
                                <h4 className="card-heading">
                                Research
                                </h4>
                                <p className="text-desc ">
                                Helping research startup or brand to business needs.
                                </p>
                            </div>
                        </div>
                </div>

                
            </div>
        </div>
    </section>
    </div>

    
  )
}

export default HomePageSection