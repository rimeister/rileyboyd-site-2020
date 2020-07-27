import React from 'react';
// import aboutMeSignatureImg from '../assets/images/about-me-signature.png';

import {
  Route
} from 'react-router-dom';

const PortfolioItemView = ({ match }) => {
    return (
      <div>
        <div className="container">

          <h1>PORTFOLIO ITEM</h1>
          <div className="rb-gap-4"></div>

        </div>
        <Route path={`${match.path}/:topicId`} component={PortfolioItemView}/>
      </div>
    );
}

export default PortfolioItemView;