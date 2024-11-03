
import React from 'react';
import { Link } from 'react-router-dom';
export default function GetInTuch() {
    return (
        <>
            <div className="get-in-touch-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 wow fadeIn" data-wow-delay=".2s">
                            <Link to="/contact" className="big-title"><span>Get in touch</span><span className="icon"><i className="ri-arrow-right-up-line"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}