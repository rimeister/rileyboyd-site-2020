import React from 'react';
const Layout = () => (
    <nav className="rb-navbar rb-navbar-full rb-navbar-align-center" id="rb-nav-mobile">
        <div className="rb-navbar-bg">
            <div className="bg-image" style={{backgroundImage: "url('assets/images/bg-menu.jpg')"}}></div>
        </div>
        <div className="rb-nav-table">
            <div className="rb-nav-row">
                <div className="container">
                    <div className="rb-nav-header">
                        <div className="rb-nav-logo">
                            <a href="index.html" className="rb-nav-logo">
                                <img src="assets/images/logo-light.svg" alt="" width="85" />
                            </a>
                        </div>
                        <div className="rb-nav-close rb-navbar-full-toggle">
                            <span className="rb-icon-close"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rb-nav-row-full rb-nav-row">
                <div className="nano">
                    <div className="nano-content">
                        <div className="rb-nav-table">
                            <div className="rb-nav-row rb-nav-row-full rb-nav-row-center rb-navbar-mobile-content">
                                <ul className="rb-nav">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rb-nav-row">
                <div className="container">
                    <div className="rb-nav-social">
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