import React from 'react';
const Layout = () => (
    <nav className="nk-navbar nk-navbar-full nk-navbar-align-center" id="nk-nav-mobile">
        <div className="nk-navbar-bg">
            <div className="bg-image" style={{backgroundImage: "url('assets/images/bg-menu.jpg')"}}></div>
        </div>
        <div className="nk-nav-table">
            <div className="nk-nav-row">
                <div className="container">
                    <div className="nk-nav-header">
                        <div className="nk-nav-logo">
                            <a href="index.html" className="nk-nav-logo">
                                <img src="assets/images/logo-light.svg" alt="" width="85" />
                            </a>
                        </div>
                        <div className="nk-nav-close nk-navbar-full-toggle">
                            <span className="nk-icon-close"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-nav-row-full nk-nav-row">
                <div className="nano">
                    <div className="nano-content">
                        <div className="nk-nav-table">
                            <div className="nk-nav-row nk-nav-row-full nk-nav-row-center nk-navbar-mobile-content">
                                <ul className="nk-nav">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-nav-row">
                <div className="container">
                    <div className="nk-nav-social">
                        <ul>
                            <li><a href="https://twitter.com/nkdevv"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.facebook.com/unvabdesign/"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://dribbble.com/_nK"><i className="fa fa-dribbble"></i></a></li>
                            <li><a href="https://www.instagram.com/unvab/"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>	
);

export default Layout;