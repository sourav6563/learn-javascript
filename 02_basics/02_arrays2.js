const mcu = ['ironman','spiderman','thor']
const dcu = ['flash','superman','batman']

// mcu.push(dcu)
// console.log(mcu); //here wrong happend what gonna happend here its print other array but also shows second arras data in main array means its mearge in first array or simply forcefully included

// here i can say push is wrong aproach use concat
// mcu.concat(dcu) 
// console.log(mcu); // but problem with it only print mcu array

// const universe = mcu.concat(dcu)
// console.log(universe); // here its conbine properly

// const newuniverse = [...mcu,...dcu] //here its use spread operators
// console.log(newuniverse);



const  real = [1,2,[3,4,5,6,],7,[8,9,1,],0]
const unreal = real.flat(Infinity)
// console.log(real);
console.log(unreal);


console.log(Array.isArray("sourav"))
console.log(Array.from("sourav"));
console.log(Array.from({name:"sourav"})); //intesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));










































 