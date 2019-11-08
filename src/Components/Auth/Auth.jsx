import React, { Component } from "react";
import styles from "./Auth.module.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "../../Routes";

class Auth extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className={styles.auth_page}>
          <h1>Logged In</h1>

          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
              id={route.path.split("/")[-1]}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default Auth;
