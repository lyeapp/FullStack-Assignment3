import React from 'react';
import { Link } from 'react-router-dom';

const ToyItem = ({ toy }) => {
  return (
    <div>
      <h2>{toy.name}</h2>
      <p>{toy.description}</p>
      <p>${toy.price}</p>
      <Link to={`/toy/${toy._id}`}>View Details</Link>
    </div>
  );
};

export default ToyItem;
