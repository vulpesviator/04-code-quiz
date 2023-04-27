var quizBlock = document.querySelector("#quiz-block");
var descriptParagraph = document.querySelector("#description");
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

/* This object holds the quiz questions, guesses, and correct answer key */
var quizQuestions = [
  {
    question: "Javascript is an _______ language?",
    guesses: [
      "Object-Oriented",
      "Object-Based",
      "Procedural",
      "Object-Agnostic",
    ],
    answer: "Object-Oriented",
  },
  {
    question:
      "Which of the following is not a primitive data type in JavaScript?",
    guesses: ["Number", "String", "Boolean", "Object"],
    answer: "Object",
  },
  {
    question: "What does the “typeof” operator do in JavaScript?",
    guesses: [
      "Returns the data type of a variable",
      "Checks if a variable is defined",
      "Assigns a value to a variable",
      "Concatenates two strings",
    ],
    answer: "Returns the data type of a variable",
  },
  {
    question: "What is the output of the following code: console.log(2 + “2”);",
    guesses: ["“4”", "“22”", "4", "22"],
    answer: "“22”",
  },
  {
    question:
      "Which of the following is not a comparison operator in JavaScript?",
    guesses: ["==", "===", "!=", "=<"],
    answer: "=<",
  },
  {
    question: "What does the “NaN” value represent in JavaScript?",
    guesses: ["Not a number", "Null value", "Undefined value", "Boolean value"],
    answer: "Not a number",
  },
  {
    question: "What does the “this” keyword refer to in JavaScript?",
    guesses: [
      "The current function",
      "The global object",
      "The object that the function belongs to",
      "The parent object of the current object",
    ],
    answer: "The object that the function belongs to",
  },
  {
    question: "What is the correct syntax for a “for” loop in JavaScript?",
    guesses: [
      "for (i = 0; i < 5; i++)",
      "for (var i = 0; i < 5; i++)",
      "for (var i = 5; i > 0; i--)",
      "for (i = 5; i > 0; i--)",
    ],
    answer: "for (var i = 0; i < 5; i++)",
  },
  {
    question:
      "Which of the following is not a valid way to declare a function in JavaScript?",
    guesses: [
      "function myFunction() {}",
      "var myFunction = function() {}",
      "() => {}",
      "function = {}",
    ],
    answer: "function = {}",
  },
  {
    question: "Which of the following is not a loop in JavaScript?",
    guesses: ["for", "while", "next", "do…while"],
    answer: "next",
  },
];

/* Variables to set the game settings before starting */
var questionNumber = -1;
var correctAnswer;
var timeLeft = 120;
var score = 0;
var highScores = JSON.parse(localStorage.getItem("newScore")) || [];

/* Clears page, starts timer, and loads questions */
function startGame() {
  startButton.style.display = "none";
  descriptParagraph.style.display = "none";
  quizBlock.style.display = "block";
  guessOptions.style.display = "inline-block";

  setTimer();

  loadQuestions();
}

/* Sets the timer and countsdown to either all questions being answered or the timer reaching 0 */
function setTimer() {
  var countdown = setInterval(function () {
    timeLeft--;
    timerText.style.display = "flex";
    timerText.textContent = `Only ${timeLeft} seconds remain`;

    if (questionNumber >= quizQuestions.length || timeLeft == 0) {
      clearInterval(countdown);
      endGame();
    }
  }, 1000);
}

/* Loads questions from the questions object */
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
  var highScores = JSON.parse(localStorage.getItem("newScore")) || [];
  var scoreList = document.createElement("ul");

  if (highScores !== null) {
    var score1 = document.createElement("li");

    document.querySelector("#user-score").appendChild(scoreList);
    scoreList.appendChild(score1);

    score1.innerHTML = highScores.name + " | " + highScores.score;
    userName.value = "";
  } else {
    return;
  }
}

/* Listens for player to click the start-button */
startButton.addEventListener("click", startGame);

/* If the player clicks the correct answer; a new question appears on the screen. Otherwise, the answer is incorrect and 10 seconds is subtracted from the quiz timer */
guessOptions.addEventListener("click", function (event) {
  checkAnswer.style.display = "flex";

  if (correctAnswer === event.target.textContent) {
    score++;
    checkAnswer.textContent = String.fromCodePoint(0x1f44d);
  } else {
    checkAnswer.textContent = String.fromCodePoint(0x1f44e);
    timeLeft = timeLeft - 10;
  }

  loadQuestions();
});

/* Listens for player to hit submit after entering their intitials and saves the score to local storage while calling any that are already saved */
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  saveScore();
  showScores();
});

/* Ends the game and clears the questions and guesses. Also adds a button to the player can play again */
function endGame() {
  quizBlock.style.display = "none";
  descriptParagraph.style.display = "block";
  timerText.textContent = "";
  timerText.style.display = "none";
  checkAnswer.textContent = "";
  checkAnswer.style.display = "none";
  playAgain.style.display = "inline-block";
  document.querySelector(".info").appendChild(playAgain);
  playAgain.innerHTML = "Play again?";

  userInitials.style.display = "block";
  userScore.style.display = "inline-block";
  userScore.textContent = `Final score: ${score}/10`;
}

/* Clears previous game state and starts new game in default state */
playAgain.addEventListener("click", function (event) {
  event.preventDefault();
  playAgain.style.display = "none";
  quizBlock.style.display = "block";

  userInitials.style.display = "none";
  userScore.textContent = "";
  userScore.style.display = "none";
  questionNumber = -1;
  score = 0;
  timeLeft = 120;
  startGame();
});
