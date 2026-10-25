/* ==========================================================================
   CyberSecure Quiz – script.js
   CYS401 Section 1292
     Member 1: Masa – Questions
     Member 2: Amera – Quiz navigation and feedback
     Member 4: Roaa – Score, results and restart

   The IDs and CSS classes you can use are listed in README.md (sections 5 and 6).
   ========================================================================== */


/* ==========================================================================
   PAGE ELEMENTS (shared so everyone can use these)
   ========================================================================== */
const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionNumber = document.getElementById("question-number");
const progressBar = document.getElementById("progress-bar");
const categoryName = document.getElementById("category-name");
const difficultyLevel = document.getElementById("difficulty-level");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const feedback = document.getElementById("feedback");

const finalScore = document.getElementById("final-score");
const scorePercentage = document.getElementById("score-percentage");
const correctCount = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");
const scoreRing = document.getElementById("score-ring");
const performanceMessage = document.getElementById("performance-message");
const weakCategory = document.getElementById("weak-category");
const recommendation = document.getElementById("recommendation");


/* ==========================================================================
   QUIZ STATE (shared – Member 2 and Member 4 both use these)
   ========================================================================== */
let currentQuestion = 0;   // index of the question being shown (0 to 19)
let score = 0;             // number of correct answers


/* ==========================================================================
   MEMBER 1 – QUESTIONS
   20 questions: 5 Phishing Awareness, 5 Password Security,
   5 Malware Protection, 5 Online Safety.
   Each question follows this format:
     {
       category: "Phishing Awareness",
       difficulty: "Easy",            // optional
       question: "Question text?",
       choices: ["Choice A", "Choice B", "Choice C", "Choice D"],
       answer: 1,                     // index of the correct choice (0 to 3)
       explanation: "Why this answer is correct."
     }
   Remember to cite your sources in the report.
   ========================================================================== */
const questions = [
  // add the 20 questions here
];


/* ==========================================================================
   MEMBER 2 – QUIZ NAVIGATION AND FEEDBACK
   ========================================================================== */

// Start button: hide the home screen, show the quiz screen, show question 1
function startQuiz() {
}

// Fill the quiz screen with the current question and its four answer buttons
function showQuestion() {
}

// Called when an answer button is clicked: check it, color the buttons, show feedback
function selectAnswer() {
}

// Next button: go to the next question, or call showResults() after question 20
function nextQuestion() {
}


/* ==========================================================================
   MEMBER 4 – SCORE, RESULTS AND RESTART
   ========================================================================== */

// Hide the quiz screen, show the results screen and fill in the score
function showResults() {
}

// Restart button: reset the score and go back to the start
function restartQuiz() {
}
