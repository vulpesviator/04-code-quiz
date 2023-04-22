/*
WHEN the page loads, there is an introductory paragraph to the code quiz and a START button

When a user clicks the START button than a question with four possible answers loads onto the screen
*/
var questionText = document.querySelector("#question");
var guessOptions = document.querySelector("#guess")
var startButton = document.querySelector("#start-button")

var questions = ["question 1?", "question 2?", "question 3?", "question 4?"];
var answers = ["1 correct", "2 correct", "3 correct", "4 correct"];
var nonAnswers = ["fake answer 1", "fake answer 2", "fake answer 3", "fake answer 4", "fake answer 5", "fake answer 6"];

function loadQuestions() {
    selectQuestion = questions[Math.floor(Math.random() * questions.length)];
    selectAnswers = answers[Math.floor(Math.random() * answers.length)];

    questionText.textContent = selectQuestion;
    guessOptions.textContent = selectAnswers;
}

startButton.addEventListener("click", loadQuestions);

/*
Then a timer begins giving the user a certain amount of time to answer the question

If the user clicks the correct answer a new question appears on the screen, else the answer is incorrect and time is subtracted from the quiz timer

When all questions are answered OR the timer reaches 0, the game ends.

When the game ends, the user can save their intitials and view their score. 

*/