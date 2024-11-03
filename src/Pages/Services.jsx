
import { Swiper, SwiperSlide } from 'swiper/react';
import Accordion from "../Component/Common/Accordion";
import CommonHero from "../Component/Common/CommonHero";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel, FreeMode, EffectCoverflow, EffectCube} from 'swiper/modules';
import React from 'react';
import 'swiper/css';
import GetInTuch from '../Component/Common/GetInTuch';
import FidbackSection from '../Component/Common/FidbackSection';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <>
            <CommonHero title={'our services'} link1={'Home'} link2={'Services'}></CommonHero>

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
            </section >

            {/* working process area starts  */}
            <section className="working-process-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="working-process-left pt-110 pb-120">
                                <div className="section-top">
                                    <h2>Our <span>Process</span></h2>
                                    <p className="mt-20">Explore the intricate gears of Procus Agency’s workflow, where creativity intertwines with strategy to craft remarkable journeys.</p>
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
                            <div className="portfolio-slider portfolio-slider2">
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

            <FidbackSection></FidbackSection>

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