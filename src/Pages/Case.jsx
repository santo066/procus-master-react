import { Link } from "react-router-dom";
import BrandSection from "../Component/Common/BrandSection";
import CommonHero from "../Component/Common/CommonHero";
import FidbackSection from "../Component/Common/FidbackSection";
import GetInTuch from "../Component/Common/GetInTuch";
import React from 'react';

export default function Case() {
    return (
        <>
            <CommonHero title={'case studies'} link1={'Home'} link2={'case studies'}></CommonHero>

            {/* case studies starts  */}
            <section className="case-studies-area pt-110 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top text-center">
                                <h2>Let’s Dive Into Our <span>Creative</span> Showcase</h2>
                                <p className="mt-20">A showcase of our most inspiring projects. Each one is a journey of innovation, passion, and bold creativity.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-60">
                        <div className="col-lg-12">
                            <div className="single-case-item">
                                <div className="case-image wow fadeInLeft" data-wow-delay=".2s">
                                    <img src="/assets/images/portfolio-01.png" alt="case" />
                                </div>
                                <div className="case-content wow fadeInRight" data-wow-delay=".2s">
                                    <h3><Link to="/case_single">Shopify Responsive Website Design</Link></h3>
                                    <p className="mt-20">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence.</p>
                                    <Link to="/case_single" className="primary-btn mt-20">details <span><i className="ri-arrow-right-up-line"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-case-item item-reverse">
                                <div className="case-content wow fadeInLeft" data-wow-delay=".2s">
                                    <h3><Link to="/case_single">Digital Agency Website Design</Link></h3>
                                    <p className="mt-20">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence.</p>
                                    <Link to="/case_single" className="primary-btn mt-20">details <span><i className="ri-arrow-right-up-line"></i></span></Link>
                                </div>
                                <div className="case-image wow fadeInRight" data-wow-delay=".2s">
                                    <img src="/assets/images/portfolio-02.png" alt="case" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-case-item">
                                <div className="case-image wow fadeInLeft" data-wow-delay=".2s">
                                    <img src="/assets/images/portfolio-03.png" alt="case" />
                                </div>
                                <div className="case-content wow fadeInRight" data-wow-delay=".2s">
                                    <h3><Link to="/case_single">Shopify Responsive Website Design</Link></h3>
                                    <p className="mt-20">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence.</p>
                                    <Link to="/case_single" className="primary-btn mt-20">details <span><i className="ri-arrow-right-up-line"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-case-item item-reverse">
                                <div className="case-content wow fadeInLeft" data-wow-delay=".2s">
                                    <h3><Link to="/case_single">Digital Agency Website Design</Link></h3>
                                    <p className="mt-20">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence.</p>
                                    <Link to="/case_single" className="primary-btn mt-20">details <span><i className="ri-arrow-right-up-line"></i></span></Link>
                                </div>
                                <div className="case-image wow fadeInRight" data-wow-delay=".2s">
                                    <img src="/assets/images/portfolio-04.png" alt="case" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BrandSection></BrandSection>

            <FidbackSection></FidbackSection>

            <GetInTuch></GetInTuch>
        </>
    )
}