


const userEmail = []

if (userEmail) {
    console.log("Got user email");
    
    
}
else {
    console.log("dont have user email");
    
}
//falsy values

// false,0,-0for interview ,BigInt 0 n,"",null,undefined,NaN

// truthy values 
// if 0 in string ex "0","false" because in string," " due to space truth value,[],{},function (){}

if (userEmail.length === 0 ) {
    console.log("array is empty");
    
    
}
// use to check array  empty or not
const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log('Object is empty');
    
    
}
//used to check object emty or not


// Nullish coalscing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 19
val1 = null ?? 10 ??18


console.log(val1);
// operotors help to safety check if null or undefined value came up mainly usefull for calling from database

// terniary operators 

// condition ? true : false


const hotcofeeprice = 100

hotcofeeprice <= 80? console.log("less than 80") : console.log("more than 80")



