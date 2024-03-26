"use strict";
//Creating a Guest List Array
let Guestlist = ["Ali", "ahsan", "ahmad", "khizar"];
//Making variable foe those guest who cant come
let dontCome = Guestlist[0];
//print the name of guest who cant come
console.log(dontCome, "they will not come for dinner");
//add or remove values from guest list array
Guestlist.splice(0, 1, "Ali");
//message print for bigger table
console.log("good news ! we have found a bigger table for dinner.");
//adding a new value at starting index of array
Guestlist.unshift("sara");
//adding a new value at ending index of array
Guestlist.push("Ayesha");
//get a middle index of our guest list array
let middleIndex = Math.floor(Guestlist.length / 2);
//adding a new guest to middle index of array
Guestlist.splice(middleIndex, 0, "Dua");
//Print message of update list
console.log("updated list of guest");
//sending a invitation messager to our guests one by one with their names
Guestlist.forEach(Oneguest => console.log(`Salam ${Oneguest},would you like to dinner with me`));
