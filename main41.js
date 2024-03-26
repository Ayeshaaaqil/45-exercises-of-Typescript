"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
let magicianNames = ["Ali", "Safi", "Saad", "Ahmad"];
function show_Magicians() {
    for (let magicianName of magicianNames) {
        console.log(magicianName);
    }
}
;
show_Magicians(); //calling of function
show_Magicians(); // 2nd time calling function
