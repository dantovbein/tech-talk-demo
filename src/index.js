import React, {Fragment} from "react";
import ReactDOM, {render} from 'react-dom';
import {Provider} from "react-redux";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Store from "./store";
import App from './App';
import "./index.css";

render(
  <Provider store={Store}>
    <Router>
      <Fragment>
        <Switch>
          <Route 
            path={`/app`}
            component={App}
          />
        </Switch>
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root"))
