import React, {useState} from "react";

function PlantCard( {plant} ) {

  const [showStock, setShowStock] = useState(true)

  const { name, image, price } = plant

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {showStock ? (
        <button className="primary" onClick={() => setShowStock(!showStock)}>In Stock</button>
      ) : (
        <button onClick={() => setShowStock(!showStock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
