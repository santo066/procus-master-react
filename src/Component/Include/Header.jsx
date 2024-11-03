import ThemColorChange from "../Preloader/ThemColorChange";
import React from 'react';
import Preloader from "../Preloader/Preloader";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <Preloader />

            <ThemColorChange></ThemColorChange>

            <header className="header-area">
                <div className="menu-area">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <div className="col-lg-2">
                                    <div className="logo-area navbar-brand">
                                        <Link className="dark-version" to="/"> <img src="/assets/images/logo.png" alt="logo" /></Link>
                                        <Link className="light-version" to="/"> <img src="/assets/images/logo-black.png" alt="logo2" /></Link>
                                    </div>
                                </div>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="col-lg-10 offset-xl-1 col-xl-9">
                                        <ul className="main-menu navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="has-submenu nav-item dropdown"><Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">home</Link>
                                                <ul className="submenu dropdown-menu">
                                                    <li><Link className="dropdown-item" to="/">home 01</Link></li>
                                                    <li><Link className="dropdown-item" to='/home_2'>home 02</Link></li>
                                                    <li><Link className="dropdown-item" to="/home_3">home 03</Link></li>
                                                </ul>
                                            </li>

                                            <li className="has-submenu nav-item dropdown"><Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/services">services</Link>
                                                <ul className="submenu dropdown-menu">
                                                    <li><Link className="dropdown-item" to="/services">services</Link></li>
                                                    <li><Link className="dropdown-item" to='/service-single'>service details</Link></li>
                                                </ul>
                                            </li>

                                            <li className="has-submenu nav-item dropdown"><Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/services">case</Link>
                                                <ul className="submenu dropdown-menu">
                                                    <li><Link className="dropdown-item" to="/case">case</Link></li>
                                                    <li><Link className="dropdown-item" to='/case_single'>case details</Link></li>
                                                </ul>
                                            </li>

                                            <li className="has-submenu nav-item dropdown"><Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/services">blog</Link>
                                                <ul className="submenu dropdown-menu">
                                                    <li><Link className="dropdown-item" to="/blog">blog 2 column</Link></li>
                                                    <li><Link className="dropdown-item" to='/blog_2'>blog 3 column</Link></li>
                                                    <li><Link className="dropdown-item" to='/blog_single'>blog details</Link></li>
                                                </ul>
                                            </li>

                                            <li className="has-submenu nav-item dropdown"><Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/services">pages</Link>
                                                <ul className="submenu dropdown-menu">
                                                    <li><Link className="dropdown-item" to="/about">about</Link></li>
                                                    <li><Link className="dropdown-item" to='/work_process'>work process</Link></li>
                                                    <li><Link className="dropdown-item" to='/team'>team</Link></li>
                                                    <li><Link className="dropdown-item" to='/team_single'>team details</Link></li>
                                                    <li><Link className="dropdown-item" to='/faq'>FAQ</Link></li>
                                                    <li><Link className="dropdown-item" to='/error'>404</Link></li>
                                                </ul>
                                            </li>

                                            <li className=" nav-item dropdown"><Link className="nav-link dropdown-toggle" role="button" to="/contact">contact</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="nav-right-content">
                                            <Link to="/contact" className="primary-btn">Let’s Talk <span><i className="ri-arrow-right-up-line"></i></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    )
}