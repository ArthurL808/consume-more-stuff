import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import MainBody from './Components/MainBody'




function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header isAuth={isAuth} setAuth={setAuth} />
        <div className="main">
          <Sidebar isAuth={isAuth} />
          <MainBody isAuth={isAuth} />
        </div>
      </div>
    </Router>
  );
}

export default App;
