/*
WHEN the page loads, there is an introductory paragraph to the code quiz and a START button

When a user clicks the START button than a question with four possible answers loads onto the screen
*/
var selectQuestion = document.querySelector("#question");


var answerList = ["answer 1", "answer 2", "answer 3", "answer 4"];
var questionList = ["question 1", " question 2", "question 3", "question 4"];
var wrongList = ["wrong option 1", "wrong option 2", "wrong option 3", "wrong option 4"];

function loadQuestions() {
    
}
/*
Then a timer begins giving the user a certain amount of time to answer the question

If the user clicks the correct answer a new question appears on the screen, else the answer is incorrect and time is subtracted from the quiz timer

When all questions are answered OR the timer reaches 0, the game ends.

When the game ends, the user can save their intitials and view their score. 

*/