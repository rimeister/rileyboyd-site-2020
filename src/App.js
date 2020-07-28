import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  useHistory,
} from 'react-router-dom';

import Layout from './components/Layout';

import HomeView from './views/home-view';
import PortfolioView from './views/portfolio-view';
import PortfolioItemView from './views/portfolio-item-view';
import NoMatch404View from './views/no-match-404-view';

// import CvView from './views/cv-view';

import getPortfolioData from './data/portfolioData';

function App() {

  let portfolioData = getPortfolioData();
  // console.log(portfolioData);

  return (
    <Router>

    <Layout>

    <Switch>

      <Route
        exact
        path="/"
        component={ HomeView }
      />

      <Route
        exact
        path="/portfolio"
        component={ PortfolioView }
      />

      <Route
        path="/portfolio"
        component={ PortfolioItemView }
      />

      <Route component={NoMatch404View} />

      {/*
      <Route
        exact
        path="/cv"
        component={ CvView }
      />
      */}

    </Switch>

    </Layout>

    </Router>
  );
}

export default App;
