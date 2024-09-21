/*setTimeout(function(){
    console.log('Three seconds have passed')
},3000);

var Time = 0;

var timer = setInterval(function(){
    Time += 2;
    console.log(Time + 'Seconds have passed');
    if(Time > 6){
        clearInterval(timer)
    }*/

   /* console.log(__dirname);
    console.log(__filename);*/

var stuff = require ('./stuff');

console.log(stuff.counter(['sharon','joy','mercy']));
console.log(stuff.adder(5,6));
console.log(stuff.adder (stuff.pie,12));