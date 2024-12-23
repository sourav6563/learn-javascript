// in javascript datatypes devided mainly in two categories first primitive and second nonprimitive
// lets discuss about primitive
// 7 categories
// string,numbers,boolean,null,undefined,symbol,BigInt(for big values)


const score = 100
const scorevalue = 100.5

// const IsLoggedIn = false

// const outsidetemp = null
// let useremail; its undefined if i not enterd anything

//  const id = symbol('1256')
//  const anotherid = symbol('1256')
// // console.log(id === anotherid);


// reference type/non primitive
// array,objects,Functions
// array  
 const superheroes =["ironman", "spiderman", "thor"] 
//  arrays in mainly [] in that form
// objects
//  let myinfo ={name: "sourav",
// age = 24,  }
// 
// const myfunction = function() {
//     console.log("hello world");
    

// }
// console.log(typeof myfunction );



//                                                            memory related stack & heap


// stack mainly primitive
// heap is mainly nonprimitive
let name ="sourav"
let anothername = name

anothername = "banku"

console.log(name);
console.log(anothername);
let userone = {
    email: "sourav@gmail.com" ,
    upi : "sourav@apl"
}
let usertwo = userone
usertwo.email = "banku@gmail.com"
console.log(userone.email);

console.log(usertwo.email);

