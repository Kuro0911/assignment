import React from "react";
import { useStateValue } from "../../utils/contexts/StateProvider";
import AddNew from "./AddNew/AddNew";
import List from "./List/List";
import "./Playlists.css";

function Playlists() {
  const [data, dispatch] = useStateValue();
  return (
    <div className="playlist-wrapper">
      <List {...data.playlists} />
      <AddNew />
    </div>
  );
}

export default Playlists;
