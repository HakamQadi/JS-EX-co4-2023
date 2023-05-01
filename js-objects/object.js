// Ex.1
let info = {
  name: "Adam",
  age: 25,
  gender: "male",
};

console.log(info.name)
console.log(info.age)
console.log(info.gender)

console.log();
console.log("**************");
console.log();
// Ex.2
let info = {
  name: "Adam",
  age: 25,
};

info.gender = "male";
console.log(info);

console.log();
console.log("**************");
console.log();
// Ex.3

let info = {
  name: "Adam",
  age: 25,
};

info["gender"] = "male";
console.log(info);

console.log();
console.log("**************");
console.log();
// Ex.4

let info = {
  name: "Adam",
  age: 25,
  gender: "male",
};

console.log(info.name)

console.log();
console.log("**************");
console.log();
// Ex.5

let info = {
  name: "Adam",
  age: 25,
  gender: "male",
};

console.log(info["name"])

console.log();
console.log("**************");
console.log();
// Ex.6

let info = {
  name: "Adam",
  age: 25,
  gender: "male",
};

for (let properties in info) {
  console.log(properties + ": " + info[properties]);
}

console.log();
console.log("**************");
console.log();
// Ex.7

let info = {
    name: "Adam",
    age: 25,
    gender: "male",
  };

  const arrayOfObj=Object.keys(info)

  console.log(arrayOfObj)

console.log();
console.log("**************");
console.log();
// Ex.8

let info = {
  name: "Adam",
  age: 25,
  gender: "male",
};

const arrayOfObj = Object.values(info);

console.log(arrayOfObj);

console.log();
console.log("**************");
console.log();
// Ex.9

let info = {
    name: "Adam",
    age: 25,
    gender: "male",
  };

  const arrayOfObj=Object.entries(info)

  console.log(arrayOfObj)

console.log();
console.log("**************");
console.log();
// Ex.10

let info1 = {
    name: "Adam",
    age: 25,
  };

  let info2 = {
    gender: "male",
  };

  const arrayOfObj=Object.assign(info1,info2)

//   console.log(info1)
  console.log(arrayOfObj)

console.log();
console.log("**************");
console.log();
// Ex.11

let info = {
  name: "Adam",
  age: 25,
};
Object.freeze(info);
console.log(info);



console.log();
console.log("**************");
console.log();
// Ex.12


let info = {
  name: "Adam",
  age: 25,
};
Object.seal(info);
console.log(info);