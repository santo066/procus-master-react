import CommonHero from "../Component/Common/CommonHero";
import GetInTuch from "../Component/Common/GetInTuch";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode, Autoplay, Mousewheel, EffectCoverflow, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react';
import { Link } from "react-router-dom";

export default function Work_process() {
    return (
        <>
            <CommonHero title={'work process'} link1={'Home'} link2={'work process'}></CommonHero>

            {/* working process area starts  */}
            <section className="working-process-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="working-process-left pt-110 pb-120">
                                <div className="section-top">
                                    <h2>Our <span>Process</span></h2>
                                    <p className="mt-20">Explore the intricate gears of Procus Agencys workflow, where creativity intertwines with strategy to craft remarkable journeys.</p>
                                </div>
                                <div className="working-process-image mt-60">
                                    <img src="/assets/images/working-process-image.png" alt="working-process-image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1 col-xl-6 offset-xl-2 col-12">
                            <Swiper
                                direction={'vertical'}
                                freeMode={true}
                                // pagination={true} 
                                pagination={{
                                    clickable: true,
                                }}
                                slidesPerView={3}
                                grabCursor={true}
                                modules={[Navigation, Pagination, Scrollbar, FreeMode, EffectCube, Mousewheel, EffectCoverflow, A11y, Autoplay]}
                                className="working-process-slider"
                            >
                                <SwiperSlide>
                                    <div className="working-process-single-slide">
                                        <h3>1. Research and Analysis</h3>
                                        <p className="mt-20">Once the client brief is received, the creative team conducts thorough research and analysis. This includes market research, competitor analysis, and audience demographics. The goal is to gather insights that will inform the creative direction and strategy.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="working-process-single-slide">
                                        <h3>1. Research and Analysis</h3>
                                        <p className="mt-20">Once the client brief is received, the creative team conducts thorough research and analysis. This includes market research, competitor analysis, and audience demographics. The goal is to gather insights that will inform the creative direction and strategy.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="working-process-single-slide">
                                        <h3>2. Research and Analysis</h3>
                                        <p className="mt-20">Once the client brief is received, the creative team conducts thorough research and analysis. This includes market research, competitor analysis, and audience demographics. The goal is to gather insights that will inform the creative direction and strategy.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="working-process-single-slide">
                                        <h3>3. Research and Analysis</h3>
                                        <p className="mt-20">Once the client brief is received, the creative team conducts thorough research and analysis. This includes market research, competitor analysis, and audience demographics. The goal is to gather insights that will inform the creative direction and strategy.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="working-process-single-slide">
                                        <h3>4. Research and Analysis</h3>
                                        <p className="mt-20">Once the client brief is received, the creative team conducts thorough research and analysis. This includes market research, competitor analysis, and audience demographics. The goal is to gather insights that will inform the creative direction and strategy.</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

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

            {/* portfolio area starts  */}
            <section className="portfolio-area pt-110">
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
                <div className="container-fluid">
                    <div className="row mt-60">
                        <div className="col-lg-10 offset-lg-2 p-0">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                autoplay={{ delay: 2000 }}
                                scrollbar={{ draggable: true }}
                                breakpoints={{
                                    768: {
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
                                            <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence.</p>
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
                                            <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence.</p>
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
                                            <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence.</p>
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
                                            <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence.</p>
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
                                            <p className="mt-10">Unveil a world of creativity, strategy, and technology as we offer a spectrum of services tailored to elevate your brands presence.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            <GetInTuch></GetInTuch>
        </>
    )
}