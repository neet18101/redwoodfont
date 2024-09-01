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
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HomeAbout from "@/components/HomeAbout";
import Counter from "@/components/Counter";
import Home_Service from "@/components/Home_Service";
import WhyChoose from "@/components/WhyChoose";


function Home() {
  return (
    <>
      <div className="page-wrapper">
        {/* Header Main Area */}
        <header className="site-header header-style-1">
          <Navbar />
          <Hero />
        </header>
        {/* Header Main Area End Here */}
        {/* Page Content */}
        <div className="page-content">
          <HomeAbout />
          <Counter />
          <Home_Service />
          <WhyChoose/>
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
          {/* <section className="pbmit-bg-color-light portfolio-one pbmit-sortable-yes">
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
          </section> */}
          {/* Portfolio End */}
          {/* Pricing Start */}
          {/* <section className="section-xl pricing-one-bg">
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
          </section> */}
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

      </div>
    </>
  );
}


export default dynamic(() => Promise.resolve(Home), { ssr: false })
// export default Home
