import React from 'react';

const Footer = () => (
    <footer className="rb-footer">
        <div className="bg-image">
            <div style={{backgroundImage: "url('assets/images/footer-1.jpg')"}}></div>
            <div className="bg-image-overlay" style={{backgroundColor: "rgba(12, 12, 12, 0.9)"}}></div>
        </div>
        <div className="rb-footer-widgets text-white">
            <div className="container">
                <div className="row vertical-gap">
                    <div className="col-lg-12">
                        <div className="rb-widget">
                            <h4 className="rb-widget-title text-white">About Me</h4>
                            <p className="rb-heading-font">My name's Riley Boyd, I'm a web designer and developer with nine years of professional experience. I have an M.A. in Humanities Computing, and an Hons. B.A. in Multimedia and Fine&nbsp;Art. I live in Toronto, Ontario,&nbsp;Canada.</p>
                            <div className="rb-footer-social text-white">
                                <ul>
                                    <li><a href="https://twitter.com/nkdevv"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/unvabdesign/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://dribbble.com/_nK"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="https://www.instagram.com/unvab/"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*
                    <div className="col-lg-4">
                        <div className="rb-widget">
                            <h4 className="rb-widget-title text-white">Latest Tweets</h4>
                            <div className="rb-twitter-list" data-twitter-count="2"></div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="rb-widget">
                            <h4 className="rb-widget-title text-white">Instagram</h4>
                            <div className="rb-instagram row xs-gap vertical-gap multi-column"></div>
                        </div>
                    </div>
                */}
                </div>
            </div>
        </div>
        <div className="rb-footer-cont rb-footer-cont-sm">
            <div className="container text-center">
                <div className="rb-footer-text text-white">
                    <p>&copy;2020 Riley Boyd</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;