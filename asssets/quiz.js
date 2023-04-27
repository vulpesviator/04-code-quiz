var quizBlock = document.querySelector("#quiz-block");
var questionText = document.querySelector("#question");
var guessOptions = document.querySelector("#guesses");
var startButton = document.querySelector("#start-button");
var timerText = document.querySelector("#timer");
var checkAnswer = document.querySelector("#checker");
var userScore = document.querySelector("#user-score");
var userInitials = document.querySelector("#user-initials");
var userName = document.querySelector("#user-name");
var submitButton = document.querySelector("#submit-button");
var playAgain = document.querySelector("#play-again");

var quizQuestions = [
  {
    question: "Question 1?",
    guesses: [
      "Wrong Answer 1",
      "Wrong Answer 2",
      "Right Answer",
      "Wrong Answer 3",
    ],
    answer: "Right Answer",
  },
  {
    question: "Question 2?",
    guesses: [
      "Wrong Answer 1",
      "Wrong Answer 2",
      "Right Answer",
      "Wrong Answer 3",
    ],
    answer: "Right Answer",
  },
  {
    question: "Question 3?",
    guesses: [
      "Wrong Answer 1",
      "Wrong Answer 2",
      "Right Answer",
      "Wrong Answer 3",
    ],
    answer: "Right Answer",
  },
  {
    question: "Question 4?",
    guesses: [
      "Wrong Answer 1",
      "Wrong Answer 2",
      "Right Answer",
      "Wrong Answer 3",
    ],
    answer: "Right Answer",
  },
  {
    question: "Question 5?",
    guesses: [
      "Wrong Answer 1",
      "Wrong Answer 2",
      "Right Answer",
      "Wrong Answer 3",
    ],
    answer: "Right Answer",
  },
];

var questionNumber = -1;
var correctAnswer;
var timeLeft = 60;
var score = 0;
var highScores = JSON.parse(localStorage.getItem("newScore")) || [];

/* Clears page, starts timer, and loads questions */
function startGame() {
  startButton.style.display = "none";
  guessOptions.style.display = "inline-block";

  setTimer();

  loadQuestions();
}

/* Then a timer begins giving the user a certain amount of time to answer the question*/
function setTimer() {
  var countdown = setInterval(function () {
    timeLeft--;
    timerText.textContent = `Only ${timeLeft} seconds remain`;

    if (questionNumber >= quizQuestions.length || timeLeft == 0) {
      clearInterval(countdown);
      endGame();
    }
  }, 1000);
}

/* This function loads questions from the questions and answers array */
function loadQuestions() {
  questionNumber++;
  if (questionNumber >= quizQuestions.length) {
    return;
  }
  correctAnswer = quizQuestions[questionNumber].answer;

  questionText.textContent = quizQuestions[questionNumber].question;
  guessOptions.innerHTML = "";

  var guesses = quizQuestions[questionNumber].guesses;

  if (guesses) {
    for (var i = 0; i < guesses.length; i++) {
      var nextGuess = document.createElement("li");

      nextGuess.textContent = guesses[i];
      answerBtn = guessOptions.appendChild(nextGuess);
    }
  }
}

/* When the game ends, the user can save their intitials and view their score. */
function saveScore() {
  var newScore = {
    name: userName.value,
    score: score,
  };

  localStorage.setItem("newScore", JSON.stringify(newScore));
  console.log(newScore);
}


/* Pulls scores from local storage and adds them to a list */
function showScores() {

    var highScores = JSON.parse(localStorage.getItem("newScore"));

  if (highScores !== null) {
    var scoreList = document.createElement("ul");
    var score1 = document.createElement("li");

    document.querySelector("#user-score").appendChild(scoreList);
    scoreList.appendChild(score1);
   

    score1.innerHTML = highScores.name + highScores.score;
    userName.value = "";
  } else {
    return;
  }
}

/* When a user clicks the START button than a question with four possible answers loads onto the screen */
startButton.addEventListener("click", startGame);

/* If the user clicks the correct answer a new question appears on the screen, else the answer is incorrect and time is subtracted from the quiz timer */
guessOptions.addEventListener("click", function (event) {
  if (correctAnswer === event.target.textContent) {
    score++;
    checkAnswer.textContent = String.fromCodePoint(0x1f44d);
  } else {
    checkAnswer.textContent = String.fromCodePoint(0x1f44e);
    timeLeft = timeLeft - 10;
  }

  loadQuestions();
});

/* Submits newScore and calls scores from local storage */
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  saveScore();
  showScores();
});

/* When all questions are answered OR the timer reaches 0, the game ends. */
function endGame() {
  quizBlock.style.display = "none";
  timerText.textContent = "";
  checkAnswer.textContent = "";

  playAgain.style.display = "inline-block";
  document.querySelector(".info").appendChild(playAgain);
  playAgain.innerHTML = "Play again?";

  userInitials.style.display = "block";
  
  userScore.textContent = `Final score: ${score}/5`;

  
}

/* Clears previous game state and starts new game in default state */
playAgain.addEventListener("click", function (event) {
    event.preventDefault();
    playAgain.style.display = "none";
    quizBlock.style.display = "block";
    userInitials.style.display = "none";
    userScore.textContent = "";
    questionNumber = -1;
    score = 0;
    timeLeft = 60;
    startGame();
  });