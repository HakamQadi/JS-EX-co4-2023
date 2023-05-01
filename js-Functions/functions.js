// Ex.1
function findSmallest(array) {
  return Math.min(...array);
}
console.log(findSmallest([30, 45, 60, 7]));

console.log();
console.log("***************");
console.log();
// Ex.2

function AlphabeticalOrder(text) {
  return text.split("").sort().join("");
}

console.log(AlphabeticalOrder("hello"));

console.log();
console.log("***************");
console.log();
// Ex.3

function factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(8));

console.log();
console.log("***************");
console.log();
// Ex.4

function oddOrEven(num) {
  if (num % 2 == 0) {
    return "Even";
  } else if (num % 3 == 0) {
    return "Odd";
  }
}

console.log(oddOrEven(3));

console.log();
console.log("***************");
console.log();
// Ex.5

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function odd(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      array.splice(i, 1);
    }
  }

  console.log(array);
}

odd(array);

console.log();
console.log("***************");
console.log();
// Ex.6
const array = ["Ayham", 3, 7, "Alaa", 13, "coding"];
function numbersOnly(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      array.splice(i, 1);
    }
  }

  console.log(array);
}

numbersOnly(array);

console.log();
console.log("***************");
console.log();
// Ex.7

function addUp(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUp(8));

console.log();
console.log("***************");
console.log();
// Ex.8
function minMaxLengthAverage(array) {
  let newArray = [];

  // find min
  function getMin() {
    let min = Math.min(...array);
    return min;
  }
  // find max
  function getMax() {
    let max = Math.max(...array);
    return max;
  }
  // getlength
  function getLength(array) {
    return array.length;
  }
  // find average
  function getAvg(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
      sum += array[index];
    }
    return sum / array.length;
  }

  newArray.push(getMin());
  newArray.push(getMax());
  newArray.push(getLength(array));
  newArray.push(getAvg(array));

  return newArray;
}
const array = [7, 13, 3, 77, 100];
console.log(minMaxLengthAverage(array));

console.log();
console.log("***************");
console.log();
// Ex.9
function romanNumbers(number) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  for (let key in romanNumerals) {
    while (number >= romanNumerals[key]) {
      result += key;
      number -= romanNumerals[key];
    }
  }

  return result;
}

console.log(romanNumbers(1989));

console.log();
console.log("***************");
console.log();
// Ex.10

function countWords(text) {
  let words = text.split(" ");
  return words.length;
}
console.log(countWords("hello from CodingAcademy!"));

console.log();
console.log("***************");
console.log();
// Ex.11

function MultiplyByLength(array) {
  let newArray = [];
  for (const i of array) {
    newArray.push(i * array.length);
  }
  return newArray;
}

console.log(MultiplyByLength([4, 2, 5]));

console.log();
console.log("***************");
console.log();
// Ex.12

function checkEnding(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let start = str1.length - str2.length;
  let endx = str1.length;
  let endOfStr1 = str1.substring(start, endx);

  return endOfStr1 === str2;
}
console.log(checkEnding("CodingSchool", "ol"));

console.log();
console.log("***************");
console.log();
// Ex.13

function doubleChar(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    result += text[i] + text[i];
  }

  return result;
}
console.log(doubleChar("Coding"));

console.log();
console.log("***************");
console.log();
// Ex.14

function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i + 1;
    }
  }
}
console.log(findIndex(["Ali", "Mazen", "Ayham", "Murad"], "Ali"));

console.log();
console.log("***************");
console.log();
// Ex.15

function getAbsSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return Math.abs(sum);
}
console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));
