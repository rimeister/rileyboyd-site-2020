import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
    <nav className="rb-navbar rb-navbar-top rb-navbar-sticky rb-navbar-autohide rb-navbar-transparent rb-navbar-white-text-on-top">
        <div className="container">
            <div className="rb-nav-table">
                <Link to="/" className="rb-nav-logo">
                    <img src="assets/images/logo-light.svg" alt="" width="85" className="rb-nav-logo-onscroll" />
                    <img src="assets/images/logo.svg" alt="" width="85" />
                </Link>
                <ul className="rb-nav rb-nav-right d-none d-lg-block" data-nav-mobile="#rb-nav-mobile">
                    <li className="active rb-drop-item">
                        <Link to="/"> Home </Link>
                        {/*
                        // Add this back in when WP sub-menus/child menus are set up
                        <ul className="dropdown">
                            <li>
                                <Link to="portfolio"> Home Default </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Minimal Portfolio </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Slider Home </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Video Home </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Freelancer Portfolio </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Minimal Agency </Link>
                            </li>
                            <li className="active">
                                <Link to="portfolio"> One Page Agency </Link>
                            </li>
                            <li>
                                <Link to="portfolio"> Digital Agency </Link>
                            </li>
                            <li>
                                Link to="portfolio"> Fullscreen Slider </Link>
                            </li>
                        </ul>
                        */}
                    </li>
                    <li>
                        <Link to="/portfolio"> Portfolio </Link>
                    </li>
                    <li>
                        <Link to="/cv"> CV </Link>
                    </li>
                </ul>
                <ul className="rb-nav rb-nav-right rb-nav-icons">
                    <li className="single-icon d-lg-none">
                        <a href="#" className="rb-navbar-full-toggle">
                            <span className="rb-icon-burger">
                                <span className="rb-t-1"></span>
                                <span className="rb-t-2"></span>
                                <span className="rb-t-3"></span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Nav;