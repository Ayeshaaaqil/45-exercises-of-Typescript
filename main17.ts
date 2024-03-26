import { Console } from "console";

//Creating a Guest List Array
let GuestList = ["Ali","ahsan","ahmad","khizar"];

//Making variable foe those guest who cant come
let DontCome =GuestList [0];

//print the name of guest who cant come
 
console.log(DontCome, "they will not come for dinner")

//add or remove values from guest list array

GuestList.splice(0, 1,"Ali");

//message print for bigger table
console.log ("good news ! we have found a bigger table for dinner.");

//adding a new value at starting index of array
GuestList.unshift("sara");

//adding a new value at ending index of array
GuestList.push("Ayesha");

//get a middle index of our guest list array
let MiddleIndex: number =Math.floor(GuestList.length / 2);

//adding a new guest to middle index of array
GuestList.splice(MiddleIndex, 0 ,"Dua");

//Print message of update list
console.log("updated list of guest");

//sending a invitation messager to our guests one by one with their names
GuestList.forEach(Oneguest => console.log(`Salam ${Oneguest},would you like to dinner with me`));

console.log ("unfortunately, the new dinner table wont arrived on time , so i can only invite two guests to dinner with me.")

//using while loop to remove guest from the array until only two names remain
while (GuestList.length > 2){
    let removedGuest = GuestList.pop();
    console.log (`sorry,${removedGuest} i cant invite you to diner`);
}
console .log ("Invitation to the 2 Guests");

GuestList.forEach(lastNames => console .log(`luckly ${lastNames}you are still invited to dinner`));
// removing last two guest in list
GuestList.pop();
GuestList.pop();

console.log("Empty List:", GuestList);
