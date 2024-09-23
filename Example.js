/*var events = require('events');
var util = require ('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary  = new Person ('mary');
var ryu = new Person ('ryu');
var people = [james, mary, ryu];

people.forEach (function(person){
    person.on ('speak', function(mssg){
        console.log(person.name  + ' said: ' + mssg);
    });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'beat the drums');*/

/*var fs = require('fs');

var readme = fs.readFileSync('readMe.txt', 'utf8');
 fs.writeFileSync('writeMe.txt', readme);

// Async file//
fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
})*/

var fs = require ('fs');
  
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data);
    })
})