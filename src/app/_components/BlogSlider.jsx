'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
} from "swiper/modules";

function BlogSlider() {
    return (
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
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                pagination={false} // Disable pagination dots
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
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img
                                                src="images/homepage-2/blog/blog-01.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="How To Choose The Right  Furniture Of Your Home"
                                    >
                                        <span className="pbmit-button-icon">
                                            <i className="pbmit-base-icon-pbmit-up-arrow" />
                                        </span>
                                    </a>
                                    <a
                                        className="pbmit-link"
                                        href="blog-single-details.html"
                                    />
                                </div>
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    May 5, 2024
                                                </span>
                                            </div>
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
                                        Modest, recently established interior design company
                                        that seeks to address a variety of topics,
                                        including…
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide2 */}
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img
                                                src="images/homepage-2/blog/blog-02.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="Frequently Utilized Metal Welding System"
                                    >
                                        <span className="pbmit-button-icon">
                                            <i className="pbmit-base-icon-pbmit-up-arrow" />
                                        </span>
                                    </a>
                                    <a
                                        className="pbmit-link"
                                        href="blog-single-details.html"
                                    />
                                </div>
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    May 5, 2024
                                                </span>
                                            </div>
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
                                            Frequently Utilized Metal Welding System
                                        </a>
                                    </h3>
                                    <div className="pbminfotech-box-desc">
                                        Modest, recently established interior design company
                                        that seeks to address a variety of topics,
                                        including…
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                </SwiperSlide>

                <SwiperSlide>
                    {/* Slide3 */}
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img
                                                src="images/homepage-2/blog/blog-03.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="How Does One Go About Buying Furniture?"
                                    >
                                        <span className="pbmit-button-icon">
                                            <i className="pbmit-base-icon-pbmit-up-arrow" />
                                        </span>
                                    </a>
                                    <a
                                        className="pbmit-link"
                                        href="blog-single-details.html"
                                    />
                                </div>
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    May 5, 2024
                                                </span>
                                            </div>
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
                                            How Does One Go About Buying Furniture?
                                        </a>
                                    </h3>
                                    <div className="pbminfotech-box-desc">
                                        Modest, recently established interior design company
                                        that seeks to address a variety of topics,
                                        including…
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                </SwiperSlide>
                <SwiperSlide>
                    {/* Slide4 */}
                    <article className="pbmit-ele-blog pbmit-blog-style-1 swiper-slide">
                        <div className="post-item">
                            <div className="pbminfotech-box-content">
                                <div className="pbmit-featured-container">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img
                                                src="images/homepage-2/blog/blog-04.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <a
                                        className="pbmit-blog-btn"
                                        href="blog-single-details.html"
                                        title="Four Ways for Creating Extra Space in Small Homes"
                                    >
                                        <span className="pbmit-button-icon">
                                            <i className="pbmit-base-icon-pbmit-up-arrow" />
                                        </span>
                                    </a>
                                    <a
                                        className="pbmit-link"
                                        href="blog-single-details.html"
                                    />
                                </div>
                                <div className="pbmit-content-wrapper">
                                    <div className="pbmit-date-wraper d-flex align-items-center">
                                        <div className="pbmit-meta-date-wrapper pbmit-meta-line">
                                            <div className="pbmit-meta-date">
                                                <span className="pbmit-post-date">
                                                    <i className="pbmit-base-icon-calendar-3" />
                                                    May 5, 2024
                                                </span>
                                            </div>
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
                                            Four Ways for Creating Extra Space in Small Homes
                                        </a>
                                    </h3>
                                    <div className="pbminfotech-box-desc">
                                        Modest, recently established interior design company
                                        that seeks to address a variety of topics,
                                        including…
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </SwiperSlide>


            </Swiper>

        </div>
    )
}

export default BlogSlider