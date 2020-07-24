import React from 'react';
// import aboutMeSignatureImg from '../assets/images/about-me-signature.png';

const PortfolioView = () => {
    return (
      <div>
        {/* START: Carousel */}
        <div className="nk-carousel-3 nk-carousel-no-margin nk-carousel-all-visible" data-size={1} data-autoplay={18000} data-arrows="true">
          <div className="nk-carousel-inner">
            <div>
              <div>
                <img src="assets/images/portfolio-2-slider-1.jpg" alt="" className="nk-img-stretch" />
              </div>
            </div>
            <div>
              <div>
                <img src="assets/images/portfolio-2-slider-2.jpg" alt="" className="nk-img-stretch" />
              </div>
            </div>
            <div>
              <div>
                <img src="assets/images/portfolio-2-slider-3.jpg" alt="" className="nk-img-stretch" />
              </div>
            </div>
          </div>
        </div>
        {/* END: Carousel */}
        <div className="container">
          <div className="nk-portfolio-single">
            <div className="nk-gap-4 mb-2" />
            <h1 className="nk-portfolio-title display-4">Business Card</h1>
            <div className="row vertical-gap">
              <div className="col-lg-8">
                <div className="nk-portfolio-info">
                  <div className="nk-portfolio-text">
                    <p>Nullam lobortis neque turpis, nec tempus sem pharetra at. Donec et lobortis quam, in ullamcorper velit. maximus ullamcorper ligula, at placerat dui hendrerit sed. Sed metus urna, bibendum id tortor ac, feugiat ipsum. Aliquam vehicula neque sit amet dolor malesuada pretium.</p>
                    <p>Curabitur tristique, felis ut mattis auctor, elit ante laoreet libero, ac scelerisque lorem quam vitae. Suspen disse aliquet eget risus quis vehicula.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <table className="nk-portfolio-details">
                  <tbody><tr>
                      <td><strong>Client:</strong></td>
                      <td>Anna Doe</td>
                    </tr>
                    <tr>
                      <td><strong>Date:</strong></td>
                      <td>06.20.2018</td>
                    </tr>
                    <tr>
                      <td><strong>Share:</strong></td>
                      <td>
                        <a href="#" title="Share page on Facebook" data-share="facebook">Facebook</a>, <a href="#" title="Share page on Twitter" data-share="twitter">Twitter</a>, <a href="#" title="Share page on Pinterest" data-share="pinterest">Pinterest</a>
                        {/*
                            <a href="#" title="Share page on Google Plus" data-share="google-plus">Google Plus</a>,
                            <a href="#" title="Share page on LinkedIn" data-share="linkedin">LinkedIn</a>,
                            <a href="#" title="Share page on Vkontakte" data-share="vk">Vkontakte</a>
                            */}
                      </td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
            <div className="nk-gap-4 mnb-10" />
          </div>
        </div>
        {/* START: Pagination */}
        <div className="nk-pagination nk-pagination-center">
          <div className="container">
            <a className="nk-pagination-prev" href="work-single-1.html"><span className="pe-7s-angle-left" /> Previous Work</a>
            <a className="nk-pagination-center" href="work-3-style-1.html"><span className="nk-icon-squares" /></a>
            <a className="nk-pagination-next" href="work-single-3.html">Next Work <span className="pe-7s-angle-right" /> </a>
          </div>
        </div>
      </div>
    );	
}

export default PortfolioView;