// x===10 - type and variable are equal, mostly use 

function addNums(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
    return num1 + num2
}

addNums(5,5)

//arrow functions

const addNums2 = (num1 = 1, num2 = 3) => {
    return num1 + num2
}

//reduced

const addNums3 = (num1 = 1, num2 = 3) => num1 + num2;
//todos.forEach((todo) => console.log(todo))

//oop

//constructor function
function Person(firstName, lastName, dob){ //constructors should be capitalized
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.getBirthYear = function () {
        return this.dob.getBirthYear
    }
}

//Instantiate object

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '4-22-1988');

console.log(person1)


