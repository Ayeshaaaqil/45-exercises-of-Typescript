//creating a array
let usernames = ["Sadia","Zara","admin" ,"pawan"];

// remove all values from array
usernames = []

if (usernames.length===0){
console.log("your array in empty we need to find some users!?")
}
else{
    //using for each loop on array
usernames.forEach(oneuser =>{
    if(oneuser ==="admin"){
        console.log(`Hello ${oneuser} ,would you like to see a status report?`)     
    }else {
        console.log(`hello ${oneuser}, thank you for logging in agin.`)
    }
})
}