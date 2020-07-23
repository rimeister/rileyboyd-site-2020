import React from 'react';
// import aboutMeSignatureImg from '../assets/images/about-me-signature.png';

const HomeView = () => {

	return(
		<>
        <div className="nk-header-title nk-header-title-full nk-header-title-parallax-opacity">
            <div className="bg-image">
                <div style={{backgroundImage: "url('assets/images/home-7.jpg')"}}></div>
                <div className="bg-image-overlay" style={{backgroundColor: "rgba(12, 12, 12, 0.6)"}}></div>
            </div>
            <div className="nk-header-table">
                <div className="nk-header-table-cell">
                    <div className="container">
                        <h2 className="nk-subtitle text-white">New Branding Agency</h2>
                        <h1 className="nk-title display-3 text-white">We are about to change the way <br/> <em className="fw-400">you publish on the web</em></h1>
                        <div className="nk-gap"></div>
                        <div className="nk-header-text text-white">
                            <div className="nk-gap-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a className="nk-header-title-scroll-down text-white" href="#nk-header-title-scroll-down"><span className="pe-7s-angle-down"></span></a>
            </div>
        </div>
        <div id="nk-header-title-scroll-down"></div>

        <div className="bg-white" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="nk-gap-4 mt-9"></div>
                        <h2 className="display-4">About Our Agency</h2>
                        <div className="nk-gap mnt-5"></div>
                        <p>We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps. Clever use of technology and lean processes enable us to work faster and smarter. </p>
                        <img src={require('../assets/images/about-me-signature.png')} alt="" className="nk-img-fit" />
                        <div className="nk-gap-4 mt-25"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="nk-box bg-dark-1 text-white">
            <div className="bg-image bg-image-parallax" style={{backgroundImage: "url('assets/images/bg-pattern.jpg')"}}></div>
            <div className="nk-gap-5 mnt-6"></div>
            <div className="container">
                <div className="row vertical-gap">
                    <div className="col-md-6 col-lg-3">
                        <div className="nk-ibox-1">
                            <div className="nk-ibox-icon">
                                <span className="pe-7s-portfolio"></span>
                            </div>
                            <div className="nk-ibox-cont">
                                <div className="nk-ibox-title">548</div>
                                <div className="nk-ibox-text">Projects Completed</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="nk-ibox-1">
                            <div className="nk-ibox-icon">
                                <span className="pe-7s-clock"></span>
                            </div>
                            <div className="nk-ibox-cont">
                                <div className="nk-ibox-title">1465</div>
                                <div className="nk-ibox-text">Working Hours</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="nk-ibox-1">
                            <div className="nk-ibox-icon">
                                <span className="pe-7s-star"></span>
                            </div>
                            <div className="nk-ibox-cont">
                                <div className="nk-ibox-title">612</div>
                                <div className="nk-ibox-text">Positive Feedbacks</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="nk-ibox-1">
                            <div className="nk-ibox-icon">
                                <span className="pe-7s-like"></span>
                            </div>
                            <div className="nk-ibox-cont">
                                <div className="nk-ibox-title">735</div>
                                <div className="nk-ibox-text">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-gap-5 mnt-6"></div>
        </div>

        <div className="nk-box bg-white" id="projects">
            <div className="nk-gap-4 mt-5"></div>
            <h2 className="text-center display-4">Best Projects</h2>
            <div className="nk-gap mnt-6"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="text-center">Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non ultrices. </div>
                    </div>
                </div>
            </div>
            <div className="nk-gap-2 mt-12"></div>
            <div className="container">
                <div className="nk-portfolio-list nk-isotope nk-isotope-3-cols nk-isotope-gap">
                    <div className="nk-isotope-item" data-filter="Mockup">
                        <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                            <a href="work-single-3.html" className="nk-portfolio-item-link"></a>
                            <div className="nk-portfolio-item-image">
                                <div style={{backgroundImage: "url('assets/images/portfolio-7-sm.jpg')"}}></div>
                            </div>
                            <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-center">
                                <div>
                                    <h2 className="portfolio-item-title h3">Vinyl Record</h2>
                                    <div className="portfolio-item-category">Mockup</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-isotope-item" data-filter="Print">
                        <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                            <a href="work-single-4.html" className="nk-portfolio-item-link"></a>
                            <div className="nk-portfolio-item-image">
                                <div style={{backgroundImage: "url('assets/images/portfolio-4-sm.jpg')"}}></div>
                            </div>
                            <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-center">
                                <div>
                                    <h2 className="portfolio-item-title h3">Modern T-Shirt</h2>
                                    <div className="portfolio-item-category">Print</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-isotope-item" data-filter="Branding">
                        <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-lg">
                            <a href="work-single-5.html" className="nk-portfolio-item-link"></a>
                            <div className="nk-portfolio-item-image">
                                <div style={{backgroundImage: "url('assets/images/portfolio-5-sm.jpg')"}}></div>
                            </div>
                            <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-center">
                                <div>
                                    <h2 className="portfolio-item-title h3">Minimal Bag</h2>
                                    <div className="portfolio-item-category">Branding</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-isotope-item" data-filter="Design">
                        <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                            <a href="work-single-3.html" className="nk-portfolio-item-link"></a>
                            <div className="nk-portfolio-item-image">
                                <div style={{backgroundImage: "url('assets/images/portfolio-9-sm.jpg')"}}></div>
                            </div>
                            <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-center">
                                <div>
                                    <h2 className="portfolio-item-title h3">Clean &amp; Groovy</h2>
                                    <div className="portfolio-item-category">Design</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-isotope-item" data-filter="Design">
                        <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                            <a href="work-single-3.html" className="nk-portfolio-item-link"></a>
                            <div className="nk-portfolio-item-image">
                                <div style={{backgroundImage: "url('assets/images/portfolio-3-sm.jpg')"}}></div>
                            </div>
                            <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-center">
                                <div>
                                    <h2 className="portfolio-item-title h3">Minimal Mobile App</h2>
                                    <div className="portfolio-item-category">Design</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-isotope-item" data-filter="Print">
                        <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-lg">
                            <a href="work-single-3.html" className="nk-portfolio-item-link"></a>
                            <div className="nk-portfolio-item-image">
                                <div style={{backgroundImage: "url('assets/images/portfolio-8-sm.jpg')"}}></div>
                            </div>
                            <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-center">
                                <div>
                                    <h2 className="portfolio-item-title h3">White T-Shirt</h2>
                                    <div className="portfolio-item-category">Print</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-isotope-item" data-filter="Photography">
                        <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-lg">
                            <a href="work-single-1.html" className="nk-portfolio-item-link"></a>
                            <div className="nk-portfolio-item-image">
                                <div style={{backgroundImage: "url('assets/images/portfolio-6-sm.jpg')"}}></div>
                            </div>
                            <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-center">
                                <div>
                                    <h2 className="portfolio-item-title h3">Heja Stockholm</h2>
                                    <div className="portfolio-item-category">Photography</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-isotope-item" data-filter="Branding">
                        <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                            <a href="work-single-2.html" className="nk-portfolio-item-link"></a>
                            <div className="nk-portfolio-item-image">
                                <div style={{backgroundImage: "url('assets/images/portfolio-2-sm.jpg')"}}></div>
                            </div>
                            <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-center">
                                <div>
                                    <h2 className="portfolio-item-title h3">Business Card</h2>
                                    <div className="portfolio-item-category">Branding</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-isotope-item" data-filter="Photography">
                        <div className="nk-portfolio-item nk-portfolio-item-info-style-2 nk-portfolio-item-sm">
                            <a href="work-single-3.html" className="nk-portfolio-item-link"></a>
                            <div className="nk-portfolio-item-image">
                                <div style={{backgroundImage: "url('assets/images/portfolio-12-sm.jpg')"}}></div>
                            </div>
                            <div className="nk-portfolio-item-info nk-portfolio-item-info-center text-center">
                                <div>
                                    <h2 className="portfolio-item-title h3">Paper Bag</h2>
                                    <div className="portfolio-item-category">Photography</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-gap-4 mt-15"></div>
        </div>

        <div className="nk-box bg-dark-1">
            <div className="bg-image bg-image-parallax" style={{backgroundImage: "url('assets/images/bg-pattern.jpg')"}}></div>
            <div className="nk-gap-5 mnt-6"></div>
            <div className="nk-gap-3"></div>
            <div className="container-fluid">
                <div className="nk-carousel nk-carousel-all-visible text-white" data-autoplay="18000" data-dots="true">
                    <div className="nk-carousel-inner">
                        <div>
                            <div>
                                <blockquote className="nk-blockquote-style-1 text-white">
                                    <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.</p>
                                    <cite>Michael Hopkins</cite>
                                </blockquote>
                                <div className="nk-gap-3 mt-10"></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <blockquote className="nk-blockquote-style-1 text-white">
                                    <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.</p>
                                    <cite>Michael Hopkins</cite>
                                </blockquote>
                                <div className="nk-gap-3 mt-10"></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <blockquote className="nk-blockquote-style-1 text-white">
                                    <p>Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.</p>
                                    <cite>Michael Hopkins</cite>
                                </blockquote>
                                <div className="nk-gap-3 mt-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-gap-4 mt-3"></div>
        </div>

        <div className="bg-white">
            <div className="container">
                <div className="nk-carousel-2 nk-carousel-x4 nk-carousel-no-margin nk-carousel-all-visible">
                    <div className="nk-carousel-inner">
                        <div>
                            <div>
                                <div className="nk-box-1">
                                    <img src={require('../assets/images/partner-logo-1-dark.png')} alt="" className="nk-img-fit" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="nk-box-1">
                                    <img src={require('../assets/images/partner-logo-2-dark.png')} alt="" className="nk-img-fit" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="nk-box-1">
                                    <img src={require('../assets/images/partner-logo-3-dark.png')} alt="" className="nk-img-fit" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="nk-box-1">
                                    <img src={require('../assets/images/partner-logo-4-dark.png')} alt="" className="nk-img-fit" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="nk-box-1">
                                    <img src={require('../assets/images/partner-logo-5-dark.png')} alt="" className="nk-img-fit" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="nk-box-1">
                                    <img src={require('../assets/images/partner-logo-6-dark.png')} alt="" className="nk-img-fit" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="nk-box-1">
                                    <img src={require('../assets/images/partner-logo-7-dark.png')} alt="" className="nk-img-fit" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="nk-box-1">
                                    <img src={require('../assets/images/partner-logo-8-dark.png')} alt="" className="nk-img-fit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="nk-box bg-gray-1" id="blog">
            <div className="nk-gap-4 mt-5"></div>
            <h2 className="text-center display-4">Latest Blog</h2>
            <div className="nk-gap mnt-6"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="text-center">Donec orci sem, pretium ac dolor et, faucibus faucibus mauris. Etiam,pellentesque faucibus. Vestibulum gravida volutpat ipsum non ultrices. </div>
                    </div>
                </div>
            </div>
            <div className="nk-gap-2 mt-12"></div>
            <div className="container">
                <div className="nk-carousel-2 nk-carousel-x2 nk-carousel-no-margin nk-carousel-all-visible nk-blog-isotope" data-dots="true">
                    <div className="nk-carousel-inner">
                        <div>
                            <div>
                                <div className="pl-15 pr-15">
                                    <div className="nk-blog-post">
                                        <div className="nk-post-thumb">
                                            <a href="blog-single.html">
                                                <img src={require('../assets/images/post-1-mid.jpg')} alt="" className="nk-img-stretch" />
                                            </a>
                                            <div className="nk-post-category"><a href="#">Nature</a></div>
                                        </div>
                                        <h2 className="nk-post-title h4"><a href="blog-single.html">Something I need to tell you</a></h2>
                                        <div className="nk-post-date"> September 18, 2018 </div>
                                        <div className="nk-post-text">
                                            <p>That female isn't midst divide kind upon seas lights greater green creature lights brought.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="nk-gap-1"></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="pl-15 pr-15">
                                    <div className="nk-blog-post">
                                        <div className="nk-post-thumb">
                                            <a href="blog-single.html">
                                                <img src={require('../assets/images/post-3-mid.jpg')} alt="" className="nk-img-stretch" />
                                            </a>
                                            <div className="nk-post-category"><a href="#">Nature</a></div>
                                        </div>
                                        <h2 className="nk-post-title h4"><a href="blog-single.html">The History of Nature</a></h2>
                                        <div className="nk-post-date"> August 27, 2018 </div>
                                        <div className="nk-post-text">
                                            <p>Third is fly. From one under in itself two waters, all own. Said male shall greater own grass.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="nk-gap-1"></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="pl-15 pr-15">
                                    <div className="nk-blog-post">
                                        <div className="nk-post-thumb">
                                            <a href="blog-single.html">
                                                <img src={require('../assets/images/post-4-mid.jpg')} alt="" className="nk-img-stretch" />
                                            </a>
                                            <div className="nk-post-category"><a href="#">Branding</a></div>
                                        </div>
                                        <h2 className="nk-post-title h4"><a href="blog-single.html">Are you doing the Right Way?</a></h2>
                                        <div className="nk-post-date"> August 14, 2018 </div>
                                        <div className="nk-post-text">
                                            <p>Which all, morning isn't. Female and own living dry, and morning lesser first he stars under years thing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="nk-gap-1"></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="pl-15 pr-15">
                                    <div className="nk-blog-post">
                                        <div className="nk-post-thumb">
                                            <a href="blog-single.html">
                                                <img src={require('../assets/images/post-5-mid.jpg')} alt="" className="nk-img-stretch" />
                                            </a>
                                            <div className="nk-post-category"><a href="#">Design</a></div>
                                        </div>
                                        <h2 className="nk-post-title h4"><a href="blog-single.html">Ten things about Photography</a></h2>
                                        <div className="nk-post-date"> August 14, 2018 </div>
                                        <div className="nk-post-text">
                                            <p>Be forth, god for rule face abundantly all our two winged made. Is whose morning female.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="nk-gap-1"></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="pl-15 pr-15">
                                    <div className="nk-blog-post">
                                        <div className="nk-post-thumb">
                                            <a href="blog-single.html">
                                                <img src={require('../assets/images/post-6-mid.jpg')} alt="" className="nk-img-stretch" />
                                            </a>
                                            <div className="nk-post-category"><a href="#">Design</a></div>
                                        </div>
                                        <h2 className="nk-post-title h4"><a href="blog-single.html">Why you should Always First</a></h2>
                                        <div className="nk-post-date"> August 14, 2018 </div>
                                        <div className="nk-post-text">
                                            <p>Lights give have herb. First. Seed lesser his a fruit. Stars good divide fish appear don't, third deep.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="nk-gap-1"></div>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
            <div className="nk-gap-5 mt-20"></div>
        </div>
        <div className="container" id="contact">
            <div className="nk-gap-5"></div>
            <div className="row vertical-gap">
                <div className="col-lg-5">
                    <h2 className="display-4">Contact Info:</h2>
                    <div className="nk-gap mnt-3"></div>
                    <p>Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.</p>
                    <ul className="nk-contact-info">
                        <li><strong>Address:</strong> 10111 Santa Monica Boulevard, LA</li>
                        <li><strong>Phone:</strong> +44 987 065 908</li>
                        <li><strong>Email:</strong> info@Example.com</li>
                        <li><strong>Fax:</strong> +44 987 065 909</li>
                    </ul>
                </div>
                <div className="col-lg-7">
                    <form action="php/contact.php" className="nk-form nk-form-ajax">
                        <div className="row vertical-gap">
                            <div className="col-md-6">
                                <input type="text" className="form-control required" name="name" placeholder="Your Name" />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control required" name="email" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="nk-gap-1"></div>
                        <input type="text" className="form-control required" name="title" placeholder="Your Title" />
                        <div className="nk-gap-1"></div>
                        <textarea className="form-control required" name="message" rows="8" placeholder="Your Comment" aria-required="true"></textarea>
                        <div className="nk-gap-1"></div>
                        <div className="nk-form-response-success"></div>
                        <div className="nk-form-response-error"></div>
                        <button className="nk-btn">Send Message</button>
                    </form>
                </div>
            </div>
            <div className="nk-gap-5"></div>
        </div>
        </>
	);
}

export default HomeView;