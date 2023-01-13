import React, { useState } from "react";
import TrackSchema from "../../../../utils/interfaces/Track";
import "./AddNewSong.css";

interface AddNewSongSchema {
  addToList: (song: TrackSchema) => void;
  data: TrackSchema;
}
const AddNewSong = ({ addToList = () => {}, data }: AddNewSongSchema) => {
  const [disable, setDisable] = useState(false);
  const handleClick = () => {
    if (!disable) {
      setDisable(true);
      addToList(data);
    }
  };
  const cover = data.images !== undefined ? data.images.coverart : "";
  return (
    <div className="container" onClick={handleClick}>
      <img src={cover} alt="" className={`${disable ? "disable" : ""}`} />
      <span>{data.title}</span>
    </div>
  );
};
export default AddNewSong;
