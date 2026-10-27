"use strict";

/* =========================================================
   CyberSecure Quiz
   24 questions: 6 per category
   ========================================================= */

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

let currentQuestion = 0;
let score = 0;
let answerSelected = false;
let categoryScores = {};

/* =========================================================
   QUESTION BANK
   ========================================================= */

const questions = [
  /* ---------- Phishing & Social Engineering ---------- */

  {
    category: "Phishing & Social Engineering",
    difficulty: "Easy",
    question: "You receive an unexpected email saying your bank account will be locked unless you click a link immediately. What should you do?",
    choices: [
      "Click the link and enter your password",
      "Reply with your account number",
      "Open the official banking app or website to verify the alert",
      "Forward the email to your friends"
    ],
    answer: 2,
    explanation: "Urgent account warnings may be phishing attempts. Verify the message through the official app or website instead of using the email link."
  },

  {
    category: "Phishing & Social Engineering",
    difficulty: "Easy",
    question: "Which email detail is a common warning sign of phishing?",
    choices: [
      "A company logo",
      "A sender address with a misspelled domain",
      "A clear subject line",
      "Correct spelling"
    ],
    answer: 1,
    explanation: "Attackers often use look-alike domains or misleading sender addresses to impersonate trusted organizations."
  },

  {
    category: "Phishing & Social Engineering",
    difficulty: "Easy",
    question: "You receive a text message about an unexpected delivery asking you to pay through a link. What should you do?",
    choices: [
      "Pay immediately",
      "Send your card details",
      "Forward it to friends",
      "Verify the delivery through the official company website or app"
    ],
    answer: 3,
    explanation: "Unexpected payment links may be smishing attempts. Verify the message through an official channel."
  },

  {
    category: "Phishing & Social Engineering",
    difficulty: "Medium",
    question: "Someone claiming to be university IT support asks for your one-time login code. What should you do?",
    choices: [
      "Refuse and contact IT through an official channel",
      "Share the code because IT staff are trusted",
      "Send it if the person knows your name",
      "Post it in the class group"
    ],
    answer: 0,
    explanation: "One-time codes are security credentials. Never share them in response to an unexpected request."
  },

  {
    category: "Phishing & Social Engineering",
    difficulty: "Medium",
    question: "You receive an unexpected invoice attachment from an unfamiliar sender. What is safest?",
    choices: [
      "Open it immediately",
      "Download it first",
      "Avoid it and verify the request through a trusted contact method",
      "Reply with your personal details"
    ],
    answer: 2,
    explanation: "Unexpected attachments may contain malware or be part of a phishing attempt."
  },

  {
    category: "Phishing & Social Engineering",
    difficulty: "Hard",
    question: "You entered your password on a fake login page. What should you do first?",
    choices: [
      "Ignore it",
      "Wait for suspicious activity",
      "Send another password",
      "Change the password through the real website and enable MFA"
    ],
    answer: 3,
    explanation: "Use the genuine service to secure the account, enable multifactor authentication, and report the incident."
  },

  /* ---------- Passwords & Authentication ---------- */

  {
    category: "Passwords & Authentication",
    difficulty: "Easy",
    question: "Which practice provides the strongest password protection?",
    choices: [
      "Using your name and birth year",
      "Using the same password everywhere",
      "Using a long, unique passphrase",
      "Using a short password with a symbol"
    ],
    answer: 2,
    explanation: "Long and unique passwords are harder to guess and prevent one breach from affecting multiple accounts."
  },

  {
    category: "Passwords & Authentication",
    difficulty: "Medium",
    question: "A website reports a password breach and you reused that password for email. What should you do?",
    choices: [
      "Change only the website password",
      "Wait for an email warning",
      "Keep both passwords",
      "Change both passwords to unique passwords and enable MFA"
    ],
    answer: 3,
    explanation: "Password reuse can expose other accounts after a breach."
  },

  {
    category: "Passwords & Authentication",
    difficulty: "Easy",
    question: "Why should you enable multifactor authentication?",
    choices: [
      "It adds another verification step if your password is stolen",
      "It removes the need for passwords",
      "It deletes phishing messages",
      "It makes every website secure"
    ],
    answer: 0,
    explanation: "MFA makes password theft alone less useful to attackers."
  },

  {
    category: "Passwords & Authentication",
    difficulty: "Medium",
    question: "What is a benefit of using a reputable password manager?",
    choices: [
      "It lets you reuse one password",
      "It creates and stores different strong passwords",
      "It removes account recovery",
      "It prevents every cyberattack"
    ],
    answer: 1,
    explanation: "Password managers help users create and store unique passwords for different accounts."
  },

  {
    category: "Passwords & Authentication",
    difficulty: "Hard",
    question: "Your authenticator app asks you to approve a login you did not start. What should you do?",
    choices: [
      "Approve it",
      "Share the code",
      "Deny it and check your account security",
      "Disable MFA"
    ],
    answer: 2,
    explanation: "An unexpected MFA request may mean someone is trying to access your account."
  },

  {
    category: "Passwords & Authentication",
    difficulty: "Hard",
    question: "When should a password generally be changed?",
    choices: [
      "Every seven days",
      "Every 30 days",
      "Only after restarting your device",
      "When it is compromised or there is another valid reason"
    ],
    answer: 3,
    explanation: "Passwords should be changed when compromise is suspected or when another security reason requires it."
  },

  /* ---------- Malware & Device Security ---------- */

  {
    category: "Malware & Device Security",
    difficulty: "Easy",
    question: "A pop-up says your laptop is infected and asks you to call a number. What should you do?",
    choices: [
      "Call the number",
      "Click Scan Now",
      "Close it and run your own security scan",
      "Give the caller remote access"
    ],
    answer: 2,
    explanation: "Fake virus alerts are often technical-support scams. Close the page and use trusted security software."
  },

  {
    category: "Malware & Device Security",
    difficulty: "Medium",
    question: "Which habit helps you recover files after ransomware?",
    choices: [
      "Keep tested backups offline",
      "Copy files into another folder on the same laptop",
      "Rename the files",
      "Keep a backup USB permanently connected"
    ],
    answer: 0,
    explanation: "Offline backups are less likely to be encrypted or deleted by ransomware."
  },

  {
    category: "Malware & Device Security",
    difficulty: "Medium",
    question: "An unexpected Office attachment asks you to enable content. What should you do?",
    choices: [
      "Enable it immediately",
      "Enable it if antivirus is running",
      "Save it and enable it later",
      "Do not enable it and verify the sender independently"
    ],
    answer: 3,
    explanation: "Malicious macros can install malware. Do not enable content in unexpected files."
  },

  {
    category: "Malware & Device Security",
    difficulty: "Easy",
    question: "Why should you install operating-system updates?",
    choices: [
      "They only change the appearance",
      "They patch security weaknesses",
      "They delete all existing malware",
      "They are needed only when the device is slow"
    ],
    answer: 1,
    explanation: "Many updates fix vulnerabilities that attackers can exploit."
  },

  {
    category: "Malware & Device Security",
    difficulty: "Medium",
    question: "Where is the safest place to download a free application?",
    choices: [
      "The first sponsored search result",
      "A file-sharing website",
      "The developer's official website",
      "A social-media comment"
    ],
    answer: 2,
    explanation: "Official websites reduce the risk of downloading fake or infected software."
  },

  {
    category: "Malware & Device Security",
    difficulty: "Hard",
    question: "Your device suddenly becomes very slow and shows unknown applications. What should you do?",
    choices: [
      "Ignore it",
      "Download another unknown cleaner",
      "Disconnect it from the network and run a trusted security scan",
      "Share your login details online"
    ],
    answer: 2,
    explanation: "Unexpected behavior may indicate malware. Disconnecting can limit further communication while you investigate safely."
  },

  /* ---------- Network, Privacy & Online Safety ---------- */

  {
    category: "Network, Privacy & Online Safety",
    difficulty: "Easy",
    question: "What is the safest behavior when using public Wi-Fi?",
    choices: [
      "Access online banking immediately",
      "Share your password",
      "Avoid sensitive activities and use a trusted secure connection",
      "Disable device security"
    ],
    answer: 2,
    explanation: "Public Wi-Fi can expose users to security risks. Use a personal hotspot or trusted VPN when possible."
  },

  {
    category: "Network, Privacy & Online Safety",
    difficulty: "Easy",
    question: "What does HTTPS usually indicate about a website?",
    choices: [
      "The website is guaranteed to be legitimate",
      "The browser connection is encrypted",
      "The website cannot contain malware",
      "The website collects no information"
    ],
    answer: 1,
    explanation: "HTTPS encrypts information between your browser and the website, but you should still check the address carefully."
  },

  {
    category: "Network, Privacy & Online Safety",
    difficulty: "Medium",
    question: "Which privacy setting is safest for a social-media account?",
    choices: [
      "Make every post public",
      "Accept every request",
      "Limit posts and information to trusted people",
      "Display your phone number"
    ],
    answer: 2,
    explanation: "Restricting visibility reduces the personal information available to strangers."
  },

  {
    category: "Network, Privacy & Online Safety",
    difficulty: "Medium",
    question: "Which information should you avoid sharing publicly online?",
    choices: [
      "A favorite movie",
      "A hobby",
      "Your home address, passwords, and financial information",
      "A public event announcement"
    ],
    answer: 2,
    explanation: "Sensitive information can be used for identity theft, fraud, or account compromise."
  },

  {
    category: "Network, Privacy & Online Safety",
    difficulty: "Medium",
    question: "Why should you be careful when sharing your location online?",
    choices: [
      "It slows down your device",
      "It can reveal where you live, work, or currently are",
      "It prevents websites from loading",
      "It changes your passwords"
    ],
    answer: 1,
    explanation: "Location information can expose your routines and create privacy or physical-safety risks."
  },

  {
    category: "Network, Privacy & Online Safety",
    difficulty: "Hard",
    question: "You receive a shortened link from an unknown account. What should you do?",
    choices: [
      "Click it before it expires",
      "Forward it to friends",
      "Reply with your username",
      "Do not click it; verify the sender and report or delete it"
    ],
    answer: 3,
    explanation: "Shortened links can hide phishing or malicious websites. Do not click unexpected links."
  }
];

