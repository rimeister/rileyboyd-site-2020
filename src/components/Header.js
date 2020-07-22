import React from 'react';

const Header = () => (
        <header className="nk-header">

            <nav className="nk-navbar nk-navbar-top nk-navbar-sticky nk-navbar-autohide nk-navbar-transparent nk-navbar-white-text-on-top">
                <div className="container">
                    <div className="nk-nav-table">
                        <a href="index.html" className="nk-nav-logo">
                            <img src="assets/images/logo-light.svg" alt="" width="85" className="nk-nav-logo-onscroll" />
                            <img src="assets/images/logo.svg" alt="" width="85" />
                        </a>
                        <ul className="nk-nav nk-nav-right d-none d-lg-block" data-nav-mobile="#nk-nav-mobile">
                            <li className="active nk-drop-item">
                                <a href="home-1.html"> Home </a>
                                <ul className="dropdown">
                                    <li>
                                        <a href="home-1.html"> Home Default </a>
                                    </li>
                                    <li>
                                        <a href="home-2.html"> Minimal Portfolio </a>
                                    </li>
                                    <li>
                                        <a href="home-3.html"> Slider Home </a>
                                    </li>
                                    <li>
                                        <a href="home-4.html"> Video Home </a>
                                    </li>
                                    <li>
                                        <a href="home-5.html"> Freelancer Portfolio </a>
                                    </li>
                                    <li>
                                        <a href="home-6.html"> Minimal Agency </a>
                                    </li>
                                    <li className="active">
                                        <a href="home-7.html"> One Page Agency </a>
                                    </li>
                                    <li>
                                        <a href="home-8.html"> Digital Agency </a>
                                    </li>
                                    <li>
                                        <a href="home-9.html"> Fullscreen Slider </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#about"> About </a>
                            </li>
                            <li>
                                <a href="#projects"> Projects </a>
                            </li>
                            <li>
                                <a href="#blog"> Blog </a>
                            </li>
                            <li>
                                <a href="#contact"> Contact </a>
                            </li>
                        </ul>
                        <ul className="nk-nav nk-nav-right nk-nav-icons">
                            <li className="single-icon d-lg-none">
                                <a href="#" className="nk-navbar-full-toggle">
                                    <span className="nk-icon-burger">
                                        <span className="nk-t-1"></span>
                                        <span className="nk-t-2"></span>
                                        <span className="nk-t-3"></span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
);

export default Header;