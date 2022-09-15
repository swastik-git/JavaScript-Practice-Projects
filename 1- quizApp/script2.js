url = "https://swastik-git.github.io/quizJson/que.json";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // all variables

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

    //for starting with random questions every time
    var currentQuiz = Math.floor(Math.random() * 540);
    var counter = 0;
    console.log(currentQuiz);

    // this function loads quiz when pages loads
    function loadQuiz() {
      question.innerHTML = data[currentQuiz].question;
      a_text.innerHTML = data[currentQuiz].A;
      b_text.innerHTML = data[currentQuiz].B;
      c_text.innerHTML = data[currentQuiz].C;
      d_text.innerHTML = data[currentQuiz].D;
    }

    // this function displayes next question when submit button is clicked
    function quizChanger() {
      button.addEventListener("click", () => {
        let validateResult = validator();
        console.log(validateResult);
        if (validateResult) {
          questionChecker(checkRadio.id);
          console.log(currentQuiz);
            counter++;
          if (counter <  10) {
          currentQuiz++;
            loadQuiz();
          } else {
            alert(
              "You finished, Your Score is = " +
                right +
                " out of " +
                10
            );
            window.location.reload();
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
      if (temp == data[currentQuiz].answer) {
        right++;
      }
    }

    loadQuiz();
    quizChanger();
  });
