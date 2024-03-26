"use strict";
function make_Shirt(size = "Large", printMessage = "I Love Typescript and Javascript") {
    console.log(`Creating a ${size} size shirt with ${printMessage} prints on shirt`);
}
//calling a function with by default values
make_Shirt();
//calling a function now with medium size
make_Shirt("Medium");
//calling a function now with small size
make_Shirt("Small", "I Love Puyton");
