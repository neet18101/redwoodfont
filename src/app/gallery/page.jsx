import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
    return (
        <div className="page-wrapper">
            {/* Header Main Area */}
            <header className="site-header header-style-1">
                <Navbar/>
            </header>
            {/* Header Main Area End Here */}
            {/* Title Bar */}
            <div className="pbmit-title-bar-wrapper">
                <div className="container">
                    <div className="pbmit-title-bar-content">
                        <div className="pbmit-title-bar-content-inner">
                            <div className="pbmit-tbar">
                                <div className="pbmit-tbar-inner container">
                                    <h1 className="pbmit-tbar-title"> Gallery</h1>
                                </div>
                            </div>
                            <div className="pbmit-breadcrumb">
                                <div className="pbmit-breadcrumb-inner">
                                    <span>
                                        <a title href="#" className="home"><span>RED Wood Shop</span></a>
                                    </span>
                                    <span className="sep">
                                        <i className="pbmit-base-icon-angle-right" />
                                    </span>
                                    <span><span className="post-root post post-post current-item"> Gallery</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Title Bar End*/}
            <div className="page-content">
                {/* Portfolio Grid col 4 */}
                <section className="section-md">
                    <div className="container-fluid px-4">
                        <div className="row pbmit-element-posts-wrapper">
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-01b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Bedroom</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Innovation</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-02b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Furniture</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Minimalism</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-03b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Interior</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Lighting</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-04b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Kitchen</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Bold Tiles</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-05b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Bedroom</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Clean lines</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-06b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Architecture</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Integral</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-07b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Interior</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Functionality</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-08b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Furniture</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Terracotta</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-05b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Bedroom</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Clean lines</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-06b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Architecture</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Integral</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-07b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Interior</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Functionality</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-6 col-lg-3">
                                <div className="pbminfotech-post-content">
                                    <div className="pbmit-featured-img-wrapper">
                                        <div className="pbmit-featured-wrapper">
                                            <img src="images/portfolio/portfolio-08b.jpg" className="img-fluid" alt />
                                        </div>
                                    </div>
                                    <div className="pbminfotech-box-content">
                                        <div className="pbminfotech-titlebox">
                                            <div className="pbmit-port-cat">
                                                <a href="portfolio-grid-col-3.html" rel="tag">Furniture</a>
                                            </div>
                                            <h3 className="pbmit-portfolio-title">
                                                <a href="portfolio-detail-style-1.html">Terracotta</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                {/* Portfolio Grid col 4 End */}
            </div>
            
        </div>



    )
}

export default page