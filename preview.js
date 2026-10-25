/* ==========================================================================
   preview.js – this is a temporary file made by renad, till all javascript files are made by members
   this is to preview the website properly. this file will be deleted!!!

   This is NOT the quiz logic. It has no click handlers, no scoring and no
   question bank. It only fills the hidden screens with one sample question
   so the design can be checked and screenshotted before script.js is ready.

   It does nothing at all unless the address ends with one of these:
     index.html?preview=quiz        question screen, nothing answered yet
     index.html?preview=correct     feedback after a correct answer
     index.html?preview=incorrect   feedback after a wrong answer
     index.html?preview=results     final results screen (16/20)

   FILE SHOULD BE DELETED BEFORE SUBMISSION
   ========================================================================== */

(function () {
  "use strict";

  // Read ?preview=... from the address bar. Stop if it is not there.
  var mode = new URLSearchParams(window.location.search).get("preview");
  if (!mode) {
    return;
  }

  var homeScreen = document.getElementById("home-screen");
  var quizScreen = document.getElementById("quiz-screen");
  var resultsScreen = document.getElementById("results-screen");

  // Show one screen and hide the other two
  function showOnly(screen) {
    homeScreen.hidden = screen !== homeScreen;
    quizScreen.hidden = screen !== quizScreen;
    resultsScreen.hidden = screen !== resultsScreen;
  }

  // One sample question, only used for this preview
  var sample = {
    number: "Question 7 of 20",
    progress: "35%",
    category: "Malware Protection",
    difficulty: "Medium",
    question: "A pop-up says your laptop is infected and tells you to download a “cleaner” right away. What should you do?",
    choices: [
      "Download the cleaner so the infection is removed quickly",
      "Close the pop-up and run a scan with the antivirus already installed",
      "Call the support number shown in the pop-up",
      "Restart the laptop, then download the cleaner"
    ],
    correctIndex: 1,
    wrongIndex: 0,
    explanation: "Fake virus alerts are a common way to trick people into installing malware. Close the pop-up without clicking inside it, then scan with security software you already trust."
  };

  // Put the sample question and four answer buttons on the quiz screen
  function fillQuestion() {
    document.getElementById("question-number").textContent = sample.number;
    document.getElementById("progress-bar").style.width = sample.progress;
    document.getElementById("category-name").textContent = sample.category;
    document.getElementById("difficulty-level").textContent = sample.difficulty;
    document.getElementById("question-text").textContent = sample.question;

    var options = document.getElementById("answer-options");
    options.innerHTML = "";

    sample.choices.forEach(function (choice) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "answer-btn";
      button.textContent = choice;
      options.appendChild(button);
    });

    return options.querySelectorAll("button");
  }

  // Lock all answers, the way Member 2's code will after a choice is made
  function lockAnswers(buttons) {
    buttons.forEach(function (button) {
      button.disabled = true;
      button.classList.add("disabled");
    });
  }

  function showFeedback(type, title) {
    var feedback = document.getElementById("feedback");
    feedback.className = "feedback " + type;
    feedback.innerHTML =
      '<strong class="feedback-title">' + title + "</strong>" +
      '<p class="feedback-explanation">' + sample.explanation + "</p>";
  }

  if (mode === "quiz" || mode === "correct" || mode === "incorrect") {
    showOnly(quizScreen);
    var buttons = fillQuestion();

    if (mode === "correct") {
      buttons[sample.correctIndex].classList.add("selected", "correct");
      lockAnswers(buttons);
      showFeedback("feedback-success", "Correct!");
    }

    if (mode === "incorrect") {
      buttons[sample.wrongIndex].classList.add("selected", "incorrect");
      buttons[sample.correctIndex].classList.add("correct");
      lockAnswers(buttons);
      showFeedback("feedback-error", "Not quite.");
    }
  } else if (mode === "results") {
    showOnly(resultsScreen);
    document.getElementById("final-score").textContent = "16/20";
    document.getElementById("score-percentage").textContent = "80%";
    document.getElementById("correct-count").textContent = "16";
    document.getElementById("incorrect-count").textContent = "4";
    document.getElementById("score-ring").style.setProperty("--score", 80);
    document.getElementById("performance-message").textContent =
      "Great work! You caught most of the threats. Review the topics you missed to close the remaining gaps.";
    document.getElementById("weak-category").textContent = "Password Security";
    document.getElementById("recommendation").textContent =
      "You missed 2 of the 5 password questions. Use a long, unique passphrase for each account and turn on multi-factor authentication.";
  } else {
    console.warn('preview.js: unknown preview "' + mode + '". Use quiz, correct, incorrect or results.');
    return;
  }

  console.info("preview.js: showing the “" + mode + "” design preview (sample content only).");
})();