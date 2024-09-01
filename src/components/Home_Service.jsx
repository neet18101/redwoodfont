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

function Home_Service() {
    return (
        <>
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
                                                                src="images/home/homeServ/front.webp"
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
                                                    
                                                    <h3 className="pbmit-service-title">
                                                        <a href="service-details.html">
                                                            Automatic Shop Fronts
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-service-description">
                                                        <p>
                                                            The automatic door systems open up an almost unlimited range of door design .
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
                                                                src="images/home/homeServ/shutter.webp"
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
                                                    
                                                    <h3 className="pbmit-service-title">
                                                        <a href="service-details.html">
                                                            Perforated Shutters
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-service-description">
                                                        <p>
                                                            We are leading manufacturer, supplier of Punched Hole Shutters.
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
                                                                src="images/home/homeServ/window.webp"
                                                                className="img-fluid"
                                                                alt="service-01"
                                                                height={433}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pbmit-service-icon elementor-icon">
                                                    <i className="" />
                                                </div>
                                                <div className="pbmit-content-box">
                                                    
                                                    <h3 className="pbmit-service-title">
                                                        <a href="service-details.html">
                                                            Door Blinds
                                                        </a>
                                                    </h3>
                                                    <div className="pbmit-service-description">
                                                        <p>
                                                            The  glass shopfront is an important consideration for any business.
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
        </>
    )
}

export default Home_Service