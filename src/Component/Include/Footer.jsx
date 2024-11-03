import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (

        <>
            {/* footer area starts */}
            <footer className="footer-area">
                {/* footer widget  */}
                <div className="footer-widget">
                    <div className="container">
                        <div className="row footer-widget-wrapper pt-100 pb-70">
                            <div className="col-md-6 col-lg-3">
                                <div className="footer-widget-box about-us">
                                    <Link to="/" className="footer-logo">
                                        <img src="/assets/images/logo.png" alt="logo" />
                                    </Link>
                                    <Link to="/" className="footer-logo logo-black">
                                        <img src="/assets/images/logo-black.png" alt="logo" />
                                    </Link>
                                    <p>We are a dynamic creative agency dedicated to crafting compelling narratives and innovative solutions that resonate with precision.</p>
                                    <ul className="footer-social">
                                        <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                        <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2 offset-lg-2">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">Quick Links</h4>
                                    <ul className="footer-list">
                                        <li><Link to="/about">About us</Link></li>
                                        <li><Link to="/team">meet our team</Link></li>
                                        <li><Link to="/case">case studies</Link></li>
                                        <li><Link to="/blog">latest blog</Link></li>
                                        <li><Link to="#">contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <div className="footer-widget-box list">
                                    <h4 className="footer-widget-title">our services</h4>
                                    <ul className="footer-list">
                                        <li><Link to="/service-single">branding</Link></li>
                                        <li><Link to="/service-single">web design</Link></li>
                                        <li><Link to="/service-single">app design</Link></li>
                                        <li><Link to="/service-single">saas development</Link></li>
                                        <li><Link to="/service-single">digital marketing</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2 offset-lg-1">
                                <div className="footer-widget-box">
                                    <h4 className="footer-widget-title">Contact Us</h4>
                                    <ul className="footer-contact">
                                        <li><Link to="tel:+123456789000"><span className="contact-icon"><i className="fa-solid fa-phone"></i></span> (123) 456789000</Link></li>
                                        <li><Link to="mailto:info@procus.com"><span className="contact-icon"><i className="fa-regular fa-envelope"></i></span><span> info@procus.com</span></Link></li>
                                        <li><Link to="https://www.google.com/maps/search/?api=1&query=1498w+Fluton+ste,+STE+2D+Chicago,+IL+63867"><span className="contact-icon"><i className="fa-solid fa-location-dot"></i></span> 1498w Fluton ste, STE 2D Chicgo, IL 63867.</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* copyright  */}
                <div className="copyright">
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