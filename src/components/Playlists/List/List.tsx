import React from "react";
import PlaylistSchema from "../../../utils/interfaces/Playlists";
import Tracks from "../../Home/Tracks/Tracks";
import "./List.css";
function List(data: PlaylistSchema[]) {
  return (
    <>
      {Object.keys(data).map((value: string, index: number) => {
        const ele = data[index];
        const playlists = ele.playlists!;
        return (
          <div>
            <h1 className="list-title">{ele.title}</h1>
            <Tracks {...playlists} />
          </div>
        );
      })}
    </>
  );
}

export default List;
