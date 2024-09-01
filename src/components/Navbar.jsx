"use client";

import React from 'react'

function Navbar() {
    return (
        <>
            <div className="pbmit-header-overlay">
                <div className="pbmit-main-header-area">
                    <div className="container-fluid">
                        <div className="pbmit-header-content d-flex justify-content-between align-items-center">
                            <div className="pbmit-logo-button-area d-flex justify-content-between align-items-center">
                                <div className="site-branding">
                                    <h1 className="site-title">
                                        <a href="index-2.html">
                                            <img
                                                className="logo-img"
                                                src="images/logo.svg"
                                                alt="Xinterio"
                                            />
                                        </a>
                                    </h1>
                                    <div className="pbmit-sticky-corner  pbmit-top-right-corner">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20 20V0C20 16 16 20 0 20H20Z" fill="red" />
                                        </svg>
                                    </div>
                                    <div className="pbmit-sticky-corner pbmit-bottom-left-corner">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20 20V0C20 12 12 20 0 20H20Z" fill="red" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="pbmit-button-box">
                                    <div className="pbmit-header-button">
                                        <a href="tel:+1(212)%20255-511">
                                            <span className="pbmit-header-button-text-1">
                                                +1(212) 255-511
                                            </span>
                                            <span className="pbmit-header-button-text-2">
                                                tel:+1(212) 255-511
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="site-navigation">
                                <nav className="main-menu navbar-expand-xl navbar-light">
                                    <div className="navbar-header">
                                        {/* Toggle Button */}
                                        <button className="navbar-toggler" type="button">
                                            <i className="pbmit-base-icon-menu-1" />
                                        </button>
                                    </div>
                                    <div className="pbmit-mobile-menu-bg" />
                                    <div
                                        className="collapse navbar-collapse clearfix show"
                                        id="pbmit-menu"
                                    >
                                        <div className="pbmit-menu-wrap">
                                            <span className="closepanel">
                                                <svg
                                                    className="qodef-svg--close qodef-m"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20.163"
                                                    height="20.163"
                                                    viewBox="0 0 26.163 26.163"
                                                >
                                                    <rect
                                                        width={36}
                                                        height={1}
                                                        transform="translate(0.707) rotate(45)"
                                                    />
                                                    <rect
                                                        width={36}
                                                        height={1}
                                                        transform="translate(0 25.456) rotate(-45)"
                                                    />
                                                </svg>
                                            </span>
                                            <ul className="navigation clearfix">
                                                <li className="dropdown active">
                                                    <a href="index-2.html">Home</a>
                                                    <ul>
                                                        <li className="active">
                                                            <a href="index-2.html">Homepage 01</a>
                                                        </li>
                                                        <li>
                                                            <a href="homepage-2.html">Homepage 02</a>
                                                        </li>
                                                        <li>
                                                            <a href="homepage-3.html">Homepage 03</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="#">Pages</a>
                                                    <ul>
                                                        <li>
                                                            <a href="about-us.html">About Us</a>
                                                        </li>
                                                        <li>
                                                            <a href="our-history.html">Our History</a>
                                                        </li>
                                                        <li>
                                                            <a href="our-team.html">Our Team</a>
                                                        </li>
                                                        <li>
                                                            <a href="team-single-details.html">
                                                                Team Single Details
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="faq.html">Faq</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="#">Services</a>
                                                    <ul>
                                                        <li>
                                                            <a href="service-details.html">
                                                                Service Detail
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="#">Portfolio</a>
                                                    <ul>
                                                        <li className="dropdown">
                                                            <a href="#">Masonry View</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="portfolio-m-grid-col-2.html">
                                                                        Grid Col 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-m-grid-col-3.html">
                                                                        Grid Col 3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-m-grid-col-4.html">
                                                                        Grid Col 4
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-m-grid-col-wide.html">
                                                                        Grid Wide
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a href="#">Grid View</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="portfolio-grid-col-2.html">
                                                                        Grid Col 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-grid-col-3.html">
                                                                        Grid Col 3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-grid-col-4.html">
                                                                        Grid Col 4
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-grid-no-gap.html">
                                                                        Grid No Gap
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a href="#">Sortable View</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="portfolio-sortable-grid-col-2.html">
                                                                        Grid Col 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-sortable-grid-col-3.html">
                                                                        Grid Col 3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-sortable-grid-col-4.html">
                                                                        Grid Col 4
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a href="#">Single Detail Style</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="portfolio-detail-style-1.html">
                                                                        Portfolio Detail Style 1
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="portfolio-detail-style-2.html">
                                                                        Portfolio Detail Style 2
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="#">Blogs</a>
                                                    <ul>
                                                        <li className="dropdown">
                                                            <a href="#">Blog Masonry View</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="blog-m-grid-col-2.html">
                                                                        Grid Col 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-m-grid-col-3.html">
                                                                        Grid Col 3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-m-grid-col-4.html">
                                                                        Grid Col 4
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-masonry-wide.html">
                                                                        Masonry Wide
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a href="#">Blog Grid View</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="blog-grid-col-2.html">
                                                                        Grid Col 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-grid-col-3.html">
                                                                        Grid Col 3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-grid-col-4.html">
                                                                        Grid Col 4
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-sortable-grid-view.html">
                                                                        Sortable Grid View
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="blog-classic.html">Blog Classic</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-single-details.html">
                                                                Blog Single Details
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="contact-us.html">Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="pbmit-right-box d-flex align-items-center">
                                <div className="pbmit-header-search-btn">
                                    <a href="#" title="Search">
                                        <i className="pbmit-base-icon-search-1" />
                                    </a>
                                </div>
                                <div className="pbmit-button-box-second">
                                    <a className="pbmit-btn" href="contact-us.html">
                                        <span className="pbmit-button-content-wrapper">
                                            <span className="pbmit-button-text">
                                                Book Consult
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar