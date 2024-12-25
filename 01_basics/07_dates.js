// dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
// imp interview asked questions
console.log(typeof mydate);
let newdate = new Date (2025,6,0,4,22)
console.log(newdate.toLocaleString());
let indiaformat = new Date ("10-11-2000")
console.log(indiaformat.toLocaleString());


// let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(indiaformat.getTime());
console.log(Math.floor(Date.now()/1000)); //its for mili second and if i have to convert in second mostly interview question


let upate = new Date()
console.log(upate);
console.log(upate.getDate());
console.log(upate.getMonth()+1); // add +1 to get forcefully month often devloper use this trick
` hey everyone today month is ${upate.getMonth()}` 

console.log(upate.toLocaleDateString("default", {
    weekday : "long"


})
)

















