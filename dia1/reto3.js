const readline = require('readline');
const fs = require('fs');


let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


rl.question("¿Como te llamas?", (name) => {
    rl.question("¿Cual es tu apellido?", (surname) => {
      rl.question("¿Cuantos años tienes?", (age) => {
        
        let persona = {
          name: name,
          surname: surname,
          age: age

        };
  
        // console.log(persona);
        let jsoncosa = JSON.stringify(persona)


        fs.writeFile("cosa2.json", jsoncosa, (error) => {
            if (error) {
                console.error("Todo mal", error);
            } else {
                console.log("Todo bien");
            }
            });
        

            fs.readFile("cosa2.json", (error,data) =>{

                if (error) {
                    console.error("Todo mal", error);
                } else {
                    console.log("Todo bien");
                }

            let obj2 = JSON.parse(data)

            console.log(obj2)

  
            rl.close();

      });
    });
  });
})









  


