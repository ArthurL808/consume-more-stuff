import React, { useState } from "react";
import "./App.scss";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MainBody from "../MainBody";
import TopBar from "../TopBar";
import LoginForm from "../LoginForm";
import { withRouter } from "react-router";

function App(props) {
  const [isAuth, setAuth] = useState(false);
  const [sidebarOn, setSidebarOn] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Header
        isAuth={isAuth}
        setAuth={setAuth}
        setLogin={setLogin}
        sidebarOn={sidebarOn}
        setSidebarOn={setSidebarOn}
      />
      <div className="main">
        {login && (
          <LoginForm setAuth={setAuth} setLogin={setLogin} isAuth={isAuth} />
        )}

        <Sidebar isAuth={isAuth} />
        <TopBar sidebarOn={sidebarOn} isAuth={isAuth} />
        <MainBody isAuth={isAuth} {...props} />
      </div>
    </div>
  );
}

export default withRouter(App);
