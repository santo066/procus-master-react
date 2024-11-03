
import Accordion from '../Component/Common/Accordion';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import GetInTuch from '../Component/Common/GetInTuch';
import BrandSection from '../Component/Common/BrandSection';
import FidbackSection from '../Component/Common/FidbackSection';
import Counter from '../Component/Common/Counter';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
            {/* hero area starts  */}
            <section className="hero-area">
                <div className="container">
                    <div className="hero-content-box">
                        <div className="row hero-top-content">
                            <div className="col-lg-7 offset-lg-1 wow fadeInDown" data-wow-delay=".2s">
                                <h1 className="mb-20">Crafting <span className="gradient-bg">Creativity</span></h1>
                            </div>
                            <div className="col-lg-4">
                                <img src="/assets/images/hero-3d-02.png" className="vector-shape vector-anim-1 item-moveOne" alt="3d-image" />
                            </div>
                        </div>
                        <div className="row hero-bottom-content">
                            <div className="col-lg-5">
                                <img src="/assets/images/hero-3d-01.png" className="vector-shape vector-anim-2 item-moveTwo" alt="3d-image" />
                            </div>
                            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".2s">
                                <h1>Amplifying Impact!</h1>
                                <p className="mt-20">We are a passionate collective of creatives, designers, and strategists dedicated to shaping remarkable brand experiences.</p>
                                <div className="btn-group">
                                    <img className="dark-version" src="/assets/images/vector-arrow.png" alt="vector-arrow" />
                                    <img className="light-version" src="/assets/images/vector-dark-arrow.png" alt="vector-arrow" />
                                    <Link to="/about" className="secondary-btn">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <ul className="hero-social wow fadeIn" data-wow-delay=".9s">
                            <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                        </ul>
                        <a href="#counter-area"><img src="/assets/images/vector-scroll-down.png" alt="vector-scroll-down" className="vector-scroll-down scroll-down" /></a>
                    </div>
                </div>
            </section>

            {/* marquee area starts  */}
            <div className="custom-marquee">
                <div className="marquee-container">
                    <div className="marquee">
                        <div className="primary-bg">
                            <div className="marquee-content marquee-row-1">
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                            </div>
                        </div>
                        <div className="black-bg">
                            <div className="marquee-content marquee-row-2">
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Counter></Counter>

            {/* service area starts  */}
            <section className="service-area pt-110 pb-90">
                <img src="/assets/images/service-3d.png" alt="service-3d" className="service-3d" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top text-center">
                                <h2>We Provide Top Notch <span>Services</span> For You</h2>
                                <p className="mt-20">Explore a world of creativity, strategy, and tech with our range of services, all aimed at boosting your brand. From eye-catching designs to smart strategies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-12">
                            <Accordion></Accordion>
                        </div>
                    </div>
                </div>
            </section>

            {/* portfolio area starts  */}
            <section className="portfolio-area py-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top">
                                <h2>Let’s Dive into Our <span>Creative</span> Showcase</h2>
                                <p className="mt-20">A showcase of our most inspiring projects. Each one is a journey of innovation, passion, and bold creativity.</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="section-top-btn">
                                <Link to="/case" className="secondary-btn">See More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-60">
                        <div className="col-12">
                            <div className="portfolio-slider">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    autoplay={{ delay: 2000 }}
                                    scrollbar={{ draggable: true }}
                                    breakpoints={{
                                        769: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="portfolio-single">
                                            <div className="portfolio-image">
                                                <Link to="/case"><img src="/assets/images/portfolio-01.png" alt="portfolio-image" /></Link>
                                                <Link to="/case_single" className="portfolio-btn">view details <span><i className="fas fa-arrow-right"></i></span></Link>
                                            </div>
                                            <div className="portfolio-content mt-20">
                                                <h3><Link to="/case">Shopify Responsive Website Design</Link></h3>
                                                <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand’s presence.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="portfolio-single">
                                            <div className="portfolio-image">
                                                <Link to="/case"><img src="/assets/images/portfolio-02.png" alt="portfolio-image" /></Link>
                                                <Link to="/case_single" className="portfolio-btn">view details <span><i className="fas fa-arrow-right"></i></span></Link>
                                            </div>
                                            <div className="portfolio-content mt-20">
                                                <h3><Link to="/case">Digital Agency Website Design</Link></h3>
                                                <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand’s presence.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="portfolio-single">
                                            <div className="portfolio-image">
                                                <Link to="/case"><img src="/assets/images/portfolio-03.png" alt="portfolio-image" /></Link>
                                                <Link to="/case_single" className="portfolio-btn">view details <span><i className="fas fa-arrow-right"></i></span></Link>
                                            </div>
                                            <div className="portfolio-content mt-20">
                                                <h3><Link to="/case">web design for your business</Link></h3>
                                                <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand’s presence.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="portfolio-single">
                                            <div className="portfolio-image">
                                                <Link to="/case"><img src="/assets/images/portfolio-04.png" alt="portfolio-image" /></Link>
                                                <Link to="/case_single" className="portfolio-btn">view details <span><i className="fas fa-arrow-right"></i></span></Link>
                                            </div>
                                            <div className="portfolio-content mt-20">
                                                <h3><Link to="/case">build your product with laravel</Link></h3>
                                                <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand’s presence.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="portfolio-single">
                                            <div className="portfolio-image">
                                                <Link to="/case"><img src="/assets/images/portfolio-02.png" alt="portfolio-image" /></Link>
                                                <Link to="/case_single" className="portfolio-btn">view details <span><i className="fas fa-arrow-right"></i></span></Link>
                                            </div>
                                            <div className="portfolio-content mt-20">
                                                <h3><Link to="/case">Shopify Responsive Website Design</Link></h3>
                                                <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brand’s presence.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BrandSection></BrandSection>

            <FidbackSection></FidbackSection>

            {/* team area starts  */}
            <section className="team-area pt-110 pb-90">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top">
                                <h2>Meet Our <span>Team</span></h2>
                                <p className="mt-20">Get to know the talented individuals who make our company thrive. Our diverse team brings together a wealth of expertise.</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="section-top-btn">
                                <Link to="/team" className="secondary-btn">See More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".3s">
                            <div className="team-member">
                                <div className="team-image">
                                    <Link to="/team_single"><img src="/assets/images/team-member-01.png" alt="team-member" /></Link>
                                    <div className="hover-state">
                                        <div className="team-content">
                                            <div className="team-bio">
                                                <h4><Link to="/team_single">Savannah Nguyen</Link></h4>
                                                <span>founder & CEO</span>
                                            </div>
                                        </div>
                                        <ul className="team-social">
                                            <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link to="#"><i className="fa-solid fa-globe"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".4s">
                            <div className="team-member">
                                <div className="team-image">
                                    <Link to="/team_single"><img src="/assets/images/team-member-02.png" alt="team-member" /></Link>
                                    <div className="hover-state">
                                        <div className="team-content">
                                            <div className="team-bio">
                                                <h4><Link to="/team_single">Savannah Nguyen</Link></h4>
                                                <span>founder & CEO</span>
                                            </div>
                                        </div>
                                        <ul className="team-social">
                                            <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link to="#"><i className="fa-solid fa-globe"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".5s">
                            <div className="team-member">
                                <div className="team-image">
                                    <Link to="/team_single"><img src="/assets/images/team-member-03.png" alt="team-member" /></Link>
                                    <div className="hover-state">
                                        <div className="team-content">
                                            <div className="team-bio">
                                                <h4><Link to="/team_single">Savannah Nguyen</Link></h4>
                                                <span>founder & CEO</span>
                                            </div>
                                        </div>
                                        <ul className="team-social">
                                            <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link to="#"><i className="fa-solid fa-globe"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".6s">
                            <div className="team-member">
                                <div className="team-image">
                                    <Link to="/team_single"><img src="/assets/images/team-member-04.png" alt="team-member" /></Link>
                                    <div className="hover-state">
                                        <div className="team-content">
                                            <div className="team-bio">
                                                <h4><Link to="/team_single">Savannah Nguyen</Link></h4>
                                                <span>founder & CEO</span>
                                            </div>
                                        </div>
                                        <ul className="team-social">
                                            <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link to="#"><i className="fa-solid fa-globe"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".7s">
                            <div className="team-member">
                                <div className="team-image">
                                    <Link to="/team_single"><img src="/assets/images/team-member-05.png" alt="team-member" /></Link>
                                    <div className="hover-state">
                                        <div className="team-content">
                                            <div className="team-bio">
                                                <h4><Link to="/team_single">Savannah Nguyen</Link></h4>
                                                <span>founder & CEO</span>
                                            </div>
                                        </div>
                                        <ul className="team-social">
                                            <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link to="#"><i className="fa-solid fa-globe"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".8s">
                            <div className="team-member">
                                <div className="team-image">
                                    <Link to="/team_single"><img src="/assets/images/team-member-06.png" alt="team-member" /></Link>
                                    <div className="hover-state">
                                        <div className="team-content">
                                            <div className="team-bio">
                                                <h4><Link to="/team_single">Savannah Nguyen</Link></h4>
                                                <span>founder & CEO</span>
                                            </div>
                                        </div>
                                        <ul className="team-social">
                                            <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link to="#"><i className="fa-solid fa-globe"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* cta area starts  */}
            <div className="cta-area py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 wow fadeInUp" data-wow-delay=".2s">
                            <div className="cta-box">
                                <h2>Let`s work on something cool great together</h2>
                                <Link to="/contact" className="secondary-btn mt-40">learn more <span><i className="fas fa-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* blog area starts  */}
            <section className="blog-area py-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top">
                                <h2>Our Latest <span>Blog</span></h2>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="section-top-btn">
                                <Link to="/blog" className="secondary-btn">See More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-60">
                        <div className="col-12">
                            <div className="blog-slider">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    autoplay={{ delay: 2000 }}
                                    breakpoints={{
                                        769: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="blog-single-slide">
                                            <div className="blog-image">
                                                <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-thum-01.png" alt="blog-thumb" /></Link>
                                            </div>
                                            <div className="blog-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li>By <Link to="/">procus</Link></li>
                                                    <li className="separator">|</li>
                                                    <li>23 March 2023</li>
                                                </ul>
                                                <ul>
                                                    <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <Link to="/blog_single">Transforming Digital Solutions with  Artificial Intelligence</Link>
                                            </h4>
                                            <p className="mt-20">We delve into the profound impact that Artificial Intelligence (AI) is having on digital solutions across various industries.</p>
                                            <div className="blog-tags">
                                                <ul>
                                                    <li><Link to="/blog_single">Artificial Intelligence</Link></li>
                                                    <li><Link to="/blog_single">Machine Learning</Link></li>
                                                    <li><Link to="/blog_single">Deep Learning</Link></li>
                                                </ul>
                                            </div>
                                            <Link className="blog-btn mt-30" to="/blog_single">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="blog-single-slide">
                                            <div className="blog-image">
                                                <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-thum-02.png" alt="blog-thumb" /></Link>
                                            </div>
                                            <div className="blog-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li>By <Link to="/">procus</Link></li>
                                                    <li className="separator">|</li>
                                                    <li>23 March 2023</li>
                                                </ul>
                                                <ul>
                                                    <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <Link to="/blog_single">The Art of Collaboration in Creative Agency Studio</Link>
                                            </h4>
                                            <p className="mt-20">In this blog post, we explore the dynamics of collaboration within and between creative agencies.</p>
                                            <div className="blog-tags">
                                                <ul>
                                                    <li><Link to="/blog_single">creative agency</Link></li>
                                                    <li><Link to="/blog_single">product</Link></li>
                                                    <li><Link to="/blog_single">digital</Link></li>
                                                </ul>
                                            </div>
                                            <Link className="blog-btn mt-30" to="/blog_single">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="blog-single-slide">
                                            <div className="blog-image">
                                                <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-thum-03.png" alt="blog-thumb" /></Link>
                                            </div>
                                            <div className="blog-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li>By <Link to="/">procus</Link></li>
                                                    <li className="separator">|</li>
                                                    <li>23 March 2023</li>
                                                </ul>
                                                <ul>
                                                    <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <Link to="/blog_single">Enhancing Creativity with Machine Learning</Link>
                                            </h4>
                                            <p className="mt-20">Explore how AI is revolutionizing the design process, from generating innovative concepts to automating.</p>
                                            <div className="blog-tags">
                                                <ul>
                                                    <li><Link to="/blog_single">Artificial Intelligence </Link></li>
                                                    <li><Link to="/blog_single">Machine Learning</Link></li>
                                                    <li><Link to="/blog_single">Deep Learning</Link></li>
                                                </ul>
                                            </div>
                                            <Link className="blog-btn mt-30" to="/blog_single">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="blog-single-slide">
                                            <div className="blog-image">
                                                <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-thum-02.png" alt="blog-thumb" /></Link>
                                            </div>
                                            <div className="blog-meta">
                                                <ul className="d-flex align-items-center">
                                                    <li>By <Link to="/">procus</Link></li>
                                                    <li className="separator">|</li>
                                                    <li>23 March 2023</li>
                                                </ul>
                                                <ul>
                                                    <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                                </ul>
                                            </div>
                                            <h4>
                                                <Link to="/blog_single">The Art of Collaboration in Creative Agency Studio</Link>
                                            </h4>
                                            <p className="mt-20">In this blog post, we explore the dynamics of collaboration within and between creative agencie.</p>
                                            <div className="blog-tags">
                                                <ul>
                                                    <li><Link to="/blog_single">creative agency</Link></li>
                                                    <li><Link to="/blog_single">product</Link></li>
                                                    <li><Link to="/blog_single">digital</Link></li>
                                                </ul>
                                            </div>
                                            <Link className="blog-btn mt-30" to="/blog_single">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* marquee area starts  */}
            <div className="custom-marquee">
                <div className="marquee-container">
                    <div className="marquee">
                        <div className="primary-bg">
                            <div className="marquee-content marquee-row-1">
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                            </div>
                        </div>
                        <div className="black-bg">
                            <div className="marquee-content marquee-row-2">
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                                <span><i className="ri-gemini-fill"></i> Branding <span></span><i className="ri-gemini-fill"></i> Website Design <span></span><i className="ri-gemini-fill"></i> App Design <span></span><i className="ri-gemini-fill"></i> Development <span></span><i className="ri-gemini-fill"></i> UI/UX Design <span></span><i className="ri-gemini-fill"></i> Graphic Design <span></span><i className="ri-gemini-fill"></i> Motion Graphic <span></span><i className="ri-gemini-fill"></i> Digital Marketing <span></span><i className="ri-gemini-fill"></i> SEO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GetInTuch></GetInTuch>
        </>
    )
}