import React, { useState, useEffect } from 'react';

const ToyDetails = ({ match }) => {
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch(`/api/toys/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => setToy(data));
  }, [match.params.id]);

  if (!toy) return <div>Loading...</div>;

  return (
    <div className="toy-details">
      <h1>{toy.name}</h1>
      <p>{toy.description}</p>
      <p>${toy.price}</p>
      <img src={toy.imageUrl} alt={toy.name} />
    </div>
  );
};

export default ToyDetails;
