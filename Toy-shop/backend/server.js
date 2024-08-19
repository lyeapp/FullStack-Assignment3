const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const toyRoutes = require('./routes/toyRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DBHOST, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/toys', toyRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
