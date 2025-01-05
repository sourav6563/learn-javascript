

const mynums = [1,2,3]
// const mytotal = mynums.reduce( (acc,curval) =>{
//     console.log(`acc:- ${acc} curv:- ${curval}`);
    
//     return  acc + curval
// }, 0 )



 
// console.log(mytotal);
const shoppingcart = [
    {
        itemName: "js_Course",
        price: 999
    },
    {
        itemName: "py_course",
        price: 899
    },
    {
        itemName: "java_course",
        price: 799
    },
    {
        itemName: "typesript_course",
        price: 699
    },
]
const PrcetoPay = shoppingcart.reduce((acc,item) => acc + item.price,0 )
console.log(PrcetoPay);
