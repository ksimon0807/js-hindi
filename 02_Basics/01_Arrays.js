// arrays  >:

// const How = [0,1,2,5,6,true,"hitesh"] ----- allowed
const myArr = [0,1,2,5,6]

console.log(myArr[0]);

const myHeroes = ["shaktimabn","naagraj"]
const myArr2 = new Array(56,562,45,12)

// Arrays methods ---

myArr.push(6)
myArr.push(8)
myArr.push(6)
myArr.pop()
myArr.unshift(5)
myArr.shift()
console.log(myArr);
console.log(myArr.includes(5));
console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

// slice splice

console.log("a " + myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("b "+myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c "+myArr);

                                      









