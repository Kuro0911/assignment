import React from "react";
import "./Favourites.css";
import Song from "../Home/Song/Song";

function Favourites() {
  const data = JSON.parse(localStorage.getItem("fav")!);
  const handleClick = () => {
    const currUser = localStorage.getItem("user")!;
    localStorage.clear();
    localStorage.setItem("user", currUser);
  };
  return (
    <div className="favorites-container">
      <div className="title">
        <h1>Favorites</h1>
        <div className="line" />
      </div>
      {data !== null ? (
        <>
          <div className="favourites-wrap">
            {Object.keys(data).map((value: string, index: number) => {
              return <Song {...data[index]} />;
            })}
          </div>
          <a href="/">
            <button className="clear-btn" onClick={handleClick}>
              Clear Favourites
            </button>
          </a>
        </>
      ) : (
        <div className="no-fav">
          <p>YOU DO NOT HAVE ANY FAVOURITE SONGS</p>
          <h2 className="sub-head">
            TIP : You can dubble click on a song to add it to favourites
          </h2>
        </div>
      )}
    </div>
  );
}

export default Favourites;
