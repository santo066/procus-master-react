import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer3() {
    return (
        <>
            {/* footer area starts  */}
            <footer className="footer-home-3">
                {/* footer widget  */}
                <div className="footer-widget">
                    <div className="container">
                        <div className="row footer-widget-wrapper pt-105 pb-70">
                            <div className="col-xl-5 col-lg-5">
                                <div className="footer-widget-box-3 about-us">
                                    <h1>Let`s work together</h1>
                                    <ul className="footer-social-3">
                                        <li><Link to="#"><i className="fa-brands fa-facebook"></i> facebook</Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-x-twitter"></i> twitter</Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-linkedin"></i> linkedin</Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-instagram"></i> instagram</Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-youtube"></i> youtube</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-2">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">Quick Links</h4>
                                    <ul className="footer-list">
                                        <li><Link to="/about">About us</Link></li>
                                        <li><Link to="/team">meet our team</Link></li>
                                        <li><Link to="/case">case studies</Link></li>
                                        <li><Link to="/blog">latest blog</Link></li>
                                        <li><Link to="/contact">contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">our services</h4>
                                    <ul className="footer-list">
                                        <li><Link to="/service-single">digital marketing</Link></li>
                                        <li><Link to="/service-single">web design</Link></li>
                                        <li><Link to="/service-single">app design</Link></li>
                                        <li><Link to="/service-single">saas development</Link></li>
                                        <li><Link to="/service-single">branding</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3">
                                <div className="footer-widget-box">
                                    <h4 className="footer-widget-title">Contact Us</h4>
                                    <ul className="footer-contact">
                                        <li><Link to="#"><span className="contact-icon"><i className="fa-solid fa-phone"></i></span> (123) 456789000</Link></li>
                                        <li><Link to="#"><span className="contact-icon"><i className="fa-regular fa-envelope"></i></span><span> info@procus.com</span></Link></li>
                                        <li><Link to="#"><span className="contact-icon"><i className="fa-solid fa-location-dot"></i></span> 1498w Fluton ste, STE 2D Chicgo, IL 63867.</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer info  */}
                <div className="footer-info-area">
                    <div className="container">
                        <div className="info-content">
                            <div className="row align-items-center">
                                <div className="col-xl-3">
                                    <Link className="dark-version" to="/"><img src="/assets/images/logo.png" alt="footer-logo" /></Link>
                                    <Link className="light-version" to="/"><img src="/assets/images/logo-black.png" alt="footer-logo" /></Link>
                                </div>
                                <div className="col-xl-3">
                                    <Link to="tel:+123456789000" className="phone-number">(123) 456789000</Link>
                                </div>
                                <div className="col-xl-3">
                                    <Link to="mailto:info@procus.com" className="email-address">info@procus.com </Link>
                                </div>
                                <div className="col-xl-3">
                                    <Link to="https://www.google.com/maps/search/?api=1&query=1498w+Fluton+ste,+STE+2D+Chicago,+IL+63867" className="location">1498w Fluton ste, STE 2D Chicgo, IL 63867.</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* copyright  */}
                <div className="copyright copyright-3">
                    <div className="container">
                        <div className="copyright-content">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <p className="copyright-text">
                                        Copyright &copy; <span id="date"></span> <Link to="/"> Procus</Link> Designed by Pointer Flow.
                                    </p>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <ul className="footer-menu">
                                        <li><Link to="/terms">Terms Of Services</Link></li>
                                        <li><Link to="/privacy">Privacy Policy</Link></li>
                                        <li><Link to="/contact">Support</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* back to top  */}
            <div className="back-to-top">
                <span><i className="fa fa-angle-up"></i></span>
            </div>
        </>
    )
}