import React from 'react'

function Footer() {
    return (
        <>
            {/* footer */}
            <footer className="site-footer footer-style-1 pbmit-bg-color-secondary">
                <div className="footer-wrap pbmit-footer-widget-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <aside className="widget pbmit-two-column-menu">
                                    <ul>
                                        <li>
                                            <a href="about-us.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="our-team.html">Our Team</a>
                                        </li>
                                        <li>
                                            <a href="our-history.html">Our History</a>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid-col-4.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">Service</a>
                                        </li>
                                        <li>
                                            <a href="team-single-details.html">Team Member</a>
                                        </li>
                                        <li>
                                            <a href="portfolio-detail-style-1.html">Project</a>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-md-4">
                                <aside className="widget">
                                    <div className="textwidget">
                                        <div className="pbmit-footer-logo">
                                            <img src="images/favicon.svg" alt />
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-md-4">
                                <aside className="widget pbmit-two-column-menu">
                                    <ul>
                                        <li>
                                            <a href="#">Style Guide</a>
                                        </li>
                                        <li>
                                            <a href="#">Instructions</a>
                                        </li>
                                        <li>
                                            <a href="#">Licenses</a>
                                        </li>
                                        <li>
                                            <a href="#">Changelog</a>
                                        </li>
                                        <li>
                                            <a href="#">Error 404</a>
                                        </li>
                                        <li>
                                            <a href="#">Password</a>
                                        </li>
                                        <li>
                                            <a href="#">Protected</a>
                                        </li>
                                        <li>
                                            <a href="#">Coming Soon</a>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pbmit-footer-big-area-wrapper">
                    <div className="footer-wrap pbmit-footer-big-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-4 pbmit-footer-left">
                                    <span className="pbmit-email-text"> info@redwoodshopfront.co.uk</span>
                                    <span className="pbmit-phone-number">  0738-011-11-66</span>
                                </div>
                                <div className="col-md-4 pbmit-footer-right">
                                    <span className="pbmit-address">
                                        {" "}
                                        Chicago HQ Estica cop, <br />
                                        Macomb,MI 48042
                                    </span>
                                </div>
                                <div className="col-md-4 pbmit-footer-right-social">
                                    <ul className="pbmit-social-links">
                                        <li className="pbmit-social-li pbmit-social-facebook">
                                            <a title="Facebook" href="#" target="_blank">
                                                <span>
                                                    <i className="pbmit-base-icon-facebook-f" />
                                                </span>
                                            </a>
                                        </li>
                                        <li className="pbmit-social-li pbmit-social-twitter">
                                            <a title="Twitter" href="#" target="_blank">
                                                <span>
                                                    <i className="pbmit-base-icon-twitter-2" />
                                                </span>
                                            </a>
                                        </li>
                                        <li className="pbmit-social-li pbmit-social-linkedin">
                                            <a title="LinkedIn" href="#" target="_blank">
                                                <span>
                                                    <i className="pbmit-base-icon-linkedin-in" />
                                                </span>
                                            </a>
                                        </li>
                                        <li className="pbmit-social-li pbmit-social-instagram">
                                            <a title="Instagram" href="#" target="_blank">
                                                <span>
                                                    <i className="pbmit-base-icon-instagram" />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pbmit-footer-text-area">
                    <div className="container">
                        <div className="pbmit-footer-text-inner">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="pbmit-footer-copyright-text-area">
                                        {" "}
                                        Copyright © {new Date().getFullYear()} <a href="#">Red Wood Shop</a>
                                        , All Rights Reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer End */}
        </>
    )
}

export default Footer