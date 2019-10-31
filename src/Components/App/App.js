import React, { useState, useEffect } from 'react';
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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => width > 1024 ? setSidebarOn(true) : setSidebarOn(false);
  }, [width])

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadItemsAsync());
  // })

  return (
    <Router>
      <div className="App">
        <Header isAuth={isAuth} setAuth={setAuth} />
        <div className="main">
          <button className={styles.toggle_sidebar} onClick={() => setSidebarOn(true)}>toggle</button>
          <Sidebar isAuth={isAuth} sidebarOn={sidebarOn} setSidebarOn={setSidebarOn} />
          <MainBody isAuth={isAuth} />
        </div>
      </div>
    </Router>
  );
}

export default App;
