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

function App() {
  const [isAuth, setAuth] = useState(false);
  const [sidebarOn, setSidebarOn] = useState(false);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadItemsAsync());
  // })

  return (
    <Router>
      <div className="App">
        <Header isAuth={isAuth} setAuth={setAuth} />
        <div className="main">
          <button onClick={() => setSidebarOn(true)}>toggle</button>
          <Sidebar isAuth={isAuth} sidebarOn={sidebarOn} setSidebarOn={setSidebarOn} />
          <MainBody isAuth={isAuth} />
        </div>
      </div>
    </Router>
  );
}

export default App;
