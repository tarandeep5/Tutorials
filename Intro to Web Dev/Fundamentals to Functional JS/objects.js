var person = {};    //called object literal - property names/values of object enclosed in curly brackets
                    //in this case, object literal is empty

person.name = "Mrs. White"
var person = {
    "name" : "Mrs. White" //"name" is one word, doesn't need quotation marks
}// this declaration is equivalent to the one above

/*
*when to use "." -
*   methods with objects
*   .then for promise
*   .prototype
*
*
*   ANYTHING USING A DOT IS AN OBJECT
*/

console.log(person.name);
person.name; //this will evaluate to a string that outputs "Mrs. White"

var who = person.name;
person.name = "Mr. White";
console.log(person.name) //still returns "Mrs.White", we are passing by value here

//primative value - String, int, boolean & non-primitive value = Object, promise, etc...

/*
* When you reference primitive value, it gets spot in memory
* non-primative value passes pointer instead of value
*/

//mutating - can update and change values

/* ARRAYS
* We have properties on our arrays, arrays are objects
* Most important part of array is .length property
*/

//we use brackets when we can't use . technically for arrays - because index are number, you can't use . in this case

//ES6 Destructuring

//left side target & right side source

let [first, second] = [true,false] //two different variables, with two different values

const {name, weapon, room} = {
    "name": "Rusty",
    "room": "Kitchen",
    "weapon": "candlestick"
}



