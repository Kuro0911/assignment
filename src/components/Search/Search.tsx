import React, { useState } from "react";
import searchSongs from "../../data/searchSong";
import Loader from "../Loader/Loader";
import "./Search.css";
import Searchbar from "./Searchbar/Searchbar";
import SearchResults from "./SearchResults/SearchResults";

const Search = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const queryChange = (q: string) => {
    if (q !== "") {
      searchSongs(q)
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          setError(true);
          setData([]);
          console.log(err);
        });
    }
  };
  return (
    <div className="search-container">
      <Searchbar queryChange={queryChange} />
      {data.length > 0 && error === false ? (
        <SearchResults {...data} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Search;
