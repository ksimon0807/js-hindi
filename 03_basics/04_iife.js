// Immediately Invoked Function Expressions (IIFE)


(function chai(){                  // INterw=view
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitehs');