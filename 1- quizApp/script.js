const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
// all variables
var currentQuiz = 0;
var right = 0;
var wrong = 0;
var checkRadio;

// answer html
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

// question html
const question = document.getElementById("question");

// button
const button = document.getElementById("submit");

// this function loads quiz when pages loads
function loadQuiz() {
  question.innerHTML = quizData[currentQuiz].question;
  a_text.innerHTML = quizData[currentQuiz].a;
  b_text.innerHTML = quizData[currentQuiz].b;
  c_text.innerHTML = quizData[currentQuiz].c;
  d_text.innerHTML = quizData[currentQuiz].d;
}

// this function displayes next question when submit button is clicked
function quizChanger() {
  button.addEventListener("click", () => {
    let validateResult = validator();
    console.log(validateResult);
    if (validateResult) {
      questionChecker(checkRadio.id);
      currentQuiz++;

      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        alert(
          "You finished, Your Score is = " +
            right +
            " out of " +
            quizData.length
        );
        // alert(Your );
      }
    } else {
      alert("Please select any option");
    }
  });
}

// this function validates whether radio button is clicked or not
function validator() {
  checkRadio = document.querySelector('input[name="answer"]:checked');
  if (checkRadio != null) {
    return true;
  } else {
    return false;
  }
}

// this function checks whether user answerd right or wrong
function questionChecker(temp) {
  if (temp == quizData[currentQuiz].correct) {
    right++;
  } else {
    wrong++;
  }
}

loadQuiz();
quizChanger();




// curl https://quizapi.io/api/v1/questions -G -d apiKey=EbPSE1z1YUY2p91zeM2Ae6kd8qHgQJtGXqFJasry  -d limit=10