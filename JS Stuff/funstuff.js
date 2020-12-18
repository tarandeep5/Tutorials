//var (old, global scope)
//let - reassign variables
//const - fixed variable

let score;
score = 10;

// Concatenation
console.log('My score is ' + score);
// Template String
const hello = (`My score is ${score}`);

const s = 'Hello World';

console.log(s.substring(0,5).toUpperCase());

//Arrays

const numbers = new Array(1,2,3,4,5)
console.log(numbers)

const fruits = ['apples','oranges','pears'];
fruits.push('mangos'); //aappends to the end of the array
fruits.pop(); //takes last element off 

//Objects

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music","movies","sports"],
    address: {
        street: "Some address",
        city: "Some city",
        state: "MA"
    }
}

console.log(person.hobbies[1])
person.email = "dummy@gmail.com"

console.log(person)

// For loops

for (let i =0; i<10; i++) {
    console.log(`For Loop Numbers: ${i}`);
}

//forEach, map, filter
let todo = [
    {
        id: 1,
        text: 'Hello',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Yo',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Complete',
        isCompleted: true
    }
];

todos.forEach(function(todo) {
    console.log(todo.text)
});

//Map - return value and store in variable, not a void function

const todoText = todos.map(function(todo){
    return todo.text;
});

//Filter - as name suggests, will look at condition and return based off condition

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

