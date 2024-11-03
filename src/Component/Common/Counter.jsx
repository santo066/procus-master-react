import CountUp from 'react-countup';
import React from 'react';
export default function Counter() {
    return (
        <>
            {/* counter area starts  */}
            <section className="counter-area pt-110 pb-90" id="counter-area">
                <img src="/assets/images/counter-3d.png" alt="counter-3d" className="counter-3d" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top text-center">
                                <h2>Experiences Fueled by <span>Passion</span> and <span>Expertise</span></h2>
                                <p className="mt-20">At our core, we are more than just a creative agency – we are a dynamic team of storytellers, strategists, and tech enthusiasts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-3 col-6">
                            <div className="counter-single">
                                <div className="counter-number">
                                    <h4><span className="counter"><CountUp start={0} end={25} delay={.9} duration={5} /></span></h4>
                                </div>
                                <h6 className="counter-text">Years of Experience</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="counter-single">
                                <div className="counter-number">
                                    <h4><span className="counter"><CountUp start={0} end={250} delay={.9} duration={5} /></span><span className="plus-sign">+</span></h4>
                                </div>
                                <h6 className="counter-text">project complete</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="counter-single">
                                <div className="counter-number">
                                    <h4><span className="counter"><CountUp start={0} end={100} delay={.9} duration={5} /></span></h4>
                                </div>
                                <h6 className="counter-text">happy client</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="counter-single">
                                <div className="counter-number">
                                    <h4><span className="counter"><CountUp start={0} end={35} delay={.9} duration={5} /></span></h4>
                                </div>
                                <h6 className="counter-text">Wining Awards</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}