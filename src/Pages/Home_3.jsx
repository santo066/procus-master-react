import Marquee from "react-fast-marquee";
import Footer3 from "../Component/Include/Footer3";
import ThemColorChange from "../Component/Preloader/ThemColorChange";
import CountUp from 'react-countup';
import React from 'react';
import { useState } from "react";
import Header from "../Component/Include/Header";
import { Link } from "react-router-dom";


export default function Home_3() {

    const [toggle, setToggle] = useState(1);

    const updateToggleId = (id) => {
        setToggle(id)
    };

    return (
        <>
            <ThemColorChange></ThemColorChange>
            <Header></Header>

            {/* hero area starts  */}
            <section className="hero-home-3">
                <img src="/assets/images/hero-vector-1-home-3.png" alt="vector-image" className="vector-image vector-1 dark-version item-zooming" />
                <img src="/assets/images/hero-vector-2-home-3.png" alt="vector-image" className="vector-image vector-2 dark-version item-rotate" />
                <img src="/assets/images/hero-vector-3-home-3.png" alt="vector-image" className="vector-image vector-3 dark-version item-upDown" />
                <img src="/assets/images/hero-light-vector-1-home-3.png" alt="vector-image" className="vector-image vector-1 light-version item-zooming" />
                <img src="/assets/images/hero-light-vector-2-home-3.png" alt="vector-image" className="vector-image vector-2 light-version item-rotate" />
                <img src="/assets/images/hero-light-vector-3-home-3.png" alt="vector-image" className="vector-image vector-3 light-version item-upDown" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="hero-left">
                                <h1><span>Digital Products</span> for your Business</h1>
                                <p className="mt-20">We are a passionate collective of creatives, designers, and strategists dedicated to shaping remarkable experiences.</p>
                                <div className="button-group">
                                    <Link to="/about" className="secondary-btn mt-20">learn more</Link>
                                    <img src="/assets/images/hero-vector-4-home-3.png" alt="vector-image" className="vector-4 dark-version" />
                                    <img src="/assets/images/hero-light-vector-4-home-3.png" alt="vector-image" className="vector-4 light-version" />
                                </div>
                                <img src="/assets/images/hero-image-1-home-3.png" alt="hero-image" className="hero-image-left mt-40" />
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-7 wow fadeInRight" data-wow-delay=".2s">
                            <div className="hero-button-box">
                                <div className="text-item secondary-btn item1">Strategy</div>
                                <div className="text-item secondary-btn white-btn item2">Digital Solution</div>
                                <div className="text-item secondary-btn item3">Creative</div>
                                <div className="text-item secondary-btn gray-btn item4">Campaign</div>
                                <div className="text-item secondary-btn gray-btn item5">Engagement</div>
                                <div className="text-item secondary-btn gray-btn item6">Collaboration</div>
                                <div className="text-item secondary-btn item7">Excellence</div>
                                <div className="text-item secondary-btn gray-btn item8">Social Media</div>
                                <div className="text-item secondary-btn white-btn item9">Advertising</div>
                                <div className="text-item circled item10"><span><i className="fas fa-arrow-right"></i></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* brand area starts  */}
            <div className="brand-home-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-slider-3">
                                <Marquee
                                    speed={100}
                                >
                                    <div className="brand-single">
                                        <div className="brand-logo dark-version">
                                            <img src="/assets/images/spotify-logo.png" alt="brand-logo" />
                                        </div>
                                        <div className="brand-logo light-version">
                                            <img src="/assets/images/spotify-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>
                                    <div className="brand-single">
                                        <div className="brand-logo dark-version">
                                            <img src="/assets/images/zoom-logo.png" alt="brand-logo" />
                                        </div>
                                        <div className="brand-logo light-version">
                                            <img src="/assets/images/zoom-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>
                                    <div className="brand-single">
                                        <div className="brand-logo dark-version">
                                            <img src="/assets/images/spotify-logo.png" alt="brand-logo" />
                                        </div>
                                        <div className="brand-logo light-version">
                                            <img src="/assets/images/spotify-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>
                                    <div className="brand-single">
                                        <div className="brand-logo dark-version">
                                            <img src="/assets/images/square-logo.png" alt="brand-logo" />
                                        </div>
                                        <div className="brand-logo light-version">
                                            <img src="/assets/images/square-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>
                                    <div className="brand-single">
                                        <div className="brand-logo dark-version">
                                            <img src="/assets/images/upwork-logo.png" alt="brand-logo" />
                                        </div>
                                        <div className="brand-logo light-version">
                                            <img src="/assets/images/upwork-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>
                                    <div className="brand-single">
                                        <div className="brand-logo dark-version">
                                            <img src="/assets/images/loom-logo.png" alt="brand-logo" />
                                        </div>
                                        <div className="brand-logo light-version">
                                            <img src="/assets/images/loom-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>
                                    <div className="brand-single">
                                        <div className="brand-logo dark-version">
                                            <img src="/assets/images/slack-logo.png" alt="brand-logo" />
                                        </div>
                                        <div className="brand-logo light-version">
                                            <img src="/assets/images/tinder-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>
                                    <div className="brand-single">
                                        <div className="brand-logo dark-version">
                                            <img src="/assets/images/spotify-logo.png" alt="brand-logo" />
                                        </div>
                                        <div className="brand-logo light-version">
                                            <img src="/assets/images/spotify-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>
                                    <div className="brand-single">
                                        <div className="brand-logo dark-version">
                                            <img src="/assets/images/loom-logo.png" alt="brand-logo" />
                                        </div>
                                        <div className="brand-logo light-version">
                                            <img src="/assets/images/loom-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* counter area starts  */}
            <section className="counter-home-3 pt-120 pb-90">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".2s">
                        <div className="col-lg-2">
                            <div className="title-image">
                                <img src="/assets/images/title-image-home-3.png" alt="title-image" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="section-top-3">
                                <h2>Discover Our Story and Commitment to <span>Elevating Your Brand’s Online Presence</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-3 col-md-6">
                            <div className="counter-single-3">
                                <div className="counter-number">
                                    <h2 className="counter"><CountUp start={0} end={25} delay={.9} duration={5}></CountUp></h2>
                                </div>
                                <h6 className="counter-text">Years of Experience</h6>
                                <p className="mt-20">From small businesses to global brands, we’ve completed a wide range of projects.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="counter-single-3">
                                <div className="counter-number">
                                    <h2 className="counter"><CountUp start={0} end={250} delay={.9} duration={5}></CountUp></h2>
                                    <h2 className="plus-sign">+</h2>
                                </div>
                                <h6 className="counter-text">project complete</h6>
                                <p className="mt-20">From small businesses to global brands, we’ve completed a wide range of projects.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="counter-single-3">
                                <div className="counter-number">
                                    <h2 className="counter"><CountUp start={0} end={100} delay={.9} duration={5}></CountUp></h2>
                                </div>
                                <h6 className="counter-text">happy client</h6>
                                <p className="mt-20">From small businesses to global brands, we’ve completed a wide range of projects.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="counter-single-3">
                                <div className="counter-number">
                                    <h2 className="counter"><CountUp start={0} end={35} delay={.9} duration={5}></CountUp></h2>
                                </div>
                                <h6 className="counter-text">Wining Awards</h6>
                                <p className="mt-20">From small businesses to global brands, we’ve completed a wide range of projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* video area starts  */}
            <div className="video-home-3 pb-120">
                <div className="container">
                    <div className="video-bg wow fadeIn" data-wow-delay=".2s">
                        <div className="row">
                            <div className="col-12">
                                <div className="video-wrapper">
                                    <Link className="hero-play-btn popup-youtube" to="https://www.youtube.com/watch?v=ZG6tNrxXh1k"><span className="video-btn item-pulse"><i className="fas fa-play"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* service area starts  */}
            <section className="service-home-3 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top-3">
                                <h2>Enhance Your Brand’s Online Presence <span>with Our Customized Solutions</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-end">
                            <p>Explore Our Services Tailored to Elevate Your BrandLinks Digital Presence and Drive Meaningful Engagement</p>
                        </div>
                    </div>
                    <div className="tab-container mt-60">
                        <div className="row">
                            <div className="col-lg-5 wow fadeInLeft" data-wow-delay=".2s">
                                <div className="tab-menu">
                                    <div onClick={() => updateToggleId(1)} className={toggle == 1 ? "tab-menu-item active" : "tab-menu-item"} data-tab="digital-marketing"><span>Digital Marketing</span></div>
                                    <div onClick={() => updateToggleId(2)} className={toggle == 2 ? "tab-menu-item active" : "tab-menu-item"} data-tab="content-creation"><span>Content Creation</span></div>
                                    <div onClick={() => updateToggleId(3)} className={toggle == 3 ? "tab-menu-item active" : "tab-menu-item"} data-tab="promotional-campaign"><span>Promotional Campaign</span></div>
                                    <div onClick={() => updateToggleId(4)} className={toggle == 4 ? "tab-menu-item active" : "tab-menu-item"} data-tab="animated-reels-video"><span>Animated Reels Video</span></div>
                                    <div onClick={() => updateToggleId(5)} className={toggle == 5 ? "tab-menu-item active" : "tab-menu-item"} data-tab="product-branding"><span>Product Branding</span></div>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1 wow fadeInRight" data-wow-delay=".2s">
                                <div className="tab-content">
                                    <div className={toggle == 1 ? "tab-content-item active" : "tab-content-item"} id="digital-marketing">
                                        <img src="/assets/images/service-image-home-3.png" alt="service-image" />
                                        <p className="mt-30">Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions That Captivate Audiences and Drive Meaningful Engagement, Helping Your Brand Stand Out in the Digital Landscape.</p>
                                        <p className="mt-20">Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions.</p>
                                    </div>
                                    <div className={toggle == 2 ? "tab-content-item active" : "tab-content-item"} id="content-creation">
                                        <img src="/assets/images/service-image2-home-3.png" alt="service-image" />
                                        <p className="mt-30">Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions That Captivate Audiences and Drive Meaningful Engagement, Helping Your Brand Stand Out in the Digital Landscape.</p>
                                        <p className="mt-20">Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions.</p>
                                    </div>
                                    <div className={toggle == 3 ? "tab-content-item active" : "tab-content-item"} id="promotional-campaign">
                                        <img src="/assets/images/service-image3-home-3.png" alt="service-image" />
                                        <p className="mt-30">Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions That Captivate Audiences and Drive Meaningful Engagement, Helping Your Brand Stand Out in the Digital Landscape.</p>
                                        <p className="mt-20">Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions.</p>
                                    </div>
                                    <div className={toggle == 4 ? "tab-content-item active" : "tab-content-item"} id="animated-reels-video">
                                        <img src="/assets/images/service-image4-home-3.png" alt="service-image" />
                                        <p className="mt-30">Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions That Captivate Audiences and Drive Meaningful Engagement, Helping Your Brand Stand Out in the Digital Landscape.</p>
                                        <p className="mt-20">Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions.</p>
                                    </div>
                                    <div className={toggle == 5 ? "tab-content-item active" : "tab-content-item"} id="product-branding">
                                        <img src="/assets/images/service-image5-home-3.png" alt="service-image" />
                                        <p className="mt-30">Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions That Captivate Audiences and Drive Meaningful Engagement, Helping Your Brand Stand Out in the Digital Landscape.</p>
                                        <p className="mt-20">Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 wow fadeIn" data-wow-delay=".4s">
                                <div className="service-button text-center mt-60">
                                    <Link to="/contact" className="primary-btn">Let’s Talk <span><i className="ri-arrow-right-up-line"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* portfolio area starts  */}
            <section className="portfolio-home-3 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top-3">
                                <h2>Take a Look at Some of <span>Our Work</span></h2>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-2 col-lg-6 align-self-end wow fadeInRight" data-wow-delay=".2s">
                            <p>Step into Our World of Creativity and Innovation: Unveiling Our Portfolio, a Tapestry of Past Projects Reflecting Our Commitment to Excellence and Client Success</p>
                        </div>
                    </div>
                    <div className="portfolio-items-3 mt-60">
                        <div className="row">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                                <div className="single-portfolio-3">
                                    <Link to="/case_single"><img src="/assets/images/portfolio-1-home-3.png" alt="portfolio-image" /></Link>
                                    <h3 className="mt-30"><Link to="/case_single">Social Media Marketing</Link></h3>
                                    <p className="mt-20">We are a passionate collective of creatives, designers, and strategists dedicated to shaping remarkable experiences.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1 align-self-end wow fadeIn" data-wow-delay=".4s">
                                <div className="single-portfolio-3">
                                    <Link to="/case_single"><img src="/assets/images/portfolio-2-home-3.png" alt="portfolio-image" /></Link>
                                    <h3 className="mt-30"><Link to="/case_single">Creative Banner Design</Link></h3>
                                    <p className="mt-20">We are a passionate collective of creatives, designers, and strategists dedicated.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 align-self-end wow fadeIn" data-wow-delay=".5s">
                                <div className="single-portfolio-3">
                                    <Link to="/case_single"><img src="/assets/images/portfolio-3-home-3.png" alt="portfolio-image" /></Link>
                                    <h3 className="mt-30"><Link to="/case_single">Creative Banner Design</Link></h3>
                                    <p className="mt-20">We are a passionate collective of creatives, designers, and strategists dedicated.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1 wow fadeIn" data-wow-delay=".6s">
                                <div className="single-portfolio-3">
                                    <Link to="/case_single"><img src="/assets/images/portfolio-4-home-3.png" alt="portfolio-image" /></Link>
                                    <h3 className="mt-30"><Link to="/case_single">Social Media Marketing</Link></h3>
                                    <p className="mt-20">We are a passionate collective of creatives, designers, and strategists dedicated to shaping remarkable experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 wow fadeIn" data-wow-delay=".4s">
                                <div className="portfolio-button text-center">
                                    <Link to="/case" className="primary-btn">view all <span><i className="ri-arrow-right-up-line"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* testimonial area starts  */}
            <section className="testimonial-home-3 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top-3">
                                <h2>What <span>Client Say</span> about us!</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-xl-3 offset-lg-2 align-self-end wow fadeInRight" data-wow-delay=".2s">
                            <p>Step into Our World of Creativity and Innovation: Unveiling Our Portfolio, a Tapestry of Past Projects Reflecting Our Commitment to Excellence and Client Success</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-60">
                    <div className="testimonial-slider-home-3">
                        <Marquee
                            className='maequee-wraper'
                            speed={100}
                        >
                            <div className="testimonial-slide-home-3">
                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                <span className="quote-text">“It really helps me in marketing the product, so I can focus on development and problems“</span>
                                <div className="testimonial-content">
                                    <div className="author-img">
                                        <img src="/assets/images/testimonial-3.png" alt="author-image" />
                                    </div>
                                    <div className="author-text">
                                        <h4>Courtney Henry</h4>
                                        <p>digital marketer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide-home-3">
                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                <span className="quote-text">“Their creative approach has transformed our brand image, making us stand out in a crowded”</span>
                                <div className="testimonial-content">
                                    <div className="author-img">
                                        <img src="/assets/images/testimonial-01.png" alt="author-image" />
                                    </div>
                                    <div className="author-text">
                                        <h4>Sarah Williams</h4>
                                        <p>digital marketer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide-home-3">
                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                <span className="quote-text">“Their team understood our vision and brought it to life with stunning creativity and precision.”</span>
                                <div className="testimonial-content">
                                    <div className="author-img">
                                        <img src="/assets/images/testimonial-4.png" alt="author-image" />
                                    </div>
                                    <div className="author-text">
                                        <h4>Emily Rogersy</h4>
                                        <p>digital marketer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide-home-3">
                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                <span className="quote-text">“Their expertise in digital marketing helped us reach new heights. We saw growth in few days”</span>
                                <div className="testimonial-content">
                                    <div className="author-img">
                                        <img src="/assets/images/testimonial-5.png" alt="author-image" />
                                    </div>
                                    <div className="author-text">
                                        <h4>Michael Thompson</h4>
                                        <p>digital marketer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide-home-3">
                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                <span className="quote-text">“Thanks to their innovative designs, our customer engagement has skyrocketed. Truly game-changing!”</span>
                                <div className="testimonial-content">
                                    <div className="author-img">
                                        <img src="/assets/images/testimonial-2.png" alt="author-image" />
                                    </div>
                                    <div className="author-text">
                                        <h4>John Davis</h4>
                                        <p>digital marketer</p>
                                    </div>
                                </div>
                            </div>
                        </Marquee>
                    </div>



                    <div className="testimonial-slider-2-home-3 mt-30">
                        <Marquee
                            className='maequee-wraper'
                            speed={200}
                        >
                            <div className="testimonial-slide-home-3">
                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                <span className="quote-text">“Their creative approach has transformed our brand image, making us stand out in a crowded”</span>
                                <div className="testimonial-content">
                                    <div className="author-img">
                                        <img src="/assets/images/testimonial-01.png" alt="author-image" />
                                    </div>
                                    <div className="author-text">
                                        <h4>Sarah Williams</h4>
                                        <p>digital marketer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide-home-3">
                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                <span className="quote-text">“Thanks to their innovative designs, our customer engagement has skyrocketed. Truly game-changing!”</span>
                                <div className="testimonial-content">
                                    <div className="author-img">
                                        <img src="/assets/images/testimonial-2.png" alt="author-image" />
                                    </div>
                                    <div className="author-text">
                                        <h4>John Davis</h4>
                                        <p>digital marketer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide-home-3">
                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                <span className="quote-text">“It really helps me in marketing the product, so I can focus on development and problems”</span>
                                <div className="testimonial-content">
                                    <div className="author-img">
                                        <img src="/assets/images/testimonial-3.png" alt="author-image" />
                                    </div>
                                    <div className="author-text">
                                        <h4>Courtney Henry</h4>
                                        <p>digital marketer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide-home-3">
                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                <span className="quote-text">“Their team understood our vision and brought it to life with stunning creativity and precision.”</span>
                                <div className="testimonial-content">
                                    <div className="author-img">
                                        <img src="/assets/images/testimonial-4.png" alt="author-image" />
                                    </div>
                                    <div className="author-text">
                                        <h4>Emily Rogersy</h4>
                                        <p>digital marketer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slide-home-3">
                                <span className="testimonial-quote-icon"><i className="fa-solid fa-quote-left"></i></span>
                                <span className="quote-text">“Their expertise in digital marketing helped us reach new heights. We saw growth in few days”</span>
                                <div className="testimonial-content">
                                    <div className="author-img">
                                        <img src="/assets/images/testimonial-5.png" alt="author-image" />
                                    </div>
                                    <div className="author-text">
                                        <h4>Michael Thompson</h4>
                                        <p>digital marketer</p>
                                    </div>
                                </div>
                            </div>
                        </Marquee>

                    </div>
                </div>
            </section>

            {/* team area starts  */}
            <section className="team-home-3 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top-3">
                                <h2>meet our awesome <span>team member</span></h2>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-2 col-lg-6 align-self-end wow fadeInRight" data-wow-delay=".2s">
                            <p>Step into Our World of Creativity and Innovation: Unveiling Our Portfolio, a Tapestry of Past Projects Reflecting Our Commitment to Excellence and Client Success</p>
                        </div>
                    </div>

                    <div className="row mt-60">
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".3s">
                            <div className="team-member-3">
                                <div className="team-image">
                                    <Link to="/team_single"><img src="/assets/images/team-1-home-3.png" alt="team-member" /></Link>
                                    <div className="hover-state">
                                        <ul className="team-social">
                                            <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link to="#"><i className="fa-solid fa-globe"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content mt-30">
                                    <h4><Link to="/team_single">Bessie Cooper</Link></h4>
                                    <span>web developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".4s">
                            <div className="team-member-3">
                                <div className="team-image">
                                    <Link to="/team_single"><img src="/assets/images/team-2-home-3.png" alt="team-member" /></Link>
                                    <div className="hover-state">
                                        <ul className="team-social">
                                            <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link to="#"><i className="fa-solid fa-globe"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content mt-30">
                                    <h4><Link to="/team_single">Floyd Miles</Link></h4>
                                    <span>Marketing Coordinator</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".5s">
                            <div className="team-member-3">
                                <div className="team-image">
                                    <Link to="/team_single"><img src="/assets/images/team-3-home-3.png" alt="team-member" /></Link>
                                    <div className="hover-state">
                                        <ul className="team-social">
                                            <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link href="#"><i className="fa-solid fa-globe"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content mt-30">
                                    <h4><Link to="/team_single">Floyd Miles</Link></h4>
                                    <span>web designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 wow fadeIn" data-wow-delay=".3s">
                            <div className="team-button text-center mt-30">
                                <Link to="/team" className="primary-btn">view more <span><i className="ri-arrow-right-up-line"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* pricing area starts  */}
            <section className="pricing-home-3 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top-3 text-center">
                                <h2>Choose Our <span>Best Package</span></h2>
                                <p className="mt-20">Step into Our World of Creativity and Innovation: Unveiling Our Portfolio, a Tapestry of Past Projects Reflecting Our Commitment to Excellence and Client Success</p>
                                <div className="col-lg-4 offset-lg-4 pricing-toggle mt-50">
                                    <button onClick={() => updateToggleId(1)} className={toggle == 1 ? "pricing-toggle-btn active" : "pricing-toggle-btn"} data-pricing="monthly">Monthly</button>
                                    <button onClick={() => updateToggleId(2)} className={toggle == 2 ? "pricing-toggle-btn active" : "pricing-toggle-btn"} data-pricing="yearly">Yearly</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* monthly pricing plans  */}
                    <div className={"row mt-60 pricing-plans monthly-plans inactive"} style={toggle == 1 ? { display: '' } : { display: 'none' }}>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-box">
                                <h3>Kickstart Pack</h3>
                                <p>Jumpstart your social media presence with our beginner-friendly Kickstart Pack.</p>
                                <div className="price">$59</div>
                                <p>Cancel or Pause anytime</p>
                                <ul className="pricing-features">
                                    <li>Social Media Audit</li>
                                    <li>Audience Research</li>
                                    <li>Monthly Report</li>
                                    <li>5 Social Account</li>
                                    <li>Ad Account Setup</li>
                                    <li>Paid Campaign</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <Link to="/contact" className="secondary-btn">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-box popular">
                                <h3>Growth Pack</h3>
                                <p>Jumpstart your social media presence with our beginner-friendly Kickstart Pack.</p>
                                <div className="price">$99</div>
                                <p>Cancel or Pause anytime</p>
                                <ul className="pricing-features">
                                    <li>Social Media Audit</li>
                                    <li>Audience Research</li>
                                    <li>Monthly Report</li>
                                    <li>5 Social Account</li>
                                    <li>Ad Account Setup</li>
                                    <li>Paid Campaign</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <Link to="/contact" className="secondary-btn">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-box">
                                <h3>Elite Pack</h3>
                                <p>Jumpstart your social media presence with our beginner-friendly Kickstart Pack.</p>
                                <div className="price">$150</div>
                                <p>Cancel or Pause anytime</p>
                                <ul className="pricing-features">
                                    <li>Social Media Audit</li>
                                    <li>Audience Research</li>
                                    <li>Monthly Report</li>
                                    <li>5 Social Account</li>
                                    <li>Ad Account Setup</li>
                                    <li>Paid Campaign</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <Link to="/contact" className="secondary-btn">Get Started</Link>
                            </div>
                        </div>
                    </div>

                    {/* yearly pricing plans  */}
                    <div className={"row mt-60 pricing-plans yearly-plans inactive"} style={toggle == 2 ? { display: '' } : { display: 'none' }}>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-box">
                                <h3>Kickstart Pack</h3>
                                <p>Jumpstart your social media presence with our beginner-friendly Kickstart Pack.</p>
                                <div className="price">$179</div>
                                <p>Cancel or Pause anytime</p>
                                <ul className="pricing-features">
                                    <li>Social Media Audit</li>
                                    <li>Audience Research</li>
                                    <li>Monthly Report</li>
                                    <li>5 Social Account</li>
                                    <li>Ad Account Setup</li>
                                    <li>Paid Campaign</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <Link to="/contact" className="secondary-btn">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-box popular">
                                <h3>Growth Pack</h3>
                                <p>Jumpstart your social media presence with our beginner-friendly Kickstart Pack.</p>
                                <div className="price">$399</div>
                                <p>Cancel or Pause anytime</p>
                                <ul className="pricing-features">
                                    <li>Social Media Audit</li>
                                    <li>Audience Research</li>
                                    <li>Monthly Report</li>
                                    <li>5 Social Account</li>
                                    <li>Ad Account Setup</li>
                                    <li>Paid Campaign</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <Link to="/contact" className="secondary-btn">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-box">
                                <h3>Elite Pack</h3>
                                <p>Jumpstart your social media presence with our beginner-friendly Kickstart Pack.</p>
                                <div className="price">$480</div>
                                <p>Cancel or Pause anytime</p>
                                <ul className="pricing-features">
                                    <li>Social Media Audit</li>
                                    <li>Audience Research</li>
                                    <li>Monthly Report</li>
                                    <li>5 Social Account</li>
                                    <li>Ad Account Setup</li>
                                    <li>Paid Campaign</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <Link to="/contact" className="secondary-btn">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* blog area starts  */}
            <section className="blog-home-3 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top-3 text-center">
                                <h2>Our Popular <span>Blogs</span></h2>
                                <p className="mt-20">Step into Our World of Creativity and Innovation: Unveiling Our Portfolio, a Tapestry of Past Projects Reflecting Our Commitment to Excellence and Client Success</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-60">
                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay=".3s">
                            <div className="blog-single-slide-2 mb-30">
                                <div className="blog-image">
                                    <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-1-home-3.png" alt="blog-thumb" /></Link>
                                </div>
                                <h4>
                                    <Link to="/blog_single">A Blueprint for Innovation in Product Development</Link>
                                </h4>
                                <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <Link className="blog-btn mt-20" to="#">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay=".4s">
                            <div className="blog-single-slide-2 mb-30">
                                <div className="blog-image">
                                    <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-2-home-3.png" alt="blog-thumb" /></Link>
                                </div>
                                <h4>
                                    <Link to="/blog_single">Software Engineering Best Practices that you should know</Link>
                                </h4>
                                <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <Link className="blog-btn mt-20" to="#">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay=".5s">
                            <div className="blog-single-slide-2 mb-30">
                                <div className="blog-image">
                                    <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-3-home-3.png" alt="blog-thumb" /></Link>
                                </div>
                                <h4>
                                    <Link to="/blog_single">Product Management in the Digital Age: Complexity and Uncertainty</Link>
                                </h4>
                                <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <Link className="blog-btn mt-20" to="#">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 wow fadeIn" data-wow-delay=".3s">
                            <div className="blog-button text-center mt-30">
                                <Link to="/blog" className="primary-btn">view all <span><i className="ri-arrow-right-up-line"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact area starts  */}
            <section className="contact-home-3 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top-3">
                                <h2>Let’s do something amazing <span>together!</span></h2>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-2 col-lg-6 align-self-end wow fadeInRight" data-wow-delay=".2s">
                            <p>Step into Our World of Creativity and Innovation: Unveiling Our Portfolio, a Tapestry of Past Projects Reflecting Our Commitment to Excellence and Client Success</p>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay=".2s">
                            <img src="/assets/images/contact-image.png" alt="contact-image" />
                        </div>
                        <div className="col-lg-6 offset-lg-1 wow fadeInRight" data-wow-delay=".2s">
                            <div className="contact-form-3">
                                <form action="#" method="POST">
                                    <div className="form-group">
                                        <label htmlFor="name">Hi! My name is</label>
                                        <input type="text" id="name" name="name" placeholder="What's your name?*" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">I work in</label>
                                        <input type="text" id="company" name="company" placeholder="What's your company name?*" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">My email is</label>
                                        <input type="email" id="email" name="email" placeholder="What's your email?*" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="project-details">I’d like to share more about my project details:</label>
                                        <textarea id="project-details" name="project-details" placeholder="Tell something about your project" rows="4" required></textarea>
                                    </div>
                                    <button type="submit" className="primary-btn">submit  <span><i className="ri-arrow-right-up-line"></i></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* marquee area starts  */}
            <div className="custom-marquee marquee-style-2 pb-40">
                <div className="marquee-container">
                    <div className="marquee">
                        <div className="marquee-content marquee-row-1">
                            <span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span>
                            <span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span><span>let’s talk</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer3></Footer3>
        </>
    )
}