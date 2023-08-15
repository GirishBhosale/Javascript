//  singleton    when you make from any constructor singleton object is created


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Girish",
    "full name": "Girish Bhosale",
    [mySym]: "mykey1",
    age: 18,
    location: "Pune",
    email: "girish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "Girish@cactus.com"
// Object.freeze(JsUser)
JsUser.email = "girish@cactus.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
