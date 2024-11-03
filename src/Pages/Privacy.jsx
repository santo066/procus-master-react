import CommonHero from "../Component/Common/CommonHero";
import React from 'react';

export default function Privacy() {
    return (
        <>
            <CommonHero title={'Privacy Policy'} link1={'Home'} link2={'Privacy Policy'}></CommonHero>

            {/* terms content starts  */}
            <section className="terms-content py-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-top text-center">
                                <h2>Privacy <span>Policy</span></h2>
                                <p className="mt-20">At Procus, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="col-lg-8 offset-lg-2">
                            <img src="/assets/images/privacy-image.png" alt="privacy-image" className="mb-60" />
                            <h4>Privacy Policy</h4>
                            <p className="mt-20">We employ the use of cookies. By accessing Procus, you agreed to use cookies in agreement with the Procus’s Privacy Policy.</p>
                            <p className="mt-20">Most interactive websites use cookies to retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
                            <h4 className="mt-50">Information We Collect</h4>
                            <p className="mt-20">We may collect personal information from you when you interact with our website or services. This may include:
                            </p>
                            <ul className="list-items privacy-list mt-20">
                                <li><span><i className="fa-solid fa-circle"></i></span> Name</li>
                                <li><span><i className="fa-solid fa-circle"></i></span> Email address</li>
                                <li><span><i className="fa-solid fa-circle"></i></span> Contact information</li>
                                <li><span><i className="fa-solid fa-circle"></i></span> Demographic information</li>
                                <li><span><i className="fa-solid fa-circle"></i></span> Other information relevant to customer surveys and/or offers</li>
                            </ul>
                            <p className="mt-20">We collect this information to understand your needs and provide you with a better service, and in particular, for the following reasons:</p>
                            <ul className="list-items privacy-list mt-20">
                                <li><span><i className="fa-solid fa-circle"></i></span> Internal record keeping</li>
                                <li><span><i className="fa-solid fa-circle"></i></span> Improving our products and services</li>
                                <li><span><i className="fa-solid fa-circle"></i></span> Sending promotional emails</li>
                                <li><span><i className="fa-solid fa-circle"></i></span> Customizing the website according to your interests</li>
                            </ul><h4 className="mt-50">Security</h4>
                            <p className="mt-20">We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
                            <h4 className="mt-50">Links to Other Websites</h4>
                            <p className="mt-20">If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.</p>
                            <p className="mt-20">Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this Privacy Policy. You should exercise caution and look at the privacy statement applicable to the website in question.</p>
                            <h4 className="mt-50">Changes to This Privacy Policy</h4>
                            <p className="mt-20">To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
                            <h4 className="mt-50">Contact Us</h4>
                            <p className="mt-20">If you have any questions or concerns about our Privacy Policy, please contact us at</p>
                            <h3 className="mt-50">info@procus.com</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}