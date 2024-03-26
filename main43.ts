let MagicianNames2 =["Ali", "Safi", "Saad", "Ahmad"];

//making a copy of array
let MagicianNamescopy = [...MagicianNames2];

function show_magicians(greet: string){
    let withGreetings = "";

    for(let item of MagicianNamescopy){
        withGreetings += `${greet} ${item}\n`;
    }
    return withGreetings;
};

let myGreetings = show_magicians("hello");
let makeArray = myGreetings.split(`\n`);
console.log(makeArray);

//original aaray
console.log(MagicianNames2)