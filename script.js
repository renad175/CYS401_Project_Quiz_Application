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
//amera
const ameraPasswordQuestions = [
  {
    category: "Password Security",
    difficulty: "Easy",
    question: "Which practice gives your university account the strongest password protection?",
    choices: [
      "Using your name and graduation year",
      "Using the same password on all websites",
      "Using a long, unique password or passphrase for this account",
      "Using a short password with an exclamation mark"
    ],
    answer: 2,
    explanation: "Choose a long password or passphrase that is unique to each account. Length and uniqueness matter more than predictable changes such as adding a symbol.",
    source: "https://pages.nist.gov/800-63-4/sp800-63b.html ; https://www.cisa.gov/secure-our-world"
  },
  {
    category: "Password Security",
    difficulty: "Medium",
    question: "A shopping website reports a password breach. You used the same password for your email. What should you do?",
    choices: [
      "Change only the shopping website password",
      "Wait until the email provider sends a warning",
      "Keep both passwords if they contain symbols",
      "Change both passwords to different, unique ones and enable MFA"
    ],
    answer: 3,
    explanation: "Password reuse can expose your other accounts after a breach. Replace the compromised and reused passwords with different strong passwords and enable multifactor authentication.",
    source: "https://pages.nist.gov/800-63-4/sp800-63b.html ; https://www.cisa.gov/secure-our-world"
  },
  {
    category: "Password Security",
    difficulty: "Easy",
    question: "Why should you enable multifactor authentication (MFA) on your email account?",
    choices: [
      "It adds another verification step if a password is stolen",
      "It means you never need to protect your password",
      "It deletes phishing messages automatically",
      "It makes all websites completely secure"
    ],
    answer: 0,
    explanation: "MFA adds a second way to verify that a person signing in is the account owner, making password theft alone less useful to attackers.",
    source: "https://www.cisa.gov/secure-our-world/turn-mfa"
  },
  {
    category: "Password Security",
    difficulty: "Medium",
    question: "What is a primary security benefit of using a reputable password manager?",
    choices: [
      "It lets you safely reuse one password everywhere",
      "It can generate and store different strong passwords for each account",
      "It removes the need for account recovery methods",
      "It prevents every possible type of cyberattack"
    ],
    answer: 1,
    explanation: "A password manager helps create and store long, different passwords instead of relying on reuse or memory. Protect the password manager itself with a strong master password and MFA where available.",
    source: "https://www.cisa.gov/resources-tools/training/cyb3rsmrt-use-password-manager-create-and-remember-strong-passwords"
  },
  {
    category: "Password Security",
    difficulty: "Hard",
    question: "Your authenticator app suddenly asks you to approve a sign-in you did not start. What is the safest response?",
    choices: [
      "Approve it to stop repeated notifications",
      "Share the verification code with whoever contacts you",
      "Deny and report the unexpected request, then check your account security",
      "Disable MFA permanently"
    ],
    answer: 2,
    explanation: "An unexpected MFA request may indicate that someone else is trying to access your account. Do not approve it. Deny or report the request and review account security through the official service.",
    source: "https://support.microsoft.com/en-us/accounts-billing/security/using-outlook-mobile-to-sign-in ; https://learn.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-mfasettings"
  },
  {
    // OPTIONAL sixth question: include only if the final team quiz has 24 questions.
    category: "Password Security",
    difficulty: "Hard",
    question: "Under current NIST guidance, when should a password generally be changed?",
    choices: [
      "Every seven days, even with no security issue",
      "Every 30 days to keep attackers guessing",
      "Only after the device is restarted",
      "When there is evidence of compromise or another valid reason, not on an arbitrary schedule"
    ],
    answer: 3,
    explanation: "NIST advises against routine, arbitrary password-expiration rules and requires a change when a password is known or suspected to be compromised.",
    source: "https://pages.nist.gov/800-63-4/sp800-63b.html"
  }
];
questions.push(...ameraPasswordQuestions.slice(0, 5));
/* ==========================================================================
   MEMBER 2 – QUIZ NAVIGATION AND FEEDBACK
   ========================================================================== */

