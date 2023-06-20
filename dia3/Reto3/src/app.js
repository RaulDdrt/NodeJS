const express = require("express");
const cors = require("cors");
const enrutado = require("../src/routers/book.routers");
const errorHandling = require("../src/error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(enrutado);
app.use((req, res, next) =>{
    res.status(418).json({
        error:true,
        codigo: 418,
        mensaje: "I`m a teapot"
    })
})

app.use(errorHandling);

module.exports = app;
