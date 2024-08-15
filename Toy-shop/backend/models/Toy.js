const mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
});

const Toy = mongoose.model('Toy', toySchema);
module.exports = Toy;
