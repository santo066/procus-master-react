import { useState } from "react";
import CommonHero from "../Component/Common/CommonHero";
import React from 'react';
import GetInTuch from "../Component/Common/GetInTuch";

const faqDatas1 = [
    {
        header: 'What services do you offer?',
        content: 'Content for What services do you offer?'
    },
    {
        header: 'How do I get started working with your agency?',
        content: "Simply reach out to us through our contact page or email, and we'll schedule a consultation to discuss your project needs and goals."
    },
    {
        header: 'Can you work within my budget?',
        content: 'Content for Can you work within my budget?'
    },
    {
        header: 'Do you provide revisions?',
        content: 'Content for Do you provide revisions?'
    },
    {
        header: 'Do you provide after sale service?',
        content: 'Content for Do you provide after sale service?'
    },
];
const faqDatas2 = [
    {
        header: 'How do I get started working with your agency?',
        content: "Simply reach out to us through our contact page or email, and we'll schedule a consultation to discuss your project needs and goals."
    },
    {
        header: 'Can you work within my budget?',
        content: 'Content for Can you work within my budget?'
    },
    {
        header: 'Do you provide revisions?',
        content: 'Content for Do you provide revisions?'
    },
    {
        header: 'Do you provide after sale service?',
        content: 'Content for Do you provide after sale service?'
    },
];
const faqDatas3 = [
    {
        header: 'What services do you offer?',
        content: 'Content for What services do you offer?'
    },
    {
        header: 'How do I get started working with your agency?',
        content: "Simply reach out to us through our contact page or email, and we'll schedule a consultation to discuss your project needs and goals."
    },
    {
        header: 'Do you provide revisions?',
        content: 'Content for Do you provide revisions?'
    },
    {
        header: 'Do you provide after sale service?',
        content: 'Content for Do you provide after sale service?'
    },
];
const faqDatas4 = [
    {
        header: 'What services do you offer?',
        content: 'Content for What services do you offer?'
    },
    {
        header: 'How do I get started working with your agency?',
        content: "Simply reach out to us through our contact page or email, and we'll schedule a consultation to discuss your project needs and goals."
    },
    {
        header: 'Can you work within my budget?',
        content: 'Content for Can you work within my budget?'
    },
    {
        header: 'Do you provide revisions?',
        content: 'Content for Do you provide revisions?'
    },
    {
        header: 'Do you provide after sale service?',
        content: 'Content for Do you provide after sale service?'
    },
    {
        header: 'What services do you offer?',
        content: 'Content for What services do you offer?'
    },
];
const faqDatas5 = [
    {
        header: 'Can you work within my budget?',
        content: 'Content for Can you work within my budget?'
    },
    {
        header: 'Do you provide revisions?',
        content: 'Content for Do you provide revisions?'
    },
    {
        header: 'Do you provide after sale service?',
        content: 'Content for Do you provide after sale service?'
    },
];
const faqDatas6 = [
    {
        header: 'What services do you offer?',
        content: 'Content for What services do you offer?'
    },
    {
        header: 'How do I get started working with your agency?',
        content: "Simply reach out to us through our contact page or email, and we'll schedule a consultation to discuss your project needs and goals."
    },
    {
        header: 'Can you work within my budget?',
        content: 'Content for Can you work within my budget?'
    },
    {
        header: 'Do you provide revisions?',
        content: 'Content for Do you provide revisions?'
    },
    {
        header: 'Do you provide after sale service?',
        content: 'Content for Do you provide after sale service?'
    },
];


