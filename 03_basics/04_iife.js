// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// to prvent the pollution caused by the global scope we use iife 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Girish') 





// learn about How does javascript code execution works and call stack
// When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

// During the context runtime, the parser parses the source code and allocates memory for the variables and functions. The source code is generated and gets executed.

// There are two types of execution contexts: global and function. The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. A function execution context is created whenever a function is called, representing the function's local scope.
