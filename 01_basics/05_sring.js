//sring consider in both '' ""  quotes in js
const name = "sourav"
const repocount = 6
// console.log(name + repocount);

console.log(`hello my name is ${name} and my repo count is  ${repocount}`);

const sexyname = new String ("banku-mahato-bm")
console.log(sexyname[4]);
console.log(sexyname.__proto__);

console.log(sexyname.length);
console.log(sexyname.toLocaleUpperCase());
console.log(sexyname.charAt(0));
console.log(sexyname.indexOf("b"));

const newstring = sexyname.substring(0,10)
console.log(newstring);

const anotherstring = sexyname.slice(-15,4) //slice is use for negaive value
console.log(anotherstring);

const newstringone = "    sourav   "
console.log(newstringone);
console.log(newstringone.trim());



const url = "https://www.youtube.com"
console.log(url.replace('com','in'));
console.log(url.includes('sunny'));
console.log(sexyname.split('-'));










