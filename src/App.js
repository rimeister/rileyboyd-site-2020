import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom';

import Layout from './components/Layout';

import HomeView from './views/home-view';
import PortfolioView from './views/portfolio-view';
import CvView from './views/cv-view';


import { options } from './assets/js/parts/_options';


// import SNOW from './assets/js/snow';

function App() {

  useEffect(()=>{

    if (typeof window.Snow !== 'undefined') {
        window.Snow.setOptions(options);
        window.Snow.init();
    }

  });

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
        exact
        path="/cv"
        component={ CvView }
      />

    </Switch>

    </Layout>

    </Router>
  );
}

export default App;
