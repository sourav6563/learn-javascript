// learn function

function myname (){
    console.log("s");
    console.log("s");
    console.log("s");
    console.log("m");
    console.log("v");
    
}
myname ()


// function addTwonumber (add1, add2) {
//     console.log(add1 + add2);

// }


// function addTwonumber (add1, add2) {

// // let result = add1 + add2
// // return result // after doing return no other thing add not work in function

// return add1 + add2

// }

// const result = addTwonumber (3,5)
// console.log("Result:",result);

//in if function use can do !username same like before diff method equivalent like ===
function loginUserMessage (username = "banku") {
    if (username === undefined ) {
        console.log("please enter a username");
        return
        

    }
    return `${username} just loggedin `


}

// console.log(loginUserMessage ("sourav")); // here a interview question in the bracket ot any string or value add than undefind shows
console.log(loginUserMessage ()); 


// here ... also use as rest operate and also spread operators in fuction use rest operators


function CalculateCartprice (mc,bc,...num1){
    return num1

}
// console.log(CalculateCartprice(200,400,800,900));

// const  user = {
//     username: "sourav",
//     price:  449,
// // }
// function handleobject (anyobject) {
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }
// // handleobject(user)
// handleobject(
//     // const  user = {
//     //     username: "sourav",
//     //     price:  449,
//     {
//         username:"banku",
//         price:599,
//     }
// )

// const mynewarray =  [100,500,600,900]

function returnsecondvalue (getarray){
    return  getarray[2]

}
// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([100,500,600,900]));




