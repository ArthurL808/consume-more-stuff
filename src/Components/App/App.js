import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MainBody from '../MainBody';
import TopBar from '../TopBar';
import LoginForm from '../LoginForm';


function App() {
  const [isAuth, setAuth] = useState(false);
  const [sidebarOn, setSidebarOn] = useState(false);
  const [login, setLogin] = useState(false);


  return (
    <Router>
      <div className="App">
        <Header isAuth={isAuth} setAuth={setAuth} setLogin={setLogin} sidebarOn={sidebarOn} setSidebarOn={setSidebarOn} />
        <div className="main">
          {
            login && <LoginForm setAuth={setAuth} setLogin={setLogin} />
          }

          <Sidebar isAuth={isAuth} />
          <TopBar sidebarOn={sidebarOn} isAuth={isAuth} />
          <MainBody isAuth={isAuth} />
        </div>
      </div>
    </Router>
  );
}

export default App;
