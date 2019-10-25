import React, { Component } from "react";
import styles from "./Auth.module.scss";
import AuthHome from "../AuthHome";

class Auth extends Component {
  state = {};
  render() {
    return (
      <>
        <div className={styles.auth_page}>
          <h1>Logged In</h1>

          <AuthHome></AuthHome>
        </div>
      </>
    );
  }
}

export default Auth;
