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
import CvView from './views/cv-view';

function App() {

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