/* =========================================================
   QUIZ FUNCTIONS
   ========================================================= */

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  categoryScores = {};
  homeScreen.hidden = true;
  resultsScreen.hidden = true;
  quizScreen.hidden = false;
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];

  answerSelected = false;

  questionNumber.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  progressBar.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  categoryName.textContent = question.category;
  difficultyLevel.textContent = question.difficulty;
  questionText.textContent = question.question;

  answerOptions.replaceChildren();

  question.choices.forEach(function (choice, index) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "answer-btn";
    button.textContent = choice;

    button.addEventListener("click", function () {
      selectAnswer(index);
    });

    answerOptions.appendChild(button);
  });

  feedback.replaceChildren();
  feedback.className = "feedback";

  nextBtn.disabled = true;
  nextBtn.textContent =
    currentQuestion === questions.length - 1
      ? "See Results"
      : "Next Question";

  questionText.focus();
}

function selectAnswer(selectedIndex) {
  if (answerSelected) {
    return;
  }

  const question = questions[currentQuestion];
  const buttons = answerOptions.querySelectorAll("button");
  const isCorrect = selectedIndex === question.answer;

  answerSelected = true;

  buttons.forEach(function (button, index) {
    button.disabled = true;
    button.classList.add("disabled");

    if (index === selectedIndex) {
      button.classList.add("selected");
    }

    if (index === question.answer) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && !isCorrect) {
      button.classList.add("incorrect");
    }
  });

  if (!categoryScores[question.category]) {
    categoryScores[question.category] = {
      correct: 0,
      attempted: 0
    };
  }

  categoryScores[question.category].attempted++;

  if (isCorrect) {
    score++;
    categoryScores[question.category].correct++;
  }

  const title = document.createElement("strong");
  title.className = "feedback-title";
  title.textContent = isCorrect ? "Correct!" : "Not quite.";

  const explanation = document.createElement("p");
  explanation.className = "feedback-explanation";
  explanation.textContent = question.explanation;

  feedback.replaceChildren(title, explanation);
  feedback.className =
    `feedback ${isCorrect ? "feedback-success" : "feedback-error"}`;

  nextBtn.disabled = false;
}

