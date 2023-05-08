let textInput = document.getElementById("add-item-input");
let addBtn = document.getElementById("add-btn");
let listContainer = document.getElementById("list");
let item2;
let itemsArray = [];
// let delBtns2 = document.getElementById("delete");
let delBtns;
addBtn.addEventListener("click", function () {
  var item = textInput.value;
  if (item != "") {
    // let hakam = `<ul>
    //   <li ><input type="checkbox" id="myCheck" onclick="myFunction()"> <span contenteditable="true">${item}</span>
    //   <button id="delete" class="del-btn">delete</button></li>
    //   </ul>`;

    // let tt = (listContainer.innerHTML += `<ul>
    //   <li ><input type="checkbox" id="myCheck" onclick="myFunction()"> <span contenteditable="true">${item}</span>
    //   <button id="delete" class="del-btn">delete</button></li>
    //   </ul>`);

    let tt = (listContainer.innerHTML += `<ul>
      <li ><input type="checkbox" id="myCheck" onclick="myFunction()"> <span contenteditable="true">${item}</span>
      <button id="delete" class="del-btn">delete</button></li>
      </ul>`);
    // console.log(tt)
    textInput.value = "";
    delBtns = document.querySelectorAll(".del-btn");
    for (let i = 0; i < delBtns.length; i++) {
      delBtns[i].addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
        console.log("tt delete " + tt);

        // localStorage.removeItem("key")

        // let index = itemsArray.indexOf(item);
        // console.log(index);
        // if (index > -1) {
        //   itemsArray.splice(index, 1);
        //   localStorage.setItem("key", JSON.stringify(itemsArray));
        // }
      });
    }

    // store to localStorage
    // itemsArray.push(item);
    // localStorage.setItem("key", JSON.stringify(itemsArray));
    console.log("tt " + tt);
    localStorage.setItem("key", tt);
    // console.log(itemsArray)

    // localStorage.setItem("key", JSON.stringify(itemsArray));
  } else {
    window.alert("enter item please");
  }
});
//get from localStorage

// item2 = JSON.parse(localStorage.getItem("key"));
item2 = localStorage.getItem("key");
// for (let i = 0; i < item2.length; i++) {
if (item2) {
  let x = item2.indexOf("two");
  console.log(x);
  listContainer.innerHTML += `
    <span>${item2}</span>
    `;
}
// }
delBtns = document.querySelectorAll(".del-btn");
// let newNewArray = [];
for (let i = 0; i < delBtns.length; i++) {
  delBtns[i].addEventListener("click", function () {
    item2 = localStorage.getItem("key");
    // for (let i = 0; i < item2.length; i++) {
    if (item2) {
      console.log("first" + i);

      // newNewArray.push(item2);
      // console.log("array " + item2[1]);

      // console.log(typeof(item2));
      // item2=item2.slice(i,1)
      // item2=item2.split(" ")
      // if (item2.includes(item2[i])) {
      console.log(item2);
      this.parentNode.parentNode.removeChild(this.parentNode);
      // localStorage.setItem("key", tt);
      localStorage.removeItem("key")


      // }
      // let x = item2.indexOf("two");
      // console.log("x1" + x);
      // listContainer.innerHTML += `
      //             <span>${item2}</span>
      //           `;
    }
  });
}

// delBtns2.addEventListener("click",()=>{
// console.log("first")
// })

// delBtns2.addEventListener("click", function () {
//   console.log("deleted");
// });

// let delBtns = document.querySelectorAll(".del-btn");
// for (let i = 0; i < delBtns.length; i++) {
//   delBtns[i].addEventListener("click", function () {
//     this.parentNode.parentNode.removeChild(this.parentNode);
//     // remove from itemsArray
//     let index = itemsArray.indexOf(this.previousSibling.textContent);
//     if (index > -1) {
//       itemsArray.splice(index, 1);
//       localStorage.setItem("key", JSON.stringify(itemsArray));
//     }
//   });
// }






// let items = JSON.parse(localStorage.getItem('items')) || [];

// function addItem(item) {
//   items.push(item);
//   localStorage.setItem('items', JSON.stringify(items));
// }

// function deleteItem(index) {
//   items.splice(index, 1);
//   localStorage.setItem('items', JSON.stringify(items));
// }

// function renderItems() {
//   let listContainer = document.getElementById('list');
//   listContainer.innerHTML = '';

//   for (let i = 0; i < items.length; i++) {
//     let item = items[i];
//     let li = document.createElement('li');
//     li.innerHTML = `
//       <span>${item}</span>
//       <button class="del-btn" data-index="${i}">delete</button>
//     `;
//     listContainer.appendChild(li);
//   }

//   let delBtns = document.querySelectorAll('.del-btn');
//   for (let i = 0; i < delBtns.length; i++) {
//     delBtns[i].addEventListener('click', function() {
//       let index = this.dataset.index;
//       deleteItem(index);
//       renderItems();
//     });
//   }
// }

// let textInput = document.getElementById('add-item-input');
// let addBtn = document.getElementById('add-btn');

// addBtn.addEventListener('click', function() {
//   let item = textInput.value;
//   if (item !== '') {
//     addItem(item);
//     renderItems();
//     textInput.value = '';
//   } else {
//     window.alert('enter item please');
//   }
// });

// renderItems();
