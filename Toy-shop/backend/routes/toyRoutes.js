const express = require('express');
const Toy = require('../models/Toy');
const router = express.Router();

// Create a new toy
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const newToy = new Toy({ name, price, description });
    const savedToy = await newToy.save();
    res.status(201).json(savedToy);
  } catch (error) {
    res.status(500).json({ error: 'Error creating toy' });
  }
});

// Get all toys
router.get('/', async (req, res) => {
  try {
    const toys = await Toy.find();
    res.json(toys);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching toys' });
  }
});

module.exports = router;
