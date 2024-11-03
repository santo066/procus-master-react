import { Link } from "react-router-dom";
import CommonHero from "../Component/Common/CommonHero";
import GetInTuch from "../Component/Common/GetInTuch";
import React from 'react';

const teamMembers = [
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-01.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-02.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-03.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-04.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-05.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-06.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-07.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-08.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-09.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-10.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-11.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-12.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-13.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-14.png',
        designation: 'founder & CEO'
    },
    {
        name: 'Savannah Nguyen',
        image: '/assets/images/team-member-15.png',
        designation: 'founder & CEO'
    },
]

export default function Team() {
    return (
        <>
            <CommonHero title={'Our team'} link1={'Home'} link2={'Our team'}></CommonHero>

            {/* team members starts  */}
            <section className="team-area pt-110 pb-90">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 offset-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top text-center">
                                <h2>Meet Our <span>Team</span></h2>
                                <p className="mt-20">Get to know the talented individuals who make our company thrive. Our diverse team brings together a wealth of expertise.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">

                        {
                            teamMembers.map((member, index) => (
                                <div key={index} className="col-lg-4 col-sm-6 wow fadeIn" data-wow-delay=".3s">
                                    <div className="team-member">
                                        <div className="team-image">
                                            <Link to="/team_single"><img src={member.image} alt="team-member" /></Link>
                                            <div className="hover-state">
                                                <div className="team-content">
                                                    <div className="team-bio">
                                                        <h4><Link to="/team_single">{member.name}</Link></h4>
                                                        <span>{member.designation}</span>
                                                    </div>
                                                </div>
                                                <ul className="team-social">
                                                    <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                                    <li><Link to="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                                    <li><Link to="#"><i className="fa-solid fa-globe"></i></Link></li>
                                                    <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                                    <li><Link to="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <GetInTuch></GetInTuch>
        </>
    )
}