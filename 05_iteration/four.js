

// how to work obj in for loop using for in loop not for of loop

const myObj = {

    JS: "javascript",
    cpp: "c++",
    rb : "ruby",
    swift : "swift by appl"
}
for (const key in myObj) {
    // console.log(key,myObj[key]);
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
    
   
}
// for in also work in array


const programming = ['js','cpp','ts','sift']
for (const key in programming) {
    console.log(key,":-",programming[key]);
    
}
    