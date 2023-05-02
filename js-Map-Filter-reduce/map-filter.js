// Ex.1

const array = [" injustice", "        SuperMan   ", "   Batman ", " flash "];
function cleanNames(array) {
  return array.map((array) => array.trim());
}

console.log(cleanNames(array));

console.log();
console.log("***************");
console.log();

// Ex.2

const miles = [10, 20, 30, 40];
function toKm(miles) {
  return miles.map((miles) => miles * 1.609344);
}
console.log(toKm(miles));

console.log();
console.log("***************");
console.log();

// Ex.3
const array = [1, 2, 3, 4, 5];
let myFun = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += Math.pow(array[index], 2);
  }
  console.log("the sum ="+sum);
  console.log("the avg ="+sum/array.length);
};

myFun(array)

console.log();
console.log("***************");
console.log();

// Ex.4
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((numbers) => numbers + 4);

console.log(newNumbers);

console.log();
console.log("***************");
console.log();

// Ex.5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenDoubleEven = numbers
  .filter((num) => num % 2 == 0)
  .map((num) => num * 2)
  .reduce((acc, cur) => acc + cur, 0);

  console.log(evenDoubleEven)

console.log();
console.log("***************");
console.log();

// Ex.6
const words = ["apple", "banana", "cherry", "date"];

let upperCaseWords = words.map((word) => word.toUpperCase());

console.log(upperCaseWords);

console.log();
console.log("***************");
console.log();

// Ex.7

const heros = [
  { name: "Iron Man", power: "Tech" },
  { name: "Spider-Man", power: "Spider abilities" },
  { name: "Thor", power: "Godly powers" },
  { name: "Hulk", power: "Super strength" },
];

const newHeros = heros.map((heros, index) => {
  return {
    hero: heros.name,
    power: heros.power,
    id: index,
  };
});
console.log(newHeros);

console.log();
console.log("***************");
console.log();

// Ex.8
const inputWords = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
function myfun(array) {
  return (array = array.filter((n) => n.length >= 7));
}

console.log(myfun(inputWords));

console.log();
console.log("***************");
console.log();

// Ex.9
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function oddNumbers(numbers) {
  return numbers.filter((num) => num % 2 != 0);
}

function divisibleBy2or5(array) {
  return numbers.filter((num) => num % 2 == 0 || num % 5 == 0);
}

function divisibleBy3Squared(array) {
  return numbers.filter((num) => num % 3 == 0).map((num) => Math.pow(num, 2));
}

function sumSquaredDivisibleBy5(array) {
  return numbers
    .filter((number) => number % 5 === 0)
    .map((number) => number ** 2)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(oddNumbers(numbers));
console.log(divisibleBy2or5(numbers));
console.log(divisibleBy3Squared(numbers));
console.log(sumSquaredDivisibleBy5(numbers));

console.log();
console.log("***************");
console.log();

// Ex.10
const nums = [11, 22, 33, 46, 75, 86, 97, 98];
const squaredEvenNums = nums
  .filter((num) => num % 2 === 0)
  .map((num) => Math.pow(num, 2));

console.log(squaredEvenNums);
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); 



console.log();
console.log("***************");
console.log();

// Ex.11
const countries = ['India', 'United States', 'Russia', 'Japan', 'China'];

const filteredCountries = countries.filter(country => !['U', 'R'].includes(country.charAt(0)));
console.log(filteredCountries);

const uppercasedCountries = filteredCountries.map(country => country.toUpperCase());
console.log(uppercasedCountries);

const totalCharacters = uppercasedCountries.reduce((acc, Value) => acc + Value.length, 0);
console.log(totalCharacters);


console.log();
console.log("***************");
console.log();

// Ex.12

const numbers = [12, 45, 67, 89, 23, 56, 73, 99, 100];
const numbersGreaterThan50 = numbers.filter(number => number > 50);

console.log(numbersGreaterThan50);