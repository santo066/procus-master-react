import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer2() {
    return (
        <>
            {/* footer area starts  */}
            <footer className="footer-home-2">
                {/* footer widget  */}
                <div className="footer-widget">
                    <div className="container">
                        <div className="row footer-widget-wrapper pt-110 pb-70">
                            <div className="col-lg-6">
                                <div className="footer-widget-box-2">
                                    <h1>Let`s talk</h1>
                                    <h6>Don’t miss out on our updates!</h6>
                                    <h4>Subscribe to our newsletter</h4>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="email" placeholder="Enter your email address" />
                                            <button className="primary-btn" type="submit">Subscribe <span><i
                                                className="ri-arrow-right-up-line"></i></span></button>
                                        </form>
                                    </div>
                                    <ul className="hero-social-2">
                                        <li><Link to="#">facebook</Link></li>
                                        <li><Link to="#">twitter</Link></li>
                                        <li><Link to="#">linkedin</Link></li>
                                        <li><Link to="#">instagram</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 offset-xl-2 col-lg-6">
                                <div className="footer-widget-box-2 contact-widget">
                                    <h2>Get in Touch</h2>
                                    <ul>
                                        <li><Link to="tel:+123456789000">info@procus.com</Link></li>
                                        <li><Link to="mailto:info@procus.com">+99(0) 1453 123456</Link></li>
                                        <li><Link to="https://www.google.com/maps/search/?api=1&query=1498w+Fluton+ste,+STE+2D+Chicago,+IL+63867">1901 Thornridge Cir. Shiloh, Hawaii 81063</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* copyright  */}
                <div className="copyright-2">
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