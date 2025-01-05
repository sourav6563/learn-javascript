

const mynumbers = [1,2,3,4,5,6,7,8,9,10]
// const number = mynumbers.map((numb) => numb + 10)


//here we saw chaining


const number = mynumbers.map((numb) => numb * 10).map((numb)=> numb + 1).filter((numb)=> numb >=31 )


console.log(number);
