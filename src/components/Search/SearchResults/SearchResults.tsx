import React from "react";
import "./SearchResults.css";
import SongList from "./components/SongList/SongList";
import TopResult from "./components/TopResult/TopResult";
import TrackSchema from "../../../utils/interfaces/Track";

interface SearchSchema {
  track: TrackSchema;
}
function SearchResults(data: SearchSchema[]) {
  return (
    <div className="search-res-container">
      <div className="tracks-search">
        <div className="top-res">
          <TopResult {...data[0].track} />
        </div>
        <div className="all-tracks">
          <SongList {...data} />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
