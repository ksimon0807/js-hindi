const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4               // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

const myNums = [4,5,8]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`the acc is : ${acc} and the current val is : ${currval}`);
//     return acc + currval
// },-5)

const myTotal = myNums.reduce((acc,currval) => {
    return acc+currval
},0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const myPurchase = shoppingCart.reduce((acc,item) => (acc + item.price),0)

console.log(myPurchase);





const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

