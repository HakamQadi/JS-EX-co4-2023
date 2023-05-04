let div = document.createElement("div");
let myName = document.createElement("h1");
let age = document.createElement("p");
let major = document.createTextNode("software engineering");
let btn = document.createElement("button");

myName.textContent = "Hakam Qadi";
age.textContent = "23";
btn.textContent = "click me";

div.appendChild(myName);
div.appendChild(age);
div.appendChild(major);
div.appendChild(document.createElement("br"));
div.appendChild(btn);
document.body.appendChild(div);
myName.style.color = "black";

btn.onclick = () => {
  if (myName.style.color == "black") {
    myName.style.color = "red";
  } else {
    myName.style.color = "black";
  }
};
