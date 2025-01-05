

// for each loop 
// for arrays most frequent use loops
const programming = ['java','c++','javascript','typescript','python','ruby']
// programming.forEach(function (value) {
//     console.log(value);
    
    
// }  )
// programming.forEach( (value) => {
//     console.log(value);
    
    
// })




// function printme(value) {
//     console.log(value);
    
    
// }
// programming.forEach(printme)

// programming.forEach((item,index,arr) => {
//     console.log(item,index,arr);
    

// })

const mycoding = [
    {
        languageName: 'javascript',
        languageFilename: "js_file"
    },
    {
        languageName: 'python',
        languageFilename: "py_file"
    },
    {
        languageName: 'java',
        languageFilename: "java_file"
    },
    {
        languageName: 'c++',
        languageFilename: "c++_file"
    }

]
mycoding.forEach((item)=>{
    console.log(item.languageFilename);
    
})
