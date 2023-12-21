import React, {useState} from "react";

function Search({onHandleSearchSubmit}) {

  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onHandleSearchSubmit(searchValue);
  }

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