let answerSelected = false;

// Start the quiz and display the first question.
function startQuiz() {
  const validQuestions = Array.isArray(questions) && questions.length > 0 &&
    questions.every(q => q &&
      typeof q.category === "string" &&
      typeof q.question === "string" &&
      Array.isArray(q.choices) && q.choices.length === 4 &&
      q.choices.every(choice => typeof choice === "string") &&
      Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4 &&
      typeof q.explanation === "string");

  if (!validQuestions) {
    window.alert("The question bank is incomplete. Check the four choices and correct answer for each question.");
    return;
  }

  currentQuestion = 0;
  score = 0; // Shared score; Member 4 handles category counters/restart.
  homeScreen.hidden = true;
  resultsScreen.hidden = true;
  quizScreen.hidden = false;
  showQuestion();
}

// Display one question, its category, progress and four answer buttons.
function showQuestion() {
  const q = questions[currentQuestion];
  answerSelected = false;

  questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  categoryName.textContent = q.category; // Do not replace the parent badge's HTML.
  difficultyLevel.textContent = q.difficulty || "";
  questionText.textContent = q.question;

  answerOptions.replaceChildren();
  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = choice; // style.css supplies the A/B/C/D letters.
    button.addEventListener("click", () => selectAnswer(index));
    answerOptions.appendChild(button);
  });

  feedback.replaceChildren();
  feedback.className = "feedback";
  nextBtn.disabled = true; // Can't move on until an answer has been chosen.
  nextBtn.textContent = currentQuestion === questions.length - 1
    ? "See Results" : "Next Question";

  questionText.focus(); // Help keyboard/screen-reader users follow the quiz.
}

// Check the selected answer and give immediate feedback once only.
function selectAnswer(selectedIndex) {
  if (answerSelected) return;

  const q = questions[currentQuestion];
  if (!Number.isInteger(selectedIndex) ||
      selectedIndex < 0 || selectedIndex >= q.choices.length) return;

  answerSelected = true;
  const isCorrect = selectedIndex === q.answer;
  const buttons = answerOptions.querySelectorAll("button");

  buttons.forEach((button, index) => {
    button.disabled = true;
    button.classList.add("disabled");
    if (index === selectedIndex) button.classList.add("selected");
    if (index === q.answer) button.classList.add("correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("incorrect");
  });

  const title = document.createElement("strong");
  title.className = "feedback-title";
  title.textContent = isCorrect ? "Correct!" : "Not quite.";

  const explanation = document.createElement("p");
  explanation.className = "feedback-explanation";
  explanation.textContent = q.explanation;
  feedback.replaceChildren(title, explanation);
  feedback.className = `feedback ${isCorrect ? "feedback-success" : "feedback-error"}`;

  // Member 4 may later supply a score/category counter function.
  // Do not increment again inside recordAnswer() AND here.
  if (typeof recordAnswer === "function") {
    recordAnswer(isCorrect, q.category);
  } else if (isCorrect) {
    score += 1;
  }

  nextBtn.disabled = false;
}

// Move forward only after answering; hand the final page to Member 4.
function nextQuestion() {
  if (!answerSelected) return;

  if (currentQuestion + 1 < questions.length) {
    currentQuestion += 1;
    showQuestion();
  } else {
    showResults(); //  Roaa implements the final results screen.
  }
}

// The HTML already loads script.js at the end of <body>.
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
nextBtn.disabled = true;


/* ==========================================================================
   MEMBER 4 – SCORE, RESULTS AND RESTART
   ========================================================================== */

// Hide the quiz screen, show the results screen and fill in the score
function showResults() {
}

// Restart button: reset the score and go back to the start
function restartQuiz() {
}
