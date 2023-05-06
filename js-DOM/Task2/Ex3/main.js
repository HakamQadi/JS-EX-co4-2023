let textInput = document.getElementById("add-item-input");
let addBtn = document.getElementById("add-btn");
let listContainer = document.getElementById("list");

addBtn.addEventListener("click", function () {
  let item = textInput.value;
  if (item != "") {
    listContainer.innerHTML += `<ul>
      <li>${item} <button class="del-btn">delete</button></li>
      </ul>`;
    textInput.value = "";
    let delBtns = document.querySelectorAll(".del-btn");
    for (let i = 0; i < delBtns.length; i++) {
      delBtns[i].addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    }
  } else {
    window.alert("enter item please");
  }
});
