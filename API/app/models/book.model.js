const sql = require("./db.js");

// constructor
const Book = function (tutorial) {
  this.id = tutorial.id;
  this.nom = tutorial.nom;
  this.description = tutorial.description;
};
//======================================================================
//                               POST
//======================================================================
Book.create = (newBook, result) => {
  sql.query("INSERT INTO book SET ?", newBook, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created book: ", { id: res.insertId, ...newBook });
    result(null, { id: res.insertId, ...newBook });
  });
};

//======================================================================
//                               GET
//======================================================================
Book.getAll = result => {
  sql.query("SELECT * FROM book", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("book: ", res);
    result(null, res);
  });
};

//======================================================================
//                               PATCH
//======================================================================
Book.patch = (id, book, result) => {
  sql.query(
    "UPDATE book SET nom = ?, description = ? WHERE id = ?",
    [book.nom, book.description, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated book: ", { id: id, ...book });
      result(null, { id: id, ...book });
    }
  );
};

module.exports = Book;