import React from "react";
import ArtistsSchema from "../../../../../utils/interfaces/Artists";
import "./ArtistsList.css";

function ArtistsList(data: ArtistsSchema) {
  return (
    <div className="artist-list-container">
      <h1>Artists</h1>
      {Object.keys(data.hits).map((value: string, index: number) => {
        const ele = data.hits[index].artist;
        return (
          <div className="artist-list">
            <img
              className="artist-list-img"
              src={
                ele.avatar !== undefined
                  ? ele.avatar
                  : `https://api.dicebear.com/5.x/croodles/svg?backgroundColor=b6e3f4&seed=${ele.adamid}`
              }
              alt=""
            />
            <div className="artist-list-text">
              <h4 className="artist-list-name">{ele.name}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArtistsList;
