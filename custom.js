// 01. kilometerToMeter :
// (negative number will be take as positive number.

var kilometer = -20;
// we know that (1 kilometer = 1000 meters).
var kilometerToMeter = kilometer * 1000;
// console.log(kilometerToMeter);
console.log(Math.abs(kilometerToMeter));

// 02. budgetCalculator :
// (negative number will be take as positive number.
// and 
// decimal number will be take as full number.)

var watch = 10.9;
// Given that (watch price = $50 per watch).
var watchCost = watch * 50;

var phone = -20;
// Given that (phone price = $100 per phone).
var phoneCost = phone * 100;

var laptop = 10;
// Given that (laptop price = $500 per laptop).
var laptopCost = laptop * 500;

budgetCalculator = watchCost + phoneCost + laptopCost;
// console.log(budgetCalculator);

// console.log(budgetCalculator.toFixed());

console.log(Math.abs(budgetCalculator.toFixed()));

// 03. hotelCost :
// (negative number will be take as positive number.
// and 
// decimal number will be take as full number.)


var day = -99.133333;
var hotelCost = 0;
if (day <= 10) {
    hotelCost = day * 100;
}
else if (day <= 20) {
    var firstPackage = 10 * 100;
    var remaining = day - 10;
    var secondPackage = remaining * 80;
    hotelCost = firstPackage + secondPackage;
}
else{
    var firstPackage = 10 * 100;
    var secondPackage = 10  * 80;
    var remaining = day - 20;
    var thirdPackage = remaining * 50;
    hotelCost = firstPackage + secondPackage + thirdPackage;
}
// console.log(hotelCost);
// console.log(hotelCost.toFixed());
console.log(Math.abs(hotelCost.toFixed()));

// 04. megaFriend :

var string = ["sobuj", "mostafiz", "raju", "abdurRahim"]
var megaFriend = string.sort(function(min, max){
    return max.length - min.length;
})[0];
console.log(megaFriend);