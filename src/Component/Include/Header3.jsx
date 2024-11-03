import { Link } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import React from 'react';
export default function Header3() {
    return (
        <>
            <Preloader></Preloader>
            {/* header area starts */}
            <header className="header-area">
                {/* menu area  */}
                <div className="menu-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="logo-area">
                                    <Link className="dark-version" to="/"> <img src="/assets/images/logo.png" alt="logo" /></Link>
                                    <Link className="light-version" to="/"> <img src="/assets/images/logo-black.png" alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 d-none d-lg-block">
                                <nav id="mobile-menu">
                                    <ul className="main-menu">
                                        <li className="has-submenu"><Link to="/">home</Link>
                                            <ul className="submenu">
                                                <li><Link to="/">home 01</Link></li>
                                                <li><Link to='/home_2'>home 02</Link></li>
                                                <li><Link to="/home_3">home 03</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><Link to="#">services</Link>
                                            <ul className="submenu">
                                                <li><Link to="/services">services</Link></li>
                                                <li><Link to="/service-single">service details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><Link to="#">case</Link>
                                            <ul className="submenu">
                                                <li><Link to="/case">case</Link></li>
                                                <li><Link to="/case-single">case details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><Link to="#">blog</Link>
                                            <ul className="submenu">
                                                <li><Link to="/blog">blog 2 column</Link></li>
                                                <li><Link to="/blog-2">blog 3 column</Link></li>
                                                <li><Link to="/blog-single">blog details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu"><Link to="#">pages</Link>
                                            <ul className="submenu">
                                                <li><Link to="/about">about</Link></li>
                                                <li><Link to="/work-process">work process</Link></li>
                                                <li><Link to="/team">team</Link></li>
                                                <li><Link to="/team-single">team details</Link></li>
                                                <li><Link to="/faq">FAQ</Link></li>
                                                <li><Link to="/error">404</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/contact">contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-2">
                                <div className="nav-right-content">
                                    <Link to="/contact" className="primary-btn">Lets Talk <span><i className="fas fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-menu"></div>
                </div>
            </header>
        </>
    )
}