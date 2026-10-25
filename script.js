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
  
  // GIRL 1 - MASA
  // Phishing & Social Engineering - 6 Questions

  {
    category: "Phishing & Social Engineering",
    difficulty: "Easy",
    question: "You receive an unexpected email saying your bank account will be locked unless you click a link immediately. What should you do?",
    choices: [
      "Click the link and enter your password",
      "Reply to the sender with your account number",
      "Open your bank's official app or type its known website address to verify the alert",
      "Forward the email to your friends"
    ],
    answer: 2,
    explanation: "Urgent account warnings may be phishing attempts. Verify the message through the bank's official app or website instead of the email link."
  },

  {
    category: "Phishing & Social Engineering",
    difficulty: "Easy",
    question: "Which email detail is a common warning sign of phishing?",
    choices: [
      "A company logo at the top",
      "A sender address with a misspelled domain name",
      "A clear subject line",
      "Correct spelling and grammar"
    ],
    answer: 1,
    explanation: "Attackers may use look-alike domains or misleading sender addresses to impersonate trusted organizations. Good grammar or a logo does not prove a message is genuine."
  },

  {
    category: "Phishing & Social Engineering",
    difficulty: "Easy",
    question: "You get a text message about a delivery you were not expecting, asking you to pay a small fee using a link. What is the safest action?",
    choices: [
      "Pay quickly so the delivery is not delayed",
      "Send your card details in a reply",
      "Share the message with friends to ask whether the link works",
      "Check directly through the delivery company's verified website or app"
    ],
    answer: 3,
    explanation: "Phishing can also happen through text messages (smishing). An unexpected payment link should be verified independently through the organization's official channel."
  },

  {
    category: "Phishing & Social Engineering",
    difficulty: "Medium",
    question: "Someone claiming to be university IT support messages you and asks for a one-time login verification code. What should you do?",
    choices: [
      "Refuse to share the code and contact IT support through an official university channel",
      "Share the code because IT staff are trusted",
      "Send the code only if the sender knows your name",
      "Post the code in the class group for confirmation"
    ],
    answer: 0,
    explanation: "A one-time verification code is a security credential. Do not share it in response to an unexpected request; independently contact the real support team."
  },

  {
    category: "Phishing & Social Engineering",
    difficulty: "Medium",
    question: "An unfamiliar sender emails you an unexpected invoice attachment. What is the safest response?",
    choices: [
      "Open it to find out what the invoice is for",
      "Download the attachment before checking the sender",
      "Avoid the attachment and verify the request through a trusted contact method",
      "Reply with your personal details to confirm your identity"
    ],
    answer: 2,
    explanation: "Unexpected attachments can contain harmful software or be part of a phishing attempt. Confirm authenticity using independently verified contact information before opening them."
  },

  {
    category: "Phishing & Social Engineering",
    difficulty: "Medium",
    question: "You realize you entered your password on a fake login page reached through a suspicious email. What should you do first?",
    choices: [
      "Ignore it if the page looked professional",
      "Wait to see whether someone accesses your account",
      "Send another password to the same sender",
      "Use the real website to change the password immediately, enable MFA, and report the incident"
    ],
    answer: 3,
    explanation: "If you provided credentials to a phishing page, use the genuine service to secure the account, turn on multifactor authentication, and follow the appropriate reporting process."
  }

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
