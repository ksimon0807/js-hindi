// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // c = 30                
      // console.log("Inner : ", a);
    function add(){
        let a = 56
        // console.log("Innermost : ",a);
        
    }
      
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = "hitesh"

  function two(){
    const website = "youtube"
    console.log(username);
    
  }
  // console.log(website);
  two()
}
// one()

if (true) {
  const username = "hitesh"
  if (username === "hitesh") {
      const website = " youtube"
      console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

addone(5);



addTwo(5)
const addTwo = function(num){       // expression
    return num + 2                   // hoisting ---> declaration se pehle
}

addTwo(5)