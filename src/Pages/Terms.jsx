import CommonHero from "../Component/Common/CommonHero";
import React from 'react';

export default function Terms() {
    return (
        <>
            <CommonHero title={'Terms and Conditions'} link1={'Home'} link2={'Terms and Conditions'}></CommonHero>

            {/* terms content starts */}
            <section className="terms-content py-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-top text-center">
                                <h2><span>Terms</span> and <span>Conditions</span></h2>
                                <p className="mt-20">Welcome to Procus! These terms and conditions outline the rules and regulations for the use of Procuss website and services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-8 offset-lg-2">
                            <img src="/assets/images/terms-image.png" alt="terms-image" className="mb-60" />
                            <h4>Cookies</h4>
                            <p className="mt-20">We employ the use of cookies. By accessing Procus, you agreed to use cookies in agreement with the Procuss Privacy Policy.</p>
                            <p className="mt-20">Most interactive websites use cookies to retrieve the users details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
                            <h4 className="mt-50">License</h4>
                            <p className="mt-20">Unless otherwise stated, Procus and/or its licensors own the intellectual property rights for all material on Procus. All intellectual property rights are reserved. You may access this from Procus for your own personal use subjected to restrictions set in these terms and conditions.</p>
                            <h4 className="mt-50">You must not:</h4>
                            <ul className="list-items mt-20">
                                <li><span><i className="fa-solid fa-circle-xmark"></i></span> Republish material from Procus</li>
                                <li><span><i className="fa-solid fa-circle-xmark"></i></span> Sell, rent, or sub-license material from Procus</li>
                                <li><span><i className="fa-solid fa-circle-xmark"></i></span> Reproduce, duplicate or copy material from Procus</li>
                                <li><span><i className="fa-solid fa-circle-xmark"></i></span> Redistribute content from Procus</li>
                            </ul>
                            <h4 className="mt-50">Reservation of Rights</h4>
                            <p className="mt-20">We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
                            <h4 className="mt-50">Removal of links from our website</h4>
                            <p className="mt-20">If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.</p>
                            <h4 className="mt-50">Disclaimer</h4>
                            <p className="mt-20">To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
                            <ul>
                                <li>- Limit or exclude our or your liability for death or personal injury</li>
                                <li>- Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                                <li>- Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
                            </ul>
                            <p className="mt-20">The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.</p>
                            <p className="mt-20">As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}