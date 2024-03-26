//making array of Countries and print its original order
let countriesToVisit:string[] =["turkey","china","london","dubai"];
 console.log("original order:",countriesToVisit);

//print the array alphabetical order without modifying the actual list array
 console.log("alphabetical order:",[...countriesToVisit].sort);

//show that array is still in its original order
 console.log("still it original order:", countriesToVisit);

 //print the array in reversed order without modifying the actual array list
 console.log("reverse order:", [...countriesToVisit].reverse());

 //still in original lenght
 console.log("still it original order:", countriesToVisit);

 //we have changed the original array list
 console.log("original array length:",countriesToVisit.reverse());

 //print the array to show that its back to its original order
 console.log("back to original order:",countriesToVisit.reverse());

 //print the array to show that its order has been changed in alphabetical order
 console.log("sorted in alphabetical order:",countriesToVisit.sort());

 //we have changed the original array list again
 console.log("reverse order:", [...countriesToVisit].reverse());