// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// to prvent the pollution caused by the global scope we use iife 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Girish') 



