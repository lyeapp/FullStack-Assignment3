const express = require('express');
const Toy = require('../models/toyModel');

const router = express.Router();

// Get all toys
router.get('/', async (req, res) => {
  try {
    const toys = await Toy.find();
    res.json(toys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new toy
router.post('/', async (req, res) => {
  const { name, price, description, imageUrl } = req.body;

  const toy = new Toy({
    name,
    price,
    description,
    imageUrl
  });

  try {
    const newToy = await toy.save();
    res.status(201).json(newToy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a single toy
router.get('/:id', async (req, res) => {
  try {
    const toy = await Toy.findById(req.params.id);
    if (toy == null) {
      return res.status(404).json({ message: 'Toy not found' });
    }
    res.json(toy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
