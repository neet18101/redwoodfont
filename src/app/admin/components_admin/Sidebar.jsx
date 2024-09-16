import React from 'react'

function Sidebar() {
    return (
        <div>
            <div className="app-menu navbar-menu">
                {/* LOGO */}
                <div className="navbar-brand-box">
                    {/* Dark Logo*/}
                    <a href="index.html" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt height={22} />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-dark.png" alt height={17} />
                        </span>
                    </a>
                    {/* Light Logo*/}
                    <a href="index.html" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt height={22} />
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-light.png" alt height={17} />
                        </span>
                    </a>
                    <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                        <i className="ri-record-circle-line" />
                    </button>
                </div>
                <div id="scrollbar">
                    <div className="container-fluid">
                        <div id="two-column-menu" />
                        <ul className="navbar-nav" id="navbar-nav">
                            <li className="menu-title"><span data-key="t-menu">Menu</span></li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarDashboards"  role="button"  aria-controls="sidebarDashboards">
                                    <i className="ri-dashboard-2-line" />
                                    <span data-key="t-dashboards">Dashboards</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarLayouts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLayouts">
                                    <i className="ri-layout-3-line" />
                                    <span data-key="t-layouts">Menu</span>

                                </a>
                                <div className="collapse menu-dropdown" id="sidebarLayouts">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="layouts-horizontal.html" target="_blank" className="nav-link" data-key="t-horizontal">Add Menu</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="layouts-detached.html" target="_blank" className="nav-link" data-key="t-detached">All Menu</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li>
                            {/* end Dashboard Menu */}


                            {/* <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarLanding" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLanding">
                                    <i className="ri-rocket-line" />
                                    <span data-key="t-landing">Landing</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarLanding">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="landing.html" className="nav-link" data-key="t-one-page">
                                                One Page
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="nft-landing.html" className="nav-link" data-key="t-nft-landing">
                                                NFT Landing
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="job-landing.html" className="nav-link" data-key="t-job">Job</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="#sidebarCharts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCharts">
                                    <i className="ri-pie-chart-line" />
                                    <span data-key="t-charts">Charts</span>
                                </a>
                                <div className="collapse menu-dropdown" id="sidebarCharts">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <a href="#sidebarApexcharts" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarApexcharts" data-key="t-apexcharts">
                                                Apexcharts
                                            </a>
                                            <div className="collapse menu-dropdown" id="sidebarApexcharts">
                                                <ul className="nav nav-sm flex-column">
                                                    <li className="nav-item">
                                                        <a href="charts-apex-line.html" className="nav-link" data-key="t-line">
                                                            Line
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-area.html" className="nav-link" data-key="t-area">
                                                            Area
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-column.html" className="nav-link" data-key="t-column">
                                                            Column
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-bar.html" className="nav-link" data-key="t-bar">
                                                            Bar
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-mixed.html" className="nav-link" data-key="t-mixed">
                                                            Mixed
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-timeline.html" className="nav-link" data-key="t-timeline">
                                                            Timeline
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-range-area.html" className="nav-link"><span data-key="t-range-area">Range Area</span>
                                                            <span className="badge badge-pill bg-success" data-key="t-new">New</span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-funnel.html" className="nav-link"><span data-key="t-funnel">Funnel</span>
                                                            <span className="badge badge-pill bg-success" data-key="t-new">New</span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-candlestick.html" className="nav-link" data-key="t-candlstick">
                                                            Candlstick
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-boxplot.html" className="nav-link" data-key="t-boxplot">
                                                            Boxplot
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-bubble.html" className="nav-link" data-key="t-bubble">
                                                            Bubble
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-scatter.html" className="nav-link" data-key="t-scatter">
                                                            Scatter
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-heatmap.html" className="nav-link" data-key="t-heatmap">
                                                            Heatmap
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-treemap.html" className="nav-link" data-key="t-treemap">
                                                            Treemap
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-pie.html" className="nav-link" data-key="t-pie">
                                                            Pie
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-radialbar.html" className="nav-link" data-key="t-radialbar">
                                                            Radialbar
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-radar.html" className="nav-link" data-key="t-radar">
                                                            Radar
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="charts-apex-polar.html" className="nav-link" data-key="t-polar-area">
                                                            Polar Area
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a href="charts-chartjs.html" className="nav-link" data-key="t-chartjs">
                                                Chartjs
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="charts-echarts.html" className="nav-link" data-key="t-echarts">
                                                Echarts
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}


                        </ul>
                    </div>
                    {/* Sidebar */}
                </div>
                <div className="sidebar-background" />
            </div>
        </div>
    )
}

export default Sidebar