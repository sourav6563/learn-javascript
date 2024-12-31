//objects in constructors

// const linkedinUser = new Object ()
const linkedinUser = {}
linkedinUser.id = "73648sm"
linkedinUser.name = "sourav_mahato"
linkedinUser.isloggedin = false
// console.log(linkedinUser);
const newUser = {
    email: "souravm@hmail.com",
    fullname: {
        userfullname: {
            firstname: "sourav",
            lastname: "mahato",
        }
    }

}
console.log(newUser.fullname?.userfullname.firstname);
const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"a",5:"b",6:"c"}
// const obj3 = {obj1,obj2} // but the problem occures like same array problem where objects in object inner
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}  //majorly use this spread for combine objects


// console.log(obj3);

const User= [
{
    id: 1,
    email: "Asouravm@gmail.com"
},
{
    id: 1,
    email: "Bsouravm@gmail.com"
},
{
    id: 1,
    email: "Csouravm@gmail.com"
},
{
    id: 1,
    email: "Dsouravm@gmail.com"
},
{
    id: 1,
    email: "Esouravm@gmail.com"
},

]
// console.log(User[0].email);
// console.log(linkedinUser);
// console.log(Object.keys(linkedinUser));
// console.log(Object.values(linkedinUser));
// console.log(Object.entries(linkedinUser));
// // to check value in object
// console.log(linkedinUser.hasOwnProperty("name"));


// destructring objects 

const course = {
    coursename: "javascript",
    price:  499,
    duration: "40_hours",

}
// course.coursename
const {coursename:n} = course // through that method we distructure objects
console.log(n);

// here also discuss about json  through obj also arry in obj format like {} inside data in array [{ inside the object data}]












