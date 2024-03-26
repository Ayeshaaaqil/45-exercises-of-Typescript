"use strict";
//creating a array
let userNames = ["Sadia", "Zara", "admin", "pawan"];
//using for each loop on array
userNames.forEach(oneuser => {
    if (oneuser === "admin") {
        console.log(`Hello ${oneuser} ,would you like to see a status report?`);
    }
    else {
        console.log(`hello ${oneuser}, thank you for logging in agin.`);
    }
});
