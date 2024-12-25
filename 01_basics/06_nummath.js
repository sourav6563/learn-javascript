const score = 500
console.log(score);

// const balance = 10000
const balance = new Number(20000)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));  //its usefull for ecommerce like example 156.00/or any 4 so 0000
const newbalance = 156.9583
console.log(newbalance.toPrecision(3));

const updatedbalance = 6000000
console.log(updatedbalance.toLocaleString('eng-In'));
// ++++++++++++++++++++++++++++ maths++++++++++++++++++++++++++++++++++ 

// console.log(Math);
// console.log(Math.abs(-18));
// console.log(Math.round(4.9));
// console.log(Math.ceil(4.8));
// console.log(Math.floor(15.3));
// console.log(Math.max(5,8,1,0,8));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1); // but the problem is that there will be a chance of value still zero to avoid add +1
// formula
const maja = 18
const saja = 28
console.log(Math.floor(Math.random() * (maja - saja + 1)) + maja);
console.log(Math.floor(Math.random() * (maja - saja + 1)) + maja);
//    imp









