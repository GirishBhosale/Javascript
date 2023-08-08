const accountId = 144553
let accountEmail = "gb@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed

accountEmail = "gb1@google.com"
accountPassword = "123456"
accountCity = "Mumbai"

console.log(accountId);
/*
prefer not to use var 
because of issue in block scope mean{} and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

