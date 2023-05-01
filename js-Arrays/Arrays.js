// Ex.1
const array = [1, 2, 3, 4, 5];
array.forEach((item) => {
  console.log(item);
});

console.log();
console.log("***********");
console.log();

// Ex.2

const numbers = [1, 2, 3, 4, 5];
const newArr = numbers.map(function square(num) {
  return num * 2;
});

console.log(newArr);

console.log();
console.log("***********");
console.log();

// Ex.3

const arary = [1, 2, 3, 4, 5];
const newArr = arary.filter(function isEven(num) {
  return num % 2 == 0;
});

console.log(newArr)

console.log();
console.log("***********");
console.log();

// Ex.4

const arary = [1, 2, 3, 4, 5];

const newArr = arary.reduce(function sum(sum, num) {
  return (sum += num);
});

console.log(newArr);

console.log();
console.log("***********");
console.log();

// Ex.5

const array= ["apple", "banana", "cherry"];
const newArr=array.sort();
console.log(newArr)

console.log();
console.log("***********");
console.log();

// Ex.6

const array = ["apple", "banana", "cherry"];
const newArr = array.reverse();
console.log(newArr);

console.log();
console.log("***********");
console.log();

// Ex.7
const childArray1 = [1, 2, 3];
const childArray2 = [4, 8, 6];

const parentArray = childArray1.concat(childArray2);
console.log(parentArray);

console.log();
console.log("***********");
console.log();

// Ex.8

const array = [1, 2, 3, 4, 5, 6];
const newArr = array.slice(2, 4);
console.log(newArr);

console.log();
console.log("***********");
console.log();

// Ex.9

const array = [1, 2, 3, 4, 5];
const newArr=array.splice(3,1,2)

console.log(array)

console.log();
console.log("***********");
console.log();

// Ex.10
const array = [1, 2, 3, 4, 5];
let index=array.indexOf(2)
console.log(index)

console.log();
console.log("***********");
console.log();

// Ex.11

const array = [1, 2, 3, 4, 5];
let text=array.join()
console.log(text)

console.log();
console.log("***********");
console.log();

// Ex.12
let text="1 2 3 4 5"
const array = text.split(" ")
console.log(array)

console.log();
console.log("***********");
console.log();

// Ex.13
const array = [1, 2, 3, 4, 5];
console.log(array.length)

console.log();
console.log("***********");
console.log();

// Ex.14
const array = [1, 2, 3, 4, 5];
for (let i of array) {
    console.log(i);
 }

 console.log();
console.log("***********");
console.log();

// Ex.15
const array = [1, 2, 3, 4, 5];
for (let i in array) {
    console.log(i);
 }

console.log();
console.log("***********");
console.log();

// Ex.16
const array = [1, 2, 3, 4, 5];
if (Array.isArray(array)) {
    console.log(true)
}

console.log();
console.log("***********");
console.log();

// Ex.17
const notArray = { 0: "a", 1: "b", 2: "c", length: 3 };
const realArray=Array.from(notArray)
console.log(realArray)

console.log();
console.log("***********");
console.log();

// Ex.18

const array =Array.of("1","2","3")
console.log(array)

console.log();
console.log("***********");
console.log();

// Ex.19
const array = [1, 2, 3, 4, 5];
array.fill(0,0,3)

console.log(array)

console.log();
console.log("***********");
console.log();

// Ex.20

const array = [1, 2, 3, 4, 5];
// [1,1,1,4,5]
array.copyWithin(0, 0, 2);
console.log(array);
