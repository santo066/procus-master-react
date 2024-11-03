import { useState } from "react";
import CommonHero from "../Component/Common/CommonHero";
import React from 'react';
import { Link } from "react-router-dom";

const contacts = [
    {
        icon: 'fa-solid fa-phone-volume',
        name: 'Phone',
        content1: '+(123) 456789000',
        content2: '+(123) 456789000'
    },
    {
        icon: 'fa-regular fa-envelope',
        name: 'email',
        content1: 'info@procus.com',
        content2: 'info@procus.com'
    },
    {
        icon: 'fa-solid fa-location-dot',
        name: 'location',
        content1: '1498w Fluton ste, STE',
        content2: '2D Chicgo, IL 63867.'
    }
]

export default function Contact() {
    const [onHover, setonHover] = useState(null);

    const hendelhover = (index) => {
        setonHover(index);
    };
    const hendelmove = (index) => {
        setonHover(index);
    };
    return (
        <>
            <CommonHero title={'contact us'} link1={'Home'} link2={'contact us'}></CommonHero>

            {/* contact info area starts  */}
            <section className="contact-info-area pt-110 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top text-center">
                                <h2><span>Contact us</span> for a personal experience</h2>
                                <p className="mt-20">A showcase of our most inspiring projects. Each one is a journey of innovation, passion, and bold creativity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row mt-60">
                                {
                                    contacts.map((cont, index) => (
                                        <div
                                            key={index}
                                            className="col-md-4 col-sm-6 wow fadeIn"
                                            data-wow-delay=".3s"
                                            onMouseEnter={() => hendelhover(index)}
                                            onMouseLeave={() => hendelmove(index)}
                                        >
                                            <div className={onHover == index ? "single-info active" : "single-info"}>
                                                <span className="info-icon"><i className={`${cont.icon}`}></i></span>
                                                <h4>{cont.name}</h4>
                                                <span>{cont.content1}</span>
                                                <span>{cont.content2}</span>
                                            </div>
                                        </div>
                                    ))
                                }
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

            {/* contact form area starts  */}
            <section className="contact-form-area pt-110 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="section-top mb-50">
                                <h2>Lets <span>collaborate</span> and create something extraordinary together!</h2>
                            </div>
                            <img src="/assets/images/contact-form-image.png" alt="contact-image" />
                        </div>

                        <div className="col-xl-6 offset-xl-1 col-lg-7 wow fadeInRight" data-wow-delay=".2s">
                            <div className="contact-form-3">
                                <form action="#" method="POST">
                                    <div className="form-group">
                                        <label htmlFor="name">Hi! My name is</label>
                                        <input type="text" id="name" name="name" placeholder="What's your name?*" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">and I work in</label>
                                        <input type="text" id="company" name="company" placeholder="What's your company name?*" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">My email is</label>
                                        <input type="email" id="email" name="email" placeholder="What's your email?*" required />
                                    </div>
                                    <div className="budget-options form-group">
                                        <label>My Budget is around</label>
                                        <label className="budget-option">
                                            <input type="radio" name="budget" value="5000-15000" />
                                            <span>$5,000-15,000</span>
                                        </label>
                                        <label className="budget-option">
                                            <input type="radio" name="budget" value="15000-30000" />
                                            <span>$15,000-30,000</span>
                                        </label>
                                        <label className="budget-option">
                                            <input type="radio" name="budget" value="30000-50000" checked />
                                            <span>$30,000-50,000</span>
                                        </label>
                                        <label className="budget-option">
                                            <input type="radio" name="budget" value="50000+" />
                                            <span>$50,000+</span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="project-details">I’d like to share more about my project details:</label>
                                        <textarea id="project-details" name="project-details" placeholder="Tell something about your project" rows="4" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" id="privacy-policy" name="privacy-policy" required />
                                        <label className="privacy-policy" htmlFor="privacy-policy">I agree with the <Link href="/privacy">privacy policy</Link></label>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" id="attachment" name="attachment" style={{ display: 'none' }} />
                                        <label htmlFor="attachment" className="attachment-btn"><i className="fas fa-paperclip"></i> Add attachment</label>
                                    </div>
                                    <button type="submit" className="primary-btn">get started <span><i className="ri-arrow-right-up-line"></i></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}