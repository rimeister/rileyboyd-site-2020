import React from 'react';
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
        path="/"
        component={ PortfolioView }
      />

    </Switch>

    </Layout>

    </Router>
  );
}

export default App;
