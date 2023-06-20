const {Router} = require ("express")
const enrutado = Router();
const bookCtrl = require("../controller/book.controller")


enrutado.get("/book", bookCtrl.getBook)
enrutado.post("/book", bookCtrl.postBook)
enrutado.put("/book", bookCtrl.putBook)
enrutado.delete("/book", bookCtrl.deleteBook)





module.exports = enrutado;