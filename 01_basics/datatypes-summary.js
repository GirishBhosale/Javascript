// primitive

// 7 types: string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);


// const bigNumber = 165623236551316623n



// Reference type(Non primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doha"];
let myObj = {
    name: "Girish"

}

function myfunction() {
    console.log("Hello world");
}

console.log(typeof anotherId);




// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++


// stack(primitve), heap(non primitve)  memory

let myYoutubename = "Girish"

let anothername = myYoutubename
anothername = "cactus"


console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "gb@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@goofle.com"

console.log(userOne.email);
console.log(userTwo.email);
