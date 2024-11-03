import { Link } from "react-router-dom";
import CommonHero from "../Component/Common/CommonHero";
import GetInTuch from "../Component/Common/GetInTuch";
import React from 'react';

export default function Case_Single() {
    return (
        <>
            <CommonHero title={'case details'} link1={'Home'} link2={'case details'}></CommonHero>

            {/* case detials content starts  */}
            <section className="case-details-content pt-120 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-12 wow fadeInUp" data-wow-delay=".2s">
                            <img src="/assets/images/portfolio-04.png" alt="case-image" />
                        </div>
                    </div>
                    <div className="case-info">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay=".3s">
                                <div className="single-info">
                                    <h4>Category</h4>
                                    <span>Web Development</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay=".4s">
                                <div className="single-info">
                                    <h4>client</h4>
                                    <span>Niox Xiox</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay=".5s">
                                <div className="single-info">
                                    <h4>Timeframe</h4>
                                    <span>2 Months</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeIn" data-wow-delay=".6s">
                                <div className="single-info">
                                    <h4>website</h4>
                                    <span>www.niox.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wow fadeInUp" data-wow-delay=".2s">
                        <h2>Shopify Responsive Website Design</h2>
                        <h3>Project Overview:</h3>
                        <p className="mt-20">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence. From captivating design to strategic insights, we are here to craft experiences that leave a lasting impact. Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence. From captivating design to strategic insights, we are here to craft experiences that leave a lasting impact.</p>
                    </div>
                    <div className="row mt-50">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="single-box">
                                <h3>Our Approach</h3>
                                <p className="mt-20">Once the client brief is received, the creative team conducts thorough research and analysis. This includes market research, competitor analysis, and audience demographics. The goal is to gather insights that will inform the creative direction and strategy.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="single-box">
                                <h3>The Solutions</h3>
                                <p className="mt-20">Once the client brief is received, the creative team conducts thorough research and analysis. This includes market research, competitor analysis, and audience demographics. The goal is to gather insights that will inform the creative direction and strategy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="case-images-gallery mt-20">
                        <div className="row">
                            <div className="col-lg-8 wow fadeIn" data-wow-delay=".2s">
                                <img src="/assets/images/case-gallery-1.png" alt="case-gallery" />
                            </div>
                            <div className="col-lg-4">
                                <img className="wow fadeIn" data-wow-delay=".3s" src="/assets/images/case-gallery-2.png" alt="case-gallery" />
                                <img className="wow fadeIn" data-wow-delay=".4s" src="/assets/images/case-gallery-3.png" alt="case-gallery" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30 mb-50">
                        <div className="col-12">
                            <h3>Project Requirement:</h3>
                            <div className="row mt-20">
                                <div className="col-md-4 wow fadeIn" data-wow-delay=".2s">
                                    <ul className="requirement-list mt-20">
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>Requirement Analysis</li>
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>Site Architecture</li>
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>UI/UX Design</li>
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>Responsive Design</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 wow fadeIn" data-wow-delay=".3s">
                                    <ul className="requirement-list mt-20">
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>Frontend Development</li>
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>Backend Development</li>
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>Database Integration</li>
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>API Integration</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 wow fadeIn" data-wow-delay=".4s">
                                    <ul className="requirement-list mt-20">
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>Security Measure</li>
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>Security Measure</li>
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>Testing and QA</li>
                                        <li><span><i className="fa-solid fa-circle-check"></i> </span>Deployment and Monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <h3>The Challenges:</h3>
                            <p className="mt-20">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence. From captivating design to strategic insights, we are here to craft experiences that leave a lasting impact. Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence. </p>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <h3>The Result:</h3>
                            <p className="mt-20">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence. From captivating design to strategic insights, we are here to craft experiences that leave a lasting impact. Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence. </p>
                        </div>
                    </div>
                    <ul className="preview-links wow fadeInUp" data-wow-delay=".2s">
                        <li>Live Preview:</li>
                        <li><Link to="#"><span><i className="fa-brands fa-github"></i></span> github <span><i className="fas fa-arrow-right"></i></span></Link></li>
                        <li><Link to="#"><span><i className="fa-brands fa-square-behance"></i></span> behance <span><i className="fas fa-arrow-right"></i></span></Link></li>
                        <li><Link to="#"><span><i className="fa-brands fa-square-dribbble"></i></span> dribbble <span><i className="fas fa-arrow-right"></i></span></Link></li>
                    </ul>
                </div>
            </section>

            <GetInTuch></GetInTuch>
        </>
    )
}