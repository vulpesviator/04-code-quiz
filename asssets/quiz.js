var questionText = document.querySelector("#question");
var guessOptions = document.querySelector("#guesses");
var startButton = document.querySelector("#start-button");
var timerText = document.querySelector("#timer");
var checkAnswer = document.querySelector("#checker");
var userScore = document.querySelector("#user-score");
var userInitials = document.querySelector("#user-initials");

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
var correctAnswer;
var timeLeft = 60;
var score = 0;


function startGame() {
    startButton.style.display = "none";
    guessOptions.style.display = "block";
        
    setTimer();
    
    loadQuestions();
    
}

/* Then a timer begins giving the user a certain amount of time to answer the question*/
function setTimer() {
    var countdown = setInterval(function() {
        timeLeft--;
        timerText.textContent = `Only ${timeLeft} seconds remain`;

        if (timeLeft == 0 || questionNumber == questions.length) {
            clearInterval(countdown);
            endGame();
        }

    }, 1000);
}

/* This function loads questions from the questions and answers array */
function loadQuestions() {
    questionNumber++;
    correctAnswer = questions[questionNumber].answer

    questionText.textContent = questions[questionNumber].question;
    guessOptions.innerHTML = "";

    var guesses = questions[questionNumber].guesses;

    for (var i = 0; i < guesses.length; i++) {
        var nextGuess = document.createElement("li");

        nextGuess.textContent = guesses[i]
        answerBtn = guessOptions.appendChild(nextGuess);
    }
}


/* When a user clicks the START button than a question with four possible answers loads onto the screen */
startButton.addEventListener("click", startGame);

guessOptions.addEventListener("click", function(event) {
    if (correctAnswer === event.target.textContent) {
        score++;
        checkAnswer.textContent = "CORRECT!";
    } else {
        score--;
        checkAnswer.textContent = "INCORRECT."
        timeLeft = timeLeft - 10;
    }
    loadQuestions();
})


/* If the user clicks the correct answer a new question appears on the screen, else the answer is incorrect and time is subtracted from the quiz timer */

/* When all questions are answered OR the timer reaches 0, the game ends. */
function endGame() {
    userInitials.style.display = "block";
    userScore.textContent = `Final score: ${score}/5`;
}

/* When the game ends, the user can save their intitials and view their score. */

