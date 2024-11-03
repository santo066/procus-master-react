import { useState } from "react";

import React from 'react';
import { Link } from "react-router-dom";

const items = [
    {
        header_number: '01',
        header_content: 'Branding',
        content: "Our Digital Marketing Services Utilize Cutting-Edge Strategies to Enhance Your Online Presence and Drive Targeted Traffic, Ensuring Maximum ROI and Growth for Your Brand. Our Digital Marketing Services Utilize Cutting-Edge Strategies to Enhance Your Online Presence.",
        content2: "Partner with us to stay ahead in the digital landscape and achieve sustainable growth.",
        img: 'assets/images/service-image-1.png'
    },
    {
        header_number: '02',
        header_content: 'Website Design',
        content: "Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions That Captivate Audiences and Drive Meaningful Engagement, Helping Your Brand Stand Out in the Digital Landscape.",
        content2: "Our Content Creation Service Seamlessly Blends Creativity and Strategy to Deliver Tailored Solutions.",
        img: 'assets/images/service-image-2.png'
    },
    {
        header_number: '03',
        header_content: 'App Design',
        content: "Our Promotional Campaigns Are Designed to Create Buzz and Generate Interest, Effectively Reaching Your Target Audience and Boosting Your Brand’s Visibility and Sales. Our Promotional Campaigns Are Designed to Create Buzz and Generate Interest.",
        content2: "Elevate your brand with our impactful campaigns and watch your sales soar.",
        img: 'assets/images/service-image-3.png'
    },
    {
        header_number: '04',
        header_content: 'SASS Development',
        content: "Our Animated Reels Videos Bring Your Ideas to Life with Stunning Visuals and Engaging Storytelling, Perfect for Capturing Attention and Increasing Engagement on Social Media. Our Animated Reels Videos Bring Your Ideas to Life with Stunning Visuals and Engaging.",
        content2: "Engage your audience with our captivating animated reels and drive higher engagement.",
        img: 'assets/images/service-image-4.png'
    },
    {
        header_number: '05',
        header_content: 'Digital Marketing',
        content: "Our Product Branding Services Craft a Unique Identity for Your Products, Creating a Strong, Memorable Impression That Resonates with Your Target Market and Differentiates You from Competitors. Our Product Branding Services Craft a Unique Identity for Your Products.",
        content2: "Strengthen your brand's market position with our expert branding services and leave a lasting impact.",
        img: 'assets/images/service-image-5.png'
    },
];

export default function Accordion() {

    const [acordion, setAcordion] = useState(0);

    function togglerAcordion(index) {
        if (index === acordion) {
            setAcordion(-1);
            return;
        }
        setAcordion(index)
    }
    return (
        <>
            <ul className="accordion-list">
                {
                    items.map((item, index) =>
                        <li key={index} onClick={() => togglerAcordion(index)} className={` wow fadeInUp ${acordion === index ? "active" : ""}`} data-wow-delay=".2s">
                            <h3 className={acordion === index ? "active" : ""}><span className="space-right">{item.header_number}</span>{item.header_content}</h3>
                            <div className={`answer ${acordion === index ? "active" : "inactive"}`} >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <p>{item.content}</p>
                                        <p>{item.content2}</p>
                                        <Link to="/service-single" className="primary-btn mt-20">Learn More <span><i className="ri-arrow-right-up-line"></i></span></Link>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={item.img} alt="service-image" className="service-image" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </>
    )
}