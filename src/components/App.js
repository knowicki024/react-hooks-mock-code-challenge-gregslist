import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
const API = "http://localhost:6001/listings"

function App() {

  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(setListings)
  },[])

  const handleDelete = (deletedId) => {
    const newListings = listings.filter(listing => {
      return listing.id!== deletedId
    })
       setListings(newListings);
    }

    const listingsToDisplay = listings.filter(eachListing => {
      return eachListing.description.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const handleSearchSubmit = (searchValue) => {
      setSearchTerm(searchValue);
    }

  return (
    <div className="app">
      <Header 
      onHandleSearchSubmit={handleSearchSubmit}
      />
      <ListingsContainer 
      onHandleDelete ={handleDelete}
      listings={listingsToDisplay} 
      API={API}/>
    </div>
  );
}

export default App;
