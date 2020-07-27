import React from 'react';
import { useHistory } from 'react-router-dom';
// import aboutMeSignatureImg from '../assets/images/about-me-signature.png';

import Button from '../components/Button';

const HomeView = () => {

        const history = useHistory();

        const btnHandler = () => {
            history.push('/portfolio');
        }

        return (
        <div className="page-home">
           <div className="rb-header-title rb-header-title-full rb-header-title-parallax-opacity">
              <div className="wave" />
                 <div className="wave" />
                    <div className="rb-header-table">
                       <div className="rb-header-table-cell">
                          <div className="container">
                             <h1 className="rb-title display-3 text-white">Hello, I'm Riley Boyd. <br/> <em className="fw-400">I'm a web designer and developer.</em></h1>
                             <Button text="View My Work" onClick={btnHandler} className="mt-15" />
                             <div className="rb-gap"></div>
                             <div className="rb-header-text text-white">
                                <div className="rb-gap-4"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                    {/*
                    <div>
                       <a className="rb-header-title-scroll-down text-white" href="#rb-header-title-scroll-down"><span className="pe-7s-angle-down"></span></a>
                    </div>
                    */}
                 </div>
                 <div id="rb-header-title-scroll-down"></div>
                 <div className="bg-white" id="about">
                    <div className="container">
                       <div className="row">
                          <div className="col-lg-8 offset-lg-2 text-center">
                             <div className="rb-gap-4 mt-9"></div>
                             <h2 className="display-4">About</h2>
                             <div className="rb-gap mnt-5"></div>
                             <p>I'm a front-end web specilist with nine years of professional experience.</p>
                             <div className="rb-gap-4 mt-25"></div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="rb-box" id="projects">
                    <div className="rb-gap-4 mt-5"></div>
                    <h2 className="text-center display-4">Work</h2>
                    <div className="rb-gap mnt-6"></div>
                    <div className="container">
                       <div className="row">
                          <div className="col-lg-8 offset-lg-2">
                             <div className="text-center">Here is a sample of some of the projects I've worked on.</div>
                          </div>
                       </div>
                    </div>
                    <div className="rb-gap-2 mt-12"></div>
                    <div className="container">
                       <div className="rb-portfolio-list rb-isotope rb-isotope-3-cols">


                            <div className="rb-isotope-item" data-filter="Design">
                                <div className="rb-portfolio-item rb-portfolio-item-square rb-portfolio-item-info-style-1">
                                    <a href="http://google.com" className="rb-portfolio-item-link"></a>
                                    <div className="rb-portfolio-item-image">
                                        <div style={{ backgroundImage: `url(${require("../assets/images/portfolio/portfolio-trending-sloth-sm.jpg")})` }} />
                                    </div>
                                    <div className="rb-portfolio-item-info rb-portfolio-item-info-center text-center">
                                        <div>
                                            <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                                            <div className="portfolio-item-category">Mockup</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rb-isotope-item" data-filter="Design">
                                <div className="rb-portfolio-item rb-portfolio-item-square rb-portfolio-item-info-style-1">
                                    <a href="http://google.com" className="rb-portfolio-item-link"></a>
                                    <div className="rb-portfolio-item-image">
                                        <div style={{ backgroundImage: `url(${require("../assets/images/portfolio/portfolio-cheestrings-sm.jpg")})` }} />
                                    </div>
                                    <div className="rb-portfolio-item-info rb-portfolio-item-info-center text-center">
                                        <div>
                                            <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                                            <div className="portfolio-item-category">Mockup</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rb-isotope-item" data-filter="Design">
                                <div className="rb-portfolio-item rb-portfolio-item-square rb-portfolio-item-info-style-1">
                                    <a href="http://google.com" className="rb-portfolio-item-link"></a>
                                    <div className="rb-portfolio-item-image">
                                        <div style={{ backgroundImage: `url(${require("../assets/images/portfolio/portfolio-communa-sm.jpg")})` }} />
                                    </div>
                                    <div className="rb-portfolio-item-info rb-portfolio-item-info-center text-center">
                                        <div>
                                            <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                                            <div className="portfolio-item-category">Mockup</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rb-isotope-item" data-filter="Design">
                                <div className="rb-portfolio-item rb-portfolio-item-square rb-portfolio-item-info-style-1">
                                    <a href="http://google.com" className="rb-portfolio-item-link"></a>
                                    <div className="rb-portfolio-item-image">
                                        <div style={{ backgroundImage: `url(${require("../assets/images/portfolio/portfolio-sony-rewards-sm.jpg")})` }} />
                                    </div>
                                    <div className="rb-portfolio-item-info rb-portfolio-item-info-center text-center">
                                        <div>
                                            <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                                            <div className="portfolio-item-category">Mockup</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rb-isotope-item" data-filter="Design">
                                <div className="rb-portfolio-item rb-portfolio-item-square rb-portfolio-item-info-style-1">
                                    <a href="http://google.com" className="rb-portfolio-item-link"></a>
                                    <div className="rb-portfolio-item-image">
                                        <div style={{ backgroundImage: `url(${require("../assets/images/portfolio/portfolio-nestle-sm.jpg")})` }} />
                                    </div>
                                    <div className="rb-portfolio-item-info rb-portfolio-item-info-center text-center">
                                        <div>
                                            <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                                            <div className="portfolio-item-category">Mockup</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="rb-isotope-item" data-filter="Design">
                                <div className="rb-portfolio-item rb-portfolio-item-square rb-portfolio-item-info-style-1">
                                    <a href="http://google.com" className="rb-portfolio-item-link"></a>
                                    <div className="rb-portfolio-item-image">
                                        <div style={{ backgroundImage: `url(${require("../assets/images/portfolio/portfolio-gmc-sierra-sm.jpg")})` }} />
                                    </div>
                                    <div className="rb-portfolio-item-info rb-portfolio-item-info-center text-center">
                                        <div>
                                            <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                                            <div className="portfolio-item-category">Mockup</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rb-isotope-item" data-filter="Design">
                                <div className="rb-portfolio-item rb-portfolio-item-square rb-portfolio-item-info-style-1">
                                    <a href="http://google.com" className="rb-portfolio-item-link"></a>
                                    <div className="rb-portfolio-item-image">
                                        <div style={{ backgroundImage: `url(${require("../assets/images/portfolio/portfolio-brintellix-sm.jpg")})` }} />
                                    </div>
                                    <div className="rb-portfolio-item-info rb-portfolio-item-info-center text-center">
                                        <div>
                                            <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                                            <div className="portfolio-item-category">Mockup</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rb-isotope-item" data-filter="Design">
                                <div className="rb-portfolio-item rb-portfolio-item-square rb-portfolio-item-info-style-1">
                                    <a href="http://google.com" className="rb-portfolio-item-link"></a>
                                    <div className="rb-portfolio-item-image">
                                        <div style={{ backgroundImage: `url(${require("../assets/images/portfolio/portfolio-spark-change-sm.jpg")})` }} />
                                    </div>
                                    <div className="rb-portfolio-item-info rb-portfolio-item-info-center text-center">
                                        <div>
                                            <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                                            <div className="portfolio-item-category">Mockup</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rb-isotope-item" data-filter="Design">
                                <div className="rb-portfolio-item rb-portfolio-item-square rb-portfolio-item-info-style-1">
                                    <a href="http://google.com" className="rb-portfolio-item-link"></a>
                                    <div className="rb-portfolio-item-image">
                                        <div style={{ backgroundImage: `url(${require("../assets/images/portfolio/portfolio-astellas-perp-sm.jpg")})` }} />
                                    </div>
                                    <div className="rb-portfolio-item-info rb-portfolio-item-info-center text-center">
                                        <div>
                                            <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                                            <div className="portfolio-item-category">Mockup</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    <div className="rb-gap-4 mt-15"></div>

               </div>
            </div>
        </div>

    );
}

export default HomeView;