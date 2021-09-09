const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// configure env variables
require('dotenv').config();

// db connection
mongoose.connect(process.env.DB_URL)
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("ERROR: Could not connect to DB..."))

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/api/books', require('./routes/book.js'));

// listen to port connection
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server running...");
})
