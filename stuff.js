/*var counter = function(arr){
    return "There are " + arr.length + " element in the array";
}

var adder = function(a,b){
    return `The sum of the 2 Number is ${a+b}`;
}

var pie = 3.142;

module.exports.counter= counter;
module.exports.adder = adder;
module.exports.pie = pie; */


/*module.exports.counter =  function(arr){
    return "There are " + arr.length + " element in the array";
}

module.exports.adder =function(a,b){
    return `The sum of the 2 Number is ${a+b}`;
}

module.exports.pie = 3.142;
*/

var counter = function(arr){
    return "There are " + arr.length + " element in the array";
}

var adder = function(a,b){
    return `The sum of the 2 Number is ${a+b}`;
}

var pie = 3.142;

module.exports = {
    counter:counter,
    adder:adder,
    pie:pie
}