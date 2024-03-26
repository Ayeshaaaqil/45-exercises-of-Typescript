"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
let MagicianNames = ["Ali", "Safi", "Saad", "Ahmad"];
function show_magicians(greet) {
    for (let items of MagicianNames) {
        console.log(greet, items);
    }
}
;
show_magicians("Hello, How are you Mr."); //calling of function
show_magicians("Hello,"); //  2nd time calling function
