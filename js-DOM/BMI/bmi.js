// // Ex.1

document.getElementById("calc-btn").onclick = function () {
  //   alert("button was clicked");
  let weight = parseInt(document.getElementById("weight").value);
  let height = parseInt(document.getElementById("height").value);
  document.getElementById("result").innerHTML =
    (weight / Math.pow(height / 100, 2)).toFixed(1);
};  
