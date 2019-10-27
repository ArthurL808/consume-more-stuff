import React, { Component } from "react";
import styles from "./Auth.module.scss";
import { Route } from 'react-router-dom'
import { routes } from '../../Routes';

class Auth extends Component {
  state = {};
  render() {
    return (
      <>
        <div className={styles.auth_page}>
          <h1>Logged In</h1>

          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Auth;
