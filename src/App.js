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
        path="/portfolio/:name"
        component={ PortfolioItemView }
      />


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
