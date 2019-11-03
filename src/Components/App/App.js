import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MainBody from '../MainBody';
import TopBar from '../TopBar';


function App() {
  const [isAuth, setAuth] = useState(true);
  const [sidebarOn, setSidebarOn] = useState(false);


  return (
    <Router>
      <div className="App">
        <Header isAuth={isAuth} setAuth={setAuth} sidebarOn={sidebarOn} setSidebarOn={setSidebarOn} />
        <div className="main">
          <Sidebar isAuth={isAuth} />
          <TopBar sidebarOn={sidebarOn} isAuth={isAuth} />
          <MainBody isAuth={isAuth} />
        </div>
      </div>
    </Router>
  );
}

export default App;
