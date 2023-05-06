const namesArray = ["hakam", "ehab", "alaa", "wajdi"];
const scoresArray = [50, 60, 65, 40];

let resultContainer = document.getElementById("result");
let scoreContainer = document.getElementById("score");

function $(selector) {
  return document.querySelector(selector);
}

window.onload = function () {
  $("#name-input").focus();

  $("#add-btn").addEventListener("click", addScore);

  $("#display-result-btn").addEventListener("click", displayResults);

  $("#display-socre-btn").addEventListener("click", displayScores);
};

function displayResults() {
  let sum = 0;
  for (let i = 0; i < scoresArray.length; i++) {
    sum += scoresArray[i];
  }
  let avg = sum / scoresArray.length;

  let highScore = scoresArray[0];
  let index = 0;
  for (let i = 1; i < scoresArray.length; i++) {
    if (scoresArray[i] > highScore) {
      highScore = scoresArray[i];
      index = i;
    }
  }

  resultContainer.innerHTML = `<h3>Results</h3>
  <span>Average score = ${avg.toFixed(2)}</span>
  <span>High score = ${namesArray[index]} with a score of ${highScore}</span>`;
}

function addScore() {
  let name = document.getElementById("name-input").value;
  let score = parseInt(document.getElementById("score-input").value);

  if (name != "" && score >= 0 && score <= 100) {
    namesArray.push(name);
    scoresArray.push(score);

    document.getElementById("name-input").value = "";
    document.getElementById("score-input").value = "";
    document.getElementById("name-input").focus();
  } else {
    window.alert("You must enter a name and a valid score");
  }
}

function displayScores() {
  scoreContainer.innerHTML = `
  <h3>Scores</h3>
  <table id="table">
  <thead>
  <tr>
    <th>name</th>
    <th>score</th>
  </tr>
</thead>`;
  for (let i = 0; i < namesArray.length; i++) {
    scoreContainer.innerHTML += ` 
    <table id="table">
          
          <tbody>
            <tr>
              <td>${namesArray[i]}</td>
              <td>${scoresArray[i]}</td>
            </tr>
          </tbody>
        </table>`;
  }
}
