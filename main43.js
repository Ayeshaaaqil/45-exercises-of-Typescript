var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MagicianNames2 = ["Ali", "Safi", "Saad", "Ahmad"];
//making a copy of array
var MagicianNamescopy = __spreadArray([], MagicianNames2, true);
function show_magicians(greet) {
    var withGreetings = "";
    for (var _i = 0, MagicianNamescopy_1 = MagicianNamescopy; _i < MagicianNamescopy_1.length; _i++) {
        var item = MagicianNamescopy_1[_i];
        withGreetings += "".concat(greet, " ").concat(item, "\n");
    }
    return withGreetings;
}
;
var myGreetings = show_magicians("hello");
var makeArray = myGreetings.split("\n");
console.log(makeArray);
//original aaray
console.log(MagicianNames2);
