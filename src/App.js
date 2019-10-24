import React from 'react';
import './App.scss';

import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import MainBody from './Components/MainBody'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <MainBody />
      </div>

    </div>
  );
}

export default App;
