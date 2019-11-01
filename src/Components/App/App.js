import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MainBody from '../MainBody';
import { useDispatch } from 'react-redux';
import { loadItemsAsync } from '../../actions';
import styles from './App.module.scss'

function App() {
  const [isAuth, setAuth] = useState(false);
  const [sidebarOn, setSidebarOn] = useState(false);


  return (
    <Router>
      <div className="App">
        <Header isAuth={isAuth} setAuth={setAuth} sidebarOn={sidebarOn} setSidebarOn={setSidebarOn} />
        <div className="main">
          <Sidebar isAuth={isAuth} sidebarOn={sidebarOn} setSidebarOn={setSidebarOn} />
          <MainBody isAuth={isAuth} />
        </div>
      </div>
    </Router>
  );
}

export default App;
