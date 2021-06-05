import React from "react";

function Search({search,setSearch}) {
  function handleSearchChange(event) {
    setSearch(event.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearchChange} value={search}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
