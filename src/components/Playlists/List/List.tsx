import React from "react";
import PlaylistSchema from "../../../utils/interfaces/Playlists";
import "./List.css";
function List(data: PlaylistSchema[]) {
  return data.length !== 0 ? (
    <>
      {Object.keys(data).map((value: string, index: number) => {
        const ele = data[index];
        return <h1>{ele.title}</h1>;
      })}
    </>
  ) : (
    <></>
  );
}

export default List;
