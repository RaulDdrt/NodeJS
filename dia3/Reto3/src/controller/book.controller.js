const Book = require("../models/book")

let book1 = new Book ("Cronicas de la Dragonlance", "Dura", "M. Weiss", 20, "http://foto.com", 1, 2)
let book2 = new Book ("Uzumaki", "Dura", "Junji Ito", 30, "http://foto.com", 2, 3)
let book3 = new Book ("Neon Genesis Evangelion", "Blanda", "Hideaki Anno", 15, "http://foto.com", 3, 4)
let book4 = new Book ("El Ultimo Deseo", "Dura", "Andrzej Sapkowski", 25, "http://foto.com", 4, 5)

let book = [book1,book2,book3,book4]

// console.log(book)

const getBook = (req,res)=>{
    let resultado;

    if (book != null) {

        if (req.query.id != undefined) {
            let i = 0;

            while (req.query.id != book[i].id_book && i < book.length) {
                i++;
            }

            if (req.query.id == book[i].id_book) {
                resultado = book[i];
            }else{
                resultado = "No hay libros con esa ID"
            }
        }else{
            resultado = book;
        }
    }else{
        resultado = "No hay libros";
    }
    res.send(resultado);
}

let books = [];

const postBook = (req, res) => {
    const { id_book, id_user, title, type, author, price, photo } = req.body;

    if (!id_book || !id_user || !title || !type || !author || !price || !photo) {
        return res.status(400).json({ mensaje: "Rellena todos los campos" });
    }

    let newBook = new Book (id_book, id_user, title, type, author, price, photo);
    books.push(newBook);

    console.log(book.length);
    console.log(newBook);

    res.status(201).json({ mensaje: "El libro ha sido creado", book: newBook });
};

const editBook = (req,res)=> {
    let respuesta;
    let i = 0;
    while (req.body.id_book != book[i].id_book && i < book.length) {
        i++;
    }

    if (req.body.id_book == book[i].id_book) {
        if (req.body.title != undefined) {
            book[i].title = req.body.title;
        }
        if (req.body.type != undefined) {
            book[i].type = req.body.type;
        }
        if (req.body.author != undefined) {
            book[i].author = req.body.author;
        }
        if (req.body.price != undefined) {
            book[i].price = req.body.price;
        }
        if (req.body.photo != undefined) {
            book[i].photo = req.body.photo;
        }
        if (req.body.id_book != undefined) {
            book[i].id_book = req.body.id_book;
        }
        if (req.body.id_user != undefined) {
            book[i].id_user = req.body.id_user;
        }
        respuesta = "se ha modificado el libro"
    }

    res.send(respuesta);
}

const deleteBook = (req, res) => {
    const id = req.body.id_book;
    const index = book.findIndex((book) => book.id_book === id);
  
    if (index !== -1) {
      book.splice(index, 1);
      res.send("Libro eliminado correctamente");
    } else {
      res.send("No existe ningún libro con el ID proporcionado");
    }
  };
module.exports = { getBook, postBook, editBook, deleteBook};