import React, {useState,useEffect} from 'react';
import getPortfolioData from '../data/portfolioData';

import {
  Route,
  Link,
  useHistory
} from 'react-router-dom';

const PortfolioItemView = ({ match }) => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  const getPortfolioItemData = (id) => {

    let _index = 0;
    
    for (let i =0; i < portfolioData.length; i++) {
      if (portfolioData[i].id == id) {
        _index = i;
        break;
      }
    }

    return _index;
  
  }

  const history = useHistory();

  const goToItemHandler = (event,url) => {

    event.preventDefault();

    history.push(url);
    
    window.scrollTo(0, 0);

  }

  let [portfolioData, setPortfolioData] = useState(getPortfolioData());

  return (
      <Route 
        
        path={`${match.path}/:name`} 
        render={( { match } ) => {

          let itemIndex = getPortfolioItemData(match.params.name);

          return (
            <>
              <div className="container-fluid">
                <div className="rb-portfolio-single rb-portfolio-single-half">
                  <div className="row">
                    <div className="col-lg-6 order-lg-2">
                      <div className="rb-sidebar-sticky" data-offset-top={0}>
                        <div className="rb-portfolio-info">
                          <h1 className="rb-portfolio-title display-4">{portfolioData[itemIndex].title}</h1>
                          <div className="rb-portfolio-text">
                            <h4>{portfolioData[itemIndex].subheading}</h4>
                            {portfolioData[itemIndex].description}
                          </div>
                          <table className="rb-portfolio-details">
                            <tbody>
                              <tr>
                                <td><strong>Role:</strong></td>
                                <td>{portfolioData[itemIndex].role}</td>
                              </tr>
                              <tr>
                                <td><strong>Tech used:</strong></td>
                                <td>{portfolioData[itemIndex].tech}</td>
                              </tr>
                              <tr>
                                <td><strong>Company:</strong></td>
                                <td>{portfolioData[itemIndex].company}</td>
                              </tr>
                              <tr>
                                <td><strong>Year</strong></td>
                                <td>{portfolioData[itemIndex].year}</td>
                              </tr>
                              <tr style={{display: portfolioData[itemIndex].url.length?'table-row':'none'}}>
                                <td><strong>URL</strong></td>
                                <td><a href={portfolioData[itemIndex].url} target="_blank">{portfolioData[itemIndex].url}</a></td>
                              </tr>
                              {/*
                              <tr>
                                <td><strong>Share:</strong></td>
                                <td>
                                  <a href="#" title="Share page on Facebook" data-share="facebook">Facebook</a>, <a href="#" title="Share page on Twitter" data-share="twitter">Twitter</a>, <a href="#" title="Share page on Pinterest" data-share="pinterest">Pinterest</a>
                                    <a href="#" title="Share page on Google Plus" data-share="google-plus">Google Plus</a>,
                                    <a href="#" title="Share page on LinkedIn" data-share="linkedin">LinkedIn</a>,
                                    <a href="#" title="Share page on Vkontakte" data-share="vk">Vkontakte</a>
                                    *
                                </td>
                              </tr>
                              */}
                            </tbody></table>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="rb-portfolio-images">
                      {
                        portfolioData[itemIndex].images.map((item,index)=>(
                          <img src={item} alt="" key={'portfolio-item-img-'+index} />
                        ))
                      }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rb-pagination rb-pagination-center">
                <div className="container">
                  <a href="#" className="rb-pagination-prev" onClick={(event)=>goToItemHandler(event,(itemIndex>0)?portfolioData[itemIndex-1].route:'/')} style={{display: itemIndex>0?'block':'none'}}><span className="pe-7s-angle-left arrow"></span> Prev<span className="hide-text">ious Work</span></a>
                  {/*<a className="rb-pagination-center" href="work-3-style-1.html"><span className="rb-icon-squares" /></a>*/}
                  <a href="#" className="rb-pagination-next" onClick={(event)=>goToItemHandler(event,(portfolioData.length > itemIndex+1)?portfolioData[itemIndex+1].route:'/')} style={{display: (portfolioData.length > itemIndex+1)?'block':'none'}}>Next<span className="hide-text"> Work </span><span className="pe-7s-angle-right arrow" /> </a>
                </div>
              </div>
            </>
          )
          }}
      />
  );
}

export default PortfolioItemView;