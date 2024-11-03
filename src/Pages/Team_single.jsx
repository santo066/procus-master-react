import { Link } from "react-router-dom";
import CommonHero from "../Component/Common/CommonHero";
import GetInTuch from "../Component/Common/GetInTuch";
import React from 'react';

export default function Team_single() {
    return (
        <>
            <CommonHero title={'team details'} link1={'Home'} link2={'team details'}></CommonHero>

            {/* team member info starts  */}
            <section className="team-member-info pt-120 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 wow fadeInUp" data-wow-delay=".2s">
                            <div className="member-info-box mb-50">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="member-image">
                                            <img src="/assets/images/team-details.png" alt="member-image" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 offset-xl-1 col-lg-8">
                                        <div className="member-content">
                                            <h2>Savannah Nguyen</h2>
                                            <span>Founder & CEO</span>
                                            <div className="member-info mt-40">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="single-info">
                                                            <div className="info-icon">
                                                                <span><i className="fa-solid fa-phone-volume"></i></span>
                                                            </div>
                                                            <div className="info-text">
                                                                <h5>phone</h5>
                                                                <span>+8801644426943</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="single-info">
                                                            <div className="info-icon">
                                                                <span><i className="fa-solid fa-globe"></i></span>
                                                            </div>
                                                            <div className="info-text">
                                                                <h5>website</h5>
                                                                <span>www.procus.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="single-info">
                                                            <div className="info-icon">
                                                                <span><i className="fa-solid fa-envelope"></i></span>
                                                            </div>
                                                            <div className="info-text">
                                                                <h5>email</h5>
                                                                <span>savannah@procus.com </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="single-info">
                                                            <div className="info-icon">
                                                                <span><i className="fa-solid fa-clock"></i></span>
                                                            </div>
                                                            <div className="info-text">
                                                                <h5>Experiences</h5>
                                                                <span>5+ Years</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="member-social mt-20">
                                                <h5>Follow Me for more:</h5>
                                                <ul className="team-social mt-10">
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
                            <h2>Biography of Savannah Nguyen</h2>
                            <p className="mt-20">Savannah Nguyen is the visionary founder and CEO of Procus Creative Agency, a leading-edge firm specializing in UI/UX design and digital innovation. With a passion for creativity and a keen eye for design, Savannah has dedicated her career to transforming ideas into captivating digital experiences that resonate with audiences around the globe.</p>
                            <p className="mt-20">Born and raised in a diverse cultural environment, Savannahs early exposure to art, technology, and entrepreneurship fueled her curiosity and shaped her multidisciplinary approach to design. From a young age, she demonstrated a natural aptitude for blending creativity with technology, laying the foundation for her future endeavors in the digital realm.</p>
                            <p className="mt-20">After earning her degree in Graphic Design from a prestigious design school, Savannah embarked on a journey to explore the intersection of design and technology. She honed her skills working with startups, agencies, and multinational corporations, gaining invaluable experience in UI/UX design, web development, and digital marketing along the way.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* experience education starts  */}
            <section className="experience-education-area py-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="experience-part">
                                        <h2><span><i className="fa-solid fa-briefcase"></i></span> Experience</h2>
                                        <div className="all-items">
                                            <div className="single-item mt-40">
                                                <span className="item-date">2023 - Present</span>
                                                <h4>Product Designer</h4>
                                                <span>Google</span>
                                                <p>After earning her degree in Graphic Design from a prestigious design school.</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="item-date">2019 - 2023</span>
                                                <h4>UI/UX Lead Designer</h4>
                                                <span>Microsoft</span>
                                                <p>After earning her degree in Graphic Design from a prestigious design school.</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="item-date">2017 - 2019</span>
                                                <h4>UI/UX Designer</h4>
                                                <span>Amazon</span>
                                                <p>After earning her degree in Graphic Design from a prestigious design school.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="education-part">
                                        <h2><span><i className="fa-solid fa-graduation-cap"></i></span> education</h2>
                                        <div className="all-items mt-40">
                                            <div className="single-item">
                                                <span className="item-date">2023 - Present</span>
                                                <h4>BSc. in Digital Media</h4>
                                                <span>Summitview Academy</span>
                                                <p>After earning her degree in Graphic Design from a prestigious design school.</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="item-date">2019 - 2023</span>
                                                <h4>Master of Arts in Marketing</h4>
                                                <span>Greenfield University</span>
                                                <p>After earning her degree in Graphic Design from a prestigious design school.</p>
                                            </div>
                                            <div className="single-item">
                                                <span className="item-date">2017 - 2019</span>
                                                <h4>Diploma in Web Development</h4>
                                                <span>Crestwood Technical Institute</span>
                                                <p>After earning her degree in Graphic Design from a prestigious design school.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* skills & tools starts  */}
            <section className="skills-tools-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
                                    <h2>Skills & tools</h2>
                                    <p className="mt-20">Savannah Nguyen is the visionary founder and CEO of Procus Creative Agency, a leading-edge firm specializing in UI/UX design and digital innovation.</p>
                                    <p className="mt-20">With a passion for creativity and a keen eye for design, Savannah has dedicated her career to transforming ideas into captivating digital experiences that resonate with audiences around the globe.</p>
                                </div>
                                <div className="col-xl-7 offset-xl-1 col-lg-8 wow fadeInRight" data-wow-delay=".2s">
                                    <div className="all-tools">
                                        <div className="row">
                                            <div className="col-md-4 col-6">
                                                <div className="single-tool">
                                                    <img src="/assets/images/figma-icon.png" alt="tool" />
                                                    <h4>figma</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-6">
                                                <div className="single-tool">
                                                    <img src="/assets/images/photoshop-icon.png" alt="tool" />
                                                    <h4>photoshop</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-6">
                                                <div className="single-tool">
                                                    <img src="/assets/images/illustrator-icon.png" alt="tool" />
                                                    <h4>Illustrator</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-6">
                                                <div className="single-tool">
                                                    <img src="/assets/images/framer-icon.png" alt="tool" />
                                                    <h4>framer</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-6">
                                                <div className="single-tool">
                                                    <img src="/assets/images/after-effect-icon.png" alt="tool" />
                                                    <h4>after effects</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-6">
                                                <div className="single-tool">
                                                    <img src="/assets/images/wordpress-icon.png" alt="tool" />
                                                    <h4>wordpress</h4>
                                                </div>
                                            </div>
                                        </div>
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