const user = {
    username: "sourav",
    price: 999,
    WelcomeMessage: function (){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    
    } 

}
// user.WelcomeMessage()
// user.username = "banku"
// user.WelcomeMessage()
// console.log(this);


// this used to current context reffer
//in browser global object is window but in node environment empty

// function honey (){
//     let username = "sourav"
//     console.log(this.username); //this context not work in function becaue the context in function its need to be in object
    
// }
// honey()




// this also way to to make function 
// showing arrow function

const honey = () =>  {
    let username = 'sourav'
    console.log(this);
    


} 
// honey()





// const addtwo =  (num1,num2) => {
//     return num1 + num2

    
// } //this also diff way
// const addtwo =  (num1,num2) =>   num1 + num2 
// const addtwo =  (num1,num2) =>   (num1 + num2)  //two diff approach   
// its an implicit return mean here we not use return
const addtwo =  (num1,num2) =>  ({username: "sourav"}) // if object add than( ) this must


console.log(addtwo(500,600));

const myarray = [5,6,9,10]
// myarray.forEach()
 