export default function Faq() {

    const [toggle, setToggle] = useState(1);

    const updateToggleId = (id) => {
        setToggle(id)
    };

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
            <CommonHero title={'faq'} link1={'Home'} link2={'faq'}></CommonHero>

            {/* faq area starts  */}
            <section className="faq-area pt-110 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="section-top text-center">
                                <h2>Frequently Asked <span>Questions</span></h2>
                                <p className="mt-20">A showcase of our most inspiring projects. Each one is a journey of innovation, passion, and bold creativity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="tab-container">
                                <div className="tab-menu wow fadeIn" data-wow-delay=".2s">
                                    <div onClick={() => updateToggleId(1)} className={toggle == 1 ? "tab-menu-item active" : "tab-menu-item"} data-tab="general">General</div>
                                    <div onClick={() => updateToggleId(2)} className={toggle == 2 ? "tab-menu-item active" : "tab-menu-item"} data-tab="services">Services</div>
                                    <div onClick={() => updateToggleId(3)} className={toggle == 3 ? "tab-menu-item active" : "tab-menu-item"} data-tab="project-management">Project Management</div>
                                    <div onClick={() => updateToggleId(4)} className={toggle == 4 ? "tab-menu-item active" : "tab-menu-item"} data-tab="client-relations">Client Relations</div>
                                    <div onClick={() => updateToggleId(5)} className={toggle == 5 ? "tab-menu-item active" : "tab-menu-item"} data-tab="payment">Payment</div>
                                    <div onClick={() => updateToggleId(6)} className={toggle == 6 ? "tab-menu-item active" : "tab-menu-item"} data-tab="privacy-policy">Privacy Policy</div>
                                </div>
                                <div className="tab-content wow fadeInUp" data-wow-delay=".3s">
                                    <div className={toggle == 1 ? "tab-content-item active" : "tab-content-item"} id="general">
                                        <div className="accordion">
                                            {
                                                faqDatas1.map((faqData, index) => (
                                                    <div key={index} className={` accordion-item ${acordion === index ? "active" : ""}`} onClick={() => togglerAcordion(index)}>
                                                        <div className={` accordion-header ${acordion === index ? "active" : ""}`}>{faqData.header}</div>
                                                        <div className={`accordion-content ${acordion === index ? "active" : "inactive"}`}>{faqData.content}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={toggle == 2 ? "tab-content-item active" : "tab-content-item"} id="services">
                                        <div className="accordion">
                                            {
                                                faqDatas2.map((faqData, index) => (
                                                    <div key={index} className={` accordion-item ${acordion === index ? "active" : ""}`} onClick={() => togglerAcordion(index)}>
                                                        <div className={` accordion-header ${acordion === index ? "active" : ""}`}>{faqData.header}</div>
                                                        <div className={`accordion-content ${acordion === index ? "active" : "inactive"}`}>{faqData.content}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={toggle == 3 ? "tab-content-item active" : "tab-content-item"} id="project-management">
                                        <div className="accordion">
                                            {
                                                faqDatas3.map((faqData, index) => (
                                                    <div key={index} className={` accordion-item ${acordion === index ? "active" : ""}`} onClick={() => togglerAcordion(index)}>
                                                        <div className={` accordion-header ${acordion === index ? "active" : ""}`}>{faqData.header}</div>
                                                        <div className={`accordion-content ${acordion === index ? "active" : "inactive"}`}>{faqData.content}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={toggle == 4 ? "tab-content-item active" : "tab-content-item"} id="client-relations">
                                        <div className="accordion">
                                            {
                                                faqDatas4.map((faqData, index) => (
                                                    <div key={index} className={` accordion-item ${acordion === index ? "active" : ""}`} onClick={() => togglerAcordion(index)}>
                                                        <div className={` accordion-header ${acordion === index ? "active" : ""}`}>{faqData.header}</div>
                                                        <div className={`accordion-content ${acordion === index ? "active" : "inactive"}`}>{faqData.content}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={toggle == 5 ? "tab-content-item active" : "tab-content-item"} id="payment">
                                        <div className="accordion">
                                            {
                                                faqDatas5.map((faqData, index) => (
                                                    <div key={index} className={` accordion-item ${acordion === index ? "active" : ""}`} onClick={() => togglerAcordion(index)}>
                                                        <div className={` accordion-header ${acordion === index ? "active" : ""}`}>{faqData.header}</div>
                                                        <div className={`accordion-content ${acordion === index ? "active" : "inactive"}`}>{faqData.content}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className={toggle == 6 ? "tab-content-item active" : "tab-content-item"} id="privacy-policy">
                                        <div className="accordion">
                                            {
                                                faqDatas6.map((faqData, index) => (
                                                    <div key={index} className={` accordion-item ${acordion === index ? "active" : ""}`} onClick={() => togglerAcordion(index)}>
                                                        <div className={` accordion-header ${acordion === index ? "active" : ""}`}>{faqData.header}</div>
                                                        <div className={`accordion-content ${acordion === index ? "active" : "inactive"}`}>{faqData.content}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    {/* Add similar structure for other tabs  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetInTuch></GetInTuch>
        </>
    )
}