function nextQuestion() {
  if (!answerSelected) {
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
}

/* =========================================================
   RESULTS AND RESTART
   ========================================================= */

function showResults() {
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  let level;

  if (percentage >= 81) {
    level = "Cyber Expert";
  } else if (percentage >= 61) {
    level = "Cyber Smart";
  } else if (percentage >= 41) {
    level = "Developing";
  } else {
    level = "Beginner";
  }

  let weakestCategory = "No category recorded";
  let weakestPercentage = 100;

  Object.keys(categoryScores).forEach(function (category) {
    const result = categoryScores[category];
    const categoryPercentage =
      (result.correct / result.attempted) * 100;

    if (categoryPercentage < weakestPercentage) {
      weakestPercentage = categoryPercentage;
      weakestCategory = category;
    }
  });

  finalScore.textContent = `${score}/${totalQuestions}`;
  scorePercentage.textContent = `${percentage}%`;
  correctCount.textContent = score;
  incorrectCount.textContent = totalQuestions - score;

  scoreRing.style.setProperty("--score", percentage);

  performanceMessage.textContent =
    `${level} — You scored ${percentage}% overall.`;

  weakCategory.textContent = weakestCategory;

  recommendation.textContent =
    `Review ${weakestCategory}, read the explanations again, and practice the recommended safe actions before retaking the quiz.`;

  quizScreen.hidden = true;
  homeScreen.hidden = true;
  resultsScreen.hidden = false;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  answerSelected = false;
  categoryScores = {};

  resultsScreen.hidden = true;
  homeScreen.hidden = false;
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

nextBtn.disabled = true;