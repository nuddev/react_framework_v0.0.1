import React from "react";
import "./App.less";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RecoilRoot } from "recoil";
import withAppConfig from "./hoc/withAppConfig";
function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default withAppConfig(App);
