const Book = require("../models/book.model.js");

// Create and Save a new book
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a book
  const book = new Book({
    nom: req.body.nom,
    description: req.body.description
  });

  // Save book in the database
  Book.create(book, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the book."
      });
    else res.send(data);
  });
};

// find all published books
exports.findAll = (req, res) => {
  Book.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Update a Book identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Book.patch(
    req.params.id,
    new Book(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found book with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating book with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};