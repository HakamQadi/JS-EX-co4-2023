let questions = [
  {
    q: "What does HTML stand for?",
    A: "a) Hypertext Markup Language",
    B: "b) Hyperlink Markup Language",

    answer: "a) Hypertext Markup Language",
  },

  {
    q: "What does CSS stand for?",
    A: "a) Cascading Scripting Style",
    B: "b) Cascading Style Sheet",

    answer: "b) Cascading Style Sheet",
  },

  {
    q: "What is the syntax for creating a new variable in JavaScript?",
    A: "a) var variableName = value;",
    B: "b) String variableName = value;",

    answer: "a) var variableName = value;",
  },

  {
    q: "Which of the following is not a primitive data type in JavaScript?",
    A: "a) string",
    B: "b) object",

    answer: "b) object",
  },

  {
    q: "What is the result of the following code: '5' + 2?",
    A: "a) '7'",
    B: "b) 52",

    answer: "b) '52'",
  },

  {
    q: "What is the result of the following code: '5' - 2?",
    A: "a) '3'",
    B: "b) 3",

    answer: "b) 3",
  },

  {
    q: "What is the result of the following code: 10 % 3?",
    A: "a) 1",
    B: "b) 2",

    answer: "a) 1",
  },

  {
    q: "Which of the following is not a comparison operator in JavaScript?",
    A: "a) ===",
    B: "b) ><",

    answer: "b) ><",
  },

  {
    q: "Which of the following is a loop in JavaScript?",
    A: "a) for",
    B: "b) switch",

    answer: "a) for",
  },

  {
    q: "What is the result of the following code: true && false?",
    A: "a) true",
    B: "b) false",

    answer: "b) false",
  },
];
/////////////
const quizQuestions = [];
const answerQuestions = [];
const choice_A = [];
const choice_B = [];
let answers = []
let correctAnswers = []











let questionsCount = 5;

while (quizQuestions.length < questionsCount) {
  let random = Math.floor(Math.random() * 10);
  let question = questions[random].q;
  let answer = questions[random].answer;
  let choiceA = questions[random].A;
  let choiceB = questions[random].B;
  // console.log("q= "+question)
  // console.log("a= "+ answer)
  if (!quizQuestions.includes(question)) {
    quizQuestions.push(question);
    answerQuestions.push(answer);
    choice_A.push(choiceA);
    choice_B.push(choiceB);

  }
}
// for (let index = 0; index < quizQuestions.length; index++) {
//   console.log(`${index + 1}---- ${quizQuestions[index]}`);
//   console.log(quizQuestions[0])
// }

