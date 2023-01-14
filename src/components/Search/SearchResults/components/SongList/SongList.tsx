import React from "react";
import "./SongList.css";
import TrackSchema from "../../../../../utils/interfaces/Track";

interface SearchSchema {
  track: TrackSchema;
}
function SongList(data: SearchSchema[]) {
  return (
    <div className="search-list-container">
      <h1>Songs</h1>
      {Object.keys(data).map((value: string, index: number) => {
        if (index === 0) {
          return <></>;
        }
        const ele = data[index].track;
        const cover = ele.images !== undefined ? ele.images.coverart : "";
        return (
          <div className="list">
            <img className="list-img" src={cover} alt="" />
            <div className="list-text">
              <h4 className="list-name">{ele.title}</h4>
              <h5 className="list-sub">{ele.subtitle}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SongList;
