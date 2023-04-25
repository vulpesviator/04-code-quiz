/* WHEN the page loads, there is an introductory paragraph to the code quiz and a START button */


var questionText = document.querySelector("#question");
var guessOptions = document.querySelector("#guess");
var startButton = document.querySelector("#start-button");
var timerText = document.querySelector("#timer")

var questions = ["question 1?", "question 2?", "question 3?", "question 4?"];
var correctAnswers = ["1 correct", "2 correct", "3 correct", "4 correct"];
var wrongAnswers = ["fake answer 1", "fake answer 2", "fake answer 3", "fake answer 4", "fake answer 5", "fake answer 6"];

var timeLeft = 60;
var score = 0;

/* Then a timer begins giving the user a certain amount of time to answer the question*/
function startGame() {
    startButton.style.display = "none";

    loadQuestions();

    guessOptions.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches("li")) {
            score++;
            loadQuestions();
        } else {
            score--;
            loadQuestions();
        }
    });

    setInterval(function() {
        timeLeft--;
        timerText.textContent = `Time life: ${timeLeft}`;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

/* This function loads questions from the questions and answers array */
function loadQuestions() {
    

    var answerList = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    document.querySelector("#guess").appendChild(answerList);
    answerList.appendChild(li1);
    answerList.appendChild(li2);
    answerList.appendChild(li3);
    answerList.appendChild(li4);

    for (var i = 0; i <= questions.length; i++) {
        selectQuestion = questions[Math.floor(Math.random() * questions.length)];
        selectAnswers = correctAnswers[questions.indexOf(selectQuestion)];
    }

    questionText.textContent = selectQuestion;
    li1.textContent = selectAnswers;
    li2.textContent = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
    li3.textContent = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
    li4.textContent = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]

}

/* When a user clicks the START button than a question with four possible answers loads onto the screen */
startButton.addEventListener("click", startGame);



/* If the user clicks the correct answer a new question appears on the screen, else the answer is incorrect and time is subtracted from the quiz timer */

/* When all questions are answered OR the timer reaches 0, the game ends. */

/* When the game ends, the user can save their intitials and view their score. */
function endGame() {

}