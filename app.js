
/* variable that contains my name */
var myName = 'Hallie';
console.log(myName);


// constant that contains the number of states in the U.S
const states = 50;
console.log(states);


// result of adding 5 and 4 
var number = 5 + 4;
console.log(number);


// write a function called sayHello the displays an alert that says Hello World!
function sayHello(greeting) {
    alert(greeting);
}
sayHello("Hello World!");


// fire checkAge function that checks for name and age
function firstCheckAge(name, age) {
    if (age < 21) {
        console.log("Sorry, " + name + ", you aren't old enough to view this page!")
    } else {
        console.log("You may enter, " + name)
    }
}

firstCheckAge("Charles", 21)
firstCheckAge("Abby", 27)
firstCheckAge("James", 18)
firstCheckAge("John", 17)



// array of my favorite vegetables 
let vegetables = [
    { vegetable: "potato" },
    { vegetable: "broccoli" },
    { vegetable: "edamame" },
    { vegetable: "lettuce" },
];

for (let i = 0; i < vegetables.length; i++)
    console.log(vegetables[i].vegetable);




// create a checkage but with a loop
let array = [
    { name: "Hallie", age: 25 },
    { name: "TJ", age: 26 },
    { name: "Wendy", age: 9 },
    { name: "Jack", age: 14 },
    { name: "Mercedes", age: 21 },
];

function checkAge(name, age) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].age < 21) {
            console.log("Sorry, " + array[i].name + ", you aren't old enough to view this page!")
        } else {
            console.log("You may enter, " + array[i].name + ".")
        }
    }
}

checkAge(array)



// create getLength function




function getLength (str) {
    if (str.length % 2 == 0) {
        console.log('The world is nice and even!')
    }
    else if (str.length % 2 != 0) {
        console.log('The World is an odd place!')
    }
}

getLength("Hello World")
getLength("Goodbye World!")