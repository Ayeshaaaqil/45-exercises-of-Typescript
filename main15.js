"use strict";
let guestList = ["Ali", "ahsan", "ahmad"];
let dontcome = guestList[0];
console.log(dontcome, "they will not come for dinner");
guestList.splice(0, 0, "Ali");
guestList.forEach(guest => console.log(`Kabeer ${guest},would you like to dinner with me?`));
