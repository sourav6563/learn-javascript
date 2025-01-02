//immediate invoked function expressions (IIFE)

(function honey () {
    //its a name iife
    console.log(`DB  CONNECTED`);
    
}) () ; //two iife must ;
// MAINLY IIFE IS USED TO GLOBAL SCOPE POLLUTION  REMOVED IN IFFE MUST ; NEED OTHER WISE FIRST CODE NOT END

((NAME) => { 
    //unnamed iife
    console.log(`DB NOT CONNECTED${NAME}`);
    
}) ('sourav')