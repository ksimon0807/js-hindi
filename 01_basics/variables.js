const accountId = 144553
let accountEmail = "mujjawa@gmail.com"
var accountPassword = "12354"
accountCity = "jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "25455"
accountCity = "Bengaluru"

console.log(accountId);

//Prefer not to use var bcoz of issue of bloack scope and fucntional scope

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
