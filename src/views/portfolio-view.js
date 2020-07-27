import React from 'react';
// import aboutMeSignatureImg from '../assets/images/about-me-signature.png';

const PortfolioView = () => {
    return (
        <div>


        {/* START: Carousel */}
        {/*
        <div className="rb-carousel-3 rb-carousel-no-margin rb-carousel-all-visible" data-size={1} data-autoplay={18000} data-arrows="true">
          <div className="rb-carousel-inner">
            <div>
              <div>
                <img src="assets/images/portfolio-2-slider-1.jpg" alt="" className="rb-img-stretch" />
              </div>
            </div>
            <div>
              <div>
                <img src="assets/images/portfolio-2-slider-2.jpg" alt="" className="rb-img-stretch" />
              </div>
            </div>
            <div>
              <div>
                <img src="assets/images/portfolio-2-slider-3.jpg" alt="" className="rb-img-stretch" />
              </div>
            </div>
          </div>
        </div>
        */}
        {/* END: Carousel */}
        <div className="container">

          <h1>Portfolio</h1>

          <div className="rb-portfolio-list rb-isotope rb-isotope-3-cols" style={{position: 'relative', height: '1109.95px'}}>


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
          <div className="rb-gap-4"></div>

        </div>

      </div>
    );
}

export default PortfolioView;