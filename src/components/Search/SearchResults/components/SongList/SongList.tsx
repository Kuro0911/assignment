import React from "react";
import "./SongList.css";
import SearchList from "../../../../../utils/interfaces/SearchList";

function SongList(data: SearchList[]) {
  return (
    <div className="search-list-container">
      <h1>Songs</h1>
      {Object.keys(data).map((value: string, index: number) => {
        if (index === 0) {
          return <></>;
        }
        const ele = data[index].track;
        return (
          <div className="list">
            <img className="list-img" src={ele.images.coverart} alt="" />
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
