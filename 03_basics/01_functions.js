

function sayMyName(){
    console.log("G");
    console.log("I");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result:", result);

// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
  console.log("please enter a username");
  return 
}

return `${username} just logged in`
}

// console.log(loginUserMessage("Girish"))
console.log(loginUserMessage("Girish"))



