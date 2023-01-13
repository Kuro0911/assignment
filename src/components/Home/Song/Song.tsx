import React, { useState } from "react";
import { actionTypes } from "../../../utils/contexts/reducer";
import { useStateValue } from "../../../utils/contexts/StateProvider";
import SongSchema from "../../../utils/interfaces/Song";
import "./Song.css";

const Song = (data: SongSchema) => {
  interface HeartSchmea {
    hidden: Boolean;
  }
  const Heart = (isHidden: HeartSchmea) => (
    <div className="heart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill={isHidden.hidden ? "transparent" : "#1db954"}
        className="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </div>
  );
  const [liked, setLiked] = useState(false);
  const [currState, dispatch] = useStateValue();

  const handleClick = () => {
    setLiked(!liked);
    const new_data = [...currState.fav, data];
    localStorage.setItem("fav", JSON.stringify(new_data));
    dispatch({
      type: actionTypes.UPDATE_FAV,
      fav: new_data,
    });
  };

  return (
    <div className="container" onDoubleClick={handleClick}>
      <Heart hidden={!liked} />
      <img src={data.img.coverart} alt="" />
      <span>{data.title}</span>
    </div>
  );
};
export default Song;
