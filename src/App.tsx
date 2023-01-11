import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Home/>
      <Sidebar/>
    </div>
  );
}

export default App;
