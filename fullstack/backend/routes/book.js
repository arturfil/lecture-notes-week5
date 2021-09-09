const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Book.find();
  try {
    return res.status(200).json(books);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error: there was somethign wrong with the server" });
  }
});

router.get("/book/:id", async (req, res) => {
  const {id} = req.params;
  const response = await Book.findById(req.params.id); // req.params.id
  try {
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({message: "Could not find the book"})
  }
})

router.post("/book", async (req, res) => {
  const bookToCreate = await Book.create({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    genre: req.body.genre
  });
  try {
    return res.status(201).json(bookToCreate);
  } catch (error) {
    return res.status(500).json({message: "Error: Coudn't create the book", error})
  }
})

module.exports = router;
