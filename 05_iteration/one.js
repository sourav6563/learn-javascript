// for loop


for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 9) {
        // console.log(" we identify 9");
        
        
    }
    // console.log(element);
    
    
}
// console.log(element); not work



for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop value ${i}`);
    

    for (let h = 1; h <= 10; h++) {
        // console.log(`Inner loop value ${h} inner loop ${i}`);
        // console.log(i + "*" + h + " = " + i * h);
        
        
        
    }

    
}

const myarray = ["ironman","superman","rapman" ]
// console.log(myarray.length);




for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
    
}

//  break & continue


// for (let index = 1 ; index <=20; index++) {
//     if (index ===9) {
//         console.log(`Detected 9`);
//         break //its used to break control_flow
        
        
//     }
// console.log(`value of index is ${index}`);
    
// }

for (let index = 1 ; index <=20; index++) {
    if (index ===9) {
        console.log(`Detected 9`);
continue        
        
    }
console.log(`value of index is ${index}`);
    
}