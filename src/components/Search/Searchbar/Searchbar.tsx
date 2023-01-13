import React, { useState } from "react";
import Search from "../../../utils/svg/Search";
import "./Searchbar.css";

function Searchbar() {
  const [query, setQuery] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(query);
  };
  return (
    <div className="search-bar">
      <Search />
      <input
        type="text"
        placeholder="Search..."
        value={query}
        className="no-outline"
        onChange={handleChange}
      />
    </div>
  );
}

export default Searchbar;
