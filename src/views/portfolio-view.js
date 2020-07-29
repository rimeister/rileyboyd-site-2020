import React, {useEffect} from 'react';
import getPortfolioData from '../data/portfolioData';

import {Link} from 'react-router-dom';

const PortfolioView = () => {

  let portfolioData = getPortfolioData();

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[]);

    return (
        <div>

        <div className="container">

          <h1 className="text-center m-60">Portfolio</h1>

          <div className="rb-portfolio-list rb-isotope rb-isotope-3-cols" style={{position: 'relative', height: '1109.95px'}}>

            {
              portfolioData.map((item,index) => {

               let testURL = "url('"+item.thumbnail+"')";
                
                return(
                <div key={'portfolio-item-'+index} className="rb-isotope-item" data-filter="Design">
                  <div className="rb-portfolio-item rb-portfolio-item-square rb-portfolio-item-info-style-1">
                      <Link to={item.route} className="rb-portfolio-item-link"></Link>
                      <div className="rb-portfolio-item-image">
                        <div style={{ backgroundImage: testURL }} />
                      </div>
                      <div className="rb-portfolio-item-info rb-portfolio-item-info-center text-center">
                          <div>
                              <h2 className="portfolio-item-title h3">{item.title}</h2>
                              <div className="portfolio-item-category">{item.type}</div>
                          </div>
                      </div>
                  </div>
                </div>)
              })
            }

          </div>
          <div className="rb-gap-4"></div>

        </div>

      </div>
    );
}

export default PortfolioView;