//aarray as a parameter
function mySandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want Sandwiches of ".concat(items);
}
;
var collection1 = mySandwiches("cheese", "lettuce");
var collection2 = mySandwiches();
var collection3 = mySandwiches("Italy", "Turkey");
//message print
console.log(collection1);
console.log(collection2);
console.log(collection3);
