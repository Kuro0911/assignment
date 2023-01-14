import React, { useState } from "react";
import Search from "../../../utils/svg/Search";
import "./Searchbar.css";

interface SearchbarSchema {
  queryChange: (q: string) => void;
}
function Searchbar({ queryChange }: SearchbarSchema) {
  const [query, setQuery] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    queryChange(e.target.value);
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