///////////
let time = document.getElementById("time");
let questionContainer = document.getElementById("q_container");
let quistionCard = document.getElementById("quistion_card");
let questionsGroup = document.getElementById("questions_group");
let nextBtn = document.getElementById("next_btn");
let currentIndex = 0;
nextBtn.addEventListener("click", () => {

  let remainingTime = 90;
  time.textContent = `Time left: ${remainingTime} sec`;

  let timerId = setInterval(() => {
    remainingTime--;
    time.textContent = `Time left: ${remainingTime} sec`;

    if (remainingTime == 0) {
      clearInterval(timerId);
      window.alert("You loose");
      window.location.reload();
    } else {
      nextBtn.addEventListener("click", () => {
        clearInterval(timerId);
      });
    }
  }, 1000);

  let currentQuestion = quizQuestions[currentIndex];
  let currentAnswer = answerQuestions[currentIndex];
  let currentAnswerA = choice_A[currentIndex];
  let currentAnswerB = choice_B[currentIndex];
  quistionCard.innerHTML = `<p>${currentQuestion}</p>
    
    <div id="questions_group">
    <input class="choice" type="radio" id="one" name="choice" value="a" />
    <label for="one">${currentAnswerA}</label><br />
    <input class="choice" type="radio" id="two" name="choice" value="b" />
    <label  for="two">${currentAnswerB}</label><br />
    </div>
    `;

  nextBtn.textContent = "next";
  if (currentIndex < 4) {
    currentIndex++;
  } else if (quizQuestions.length === questionsCount) {
    nextBtn.textContent = "Finish";

    nextBtn.addEventListener("click", () => {
      // quistionCard.innerHTML = ''
      // for (let i = 0; i < quizQuestions.length; i++) {

      // quistionCard.innerHTML += `<p> ${quizQuestions[i]}</p >
      // <label for="">Your answer is</label><br />
      // <div id="questions_group">
      // <input class="choice" type="radio" id="one" name="choice" value="a" />
      // <label class="choicee" for="one">${choice_A[i]}</label><br />
      // <input class="choice" type="radio" id="two" name="choice" value="b" />
      // <label class="choicee"  for="two">${choice_B[i]}</label><br />
      // </div>
      //   `;


      // quistionCard.innerHTML += `
      // <p> ${quizQuestions[i]}</p >
      //   <label for="">Your answer is</label><br />
      //   <div id="questions_group">
      //   <input class="choice" type="radio" id="one" name="choice" value="a" />
      //   <div id="labeldiv1"><label id="lbl1" class="choicee" for="one">${choice_A[i]}</label></div><br />
      //   <input class="choice" type="radio" id="two" name="choice" value="b" />
      //  <div id="labeldiv2"> <label id="lbl2" class="choicee"  for="two">${choice_B[i]}</label></div><br />
      //   </div>
      //     `;

      // quistionCard.innerHTML += `
      //     <p> ${quizQuestions[i]}</p >
      //     <label for="">Your answer is</label><br />
      //     <div id="questions_group">

      //     </div>  
      //     `
      quistionCard.innerHTML = ''
      for (let i = 0; i < quizQuestions.length; i++) {
        let questionsGroup = document.createElement("div")

        let input1 = document.createElement("input")
        input1.type = "radio";
        input1.id = "one";

        let label1 = document.createElement("label")
        label1.innerText = choice_A[i]

        if (correctAnswers[0] !== answers[0]) {
          console.log("corrrrrert")
          label1.style.color = "green"
          // continue;
        }else {
          label1.style.color = "red"
        }


        label1.id = "lbl1"



        let input2 = document.createElement("input")
        input1.type = "radio";
        input1.id = "two";

        let label2 = document.createElement("label")
        // label2.innerText = choice_B[i]
        label2.style.color = "red"

        label2.id = "lbl1"

        quistionCard.appendChild(questionsGroup)
        // questionsGroup.appendChild(input1)
        questionsGroup.appendChild(label1)
        // questionsGroup.appendChild(input2)
        questionsGroup.appendChild(label2)
      }
      // let labeldiv1 = document.getElementById("labeldiv1");
      // let labeldiv2 = document.getElementById("labeldiv2");

      // let label1 = document.getElementById("lbl1")
      // let label2 = document.getElementById("lbl2")

      // let input1 = document.getElementById("one")
      // let input2 = document.getElementById("two")

      // let questionsGroup = document.getElementById("questions_group")

      // questionsGroup.appendChild(input1)
      // questionsGroup.appendChild(labeldiv1)
      // questionsGroup.appendChild(input2)
      // questionsGroup.appendChild(labeldiv2)



      // for (let i = 0; i < quizQuestions.length; i++) {
      //   for (let j = 0; j < answers.length; j++) {
      //     console.log(answers[j])
      //     quistionCard.innerHTML += `<p> ${quizQuestions[i]}</p >
      //   <label for="">Your answer is</label><br />
      //   <div id="questions_group">
      //   <input class="choice" type="radio" id="one" name="choice" value="a" />
      //   <span>${answers[j]}</span>
      //   <input class="choice" type="radio" id="two" name="choice" value="b" />
      //   <span>${answers[j]}</span>
      //   </div>
      //     `;
      //   }





      // let labels = document.querySelectorAll('label');
      // for (let i = 0; i < labels.length; i++) {
      //   labels[i].addEventListener('click', function () {
      //     if (labels[i].value == currentAnswer[0]) {
      //       // console.log("true");
      //       labels[i].parentElement.style.color = 'green';

      //       // console.log(labels[i]);
      //     }
      //     else {
      //       // console.log("false");
      //       // console.log(labels[i]);
      //       labels[i].parentElement.style.color = 'red';


      //     }
      //     //  console.log("answer    " + currentAnswer[i])
      //     //  console.log("answer    " + currentAnswer[0])
      //     // console.log(radios[i].value)
      //   });
      // }
      // }
      nextBtn.textContent = "Play again!";
      nextBtn.addEventListener("click", () => {
        window.location.reload();
        random = Math.floor(Math.random() * questionsCount);
      });
      time.remove();
    });
  }

  let radios = document.querySelectorAll(".choice");
  // console.log(radios)
  let labels = document.querySelectorAll('label');
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function () {
      if (radios[i].value == currentAnswer[0]) {
        // console.log(radios[i].value)
        // console.log("true");
        labels[i].style.color = 'green';
        answers.push(labels[i])
        correctAnswers.push(labels[i])

        // console.log(answers[i])

        // console.log(ind)
        // labels[i].childNodes.style.color = "red"
        // labels[i].parentNode.firstChild.style.color = 'green';

        // console.log(labels[i]);
      }
      else {
        // console.log("false");
        // console.log(labels[i]);
        // labels[i].childNodes.style.color = "red"
        labels[i].style.color = 'red';
        answers.push(labels[i])
        // console.log(answers[i])
        // console.log(ind)

        // labels[i].parentNode.firstChild.style.color = 'red';


      }
      //  console.log("answer    " + currentAnswer[i])
      //  console.log("answer    " + currentAnswer[0])
      // console.log(radios[i].value)
    });
  }


  console.log(answers[1])

});


