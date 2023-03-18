import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";

import Layout from "./components/Layout";

import HomeView from "./views/home-view";
import PortfolioView from "./views/portfolio-view";
import PortfolioItemView from "./views/portfolio-item-view";
import NoMatch404View from "./views/no-match-404-view";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeView} />

          <Route exact path="/contact" component={HomeView} />

          <Route exact path="/portfolio" component={PortfolioView} />

          <Route path="/portfolio" component={PortfolioItemView} />

          <Route component={NoMatch404View} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
