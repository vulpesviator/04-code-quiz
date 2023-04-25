/* WHEN the page loads, there is an introductory paragraph to the code quiz and a START button */

var questionText = document.querySelector("#question");
var guessOptions = document.querySelector("#guesses");
var startButton = document.querySelector("#start-button");
var timerText = document.querySelector("#timer")
var checkAnswer = document.querySelector("#checker")

var questions = [
    {
        question: "Question 1?",
        guesses: ["Wrong Answer 1", "Wrong Answer 2", "Right Answer", "Wrong Answer 3"],
        answer: "Right Answer"
    }, 
    {
        question: "Question 2?",
        guesses: ["Wrong Answer 1", "Wrong Answer 2", "Right Answer", "Wrong Answer 3"],
        answer: "Right Answer"
    }, 
    {
        question: "Question 3?",
        guesses: ["Wrong Answer 1", "Wrong Answer 2", "Right Answer", "Wrong Answer 3"],
        answer: "Right Answer"
    }, 
    {
        question: "Question 4?",
        guesses: ["Wrong Answer 1", "Wrong Answer 2", "Right Answer", "Wrong Answer 3"],
        answer: "Right Answer"
    }, 
    {
        question: "Question 5?",
        guesses: ["Wrong Answer 1", "Wrong Answer 2", "Right Answer", "Wrong Answer 3"],
        answer: "Right Answer"
    }, 
];

var questionNumber = -1;
var answer;
var timeLeft = 60;
var score = 0;

/* Then a timer begins giving the user a certain amount of time to answer the question*/


/* This function loads questions from the questions and answers array */
function loadQuestions() {
    questionNumber++;
    answer = questions[questionNumber].answer

    questionText.textContent = questions[questionNumber].question;
    guessOptions.innerHTML = "";

    var guesses = questions[questionNumber].guesses;

    for (var i = 0; i < guesses.length; i++) {
        var nextGuess = document.createElement("button");

        nextGuess.textContent = guesses[i]
        answerBtn = guessOptions.appendChild(nextGuess);
    }
}


/* When a user clicks the START button than a question with four possible answers loads onto the screen */
startButton.addEventListener("click", loadQuestions);

guessOptions.addEventListener("click", function(event) {
    if (answer === event.target.textContent) {
        checkAnswer.innerHTML = "CORRECT!";
    } else {
        checkAnswer.innerHTML = "INCORRECT."
    }
    loadQuestions();
})


/* If the user clicks the correct answer a new question appears on the screen, else the answer is incorrect and time is subtracted from the quiz timer */

/* When all questions are answered OR the timer reaches 0, the game ends. */

/* When the game ends, the user can save their intitials and view their score. */
function endGame() {

}






/*

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
*/