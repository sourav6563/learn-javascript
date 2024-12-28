// there are two ways of declared objects one is literals and second is constructor way

//singleton happend only through constructor

//object literals
mysymbol = Symbol("key")

const jsuser = {
    name: "sourav mahato",
    "fullname": "sourav mahato",
     [mysymbol]:"key", // remember in interview its asked questions in symbol to declare must br used []
    email : "sourav@gmali.com",
    upi: "sourav@ybl",
    city: "adra"

}
console.log(jsuser.email);
// console.log(jsuser.fullname);
console.log(jsuser["fullname"]);
console.log(typeof jsuser.mysymbol);
console.log(jsuser[mysymbol]);

jsuser.email = "sourav@hotmail.com"
// Object.freeze(jsuser)
jsuser.email = "sourav@live.com"

console.log(jsuser);

jsuser.greetings = function(){
    console.log("hello jsuser");
    
    
}
jsuser.greetingtwo = function () {
    console.log(`hello jsuser ${this.name}`);
    
}
console.log(jsuser.greetings());
console.log(jsuser.greetingtwo());











