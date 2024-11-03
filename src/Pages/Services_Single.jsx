import CommonHero from "../Component/Common/CommonHero";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import React from 'react';

import 'swiper/css';
import FidbackSection from "../Component/Common/FidbackSection";
import GetInTuch from "../Component/Common/GetInTuch";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Services_Single() {
    const [toggle, setToggle] = useState(1);

    const updateToggleId = (id) => {
        setToggle(id)
    };

    return (
        <>
            <CommonHero title={'service details'} link1={'Home'} link2={'Services Details'}></CommonHero>

            {/* service details content starts  */}
            <section className="service-details-content py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-image wow fadeInUp" data-wow-delay=".2s">
                                <img src="/assets/images/service-details.png" className="mb-50" alt="service-details" />
                            </div>
                            <div className="wow fadeInUp" data-wow-delay=".2s">
                                <h2>UI/UX Design</h2>
                                <p className="mt-20">We specialize in creating stunning user interfaces (UI) and seamless user experiences (UX) that captivate users and drive engagement. Our team of talented designers combines creativity with functionality to deliver designs that not only look great but also provide an intuitive and delightful user experience.</p>
                                <p className="mt-20">Our team of talented designers combines creativity with functionality to deliver designs that not only look great but also provide an intuitive and delightful user experience.</p>
                                <h3 className="mt-50">Our Approach</h3>
                                <p className="mt-20">We believe that effective UI/UX design is a combination of art and science. Our approach is centered around understanding your users, your business goals, and your brand identity to create designs that resonate with your target audience and achieve your objectives.</p>
                                <h3 className="mt-50">What We Offer in UI/UX Design</h3>
                                <p className="mt-20">We believe that effective UI/UX design is a combination of art and science. Our approach is centered around understanding your users, your business goals, and your brand identity to create designs that resonate with your target audience and achieve your objectives.</p>
                                <ul className="service-tags">
                                    <li onClick={() => updateToggleId(1)} className={toggle == 1 ? "tab-link active" : "tab-link"} data-tab="tab-1"><Link to="#">UI Design</Link></li>
                                    <li onClick={() => updateToggleId(2)} className={toggle == 2 ? "tab-link active" : "tab-link"} data-tab="tab-2"><Link to="#">UX Design</Link></li>
                                    <li onClick={() => updateToggleId(3)} className={toggle == 3 ? "tab-link active" : "tab-link"} data-tab="tab-3"><Link to="#">Interaction Design</Link></li>
                                    <li onClick={() => updateToggleId(4)} className={toggle == 4 ? "tab-link active" : "tab-link"} data-tab="tab-4"><Link to="#">User Research</Link></li>
                                </ul>
                            </div>
                            <div id="tab-1" className={toggle == 1 ? "tab-content active" : "tab-content"}>
                                <div className="row mt-60">
                                    <div className="col-lg-6">
                                        <div className="service-details-image-2">
                                            <img src="/assets/images/service-tab-1.png" alt="service-details" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <p>Our UI design services focus on creating visually stunning interfaces that captivate users and enhance their interaction with your digital products.</p>
                                        <p className="mt-20">From color schemes to typography, we meticulously craft every detail to reflect your brand’s identity and engage your audience.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className={toggle == 2 ? "tab-content active" : "tab-content"}>
                                <div className="row mt-60">
                                    <div className="col-lg-6">
                                        <div className="service-details-image-2">
                                            <img src="/assets/images/service-tab-2.png" alt="service-details" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <p>User experience is at the core of everything we do. Our UX design services aim to create seamless and intuitive interactions that guide users through your digital products effortlessly.</p>
                                        <p className="mt-20">We conduct thorough user research, wireframing, and prototyping to optimize usability and enhance user satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className={toggle == 3 ? "tab-content active" : "tab-content"}>
                                <div className="row mt-60">
                                    <div className="col-lg-6">
                                        <div className="service-details-image-2">
                                            <img src="/assets/images/service-tab-3.png" alt="service-details" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <p>Our interaction design services focus on designing engaging and responsive interactions that delight users and enhance their overall experience. We create dynamic and intuitive interfaces.</p>
                                        <p className="mt-20">From animations to transitions, we ensure every interaction is meaningful and enhances user engagement.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-4" className={toggle == 4 ? "tab-content active" : "tab-content"}>
                                <div className="row mt-60">
                                    <div className="col-lg-6">
                                        <div className="service-details-image-2">
                                            <img src="/assets/images/service-tab-4.png" alt="service-details" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit beatae, itaque error quasi adipisci maiores ut at recusandae nulla.</p>
                                        <p className="mt-20">From animations to transitions, we ensure every interaction is meaningful and enhances user engagement.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 offset-xl-1 col-lg-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="service-sidebar">
                                <div className="procus-widget mb-40">
                                    <h3 className="widget-title">All Services</h3>
                                    <ul className="service-items">
                                        <li><Link to="#">Branding</Link><span><i className="fas fa-arrow-right"></i></span></li>
                                        <li><Link to="#">Website Design</Link><span><i className="fas fa-arrow-right"></i></span></li>
                                        <li><Link to="#">UI/UX Design</Link><span><i className="fas fa-arrow-right"></i></span></li>
                                        <li><Link to="#">App Design</Link><span><i className="fas fa-arrow-right"></i></span></li>
                                        <li><Link to="#">App Design</Link><span><i className="fas fa-arrow-right"></i></span></li>
                                        <li><Link to="#">Digital Marketing</Link><span><i className="fas fa-arrow-right"></i></span></li>
                                    </ul>
                                </div>
                                <div className="procus-widget text-center">
                                    <h3 className="widget-title">Book a Free Consultation</h3>
                                    <div className="widget-btn">
                                        <Link to="/contact" className="primary-btn">Let’s Talk <span><i className="ri-arrow-right-up-line"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* process slider area starts  */}
            <section className="process-slider-area">
                <div className="process-title-top pt-110 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2>Our Process for UI/UX Design</h2>
                                <p className="mt-20">We believe that effective UI/UX design is a combination of art and science. Our approach is centered around understanding your users, your business goals, and your brand identity to create designs that resonate with your target audience and achieve your objectives.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="process-slider-part pb-120">
                    <div className="container">
                        <Swiper
                            className="process-slider-2"
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            autoplay={{ delay: 2000 }}
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            breakpoints={{
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="/assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">1</span>
                                    <h4>Research</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="/assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">2</span>
                                    <h4>Wireframing</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide ">
                                    <img src="/assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">3</span>
                                    <h4>scratch</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="/assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">4</span>
                                    <h4>Design</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="/assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">5</span>
                                    <h4>Prototype</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="/assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">6</span>
                                    <h4>Research</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="/assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">7</span>
                                    <h4>Wireframing</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="/assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">8</span>
                                    <h4>scratch</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slide">
                                    <img src="/assets/images/process-slider-shape.png" className="shape-image" alt="shape-image" />
                                    <span className="slide-number">9</span>
                                    <h4>Design</h4>
                                    <p className="mt-10">We conduct thorough user research to gain insights into user behaviors, needs, and pain points.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* testimonial area starts  */}
            <FidbackSection></FidbackSection>

            <GetInTuch></GetInTuch>
        </>
    )
}