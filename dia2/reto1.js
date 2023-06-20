const fs = require("fs/promises");

let objeto = {

    name: "Pedro",
    surname: "Diaz",
    age: 7

}

fs.writeFile("persona.json", JSON.stringify(objeto))

.then(() => {
    return fs.readFile("persona.json", "utf-8")
})
.then(data => {
    console.log(JSON.parse(data));
})
.catch(err =>{
    console.log(err);
})

// let jsoncosa = JSON.stringify(objeto)


// fs.writeFile("cosa.json", jsoncosa, (error) => {
//     if (error) {
//       console.error("Todo mal", error);
//     } else {
//       console.log("Todo bien");
//     }
//   });

// fs.readFile("cosa.json", (error,data) =>{

//     if (error) {
//         console.error("Todo mal", error);
//       } else {
//         console.log("Todo bien");
//       }

//     let obj = JSON.parse(data)

//     console.log(obj)

//   })