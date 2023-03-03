module.exports = app => {
  // const tutorials = require("../controllers/tutorial.controller.js");
  const book = require("../controllers/book.controller.js");

  var router = require("express").Router();

  // // Create a new Tutorial
  // router.post("/", tutorials.create);

  // // Retrieve all Tutorials
  // router.get("/", tutorials.findAll);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  //Create a book
  router.post("/book/create", book.create)

  //Get all books
  router.get("/book/getAll", book.findAll);

  // Update a Book with id
  router.patch("/book/update/:id", book.update);

  app.use('/api', router);
};
