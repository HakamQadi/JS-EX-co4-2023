let questions = [
  {
    q: "What does HTML stand for?",
    A: "a) Hypertext Markup Language",
    B: "b) Hyperlink Markup Language",
    C: "c) Hypermedia Markup Language",
    D: "d) None of the above",
    answer: "a) Hypertext Markup Language",
  },

  {
    q: "What does CSS stand for?",
    A: "a) Cascading Scripting Style",
    B: "b) Cascading Style Sheet",
    C: "c) Cascading Screen Style",
    D: "d) None of the above",
    answer: "b) Cascading Style Sheet",
  },

  {
    q: "What is the syntax for creating a new variable in JavaScript?",
    A: "a) var variableName = value;",
    B: "b) let variableName = value;",
    C: "c) const variableName = value;",
    D: "d) All of the above",
    answer: "d) All of the above",
  },

  {
    q: "Which of the following is not a primitive data type in JavaScript?",
    A: "a) string",
    B: "b) number",
    C: "c) boolean",
    d: "d) object",
    answer: "d) object",
  },

  {
    q: "What is the result of the following code: '5' + 2?",
    A: "a) '7'",
    B: "b) 7",
    C: "c) '52'",
    D: "d) None of the above",
    answer: "c) '52'",
  },

  {
    q: "What is the result of the following code: '5' - 2?",
    A: "a) '3'",
    B: "b) 3",
    C: "c) '52'",
    D: "d) None of the above",
    answer: "b) 3",
  },

  {
    q: "What is the result of the following code: 10 % 3?",
    A: "a) 1",
    B: "b) 2",
    C: "c) 3",
    D: "d) 4",
    answer: "a) 1",
  },

  {
    q: "Which of the following is not a comparison operator in JavaScript?",
    A: "a) ===",
    B: "b) !==",
    C: "c) <=",
    D: "d) ><",
    answer: "d) ><",
  },

  {
    q: "Which of the following is a loop in JavaScript?",
    A: "a) for",
    B: "b) while",
    C: "c) do-while",
    D: "d) All of the above",
    answer: "d) All of the above",
  },

  {
    q: "What is the result of the following code: true && false?",
    A: "a) true",
    B: "b) false",
    C: "c) null",
    D: "d) undefined",
    answer: "false",
  },
];
/////////////
const quizQuestions = [];
let questionsCount = 5;

while (quizQuestions.length < questionsCount) {
  let random = Math.floor(Math.random() * questionsCount);
  const question = questions[random].q;
  if (!quizQuestions.includes(question)) {
    quizQuestions.push(question);
  }
}
// for (let index = 0; index < quizQuestions.length; index++) {
// console.log(`${index + 1}---- ${quizQuestions[index]}`);
// console.log(quizQuestions[index])

// }
///////////
let time = document.getElementById("time");
let questionContainer = document.getElementById("q_container");
let quistionCard = document.getElementById("quistion_card");
let questionsGroup = document.getElementById("questions_group");
let nextBtn = document.getElementById("next_btn");
let currentIndex = 0;
nextBtn.addEventListener("click", () => {
  // time.textContent = `time left 0 sec`;

  let remainingTime = 5;
  time.textContent = `Time left: ${remainingTime} sec`;

  let timerId = setInterval(() => {
    remainingTime--;
    time.textContent = `Time left: ${remainingTime} sec`;

    if (remainingTime === 0) {
      clearInterval(timerId);
      // code to handle when time runs out
    } else {
      nextBtn.addEventListener("click", () => {
        clearInterval(timerId);
      });
    }
  }, 1000);

  let currentQuestion = questions[currentIndex];
  // for (let q of quizQuestions) {
  // console.log(q);
  quistionCard.innerHTML = `<p>${currentQuestion.q}</p>
    <label for="">Your answer is</label><br />
    <div id="questions_group">
  
    <input type="radio" id="one" name="choice" value="one" />
    <label for="one">one</label><br />
  
    <input type="radio" id="two" name="choice" value="two" />
    <label for="two">two</label><br />
  
    <input type="radio" id="three" name="choice" value="three" />
    <label for="three">three</label><br />
  
    <input type="radio" id="four" name="choice" value="four" />
    <label for="four">four</label>
    </div>
    `;
  // }

  nextBtn.textContent = "next";
  if (currentIndex < 4) {
    currentIndex++;
  } else if (quizQuestions.length === questionsCount) {
    nextBtn.textContent = "Finish";
    nextBtn.addEventListener("click", () => {
      quistionCard.innerHTML = `
      <span>result</span>
      `;
      nextBtn.style.display = "none";
      time.remove();
      // timeLeft = 90;
      // clearInterval(timerId);
    });
    // } else if (quizQuestions.length == questionsCount) {
    //   // nextBtn.textContent = "Finish";
    //   // nextBtn.addEventListener("click", () => {
    //   //   quistionCard.innerHTML = `
    //   //   <span>result</span>
    //   //   `;
    //   //   nextBtn.style.display = "none";
    //   // });
  }
});

////
////
