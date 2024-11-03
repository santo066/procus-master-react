import { Link } from "react-router-dom";
import CommonHero from "../Component/Common/CommonHero";
import GetInTuch from "../Component/Common/GetInTuch";
import React from 'react';

export default function Blog() {
    return (
        <>
            <CommonHero title={'Blog 2 Column'} link1={'Home'} link2={'Blog 2 Column'}></CommonHero>

            {/* blog 2 column starts  */}
            <section className="blog-2-column pt-110 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <div className="col-12 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="section-title text-center">
                                        <h2>Our Latest <span>Blog</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-60">
                                <div className="col-12 wow fadeInUp" data-wow-delay=".3s">
                                    <ul className="blog-page-categories">
                                        <li className="active"><Link to="#">all post <span className="total-post">20</span></Link></li>
                                        <li><Link to="#">design <span className="total-post">4</span></Link></li>
                                        <li><Link to="#">product <span className="total-post">2</span></Link></li>
                                        <li><Link to="#">Software Engineering <span className="total-post">10</span></Link></li>
                                        <li><Link to="#">Artificial Intelligence <span className="total-post">4</span></Link></li>
                                        <li className="right">
                                            <select id="cars" name="cars">
                                                <option value="most-recent">Most Recent</option>
                                                <option value="design">design</option>
                                                <option value="software-engineering">Software Engineering</option>
                                                <option value="artificial-intelligence">Artificial Intelligence</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-20">
                                <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                                    <div className="blog-single-slide">
                                        <div className="blog-image">
                                            <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-thum-01.png" alt="blog-thumb" /></Link>
                                        </div>
                                        <div className="blog-meta">
                                            <ul className="d-flex align-items-center">
                                                <li>By <Link href="/">procus</Link></li>
                                                <li className="separator">|</li>
                                                <li>23 March 2023</li>
                                            </ul>
                                            <ul>
                                                <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to="/blog_single">Transforming Digital Solutions with  Artificial Intelligence</Link>
                                        </h4>
                                        <p className="mt-20">We delve into the profound impact that Artificial Intelligence (AI) is having on digital solutions across various industries. From enhancing user experiences to optimizing.</p>
                                        <div className="blog-tags">
                                            <ul>
                                                <li><Link to="/blog_single">Artificial Intelligence</Link></li>
                                                <li><Link to="/blog_single">Machine Learning</Link></li>
                                                <li><Link to="/blog_single">Deep Learning</Link></li>
                                            </ul>
                                        </div>
                                        <Link className="blog-btn mt-40" to="/blog_single">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                                    <div className="blog-single-slide">
                                        <div className="blog-image">
                                            <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-thum-02.png" alt="blog-thumb" /></Link>
                                        </div>
                                        <div className="blog-meta">
                                            <ul className="d-flex align-items-center">
                                                <li>By <Link href="/">procus</Link></li>
                                                <li className="separator">|</li>
                                                <li>23 March 2023</li>
                                            </ul>
                                            <ul>
                                                <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to="/blog_single">The Art of Collaboration in Creative Agency Studio</Link>
                                        </h4>
                                        <p className="mt-20">In this blog post, we explore the dynamics of collaboration within and between creative agencies, examining how partnerships between designers, marketers, and content.</p>
                                        <div className="blog-tags">
                                            <ul>
                                                <li><Link to="/blog_single">creative agency</Link></li>
                                                <li><Link to="/blog_single">product</Link></li>
                                                <li><Link to="/blog_single">digital</Link></li>
                                            </ul>
                                        </div>
                                        <Link className="blog-btn mt-40" to="/blog_single">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                                    <div className="blog-single-slide">
                                        <div className="blog-image">
                                            <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-thum-03.png" alt="blog-thumb" /></Link>
                                        </div>
                                        <div className="blog-meta">
                                            <ul className="d-flex align-items-center">
                                                <li>By <Link to="/">procus</Link></li>
                                                <li className="separator">|</li>
                                                <li>23 March 2023</li>
                                            </ul>
                                            <ul>
                                                <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to="/blog_single">Enhancing Creativity with Machine Learning</Link>
                                        </h4>
                                        <p className="mt-20">Explore how AI is revolutionizing the design process, from generating innovative concepts to automating repetitive tasks, and discover how designers can leverage these.</p>
                                        <div className="blog-tags">
                                            <ul>
                                                <li><Link to="/blog_single">Artificial Intelligence </Link></li>
                                                <li><Link to="/blog_single">Machine Learning</Link></li>
                                                <li><Link to="/blog_single">Deep Learning</Link></li>
                                            </ul>
                                        </div>
                                        <Link className="blog-btn mt-40" to="/blog_single">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                                    <div className="blog-single-slide">
                                        <div className="blog-image">
                                            <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-thum-4.png" alt="blog-thumb" /></Link>
                                        </div>
                                        <div className="blog-meta">
                                            <ul className="d-flex align-items-center">
                                                <li>By <Link to="/">procus</Link></li>
                                                <li className="separator">|</li>
                                                <li>23 March 2023</li>
                                            </ul>
                                            <ul>
                                                <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to="/blog_single">The Art of Collaboration in Creative Agency Studio</Link>
                                        </h4>
                                        <p className="mt-20">In this blog post, we explore the dynamics of collaboration within and between creative agencies, examining how partnerships between designers, marketers, and content.</p>
                                        <div className="blog-tags">
                                            <ul>
                                                <li><Link to="/blog_single">creative agency</Link></li>
                                                <li><Link to="/blog_single">product</Link></li>
                                                <li><Link to="/blog_single">digital</Link></li>
                                            </ul>
                                        </div>
                                        <Link className="blog-btn mt-40" to="/blog_single">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                                    <div className="blog-single-slide">
                                        <div className="blog-image">
                                            <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-thum-5.png" alt="blog-thumb" /></Link>
                                        </div>
                                        <div className="blog-meta">
                                            <ul className="d-flex align-items-center">
                                                <li>By <Link to="/">procus</Link></li>
                                                <li className="separator">|</li>
                                                <li>23 March 2023</li>
                                            </ul>
                                            <ul>
                                                <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to="/blog_single">A Blueprint for Innovation in Product Development</Link>
                                        </h4>
                                        <p className="mt-20">Explore how AI is revolutionizing the design process, from generating innovative concepts to automating repetitive tasks, and discover how designers can leverage these.</p>
                                        <div className="blog-tags">
                                            <ul>
                                                <li><Link to="/blog_single">Artificial Intelligence </Link></li>
                                                <li><Link to="/blog_single">Machine Learning</Link></li>
                                                <li><Link to="/blog_single">Deep Learning</Link></li>
                                            </ul>
                                        </div>
                                        <Link className="blog-btn mt-40" to="/blog_single">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
                                    <div className="blog-single-slide">
                                        <div className="blog-image">
                                            <Link to="/blog_single" className="blog-thumb"><img src="/assets/images/blog-thum-6.png" alt="blog-thumb" /></Link>
                                        </div>
                                        <div className="blog-meta">
                                            <ul className="d-flex align-items-center">
                                                <li>By <Link to="/">procus</Link></li>
                                                <li className="separator">|</li>
                                                <li>23 March 2023</li>
                                            </ul>
                                            <ul>
                                                <li><i className="fa-solid fa-book-open"></i> 4 min read</li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <Link to="/blog_single">Product Management in the Digital Age: Complexity and Uncertainty</Link>
                                        </h4>
                                        <p className="mt-20">In this blog post, we explore the dynamics of collaboration within and between creative agencies, examining how partnerships between designers, marketers, and content.</p>
                                        <div className="blog-tags">
                                            <ul>
                                                <li><Link to="/blog_single">creative agency</Link></li>
                                                <li><Link to="/blog_single">product</Link></li>
                                                <li><Link to="/blog_single">digital</Link></li>
                                            </ul>
                                        </div>
                                        <Link className="blog-btn mt-40" to="/blog_single">Read More <span><i className="fas fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 wow fadeInUp" data-wow-delay=".2s">
                                    <ul className="blog-pagination">
                                        <li className="prev-post"><span><i className="fas fa-arrow-left"></i></span> previous</li>
                                        <li className="page-number active">1</li>
                                        <li className="page-number">2</li>
                                        <li className="page-number">3</li>
                                        <li className="next-post">next <span><i className="fas fa-arrow-right"></i></span></li>
                                    </ul>
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