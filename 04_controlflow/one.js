//if

const isUserLoggedin = true
const temperature = 49



// if (temperature<50) {
//                console.log("less than 50");
               
// }
// else {

//  console.log('temparature greater than 50');   
// }
// console.log('execute');



// if (false) {
    
// }
// < for less than or compare, > any value bigger or not,<=  ex 2<=2 any value bigger or same equivalent,>=,== this used tht its quil or not and normal = for assign something
// != not equial, === is used to check type and equivalent also, !== duable check with not validity






// const score = 200
// if (score >100) {
//     var power = 'fly'
//     console.log(`user power ${power}`);
    
// }
// console.log(`user power ${power}`); // problem with var


// const balance = 1000
// if (balance > 500) console.log("test"),console.log('test2'); // dont do anther log through colun , bad practice
// ; // this is implicit scope means i admit it that here have a scope



// if (balance<500) {
//     console.log("less than 500");
    
// }
// else if (balance<800) {
//     console.log("less than 800");
    
// }
// else if (balance<999) {
//     console.log("less than 999");
    
// }
// else {
//     console.log("less than 1200");
    
// }





const userLoggedin = true
const debitcard = true
const loggedinfromgoogle = true
const loggedinfromemail = false


if (userLoggedin && debitcard) {
    console.log("allow to buy product");    
    
    
}
if (loggedinfromgoogle || loggedinfromemail) {
    console.log("user logged in");
    
    
}
//  &&  everything must true||  here one must true , all are   logical operators