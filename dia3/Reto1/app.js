const express = require ("express");
const app = express();

app.use((req, res, next) => {

  console.log("Peticion recibida del cliente");
  console.log("URL: ", req.url);
  console.log("Metodo: ", req.method);
  console.log("User-Agent:", req.headers["user-agent"]);
  next();

});

app.get("/", (req, res) => {

//   res.send("Hello there. General Kenobi, you are a bold one");
  let mensaje = { ok: true, mensaje: "recibido!"}
  res.status(200).json(mensaje)

});

app.get("/Bye", (req, res) => {

  let mensaje = { ok: true, mensaje: "adios!"}
  res.status(200).json(mensaje)

})

const port = 3010;

app.listen(port, () => {

  console.log("Puerto 3010")

})