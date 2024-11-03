
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const cases = [
    {
        id: 1,
        image: '/assets/images/portfolio-01.png',
        name: 'Web Design',
        category: 'web',
        description: 'Cyber Security Landing Page'
    },
    {
        id: 2,
        image: '/assets/images/portfolio-02.png',
        name: 'Marketing Agency Website Design',
        category: 'graphic',
        description: 'Shopify Responsive Website Design'
    },
    {
        id: 3,
        image: '/assets/images/portfolio-02.png',
        name: 'App Design & Development',
        category: 'app',
        description: 'E-Commerce App Development'
    },
    {
        id: 4,
        image: '/assets/images/portfolio-02.png',
        name: 'Shopify',
        category: 'app',
        description: 'Shopify Responsive Website Design'
    },
]

export default function Isotope() {
    const [items, setitems] = useState(cases);
    const [istrue, setistrue] = useState('all');

    const filterItems = (cateItem) => {
        const updatedItem = cases.filter((curElement) => {
            return curElement.category === cateItem;
        });
        setitems(updatedItem);
    }
    const hendelistrue = (cate) => {
        setistrue(cate);
    }
    return (
        <>
            <section className="case-study-home-2 pt-90 pb-120" >
                <span className="big-title">casestudy</span>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-top-2 wow fadeInLeft" data-wow-delay=".2s">
                                <span className="title-tag">case study</span>
                                <h2>Explore Our Creative <span>case study</span> Showcase</h2>
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-2 col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                            <div className="case-filter-tab">
                                <ul>
                                    <li onClick={() => { setitems(cases); hendelistrue('all') }} className={istrue == 'all' ? "secondary-btn active" : "secondary-btn"} data-filter="all">All project</li>
                                    <li onClick={() => { filterItems('web'); hendelistrue('web') }} className={istrue == 'web' ? "secondary-btn active" : "secondary-btn"} data-filter="web">Web Design</li>
                                    <li onClick={() => { filterItems('graphic'); hendelistrue('graphic') }} className={istrue == 'graphic' ? "secondary-btn active" : "secondary-btn"} data-filter="graphic">Graphic Design</li>
                                    <li onClick={() => { filterItems('app'); hendelistrue('app') }} className={istrue == 'app' ? "secondary-btn active" : "secondary-btn"} data-filter="app">App Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60 case-items">
                        {
                            items.map((item, index) => (
                                <div key={index} className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                                    <div className="case-single web">
                                        <div className="case-image">
                                            <Link to="/case_single"><img src={item.image} alt="case-image" /></Link>
                                        </div>
                                        <h3><Link to="/case_single">{item.description}</Link></h3>
                                        <Link to="/case_single" className="case-category">{item.name}</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row">
                        <div className="col-12 wow fadeInUp" data-wow-delay=".2s">
                            <div className="case-button text-center mt-20">
                                <Link to="/case" className="primary-btn">see more <span><i className="ri-arrow-right-up-line"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}