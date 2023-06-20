const readline = require("readline");
const fs = require("fs/promises");

function pregunta(pregunta) {
  
    const question = new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
      rl.close();
    });
  });
  
  return question;
}

let respuesta
let respuesta2
let respuesta3

pregunta("¿Cuál es tu nombre?")
  .then((answer) => {
    respuesta = answer
    console.log(respuesta);
    return pregunta("¿Como te apellidas?");
  })

  .then((answer) => {
    respuesta2 = answer
    console.log(respuesta2);
    return pregunta("¿Que edad tienes?");
  })

  .then((answer) => {
    respuesta3 = answer
    console.log(respuesta3);

    const who = {
      nombre: respuesta,
      apellido: respuesta2,
      edad: respuesta3,
    };
    fs.writeFile("persona2.json", JSON.stringify(who))

    .then(() => {
        return fs.readFile("persona2.json", "utf-8")
    })
    .then(data => {
        console.log(JSON.parse(data));
    })
    .catch(err =>{
        console.log(err);
    })

  })
  .catch((error) => {
    console.error(error);
  });
