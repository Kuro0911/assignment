import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <div className='left'>
      <Sidebar/>
      </div>
      <div className='right'>
      <Router>
        <Routes>
          <Route 
          path="/" 
          element={
            <>
              <Banner/>
              <Home/>
            </>
          }
          />
          <Route 
          path="/search" 
          element={
              <Search/>
          }
          />
          <Route 
          path="/favourites" 
          element={
            <>
            </>
          }
          />
          <Route 
          path="/playlists" 
          element={
            <>
            </>
          }
          />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
