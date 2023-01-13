import React from "react";
import TrackSchema from "../../../utils/interfaces/Track";
import Song from "../Song/Song";
import "./Tracks.css";

const Tracks = (track: TrackSchema[]) => {
  return (
    <div className="tracks">
      <div className="wrap">
        {Object.keys(track).map((value: string, index: number) => {
          const ele = track[index];
          const temp = {
            artists: ele.artists,
            img: ele.images,
            key: ele.key,
            subtitle: ele.subtitle,
            title: ele.title,
            type: ele.type,
            url: ele.url,
          };
          return <Song {...temp} />;
        })}
      </div>
    </div>
  );
};

export default Tracks;
