//user_name
let current_users =["Ayesha" ,"Sadia","Areej","Sumaiya","Iqra","Dua"];

//new user_name
let new_users = ["Ali","Ayesha","Sara","Sadia","Sumaiya","Hammad"];

//for each methid
new_users.forEach(new_User =>{
 let new_userLower = new_User.toLowerCase();

// use some method
let userNameTaken = current_users.some(current_user => current_user.
    toLowerCase()===new_userLower);
    //we apply if condition
    if(userNameTaken){
        console.log(`${new_users} needs to choose a new username because its already taken`);

    
    }else{
        console.log(`${new_users}is the new member added`);
   current_users.push(new_User) //add new users to curent user
}
});
//print
console.log()