import { TextField } from "@mui/material";
import React, { useState } from "react";
import { actionTypes } from "../../../../utils/contexts/reducer";
import { useStateValue } from "../../../../utils/contexts/StateProvider";
import TrackSchema from "../../../../utils/interfaces/Track";
import AddNewSong from "./AddNewSong";
interface AddNewTracksSchema {
  close: () => void;
  data: TrackSchema[];
}
function AddNewTracks({ close = () => {}, data }: AddNewTracksSchema) {
  const [playlist, setplaylist] = useState<TrackSchema[] | undefined>(
    undefined
  );
  const [title, setTitle] = useState("");
  const [curr_data, dispatch] = useStateValue();
  const handleConfirm = () => {
    if (title !== "") {
      close();
      dispatch({
        type: actionTypes.ADD_PLAYLIST,
        playlists: [
          ...curr_data.playlists,
          { title: title, playlists: playlist },
        ],
      });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const updateList = (song: TrackSchema) => {
    const list = playlist;
    if (list !== undefined) {
      list.push(song);
      setplaylist(list);
    } else {
      setplaylist([song]);
    }
  };
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        fullWidth
        onChange={handleChange}
      />
      <div className="title">
        <h1>Select Tracks</h1>
        <div className="line" />
      </div>
      <div className="tracks">
        <div className="wrap">
          {Object.keys(data).map((value: string, index: number) => {
            const ele = data[index];
            return <AddNewSong addToList={updateList} data={ele} />;
          })}
        </div>
        <div className="btn-wrap">
          <button className="confirm-btn" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default AddNewTracks;
