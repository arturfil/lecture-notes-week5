const { Schema, model } = require("mongoose");

const BookSchema = Schema({
  title: { 
    unique: [true, "Names should be unique"],
    type: String, 
    required: [true, "Title is required"] 
  },
  author: {
    type: String,
    required: [true, 'Author is required']
  },
  pages: {
    type: Number,
    reqwuired: [true, "The Pages number is required"]
  },
  genre: {
    type: [],
    required: [true, "It should have at least one genre"]
  },
});

module.exports = model("Book", BookSchema);