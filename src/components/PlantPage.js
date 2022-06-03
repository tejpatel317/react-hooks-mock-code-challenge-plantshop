import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((serverPlants) => setPlants(serverPlants))
  },[])

  function addPlant(newPlant) {
    const newPlants = [...plants, newPlant]
    setPlants(newPlants)
  }

  const searchPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={searchPlants}/>
    </main>
  );
}

export default PlantPage;
