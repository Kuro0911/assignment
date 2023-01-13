import React, { useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import { useStateValue } from "./utils/contexts/StateProvider";
import Favourites from "./components/Favourites/Favourites";
import Login from "./components/Login/Login";
function App() {
  const [currState, dispatch] = useStateValue();
  console.log(currState);
  return (
    <div className="App">
      {!currState.user ? (
        <Login />
      ) : (
        <>
          <div className="left">
            <Sidebar />
          </div>
          <div className="right">
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Banner />
                      <Home />
                    </>
                  }
                />
                <Route path="/search" element={<Search />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/playlists" element={<></>} />
              </Routes>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
