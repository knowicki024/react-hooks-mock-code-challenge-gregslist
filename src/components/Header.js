import React from "react";
import Search from "./Search";

function Header({onHandleSearchSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onHandleSearchSubmit = {onHandleSearchSubmit}/>
    </header>
  );
}

export default Header;
