import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ itemsToDisplay, deleteListing }) {

  return (
    <main>
      <ul className="cards">
        {itemsToDisplay.map((item) => (
          <ListingCard key={item.id} description={item.description} image={item.image} location={item.location} item={item} removeListing={deleteListing} />
        ))
      }</ul>
    </main>
  );
}

export default ListingsContainer;
