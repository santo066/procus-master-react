import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
export default function CommonHero(props) {
    return (
        <>
            {/* breadcrumb starts  */}
            <section className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>{props.title}</h1>
                            <ul className="breadcrumb-meta">
                                <li><Link to="/">{props.link1}</Link></li>
                                <li><span style={{ color: "white" }}><i className="fa-solid fa-angle-right"></i></span></li>
                                <li className="active">{props.link2}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

CommonHero.propTypes = {
    title: PropTypes.string.isRequired,
    link1: PropTypes.string.isRequired,
    link2: PropTypes.string.isRequired,
};