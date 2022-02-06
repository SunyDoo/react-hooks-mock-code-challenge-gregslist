import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {


  const [listing, setListing] = useState([])
  const [searchItem, setSearchItem] = useState("")
  
  
  const itemsToDisplay = listing.filter((item) => {
    if (searchItem === "") {
      return true;
    } else {
      return item.description.toLowerCase().includes(searchItem)
    }
  })
  
  
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((items) => setListing(items));
  }, []);
  console.log(items)
  
  function deleteListing(removedItem){
    const updatedItems = listing.filter((item) => item.id !== removedItem.id);
    setListing(updatedItems);
  }
  





  return (
    <div className="app">
      <Header onSearchChange={setSearchItem} search ={searchItem} />
      <ListingsContainer itemsToDisplay={itemsToDisplay} deleteListing={deleteListing}/>
    </div>
  );
}

export default App;
