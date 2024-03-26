//aarray as a parameter

function mySandwiches(...items:string[]){
    return `I want Sandwiches of ${items}`;
};

let collection1 = mySandwiches("cheese", "lettuce");

let collection2 = mySandwiches();

let collection3 = mySandwiches("Italy", "Turkey");

//message print
console.log(collection1);
console.log(collection2);
console.log(collection3);