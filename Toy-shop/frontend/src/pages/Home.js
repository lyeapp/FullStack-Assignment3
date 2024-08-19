import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome </h1>
      <p>Your one-stop shop for the best toys in town. Explore our wide range of toys for all ages.</p>
      <div className="home-actions">
        <Link to="/toys" className="home-button">
          View Toys
        </Link>
        <Link to="/add-toy" className="home-button">
          Add a New Toy
        </Link>
      </div>
    </div>
  );
};

export default Home;
