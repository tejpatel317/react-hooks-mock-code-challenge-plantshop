import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  let plantComponents = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant}/>
  })

  return (
    <ul className="cards">{plantComponents}</ul>
  );
}

export default PlantList;
