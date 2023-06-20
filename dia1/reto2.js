const fs = require("fs");

let objeto = {

    name: "Pedro",
    surname: "Diaz",
    age: 7

}

let jsoncosa = JSON.stringify(objeto)


fs.writeFile("cosa.json", jsoncosa, (error) => {
    if (error) {
      console.error("Todo mal", error);
    } else {
      console.log("Todo bien");
    }
  });

fs.readFile("cosa.json", (error,data) =>{

    if (error) {
        console.error("Todo mal", error);
      } else {
        console.log("Todo bien");
      }

    let obj = JSON.parse(data)

    console.log(obj)

  })
