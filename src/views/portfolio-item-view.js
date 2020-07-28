import React, {useEffect} from 'react';
// import aboutMeSignatureImg from '../assets/images/about-me-signature.png';

import {
  Route
} from 'react-router-dom';

const PortfolioItemView = ({ match }) => {

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[]);

    return (
      <>
        <div className="container-fluid">
          <div className="rb-portfolio-single rb-portfolio-single-half">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <div className="rb-sidebar-sticky" data-offset-top={0}>
                  <div className="rb-portfolio-info">
                    <h1 className="rb-portfolio-title display-4">Heja Stockholm</h1>
                    <div className="rb-portfolio-text">
                      <p>Praesent interdum congue mauris, et fringilla lacus pellentesque vitae. Quisque nisl mauris, aliquam eu ultrices vel, consectetur vitae sapien. Nulla at imper diet risus, nec pharetra neque.</p>
                      <p>Ut ultricies ante eu luctus eleifend. Aliquam vitae fermentum lorem. Duis accumsan purus leo.</p>
                    </div>
                    <table className="rb-portfolio-details">
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
              </div>
              <div className="col-lg-6">
                <div className="rb-portfolio-images">
                  <img src={require('../assets/images/portfolio-single-1-1.jpg')} alt="" />
                  <img src={require('../assets/images/portfolio-single-1-2.jpg')} alt="" />
                  <img src={require('../assets/images/portfolio-single-1-3.jpg')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rb-pagination rb-pagination-center">
          <div className="container">
            <a className="rb-pagination-prev" href="work-single-1.html"><span class="pe-7s-angle-left"></span> Previous Work</a>
            {/*<a className="rb-pagination-center" href="work-3-style-1.html"><span className="rb-icon-squares" /></a>*/}
            <a className="rb-pagination-next" href="work-single-2.html">Next Work <span className="pe-7s-angle-right" /> </a>
          </div>
        </div>
      </>
    );
}

export default PortfolioItemView;