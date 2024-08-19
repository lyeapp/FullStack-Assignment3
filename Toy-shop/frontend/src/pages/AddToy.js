import React, { useState } from 'react';

const AddToy = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newToy = {
      name,
      description,
      price,
      imageUrl,
    };

    fetch('/api/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Toy added:', data);
        setName('');
        setDescription('');
        setPrice('');
        setImageUrl('');
      });
  };

  return (
    <form className="add-toy-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Toy Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-button">
        Add Toy
      </button>
    </form>
  );
};

export default AddToy;

