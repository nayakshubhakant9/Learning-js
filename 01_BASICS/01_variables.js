const accountId = 14434
let accountEmail = "shubhakant@gmail.accountEmail"
var accountPassword = "1234"
accountCity = "Surat"
let accountState;

// accountId = 2 is not allowed because it is in constant

accountEmail = "workv@gmail.com"
accountPassword = "232323"
accountCity = "Bengaluru"
console.log(accountId);

/* prefer not to use var because
of issue in block scope and function scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])