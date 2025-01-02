

let a = 66
// const b = 30
var c = 300 // problem with var its overright global scope and forcefully print if any block scope is there
//lets clarify
if(true){
    let a = 60
const b = 30
var c = 80
// console.log(a);
// console.log(b);
// console.log(c); // problem with var is if anyone give var value in global scope but still print that block scope

//global scope outside {} that and inner of {} that is block scope

// and please not global scope in node or browser work diff 



}
// console.log(a);
// // console.log(b);
// console.log(c);

// talking about nested scope
function one () {
    const username = "sourav"
    function two (){
        const website = "google"
        console.log(username);
        
    }
    // console.log(website);
    two ()
    
}
// one()
//usually in nested functions child functions can use parent functions but parent function cant print child 
if (true){
    const username = "sourav"
    if (username==="sourav") {
        const website = 'youtube'
        console.log(username + website);
        
    }
    // console.log(website); here it will not work because its out from child function or out of the scope
    

}
// console.log(username); also its not work its out of the scope




// +++++++++++++++++++++++++++++++++++++++++++++++++++Interesing++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(addone (5)); // its hoisting

function addone (num) {
    return  num +1

}
console.log(addone (5));

// console.log(addtwo(18));

const addtwo = function (num) {
    return num + 2
}
console.log(addtwo(18));
// you have to know in that decalred variable method if i put console log before function not work but in before methd work lets see its called hoisting




