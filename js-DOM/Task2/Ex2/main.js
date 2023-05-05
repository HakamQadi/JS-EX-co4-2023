// Ex.1
let p = document.getElementById("text");
let text = p.textContent;
const wordsArray = text.split(" ");

// console.log(wordsArray)

for (let index = 0; index < wordsArray.length; index++) {
  if (wordsArray[index].length > 8) {
    wordsArray[index] =
      '<span style="background-color: yellow">' + wordsArray[index] + "</span>";
  }
}
p.innerHTML = wordsArray.join(" ");

// Ex.2

let btContainer = document.getElementById("text-div");
btContainer.innerHTML = `<a href="https://www.google.com" target="_blank">Source</a>`;

// Ex.3
for (let index = 0; index < wordsArray.length; index++) {
  if (wordsArray[index].includes(".")) {
    wordsArray[index] = ".<br>";
  }
}

p.innerHTML = wordsArray.join("");

// Ex.4
let h = document.getElementById("h");
let count = document.createElement("span");
count.textContent = `The words count ${wordsArray.length} `;
h.insertAdjacentElement("afterend", count);

// Ex.5






// Ex.6
