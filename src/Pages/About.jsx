import { useState } from "react";
import BrandSection from "../Component/Common/BrandSection";
import CommonHero from "../Component/Common/CommonHero";
import Counter from "../Component/Common/Counter";
import React from 'react';
import GetInTuch from "../Component/Common/GetInTuch";
import { Link } from "react-router-dom";

const datas = [
    {
        img1: '/assets/images/choose-icon-1.png',
        img2: '/assets/images/choose-dark-icon-1.png',
        title: 'Innovative Solutions',
        description: "Creativity and innovation fuel our approach. We tailor unique strategies to your brand's needs, blending fresh ideas with strategic insights to craft campaigns that truly resonate.",
    },
    {
        img1: '/assets/images/choose-icon-2.png',
        img2: '/assets/images/choose-dark-icon-2.png',
        title: 'Data-Driven Strategies',
        description: "Creativity and innovation fuel our approach. We tailor unique strategies to your brand's needs, blending fresh ideas with strategic insights to craft campaigns that truly resonate.",
    },
    {
        img1: '/assets/images/choose-icon-3.png',
        img2: '/assets/images/choose-dark-icon-3.png',
        title: 'Proven Track Record',
        description: "Creativity and innovation fuel our approach. We tailor unique strategies to your brand's needs, blending fresh ideas with strategic insights to craft campaigns that truly resonate.",
    },
    {
        img1: '/assets/images/choose-icon-4.png',
        img2: '/assets/images/choose-dark-icon-4.png',
        title: 'Collaborative Partnership',
        description: "Creativity and innovation fuel our approach. We tailor unique strategies to your brand's needs, blending fresh ideas with strategic insights to craft campaigns that truly resonate.",
    },
    {
        img1: '/assets/images/choose-icon-5.png',
        img2: '/assets/images/choose-dark-icon-5.png',
        title: 'Forward-Thinking Approach',
        description: "Creativity and innovation fuel our approach. We tailor unique strategies to your brand's needs, blending fresh ideas with strategic insights to craft campaigns that truly resonate.",
    },
    {
        img1: '/assets/images/choose-icon-6.png',
        img2: '/assets/images/choose-dark-icon-6.png',
        title: 'Forward-Thinking Approach',
        description: "Creativity and innovation fuel our approach. We tailor unique strategies to your brand's needs, blending fresh ideas with strategic insights to craft campaigns that truly resonate.",
    },
]

export default function Home() {
    console.log(datas)
    const [onHover, setonHover] = useState(null);

    const hendelhover = (index) => {
        setonHover(index);
    };
    const hendelmove = (index) => {
        setonHover(index);
    };

    return (
        <>
            <CommonHero title={'About Our Agency'} link1={'Home'} link2={'about us'}></CommonHero>

            {/* welcome section starts  */}
            <section className="welcome-section-about pt-110 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top">
                                <h2>Procus a dynamic Creative Agency <span>fueled by deep passion</span></h2>
                                <p className="mt-20">Welcome to Procus, where creativity and innovation converge to shape remarkable digital experiences. Our team at Procus is passionate about crafting websites that not only look stunning but also perform seamlessly. With a focus on Webflow design and development, we prioritize quality and collaboration in every project we undertake. </p>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 align-self-end wow fadeInRight" data-wow-delay=".2s">
                            <div className="welcome-images">
                                <img src="/assets/images/welcome-vector.png" className="welcome-vector item-rotate" alt="welcome-vector" />
                                <img src="/assets/images/welcome-image.png" className="welcome-image" alt="welcome-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* video area starts  */}
            <div className="video-home-3 video-about-page">
                <div className="container">
                    <div className="video-bg">
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

            <Counter/>

            {/* choose area starts  */}
            <section className="choose-section-about pt-110 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top text-center">
                                <h2>Why our Agency is <span>Different</span></h2>
                                <p className="mt-20">At our core, we are more than just a creative agency – we are a dynamic team of storytellers, strategists, and tech enthusiasts.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-60">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                {
                                    datas.map((data, index) => (
                                        <div
                                            key={index}
                                            className="col-lg-4 col-md-6 wow fadeIn"
                                            data-wow-delay=".3s"
                                            onMouseEnter={() => hendelhover(index)}
                                            onMouseLeave={() => hendelmove(index)}

                                        >
                                            <div
                                                className={onHover == index ? "single-choose-item active" : "single-choose-item"}
                                            >
                                                <img src={data.img1} alt="choose-icon" className="choose-icon dark-version" />
                                                <img src={data.img2} alt="choose-icon" className="choose-icon light-version" />
                                                <h4>{data.title}</h4>
                                                <p className="mt-10">{data.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
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

            <BrandSection>
            
            </BrandSection>

            {/* team area starts  */}
            <section className="team-area pb-90">
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
                                            <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link href="#"><i className="fa-solid fa-globe"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
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

            <GetInTuch></GetInTuch>
        </>
    )
}