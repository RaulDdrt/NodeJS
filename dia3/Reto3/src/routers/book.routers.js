const {Router} = require("express");
const enrutado = Router();
const bookControl = require("../controller/book.controller")

enrutado.get("/book", bookControl.getBook)
enrutado.post("/book", bookControl.postBook)
enrutado.put("/book", bookControl.editBook)
enrutado.delete("/book", bookControl.deleteBook)

module.exports = enrutado;