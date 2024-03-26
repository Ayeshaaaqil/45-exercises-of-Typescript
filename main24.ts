//
let orange = "orange"
let uppercaseApple = "APPLE"
let Ten = 10;
let twenty = 20;
let vegetables =["carrot" ,"onion" ,"potato"];

//test for equality or unequality

console.log( "is orange is equal to orange?");
console.log(orange =="orange");

console.log("\nis orange is not equal to orange?");
console.log(orange != "orange");

//test for lowercase function
console .log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log( uppercaseApple .toLowerCase()=="apple");

console .log("\nIs APPLE is  not equal to apple after converting to lowercase?");
console.log( uppercaseApple .toLowerCase()!="apple");

//test for Numerical
//equal to
console.log("\n is Ten is equal to twenty?");
console.log(Ten==10);

//not equal to
console.log("\n is Ten is not equal to twenty?");
console.log(Ten!=twenty);

//greater than
console.log("\n is Ten is greater than zero?" );
console.log(Ten> 0);

//less than
console.log("\n is twenty is less than 10?" );
console.log(twenty <  10);

//greater than equal to 
console.log("\nis Ten is greater than or equal to 5?");
console.log(Ten >=5);

//less than or equal to
console.log("\n twenty is less than or equal to 10?");
console.log(twenty>= 10);

//test using "and & "or operations
//using && And
console.log("\n twenty is not equal to 10 & twenty is greater than 10");
console.log(twenty !=10 && twenty > 10);

console.log("\n twenty is not equal to 10 & twenty is greater than 10");
console.log(twenty !=10 && twenty > 30);

//USING ||(OR)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 ==20 );

console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 !=20 );

//test whether an item is include in array
console.log("\n is onion include in my vegetable array");
console.log(vegetables.includes("onion"));

//test whether an item is not include in array
console.log("\n is onion include in my vegetable array");
console.log(!vegetables.includes("onion"));


