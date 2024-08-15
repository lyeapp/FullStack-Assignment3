import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ToyList = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchToys = async () => {
      const res = await axios.get('/api/toys');
      setToys(res.data);
    };
    fetchToys();
  }, []);

  return (
    <div>
      <h1>Toy List</h1>
      <ul>
        {toys.map(toy => (
          <li key={toy._id}>{toy.name} - ${toy.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToyList;
