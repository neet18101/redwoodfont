"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import dynamic from "next/dynamic";


function Home() {
  return (
    <>
      <div className="page-wrapper">
        {/* Header Main Area */}
        <header className="site-header header-style-1">
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
          <div className="pbmit-slider-area pbmit-slider-one">
            <div
              className="swiper-slider"
              data-autoplay="true"
              data-loop="true"
              data-dots="true"
              data-arrows="false"
              data-columns={1}
              data-margin={0}
              data-effect="fade"
            >
              <div className="">
                <Swiper
                  modules={[Autoplay, EffectFade, Pagination]}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  speed={1500}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    1200: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                  }}
                  className="blog-slider"
                >
                  <SwiperSlide>
                    <div className="pbmit-slider-item">
                      <div
                        className="pbmit-slider-bg"
                        style={{
                          backgroundImage:
                            "url(images/banner-slider-img/demo1-slide-01.jpg)",
                        }}
                      />
                      <div className="container">
                        <div className="row text-center">
                          <div className="col-md-12">
                            <div className="pbmit-slider-content">
                              <h5 className="pbmit-sub-title transform-top transform-delay-1">
                                barcelona,spain
                              </h5>
                              <h2 className="pbmit-title transform-scale transform-delay-2">
                                Clamp Guard 52 <br /> Luxurious Apartments
                              </h2>
                              <div className="pbmit-button transform-scale transform-delay-3">
                                <a
                                  className="pbmit-btn pbmit-btn-outline"
                                  href="contact-us.html"
                                >
                                  <span className="pbmit-button-content-wrapper">
                                    <span className="pbmit-button-text">
                                      Appeal To
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pbmit-slider-item">
                      <div
                        className="pbmit-slider-bg"
                        style={{
                          backgroundImage:
                            "url(images/banner-slider-img/demo1-slide-02.jpg)",
                        }}
                      />
                      <div className="container">
                        <div className="row text-center">
                          <div className="col-md-12">
                            <div className="pbmit-slider-content">
                              <h5 className="pbmit-sub-title transform-top transform-delay-1">
                                Xinterio features
                              </h5>
                              <h2 className="pbmit-title transform-scale transform-delay-2">
                                Design Spaces To <br /> Make Wonderful Living
                              </h2>
                              <div className="pbmit-button transform-scale transform-delay-3">
                                <a
                                  className="pbmit-btn pbmit-btn-outline"
                                  href="contact-us.html"
                                >
                                  <span className="pbmit-button-content-wrapper">
                                    <span className="pbmit-button-text">
                                      Take Counsel
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="pbmit-slider-item">
                      <div
                        className="pbmit-slider-bg"
                        style={{
                          backgroundImage:
                            "url(images/banner-slider-img/demo1-slide-03.jpg)",
                        }}
                      />
                      <div className="container">
                        <div className="row text-center">
                          <div className="col-md-12">
                            <div className="pbmit-slider-content">
                              <h5 className="pbmit-sub-title transform-top transform-delay-1">
                                Design Business
                              </h5>
                              <h2 className="pbmit-title transform-scale transform-delay-2">
                                What are the steps <br /> to remodelling a
                                house?
                              </h2>
                              <div className="pbmit-button transform-scale transform-delay-3">
                                <a
                                  className="pbmit-btn pbmit-btn-outline"
                                  href="contact-us.html"
                                >
                                  <span className="pbmit-button-content-wrapper">
                                    <span className="pbmit-button-text">
                                      Take Counsel
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="pbmit-slider-dots-corner">
                <div className="pbmit-sticky-corner pbmit-top-right-corner">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill
                    xmlns="http://www.w3.org/2000/svg"
                    data-stylerecorder="true"
                  >
                    <path
                      d="M20 20V0C20 16 16 20 0 20H20Z"
                      fill="red"
                      data-stylerecorder="true"
                    />
                  </svg>
                </div>
                <div className="pbmit-sticky-corner pbmit-bottom-left-corner">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill
                    xmlns="http://www.w3.org/2000/svg"
                    data-stylerecorder="true"
                  >
                    <path
                      d="M20 20V0C20 16 16 20 0 20H20Z"
                      fill="red"
                      data-stylerecorder="true"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header Main Area End Here */}
        {/* Page Content */}
        <div className="page-content">
          {/* About */}
          <section className="section-xl">
            <div className="container">
              <div className="row g-0">
                <div className="col-md-12 col-xl-6">
                  <div className="about-one-leftbox">
                    <div className="ihbox-style-area">
                      <div className="pbmit-ihbox-style-12">
                        <div className="pbmit-ihbox-headingicon">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                              <i className="pbmit-xinterio-icon pbmit-xinterio-icon-award" />
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">
                              Best Awarded <br />
                              Company{" "}
                            </h2>
                          </div>
                          <div className="pbmit-sticky-corner  pbmit-bottom-left-corner">
                            <svg
                              width={30}
                              height={30}
                              viewBox="0 0 30 30"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M30 30V0C30 16 16 30 0 30H30Z" />
                            </svg>
                          </div>
                          <div className="pbmit-sticky-corner pbmit-top-right-corner">
                            <svg
                              width={30}
                              height={30}
                              viewBox="0 0 30 30"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M30 30V0C30 16 16 30 0 30H30Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-xl-6">
                  <div className="about-one-rightbox">
                    <div className="pbmit-heading-subheading animation-style2">
                      <h4 className="pbmit-subtitle">since 1986</h4>
                      <h2 className="pbmit-title">
                        We design thoughtful, liveable spaces.
                      </h2>
                      <div className="pbmit-heading-desc">
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua quis ipsum suspendisse ultrices gravida
                        risus commodo viverra maecenas.
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <article className="pbmit-miconheading-style-9">
                          <div className="pbmit-ihbox-style-9">
                            <div className="pbmit-ihbox-box d-flex align-items-center">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper">
                                  <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                    <i className="pbmit-xinterio-icon pbmit-xinterio-icon-tools" />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <h2 className="pbmit-element-title">
                                  Commercial
                                </h2>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-md-6">
                        <article className="pbmit-miconheading-style-9">
                          <div className="pbmit-ihbox-style-9">
                            <div className="pbmit-ihbox-box d-flex align-items-center">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper">
                                  <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                    <i className="pbmit-xinterio-icon pbmit-xinterio-icon-hard-hat" />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <h2 className="pbmit-element-title">
                                  industrial
                                </h2>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-md-6">
                        <article className="pbmit-miconheading-style-9">
                          <div className="pbmit-ihbox-style-9">
                            <div className="pbmit-ihbox-box d-flex align-items-center">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper">
                                  <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                    <i className="pbmit-xinterio-icon pbmit-xinterio-icon-offer" />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <h2 className="pbmit-element-title">
                                  Residential
                                </h2>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-md-6">
                        <article className="pbmit-miconheading-style-9">
                          <div className="pbmit-ihbox-style-9">
                            <div className="pbmit-ihbox-box d-flex align-items-center">
                              <div className="pbmit-ihbox-icon">
                                <div className="pbmit-ihbox-icon-wrapper">
                                  <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                    <i className="pbmit-xinterio-icon pbmit-xinterio-icon-house-design" />
                                  </div>
                                </div>
                              </div>
                              <div className="pbmit-ihbox-contents">
                                <h2 className="pbmit-element-title">
                                  Corporate
                                </h2>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="pbmit-ihbox pbmit-ihbox-style-5 pt-5">
                      <div className="pbmit-ihbox-box d-flex align-items-center">
                        <div className="pbmit-content-wrapper">
                          <h2 className="pbmit-element-title">
                            Jemilin E william
                          </h2>
                          <div className="pbmit-heading-desc">Founder</div>
                        </div>
                        <div className="pbmit-icon-wrapper">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                              <img
                                src="images/homepage-1/sign.png"
                                alt="Jemilin E william"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About End */}
          {/* Fid Start */}
          <section className="section-lgb">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xl-3">
                  <div className="pbminfotech-ele-fid-style-2">
                    <div className="pbmit-fld-contents">
                      <div className="pbmit-fld-wrap">
                        <div className="pbmit-fid-icon-title">
                          <div className="pbmit-sbox-icon-wrapper pbmit-icon-type-icon">
                            <i className="pbmit-xinterio-icon pbmit-xinterio-icon-offer" />
                          </div>
                          <span className="pbmit-fid-title">
                            Happy Client Review
                          </span>
                        </div>
                        <h4 className="pbmit-fid-inner">
                          <span className="pbmit-fid-before" />
                          <span
                            className="pbmit-number-rotate numinate"
                            data-appear-animation="animateDigits"
                            data-from={0}
                            data-to={235}
                            data-interval={1}
                            data-before
                            data-before-style
                            data-after
                            data-after-style
                          >
                            235
                          </span>
                          <span className="pbmit-fid">
                            <sup>+</sup>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="pbminfotech-ele-fid-style-2">
                    <div className="pbmit-fld-contents">
                      <div className="pbmit-fld-wrap">
                        <div className="pbmit-fid-icon-title">
                          <div className="pbmit-sbox-icon-wrapper pbmit-icon-type-icon">
                            <i className="pbmit-xinterio-icon pbmit-xinterio-icon-engineer" />
                          </div>
                          <span className="pbmit-fid-title">
                            Work Departments
                          </span>
                        </div>
                        <h4 className="pbmit-fid-inner">
                          <span className="pbmit-fid-before" />
                          <span
                            className="pbmit-number-rotate numinate"
                            data-appear-animation="animateDigits"
                            data-from={0}
                            data-to={420}
                            data-interval={1}
                            data-before
                            data-before-style
                            data-after
                            data-after-style
                          >
                            420
                          </span>
                          <span className="pbmit-fid">
                            <sup>+</sup>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="pbminfotech-ele-fid-style-2">
                    <div className="pbmit-fld-contents">
                      <div className="pbmit-fld-wrap">
                        <div className="pbmit-fid-icon-title">
                          <div className="pbmit-sbox-icon-wrapper pbmit-icon-type-icon">
                            <i className="pbmit-xinterio-icon pbmit-xinterio-icon-client" />
                          </div>
                          <span className="pbmit-fid-title">
                            Our Happy Client
                          </span>
                        </div>
                        <h4 className="pbmit-fid-inner">
                          <span className="pbmit-fid-before" />
                          <span
                            className="pbmit-number-rotate numinate"
                            data-appear-animation="animateDigits"
                            data-from={0}
                            data-to={30}
                            data-interval={1}
                            data-before
                            data-before-style
                            data-after
                            data-after-style
                          >
                            30
                          </span>
                          <span className="pbmit-fid">
                            <span>K</span>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="pbminfotech-ele-fid-style-2">
                    <div className="pbmit-fld-contents">
                      <div className="pbmit-fld-wrap">
                        <div className="pbmit-fid-icon-title">
                          <div className="pbmit-sbox-icon-wrapper pbmit-icon-type-icon">
                            <i className="pbmit-xinterio-icon pbmit-xinterio-icon-conversation" />
                          </div>
                          <span className="pbmit-fid-title">Staff members</span>
                        </div>
                        <h4 className="pbmit-fid-inner">
                          <span className="pbmit-fid-before" />
                          <span
                            className="pbmit-number-rotate numinate"
                            data-appear-animation="animateDigits"
                            data-from={0}
                            data-to={305}
                            data-interval={1}
                            data-before
                            data-before-style
                            data-after
                            data-after-style
                          >
                            305
                          </span>
                          <span className="pbmit-fid">
                            <sup>+</sup>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Fid End */}
          {/* Service Start */}
          <section className="pbmit-extend-animation service-one pbmit-bg-color-secondary">
            <div className="container">
              <div className="text-center position-relative">
                <div className="pbmit-heading-subheading text-center animation-style2">
                  <h4 className="pbmit-subtitle">What we do</h4>
                  <h2 className="pbmit-title">What we offer for you</h2>
                </div>
                <div className="pbmit-service-highlight">
                  <h2>Services</h2>
                </div>
              </div>
              <div
                className="swiper-slider"
                data-autoplay="false"
                data-loop="true"
                data-dots="false"
                data-arrows="false"
                data-columns={3}
                data-margin={30}
                data-effect="slide"
              >
                <div className="">
                  <Swiper
                    modules={[Autoplay, EffectFade, Pagination]}
                    pagination={{
                      clickable: true,
                    }}
                    loop={true}
                    speed={1500}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                    }}
                    className="blog-slider"
                  >
                    <SwiperSlide>
                      {/* Slide1 */}
                      <article className="pbmit-ele-service pbmit-service-style-2 swiper-slide">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbmit-service-image-wrapper">
                              <div className="pbmit-featured-img-wrapper">
                                <div className="pbmit-featured-wrapper">
                                  <img
                                    src="images/homepage-1/service/service-01.jpg"
                                    className="img-fluid"
                                    alt="service-01"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="pbmit-service-icon elementor-icon">
                              <i className />
                            </div>
                            <div className="pbmit-content-box">
                              <div className="pbmit-serv-cat">
                                <a href="#" rel="tag">
                                  Kitchen
                                </a>
                              </div>
                              <h3 className="pbmit-service-title">
                                <a href="service-details.html">
                                  Transforming Rooms
                                </a>
                              </h3>
                              <div className="pbmit-service-description">
                                <p>
                                  The interior professional worker’s available
                                  in the xinterio
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="pbmit-service-btn"
                            href="service-details.html"
                            title="Transforming Rooms"
                          >
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-pbmit-up-arrow" />
                            </span>
                          </a>
                        </div>
                      </article>
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* Slide2 */}
                      <article className="pbmit-ele-service pbmit-service-style-2">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbmit-service-image-wrapper">
                              <div className="pbmit-featured-img-wrapper">
                                <div className="pbmit-featured-wrapper">
                                  <img
                                    src="images/homepage-1/service/service-02.jpg"
                                    className="img-fluid"
                                    alt="service-01"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="pbmit-service-icon elementor-icon">
                              <i className="" />
                            </div>
                            <div className="pbmit-content-box">
                              <div className="pbmit-serv-cat">
                                <a href="#" rel="tag">
                                  Kitchen
                                </a>
                              </div>
                              <h3 className="pbmit-service-title">
                                <a href="service-details.html">
                                  Weaving Dreams
                                </a>
                              </h3>
                              <div className="pbmit-service-description">
                                <p>
                                  The interior professional worker’s available
                                  in the xinterio
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="pbmit-service-btn"
                            href="service-details.html"
                            title="Weaving Dreams"
                          >
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-pbmit-up-arrow" />
                            </span>
                          </a>
                        </div>
                      </article>
                    </SwiperSlide>

                    <SwiperSlide>
                      {/* Slide3 */}
                      <article className="pbmit-ele-service pbmit-service-style-2">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbmit-service-image-wrapper">
                              <div className="pbmit-featured-img-wrapper">
                                <div className="pbmit-featured-wrapper">
                                  <img
                                    src="images/homepage-1/service/service-03.jpg"
                                    className="img-fluid"
                                    alt="service-01"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="pbmit-service-icon elementor-icon">
                              <i className="" />
                            </div>
                            <div className="pbmit-content-box">
                              <div className="pbmit-serv-cat">
                                <a href="#" rel="tag">
                                  Kitchen
                                </a>
                              </div>
                              <h3 className="pbmit-service-title">
                                <a href="service-details.html">
                                  Interior Decorator
                                </a>
                              </h3>
                              <div className="pbmit-service-description">
                                <p>
                                  The interior professional worker’s available
                                  in the xinterio
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="pbmit-service-btn"
                            href="service-details.html"
                            title="Interior Decorator"
                          >
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-pbmit-up-arrow" />
                            </span>
                          </a>
                        </div>
                      </article>
                    </SwiperSlide>

                    <SwiperSlide>
                      {/* Slide4 */}
                      <article className="pbmit-ele-service pbmit-service-style-2">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbmit-service-image-wrapper">
                              <div className="pbmit-featured-img-wrapper">
                                <div className="pbmit-featured-wrapper">
                                  <img
                                    src="images/homepage-1/service/service-04.jpg"
                                    className="img-fluid"
                                    alt="service-01"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="pbmit-service-icon elementor-icon">
                              <i className="" />
                            </div>
                            <div className="pbmit-content-box">
                              <div className="pbmit-serv-cat">
                                <a href="#" rel="tag">
                                  Kitchen
                                </a>
                              </div>
                              <h3 className="pbmit-service-title">
                                <a href="service-details.html">
                                  Professional Interior
                                </a>
                              </h3>
                              <div className="pbmit-service-description">
                                <p>
                                  The interior professional worker’s available
                                  in the xinterio
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="pbmit-service-btn"
                            href="service-details.html"
                            title="Professional Interior"
                          >
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-pbmit-up-arrow" />
                            </span>
                          </a>
                        </div>
                      </article>
                    </SwiperSlide>

                    <SwiperSlide>
                      {/* Slide5 */}
                      <article className="pbmit-ele-service pbmit-service-style-2">
                        <div className="pbminfotech-post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbmit-service-image-wrapper">
                              <div className="pbmit-featured-img-wrapper">
                                <div className="pbmit-featured-wrapper">
                                  <img
                                    src="images/homepage-1/service/service-05.jpg"
                                    className="img-fluid"
                                    alt="service-01"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="pbmit-service-icon elementor-icon">
                              <i className="" />
                            </div>
                            <div className="pbmit-content-box">
                              <div className="pbmit-serv-cat">
                                <a href="#" rel="tag">
                                  Kitchen
                                </a>
                              </div>
                              <h3 className="pbmit-service-title">
                                <a href="service-details.html">
                                  Interior Work Plan
                                </a>
                              </h3>
                              <div className="pbmit-service-description">
                                <p>
                                  The interior professional worker’s available
                                  in the xinterio
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="pbmit-service-btn"
                            href="service-details.html"
                            title="Interior Work Plan"
                          >
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-pbmit-up-arrow" />
                            </span>
                          </a>
                        </div>
                      </article>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="text-center">
                <div className="pbmit-service-text">
                  <p>
                    Need more services based on your demand?{" "}
                    <span className="pbmit-globalcolor">Contact us</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Service End */}
          {/* Ihbox Start */}
          <section className="section-md">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-xl-4">
                  <div className="pbmit-heading-subheading animation-style2">
                    <h4 className="pbmit-subtitle">since 1986</h4>
                    <h2 className="pbmit-title">Why choose us</h2>
                  </div>
                </div>
                <div className="col-md-12 col-xl-6">
                  <div className="pbmit-heading-desc">
                    There are many variations of passages of form, by injected
                    humour, or <br /> randomised words which don’t look even.
                  </div>
                </div>
                <div className="col-md-12 col-xl-2">
                  <a
                    className="pbmit-btn pbmit-btn-outline"
                    href="contact-us.html"
                  >
                    <span className="pbmit-button-content-wrapper">
                      <span className="pbmit-button-text">Book Consult</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-3 ihbox-one-left-col">
                  <div className="row">
                    <article className="pbmit-miconheading-style-8 col-md-12">
                      <div className="pbmit-ihbox-style-8">
                        <div className="pbmit-ihbox-box d-flex">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-xinterio-icon pbmit-xinterio-icon-stairs" />
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">
                              5 Years Warranty
                            </h2>
                            <div className="pbmit-heading-desc">
                              We offer competitive and affordable rates for our
                              interior design .
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="pbmit-miconheading-style-8 col-md-12">
                      <div className="pbmit-ihbox-style-8">
                        <div className="pbmit-ihbox-box d-flex">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-xinterio-icon pbmit-xinterio-icon-3d" />
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">
                              Latest technologies
                            </h2>
                            <div className="pbmit-heading-desc">
                              We offer competitive and affordable rates for our
                              interior design .
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="pbmit-miconheading-style-8 col-md-12">
                      <div className="pbmit-ihbox-style-8">
                        <div className="pbmit-ihbox-box d-flex">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-xinterio-icon pbmit-xinterio-icon-kitchen" />
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">
                              High-Quality Designs
                            </h2>
                            <div className="pbmit-heading-desc">
                              We offer competitive and affordable rates for our
                              interior design .
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-md-6 ihbox-one-img-col">
                  <div className="ihbox-imgbox">
                    <img
                      src="images/homepage-1/ih-single-img-01.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                </div>
                <div className="col-md-3 ihbox-one-right-col">
                  <div className="row">
                    <article className="pbmit-miconheading-style-8 col-md-12">
                      <div className="pbmit-ihbox-style-8">
                        <div className="pbmit-ihbox-box d-flex">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-xinterio-icon pbmit-xinterio-icon-axis" />
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">
                              Transparent Pricing
                            </h2>
                            <div className="pbmit-heading-desc">
                              We offer competitive and affordable rates for our
                              interior design .
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="pbmit-miconheading-style-8 col-md-12">
                      <div className="pbmit-ihbox-style-8">
                        <div className="pbmit-ihbox-box d-flex">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-xinterio-icon pbmit-xinterio-icon-brickwall-1" />
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">
                              Professional Team
                            </h2>
                            <div className="pbmit-heading-desc">
                              We offer competitive and affordable rates for our
                              interior design .
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="pbmit-miconheading-style-8 col-md-12">
                      <div className="pbmit-ihbox-style-8">
                        <div className="pbmit-ihbox-box d-flex">
                          <div className="pbmit-ihbox-icon">
                            <div className="pbmit-ihbox-icon-wrapper">
                              <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                <i className="pbmit-xinterio-icon pbmit-xinterio-icon-pantone" />
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ihbox-contents">
                            <h2 className="pbmit-element-title">
                              Award winning
                            </h2>
                            <div className="pbmit-heading-desc">
                              We offer competitive and affordable rates for our
                              interior design .
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Ihbox End */}
          {/* Marquee Start */}
          <section className="marquee-one">
            <div className="container-fluid p-0">
              <div className="swiper-slider marquee">
                <div className="swiper-wrapper">
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2
                        className="pbmit-element-title"
                        data-text="Master Bedroom "
                      >
                        Master Bedroom
                      </h2>
                    </div>
                  </article>
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2
                        className="pbmit-element-title"
                        data-text="Living Room"
                      >
                        Living Room
                      </h2>
                    </div>
                  </article>
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2 className="pbmit-element-title" data-text="Kitchen">
                        Kitchen
                      </h2>
                    </div>
                  </article>
                  <article className="pbmit-marquee-effect-style-1 swiper-slide">
                    <div className="pbmit-tag-wrapper">
                      <h2
                        className="pbmit-element-title"
                        data-text="Best Gallery"
                      >
                        Best Gallery
                      </h2>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          {/* Marquee End */}
          {/* Portfolio Start */}
          <section className="pbmit-bg-color-light portfolio-one pbmit-sortable-yes">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 col-xl-4">
                  <div className="pbmit-heading-subheading animation-style2">
                    <h4 className="pbmit-subtitle">Process</h4>
                    <h2 className="pbmit-title">Our Latest Project</h2>
                  </div>
                </div>
                <div className="col-md-12 col-xl-8">
                  <div className="pbmit-sortable-list">
                    <ul className="pbmit-sortable-list-ul">
                      <li>
                        <a
                          href="#"
                          className="pbmit-sortable-link pbmit-selected"
                          data-category="*"
                          data-sortby="*"
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="pbmit-sortable-link"
                          data-sortby="architecture"
                        >
                          Architecture
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="pbmit-sortable-link"
                          data-sortby="bedroom"
                        >
                          Bedroom
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="pbmit-sortable-link"
                          data-sortby="furniture"
                        >
                          Furniture
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="pbmit-sortable-link"
                          data-sortby="interior"
                        >
                          Interior
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="pbmit-sortable-link"
                          data-sortby="kitchen"
                        >
                          Kitchen
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row pbmit-element-posts-wrapper">
                <article className="pbmit-portfolio-style-3 col-md-4 bedroom">
                  <div className="pbminfotech-post-content">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/homepage-1/portfolio/portfolio-01.jpg"
                          className="img-fluid"
                          alt="portfolio-01"
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-titlebox">
                        <div className="pbmit-port-cat">
                          <a href="portfolio-grid-col-3.html" rel="tag">
                            Bedroom
                          </a>
                        </div>
                        <h3 className="pbmit-portfolio-title">
                          <a href="portfolio-detail-style-1.html">Innovation</a>
                        </h3>
                      </div>
                    </div>
                    <div className="pbmit-portfolio-btn">
                      <a href="portfolio-detail-style-1.html">
                        <i className="pbmit-base-icon-pbmit-up-arrow" />
                      </a>
                    </div>
                    <a
                      className="pbmit-link"
                      href="portfolio-detail-style-1.html"
                    />
                  </div>
                </article>
                <article className="pbmit-portfolio-style-3 col-md-4 furniture">
                  <div className="pbminfotech-post-content">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/homepage-1/portfolio/portfolio-02.jpg"
                          className="img-fluid"
                          alt="portfolio-01"
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-titlebox">
                        <div className="pbmit-port-cat">
                          <a href="portfolio-grid-col-3.html" rel="tag">
                            Furniture
                          </a>
                        </div>
                        <h3 className="pbmit-portfolio-title">
                          <a href="portfolio-detail-style-1.html">Minimalism</a>
                        </h3>
                      </div>
                    </div>
                    <div className="pbmit-portfolio-btn">
                      <a href="portfolio-detail-style-1.html">
                        <i className="pbmit-base-icon-pbmit-up-arrow" />
                      </a>
                    </div>
                    <a
                      className="pbmit-link"
                      href="portfolio-detail-style-1.html"
                    />
                  </div>
                </article>
                <article className="pbmit-portfolio-style-3 col-md-4 interior">
                  <div className="pbminfotech-post-content">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/homepage-1/portfolio/portfolio-03.jpg"
                          className="img-fluid"
                          alt="portfolio-01"
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-titlebox">
                        <div className="pbmit-port-cat">
                          <a href="portfolio-grid-col-3.html" rel="tag">
                            Interior
                          </a>
                        </div>
                        <h3 className="pbmit-portfolio-title">
                          <a href="portfolio-detail-style-1.html">Lighting</a>
                        </h3>
                      </div>
                    </div>
                    <div className="pbmit-portfolio-btn">
                      <a href="portfolio-detail-style-1.html">
                        <i className="pbmit-base-icon-pbmit-up-arrow" />
                      </a>
                    </div>
                    <a
                      className="pbmit-link"
                      href="portfolio-detail-style-1.html"
                    />
                  </div>
                </article>
                <article className="pbmit-portfolio-style-3 col-md-4 kitchen">
                  <div className="pbminfotech-post-content">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/homepage-1/portfolio/portfolio-04.jpg"
                          className="img-fluid"
                          alt="portfolio-01"
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-titlebox">
                        <div className="pbmit-port-cat">
                          <a href="portfolio-grid-col-3.html" rel="tag">
                            Kitchen
                          </a>
                        </div>
                        <h3 className="pbmit-portfolio-title">
                          <a href="portfolio-detail-style-1.html">Bold Tiles</a>
                        </h3>
                      </div>
                    </div>
                    <div className="pbmit-portfolio-btn">
                      <a href="portfolio-detail-style-1.html">
                        <i className="pbmit-base-icon-pbmit-up-arrow" />
                      </a>
                    </div>
                    <a
                      className="pbmit-link"
                      href="portfolio-detail-style-1.html"
                    />
                  </div>
                </article>
                <article className="pbmit-portfolio-style-3 col-md-4 bedroom">
                  <div className="pbminfotech-post-content">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/homepage-1/portfolio/portfolio-05.jpg"
                          className="img-fluid"
                          alt="portfolio-01"
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-titlebox">
                        <div className="pbmit-port-cat">
                          <a href="portfolio-grid-col-3.html" rel="tag">
                            Bedroom
                          </a>
                        </div>
                        <h3 className="pbmit-portfolio-title">
                          <a href="portfolio-detail-style-1.html">
                            Clean lines
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="pbmit-portfolio-btn">
                      <a href="portfolio-detail-style-1.html">
                        <i className="pbmit-base-icon-pbmit-up-arrow" />
                      </a>
                    </div>
                    <a
                      className="pbmit-link"
                      href="portfolio-detail-style-1.html"
                    />
                  </div>
                </article>
                <article className="pbmit-portfolio-style-3 col-md-4 architecture">
                  <div className="pbminfotech-post-content">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img
                          src="images/homepage-1/portfolio/portfolio-06.jpg"
                          className="img-fluid"
                          alt="portfolio-01"
                        />
                      </div>
                    </div>
                    <div className="pbminfotech-box-content">
                      <div className="pbminfotech-titlebox">
                        <div className="pbmit-port-cat">
                          <a href="portfolio-grid-col-3.html" rel="tag">
                            Architecture
                          </a>
                        </div>
                        <h3 className="pbmit-portfolio-title">
                          <a href="portfolio-detail-style-1.html">Integral</a>
                        </h3>
                      </div>
                    </div>
                    <div className="pbmit-portfolio-btn">
                      <a href="portfolio-detail-style-1.html">
                        <i className="pbmit-base-icon-pbmit-up-arrow" />
                      </a>
                    </div>
                    <a
                      className="pbmit-link"
                      href="portfolio-detail-style-1.html"
                    />
                  </div>
                </article>
              </div>
            </div>
          </section>
          {/* Portfolio End */}
          {/* Pricing Start */}
          <section className="section-xl pricing-one-bg">
            <div className="container">
              <div className="row g-0">
                <div className="col-md-12 col-xl-7">
                  <div className="pbminfotech-ele-ptable-style-1">
                    <div className="pbmit-ptable-cols row">
                      <div className="pbmit-ptable-col col-md-6">
                        <div className="pbmit-pricing-table-box">
                          <div className="pbmit-head-wrap">
                            <h3 className="pbminfotech-ptable-heading">
                              Basic Plan
                            </h3>
                            <div className="pbminfotech-sep" />
                            <div className="pbmit-price-wrapper">
                              <div className="pbmit-ptable-price-w">
                                <div className="pbminfotech-ptable-symbol">
                                  $
                                </div>
                                <div className="pbminfotech-ptable-price">
                                  27
                                </div>
                              </div>
                              <div className="pbminfotech-ptable-frequency">
                                /Mo
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ptable-inner">
                            <div className="pbmit-ptable-lines-w">
                              <div className="pbmit-ptable-line">
                                Individuals &amp; small projects
                              </div>
                              <div className="pbmit-ptable-line">
                                Access to design features
                              </div>
                              <div className="pbmit-ptable-line">
                                Limited library of decorative items
                              </div>
                              <div className="pbmit-ptable-line">
                                Email support
                              </div>
                              <div className="pbmit-ptable-line">
                                Monthly updates
                              </div>
                            </div>
                            <div className="pbminfotech-ptable-btn">
                              <div className="pbmit-button">
                                <a
                                  className="pbmit-button-inner"
                                  href="about-mask-img.html"
                                >
                                  <span className="pbmit-button-wrapper">
                                    <span className="pbmit-button-text">
                                      Purchase Now
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-feature-wrap" />
                        </div>
                      </div>
                      <div className="pbmit-pricing-table-featured-col pbmit-ptable-col col-md-6">
                        <div className="pbmit-pricing-table-box">
                          <div className="pbmit-head-wrap">
                            <h3 className="pbminfotech-ptable-heading">
                              Advance
                            </h3>
                            <div className="pbminfotech-sep" />
                            <div className="pbmit-price-wrapper">
                              <div className="pbmit-ptable-price-w">
                                <div className="pbminfotech-ptable-symbol">
                                  $
                                </div>
                                <div className="pbminfotech-ptable-price">
                                  47
                                </div>
                              </div>
                              <div className="pbminfotech-ptable-frequency">
                                /mo
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-ptable-inner">
                            <div className="pbmit-ptable-lines-w">
                              <div className="pbmit-ptable-line">
                                Individuals &amp; small projects
                              </div>
                              <div className="pbmit-ptable-line">
                                Access to design features
                              </div>
                              <div className="pbmit-ptable-line">
                                Limited library of decorative items
                              </div>
                              <div className="pbmit-ptable-line">
                                Email support
                              </div>
                              <div className="pbmit-ptable-line">
                                Monthly updates
                              </div>
                            </div>
                            <div className="pbminfotech-ptable-btn">
                              <div className="pbmit-button">
                                <a
                                  className="pbmit-button-inner"
                                  href="about-mask-img.html"
                                >
                                  <span className="pbmit-button-wrapper">
                                    <span className="pbmit-button-text">
                                      Purchase Now
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="pbmit-feature-wrap">
                            <div className="pbmit-ptablebox-featured-w" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-xl-5">
                  <div className="pricing-one-rightbox">
                    <div className="pbmit-heading-subheading animation-style2">
                      <h4 className="pbmit-subtitle">Pricing Plan</h4>
                      <h2 className="pbmit-title">
                        Choose plan for house interior
                      </h2>
                    </div>
                    <ul className="list-group list-group-borderless">
                      <li className="list-group-item">
                        <span className="pbmit-icon-list-icon">
                          <i
                            aria-hidden="true"
                            className="pbmit-xinterio-icon pbmit-xinterio-icon-check-mark"
                          />
                        </span>
                        <span className="pbmit-icon-list-text">
                          Get 30 day free trial
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span className="pbmit-icon-list-icon">
                          <i
                            aria-hidden="true"
                            className="pbmit-xinterio-icon pbmit-xinterio-icon-wallet"
                          />
                        </span>
                        <span className="pbmit-icon-list-text">
                          No any hidden fees pay
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span className="pbmit-icon-list-icon">
                          <i
                            aria-hidden="true"
                            className="pbmit-xinterio-icon pbmit-xinterio-icon-clock"
                          />
                        </span>
                        <span className="pbmit-icon-list-text">
                          You can cancel anytime
                        </span>
                      </li>
                    </ul>
                    <a
                      className="pbmit-btn pbmit-btn-outline"
                      href="our-history.html"
                    >
                      <span className="pbmit-button-content-wrapper">
                        <span className="pbmit-button-text">More Price</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Pricing End */}
          {/* Testimonial Start */}
          <section className="pbmit-bg-color-light testimonial-one">
            <div className="container pbmit-col-stretched-yes pbmit-col-right">
              <div className="pbmit-col-stretched-right">
                <div className="row g-0">
                  <div className="col-md-12 col-lg-3">
                    <div className="pbmit-testimonialbox-left">
                      <div className="pbmit-heading-subheading animation-style2">
                        <h4 className="pbmit-subtitle">Client feedback</h4>
                        <h2 className="pbmit-title">Hear from clients.</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-9 pbmit-testimonialbox-right">
                    <div
                      className="swiper-slider"
                      data-autoplay="true"
                      data-loop="true"
                      data-dots="false"
                      data-arrows="true"
                      data-columns="2.6"
                      data-margin={30}
                      data-effect="slide"
                    >
                      <div className="swiper-wrapper">
                        {/* Slide1 */}
                        <article className="pbmit-testimonial-style-1 swiper-slide">
                          <div className="pbminfotech-post-item">
                            <div className="pbmit-box-content-wrap">
                              <div className="pbminfotech-box-star-ratings">
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                              </div>
                              <div className="pbminfotech-box-desc">
                                <blockquote className="pbminfotech-testimonial-text">
                                  <p>
                                    Their team are easy to work with and helped
                                    me make amazing websites in a short amount
                                    of time. Thanks guys for all your hard work.
                                    Trust us we looked for a very long time.
                                  </p>
                                </blockquote>
                              </div>
                              <div className="pbminfotech-box-author">
                                <div className="pbmit-auther-content">
                                  <h3 className="pbminfotech-box-title">
                                    Olivia Cruz
                                  </h3>
                                  <div className="pbminfotech-testimonial-detail">
                                    Grorgia, USA
                                  </div>
                                </div>
                              </div>
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-1/reviewer/reviewer-01.jpg"
                                      className="img-fluid"
                                      alt="reviewer-04"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                        {/* Slide2 */}
                        <article className="pbmit-testimonial-style-1 swiper-slide">
                          <div className="pbminfotech-post-item">
                            <div className="pbmit-box-content-wrap">
                              <div className="pbminfotech-box-star-ratings">
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                              </div>
                              <div className="pbminfotech-box-desc">
                                <blockquote className="pbminfotech-testimonial-text">
                                  <p>
                                    Their team are easy to work with and helped
                                    me make amazing websites in a short amount
                                    of time. Thanks guys for all your hard work.
                                    Trust us we looked for a very long time.
                                  </p>
                                </blockquote>
                              </div>
                              <div className="pbminfotech-box-author">
                                <div className="pbmit-auther-content">
                                  <h3 className="pbminfotech-box-title">
                                    Martin Bailey
                                  </h3>
                                  <div className="pbminfotech-testimonial-detail">
                                    Grorgia, USA
                                  </div>
                                </div>
                              </div>
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-1/reviewer/reviewer-02.jpg"
                                      className="img-fluid"
                                      alt="reviewer-04"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                        {/* Slide3 */}
                        <article className="pbmit-testimonial-style-1 swiper-slide">
                          <div className="pbminfotech-post-item">
                            <div className="pbmit-box-content-wrap">
                              <div className="pbminfotech-box-star-ratings">
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                              </div>
                              <div className="pbminfotech-box-desc">
                                <blockquote className="pbminfotech-testimonial-text">
                                  <p>
                                    Their team are easy to work with and helped
                                    me make amazing websites in a short amount
                                    of time. Thanks guys for all your hard work.
                                    Trust us we looked for a very long time.
                                  </p>
                                </blockquote>
                              </div>
                              <div className="pbminfotech-box-author">
                                <div className="pbmit-auther-content">
                                  <h3 className="pbminfotech-box-title">
                                    Alex Zender
                                  </h3>
                                  <div className="pbminfotech-testimonial-detail">
                                    Grorgia, USA
                                  </div>
                                </div>
                              </div>
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-1/reviewer/reviewer-03.jpg"
                                      className="img-fluid"
                                      alt="reviewer-04"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                        {/* Slide4 */}
                        <article className="pbmit-testimonial-style-1 swiper-slide">
                          <div className="pbminfotech-post-item">
                            <div className="pbmit-box-content-wrap">
                              <div className="pbminfotech-box-star-ratings">
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                                <i className="pbmit-base-icon-star-1 pbmit-active" />
                              </div>
                              <div className="pbminfotech-box-desc">
                                <blockquote className="pbminfotech-testimonial-text">
                                  <p>
                                    Their team are easy to work with and helped
                                    me make amazing websites in a short amount
                                    of time. Thanks guys for all your hard work.
                                    Trust us we looked for a very long time.
                                  </p>
                                </blockquote>
                              </div>
                              <div className="pbminfotech-box-author">
                                <div className="pbmit-auther-content">
                                  <h3 className="pbminfotech-box-title">
                                    Robert Gold
                                  </h3>
                                  <div className="pbminfotech-testimonial-detail">
                                    Grorgia, USA
                                  </div>
                                </div>
                              </div>
                              <div className="pbminfotech-box-img">
                                <div className="pbmit-featured-img-wrapper">
                                  <div className="pbmit-featured-wrapper">
                                    <img
                                      src="images/homepage-1/reviewer/reviewer-04.jpg"
                                      className="img-fluid"
                                      alt="reviewer-04"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ihbox-style-area">
                <div className="pbmit-ihbox-style-2">
                  <div className="pbmit-ihbox-headingicon">
                    <div className="pbmit-ihbox-contents d-flex align-items-center">
                      <div className="pbmit-title-wrap">
                        <h2 className="pbmit-element-title">4.82</h2>
                      </div>
                      <div className="pbmit-icon-wrap">
                        <div className="pbmit-ihbox-svg">
                          <div className="pbmit-ihbox-svg-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={512}
                              height="90.51"
                              viewBox="0 0 512 90.51"
                            >
                              <path d="M89.26,29.43l-24.9-3.62L53.23,3.33c-2.2-4.44-9.48-4.44-11.68,0L30.42,25.81,5.58,29.43A6.52,6.52,0,0,0,2,40.55L20,58.11,15.74,82.88a6.51,6.51,0,0,0,9.46,6.87l22.19-11.7,22.25,11.7a6.5,6.5,0,0,0,3,.75,6.51,6.51,0,0,0,6.43-7.62L74.86,58.11l18-17.56a6.52,6.52,0,0,0-3.62-11.12Z" />
                              <path d="M193.55,29.43l-24.9-3.62L157.52,3.33c-2.2-4.44-9.48-4.44-11.68,0L134.71,25.81l-24.84,3.62a6.52,6.52,0,0,0-3.61,11.12l18,17.56L120,82.88a6.52,6.52,0,0,0,9.47,6.87l22.19-11.7,22.25,11.7a6.5,6.5,0,0,0,3,.75,6.51,6.51,0,0,0,6.43-7.62l-4.24-24.77,18-17.56a6.52,6.52,0,0,0-3.62-11.12Z" />
                              <path d="M297.84,29.43l-24.9-3.62L261.81,3.33c-2.2-4.44-9.48-4.44-11.68,0L239,25.81l-24.84,3.62a6.52,6.52,0,0,0-3.61,11.12l18,17.56-4.25,24.77a6.52,6.52,0,0,0,9.47,6.87L256,78.05l22.25,11.7a6.5,6.5,0,0,0,3,.75,6.51,6.51,0,0,0,6.43-7.62l-4.24-24.77,18-17.56a6.52,6.52,0,0,0-3.62-11.12Z" />
                              <path d="M402.13,29.43l-24.9-3.62L366.1,3.33c-2.2-4.44-9.48-4.44-11.69,0L343.29,25.81l-24.84,3.62a6.52,6.52,0,0,0-3.61,11.12l18,17.56L328.6,82.88a6.52,6.52,0,0,0,9.47,6.87l22.18-11.7,22.26,11.7a6.5,6.5,0,0,0,3,.75A6.51,6.51,0,0,0,392,82.88l-4.24-24.77,18-17.56a6.52,6.52,0,0,0-3.61-11.12Z" />
                              <path d="M511.68,33.86a6.54,6.54,0,0,0-5.26-4.43l-24.9-3.62L470.39,3.33c-2.2-4.44-9.48-4.44-11.69,0L447.58,25.81l-24.84,3.62a6.52,6.52,0,0,0-3.61,11.12l18,17.56-4.25,24.77a6.52,6.52,0,0,0,6.42,7.62,6.61,6.61,0,0,0,3.05-.75l22.19-11.7,22.26,11.7a6.46,6.46,0,0,0,6.86-.5,6.53,6.53,0,0,0,2.59-6.37L492,58.11l18-17.56A6.54,6.54,0,0,0,511.68,33.86Z" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="pbmit-element-heading">2,488 Rating</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonial End */}
          {/* Client Start */}
          <section className="section-lgb pbmit-bg-color-light">
            <div className="container">
              <div
                className="swiper-slider"
                data-autoplay="true"
                data-loop="true"
                data-dots="false"
                data-arrows="false"
                data-columns={6}
                data-margin={0}
                data-effect="slide"
              >
                <div className="swiper-wrapper">
                  {/* Slide1 */}
                  <article className="pbmit-client-style-1 swiper-slide">
                    <div className="pbmit-border-wrapper">
                      <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                        <h4 className="pbmit-hide">Client 12</h4>
                        <div className="pbmit-client-hover-img">
                          <img
                            src="images/homepage-1/client/client-global-01.png"
                            className="img-fluid"
                            alt
                          />
                        </div>
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-1/client/client-grey-01.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Slide2 */}
                  <article className="pbmit-client-style-1 swiper-slide">
                    <div className="pbmit-border-wrapper">
                      <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                        <h4 className="pbmit-hide">Client 12</h4>
                        <div className="pbmit-client-hover-img">
                          <img
                            src="images/homepage-1/client/client-global-02.png"
                            className="img-fluid"
                            alt
                          />
                        </div>
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-1/client/client-grey-02.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Slide3 */}
                  <article className="pbmit-client-style-1 swiper-slide">
                    <div className="pbmit-border-wrapper">
                      <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                        <h4 className="pbmit-hide">Client 12</h4>
                        <div className="pbmit-client-hover-img">
                          <img
                            src="images/homepage-1/client/client-global-03.png"
                            className="img-fluid"
                            alt
                          />
                        </div>
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-1/client/client-grey-03.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Slide4 */}
                  <article className="pbmit-client-style-1 swiper-slide">
                    <div className="pbmit-border-wrapper">
                      <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                        <h4 className="pbmit-hide">Client 12</h4>
                        <div className="pbmit-client-hover-img">
                          <img
                            src="images/homepage-1/client/client-global-04.png"
                            className="img-fluid"
                            alt
                          />
                        </div>
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-1/client/client-grey-04.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Slide5 */}
                  <article className="pbmit-client-style-1 swiper-slide">
                    <div className="pbmit-border-wrapper">
                      <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                        <h4 className="pbmit-hide">Client 12</h4>
                        <div className="pbmit-client-hover-img">
                          <img
                            src="images/homepage-1/client/client-global-05.png"
                            className="img-fluid"
                            alt
                          />
                        </div>
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-1/client/client-grey-05.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Slide6 */}
                  <article className="pbmit-client-style-1 swiper-slide">
                    <div className="pbmit-border-wrapper">
                      <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                        <h4 className="pbmit-hide">Client 12</h4>
                        <div className="pbmit-client-hover-img">
                          <img
                            src="images/homepage-1/client/client-global-06.png"
                            className="img-fluid"
                            alt
                          />
                        </div>
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-1/client/client-grey-06.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Slide7 */}
                  <article className="pbmit-client-style-1 swiper-slide">
                    <div className="pbmit-border-wrapper">
                      <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                        <h4 className="pbmit-hide">Client 12</h4>
                        <div className="pbmit-client-hover-img">
                          <img
                            src="images/homepage-1/client/client-global-07.png"
                            className="img-fluid"
                            alt
                          />
                        </div>
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-1/client/client-grey-07.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Slide8 */}
                  <article className="pbmit-client-style-1 swiper-slide">
                    <div className="pbmit-border-wrapper">
                      <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                        <h4 className="pbmit-hide">Client 12</h4>
                        <div className="pbmit-client-hover-img">
                          <img
                            src="images/homepage-1/client/client-global-08.png"
                            className="img-fluid"
                            alt
                          />
                        </div>
                        <div className="pbmit-featured-img-wrapper">
                          <div className="pbmit-featured-wrapper">
                            <img
                              src="images/homepage-1/client/client-grey-08.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          {/* Client End */}
          {/* Video Start */}
          <section className="pbmit-bg-color-secondary video-section-one fadeIn animated animated-slow">
            <div className="pbmit-bg-overlay" />
            <div className="container">
              <div className="text-center">
                <div className="pbmit-heading-subheading-style-1 animation-style4">
                  <h4 className="pbmit-subtitle">
                    Emergency call 123 4567 890
                  </h4>
                  <h2 className="pbmit-title">
                    We make the creative interior <br />
                    solutions for{" "}
                    <span id="js-rotating">
                      manufacture, development, composition, explanation
                    </span>
                  </h2>
                </div>
                <div className="play-button">
                  <a
                    className="pbmit-icon pbmin-lightbox-video"
                    href="https://www.youtube.com/watch?v=Sv2_JktdvmQ"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Video Start */}
          {/* Blog Start */}
          <section className="section-md">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="pbmit-heading-subheading animation-style4">
                    <h4 className="pbmit-subtitle">What we do</h4>
                    <h2 className="pbmit-title">Latest posts &amp; articles</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-btn">
                    <a
                      className="pbmit-btn pbmit-btn-outline"
                      href="blog-grid-col-4.html"
                    >
                      <span className="pbmit-button-content-wrapper">
                        <span className="pbmit-button-text">See all blogs</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row g-0 align-items-center">
                <div className="col-md-12 col-xl-4">
                  <div className="row">
                    <div className="blog-one-left-col">
                      <article className="pbmit-ele-blog pbmit-blog-style-2 col-md-12">
                        <div className="post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbminfotech-content-inner">
                              <div className="pbmit-featured-img-wrapper">
                                <div className="pbmit-featured-wrapper">
                                  <img
                                    src="images/homepage-1/blog/blog-01.jpg"
                                    className="img-fluid"
                                    alt
                                  />
                                </div>
                              </div>
                              <div className="pbmit-meta-wraper">
                                <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                  <div className="pbmit-meta-date">
                                    <span className="pbmit-post-date">
                                      <i className="pbmit-base-icon-calendar-3" />
                                      May 09. 2024
                                    </span>
                                  </div>
                                </div>
                                <div className="pbmit-meta-author pbmit-meta-line">
                                  <span className="pbmit-post-author">
                                    <i className="pbmit-base-icon-user-3" />
                                    <span>By</span>admin
                                  </span>
                                </div>
                                <div className="pbmit-content-wrapper">
                                  <h3 className="pbmit-post-title">
                                    <a href="blog-single-details.html">
                                      Frequently Utilized Metal Welding System
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="pbmit-ele-blog pbmit-blog-style-2 col-md-12">
                        <div className="post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbminfotech-content-inner">
                              <div className="pbmit-featured-img-wrapper">
                                <div className="pbmit-featured-wrapper">
                                  <img
                                    src="images/homepage-1/blog/blog-02.jpg"
                                    className="img-fluid"
                                    alt
                                  />
                                </div>
                              </div>
                              <div className="pbmit-meta-wraper">
                                <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                  <div className="pbmit-meta-date">
                                    <span className="pbmit-post-date">
                                      <i className="pbmit-base-icon-calendar-3" />
                                      May 09. 2024
                                    </span>
                                  </div>
                                </div>
                                <div className="pbmit-meta-author pbmit-meta-line">
                                  <span className="pbmit-post-author">
                                    <i className="pbmit-base-icon-user-3" />
                                    <span>By</span>admin
                                  </span>
                                </div>
                                <div className="pbmit-content-wrapper">
                                  <h3 className="pbmit-post-title">
                                    <a href="blog-single-details.html">
                                      How Does One Go About Buying Furniture?
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article className="pbmit-ele-blog pbmit-blog-style-2 col-md-12">
                        <div className="post-item">
                          <div className="pbminfotech-box-content">
                            <div className="pbminfotech-content-inner">
                              <div className="pbmit-featured-img-wrapper">
                                <div className="pbmit-featured-wrapper">
                                  <img
                                    src="images/homepage-1/blog/blog-03.jpg"
                                    className="img-fluid"
                                    alt
                                  />
                                </div>
                              </div>
                              <div className="pbmit-meta-wraper">
                                <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                  <div className="pbmit-meta-date">
                                    <span className="pbmit-post-date">
                                      <i className="pbmit-base-icon-calendar-3" />
                                      May 09. 2024
                                    </span>
                                  </div>
                                </div>
                                <div className="pbmit-meta-author pbmit-meta-line">
                                  <span className="pbmit-post-author">
                                    <i className="pbmit-base-icon-user-3" />
                                    <span>By</span>admin
                                  </span>
                                </div>
                                <div className="pbmit-content-wrapper">
                                  <h3 className="pbmit-post-title">
                                    <a href="blog-single-details.html">
                                      Four Ways for Creating Extra Space in
                                      Small Homes
                                    </a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-xl-8">
                  <div className="blog-one-right-col">
                    <article className="pbmit-ele-blog pbmit-blog-style-3">
                      <div className="post-item d-flex">
                        <div className="pbmit-featured-container">
                          <div
                            className="pbmit-bg-image"
                            style={{
                              backgroundImage:
                                'url("images/homepage-1/blog/blog-04b.jpg")',
                            }}
                          >
                            <div className="pbmit-featured-img-wrapper">
                              <div className="pbmit-featured-wrapper">
                                <img
                                  src="images/homepage-1/blog/blog-04.jpg"
                                  className="img-fluid"
                                  alt="blog-01"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pbminfotech-box-wrap">
                          <div className="pbminfotech-box-content">
                            <div className="pbmit-date-admin-wraper d-flex align-items-center">
                              <div className="pbmit-meta-date pbmit-meta-line">
                                <span className="pbmit-post-date">
                                  <i className="pbmit-base-icon-calendar-3" />
                                  May 09. 2024
                                </span>
                              </div>
                              <div className="pbmit-meta-author pbmit-meta-line">
                                <span className="pbmit-post-author">
                                  <i className="pbmit-base-icon-user-3" />
                                  <span>By</span>admin
                                </span>
                              </div>
                            </div>
                            <h3 className="pbmit-post-title">
                              <a href="blog-single-details.html">
                                How To Choose The Right Furniture Of Your Home
                              </a>
                            </h3>
                            <div className="pbminfotech-box-desc">
                              Modest, recently established interior design
                              company that seeks to address a variety of topics,
                              including…
                            </div>
                          </div>
                          <a
                            className="pbmit-blog-btn"
                            href="blog-single-details.html"
                          >
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-pbmit-up-arrow" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Blog End */}
        </div>
        {/* Page Content End */}
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
                    <span className="pbmit-email-text"> hello@example.com</span>
                    <span className="pbmit-phone-number"> +79 2589 63598</span>
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
                      Copyright © 2024 <a href="index-2.html">Xinterio Demo1</a>
                      , All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* footer End */}
      </div>
    </>
  );
}


export default dynamic(() => Promise.resolve(Home), { ssr: false })
