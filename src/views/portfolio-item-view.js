import React from 'react';
// import aboutMeSignatureImg from '../assets/images/about-me-signature.png';

import {
  Route
} from 'react-router-dom';

const PortfolioItemView = ({ match }) => {
  console.log(match);
    return (
      <div>
        <div className="container">

          <h1>PORTFOLIO ITEM</h1>
          <Route 
            path={`${match.path}/:name`} 
            render={( { match } ) => {
            return (
              <div>
                <h3>{match.params.name}</h3>
              </div>
            )
            }}
          />
          <div className="rb-gap-4"></div>

        </div>

      </div>
    );
}

export default PortfolioItemView;