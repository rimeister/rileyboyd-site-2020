import React from 'react';
import {Link} from 'react-router-dom';

const MobileNav = () => (
    <nav className="rb-navbar rb-navbar-full rb-navbar-align-center" id="rb-nav-mobile">
        <div className="rb-navbar-bg">
            <div className="bg-image" style={{backgroundImage: "url('assets/images/bg-menu.jpg')"}}></div>
        </div>
        <div className="rb-nav-table">
            <div className="rb-nav-row">
                <div className="container">
                    <div className="rb-nav-header">
                        <div className="rb-nav-logo">
                            <Link href="index.html" className="rb-nav-logo">
                                <img src="assets/images/logo-light.svg" alt="" width="85" />
                            </Link>
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
                            <li><Link href="https://twitter.com/riley_boyd"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link href="https://www.facebook.com/rileyboydstudios/"><i className="fa fa-facebook"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>	
);

export default MobileNav;