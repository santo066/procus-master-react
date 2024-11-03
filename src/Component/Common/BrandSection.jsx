import Marquee from "react-fast-marquee";
import React from 'react';

export default function BrandSection() {
    return (
        <>
            {/* brand area starts  */}
            <section className="brand-area pt-110 pb-120">
                <img src="/assets/images/brand-3d.png" alt="brand-3d" className="brand-3d" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top text-center">
                                <h2><span>Collaborations</span> with Leading Brands</h2>
                                <p className="mt-20">Get to know the talented individuals who make our company thrive. Our diverse team brings together a wealth of expertise.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mt-60">
                        <div className="col-lg-12">
                            <div className="brand-slider">
                                <Marquee
                                    className='maequee-wraper'
                                    speed={100}
                                >
                                    <div className="brand-single">
                                        <div className="brand-logo">
                                            <img className="dark-version" src="/assets/images/slack-logo.png" alt="brand-logo" />
                                            <img className="light-version" src="/assets/images/tinder-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>

                                    <div className="brand-single">
                                        <div className="brand-logo">
                                            <img className="dark-version" src="/assets/images/zoom-logo.png" alt="brand-logo" />
                                            <img className="light-version" src="/assets/images/zoom-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>

                                    <div className="brand-single">
                                        <div className="brand-logo">
                                            <img className="dark-version" src="/assets/images/spotify-logo.png" alt="brand-logo" />
                                            <img className="light-version" src="/assets/images/spotify-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>

                                    <div className="brand-single">
                                        <div className="brand-logo">
                                            <img className="dark-version" src="/assets/images/square-logo.png" alt="brand-logo" />
                                            <img className="light-version" src="/assets/images/square-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>

                                    <div className="brand-single">
                                        <div className="brand-logo">
                                            <img className="dark-version" src="/assets/images/upwork-logo.png" alt="brand-logo" />
                                            <img className="light-version" src="/assets/images/upwork-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>

                                    <div className="brand-single">
                                        <div className="brand-logo">
                                            <img className="dark-version" src="/assets/images/loom-logo.png" alt="brand-logo" />
                                            <img className="light-version" src="/assets/images/loom-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>

                                    <div className="brand-single">
                                        <div className="brand-logo">
                                            <img className="dark-version" src="/assets/images/trello-logo.png" alt="brand-logo" />
                                            <img className="light-version" src="/assets/images/tinder-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>

                                    <div className="brand-single">
                                        <div className="brand-logo">
                                            <img className="dark-version" src="/assets/images/docusign-logo.png" alt="brand-logo" />
                                            <img className="light-version" src="/assets/images/zoom-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>

                                    <div className="brand-single">
                                        <div className="brand-logo">
                                            <img className="dark-version" src="/assets/images/stripe-logo.png" alt="brand-logo" />
                                            <img className="light-version" src="/assets/images/loom-dark.png" alt="brand-logo" />
                                        </div>
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}