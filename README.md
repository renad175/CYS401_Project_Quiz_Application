# CyberSecure Quiz – Frontend

**CYS401: Fundamentals of Cybersecurity | Prince Sultan University**
**Chosen Topic: Project 13: Cybersecurity Quiz Application**
Frontend (HTML + CSS) prepared by **Masa, Amera, Roaa, Renad**

---

## 1. What this frontend does

This is the user interface for our CyberSecure Quiz, a 20-question cybersecurity awareness quiz covering four topics: Phishing Awareness, Password Security, Malware Protection and Online Safety.

It contains every screen the quiz needs (home, question, answer feedback, results), fully styled and responsive. It does not contain any quiz logic. The buttons do nothing until Members 1, 2 and 4 fill in `script.js`. That is intentional: the HTML gives every part of the page a fixed ID so the JavaScript can find it and fill it in.

## 2. Files

| File | Owner | Purpose |
|---|---|---|
| `index.html` | Member 3 | Structure of all four screens |
| `style.css` | Member 3 | Design, layout, answer states, responsive rules |
| `preview.js` | Member 3 | **Temporary** design preview. Delete before submission (see section 9) |
| `script.js` | Members 1, 2, 4 | Questions, quiz logic, score, results, restart (template ready, one section per member) |
| `README.md` | Member 3 | This guide |

All files sit in the same folder. `index.html` already links `style.css`, `script.js` and `preview.js`.

## 3. How to open it

**Option A: double-click**
Open the project folder and double-click `index.html`. It opens in your default browser.

**Option B: VS Code with Live Server (recommended while coding)**
1. In VS Code, open the Extensions panel (`Ctrl+Shift+X`).
2. Search for **Live Server** (by Ritwick Dey) and click **Install**.
3. Right-click `index.html` in the file list and choose **Open with Live Server**.
4. The page now reloads by itself every time you save a file.

Headings use the Sora font from Google Fonts. Without internet they fall back to system fonts and the page still works.

## 4. The screens

All screens live inside `<main>` in `index.html`. Each one is a `<section>` with the class `screen`.

| Screen | ID | Visible on load? | Purpose |
|---|---|---|---|
| 1. Home | `home-screen` | **Yes** | App name, tagline, Start Quiz button, a sample phishing email with its warning signs marked, and the four topic cards |
| 2. Quiz | `quiz-screen` | **No** (`hidden`) | Progress, difficulty and category badges, question, four answer buttons, Next button |
| 3. Feedback | `feedback` (inside the quiz screen) | Empty, takes no space | Correct/incorrect message and explanation after each answer |
| 4. Results | `results-screen` | **No** (`hidden`) | Score ring, final score, correct/incorrect counts, performance message, topic to review, security reminder, Restart button |

The header (app name) and the footer are outside the screens, so they appear on every screen.

## 5. IDs for JavaScript

These names are our team's integration contract. **We all use them exactly as written in every file.** They are our own naming choices.

### Required IDs

| Element | ID | What JavaScript does with it |
|---|---|---|
| Home screen | `home-screen` | Hide it when the quiz starts |
| Start button | `start-btn` | Click → start the quiz |
| Quiz screen | `quiz-screen` | Show it when the quiz starts |
| Question number | `question-number` | Set text, e.g. `Question 3 of 20` |
| Progress bar | `progress-bar` | Set its width, e.g. `15%` |
| Question category | `question-category` | Set the category text (see note below) |
| Question text | `question-text` | Set the question |
| Answer options container | `answer-options` | Fill with four `<button>` elements |
| Feedback panel | `feedback` | Set the explanation and a state class |
| Next button | `next-btn` | Click → next question (or results) |
| Results screen | `results-screen` | Show it after question 20 |
| Final score | `final-score` | Set text, e.g. `16/20` |
| Score percentage | `score-percentage` | Set text, e.g. `80%` |
| Correct answers | `correct-count` | Set text, e.g. `16` |
| Incorrect answers | `incorrect-count` | Set text, e.g. `4` |
| Restart button | `restart-btn` | Click → restart the quiz |

### Optional IDs

These are ready in the HTML. If nobody fills them, they stay invisible or show a neutral default, so nothing looks broken.

| Element | ID | Default | Notes |
|---|---|---|---|
| Category text | `category-name` | `Category` | The text **inside** the `question-category` badge. See note below |
| Difficulty badge | `difficulty-level` | Empty (invisible) | e.g. `Easy`, `Medium`, `Hard`. Appears as soon as it has text |
| Score ring | `score-ring` | Empty ring | Fill it with the `--score` value (section 7.6) |
| Performance message | `performance-message` | `Your result summary will appear here.` | Motivational message based on the score |
| Weakest topic | `weak-category` | Empty (invisible) | e.g. `Password Security` |
| Recommendation | `recommendation` | Empty (invisible) | One or two sentences on what to review |

The "Topic to review" box on the results screen appears only when `weak-category` or `recommendation` has text.

> **Category: pick ONE ID.** `question-category` is the whole badge and `category-name` is the text inside it. Both work, but the team should use only one of them in `script.js`.
> Setting `question-category.textContent` replaces the inner `category-name` element, so after that `category-name` no longer exists. If you want to keep both names available, write to `category-name`.

## 6. CSS state classes

JavaScript adds and removes these classes. All the styling is already done in `style.css`.

### Answer buttons (inside `#answer-options`)

| Class | Look | When to use it |
|---|---|---|
| `selected` | Blue outline | The option the user clicked |
| `correct` | Green, letter becomes ✓ | The right answer (show it even when the user was wrong) |
| `incorrect` | Red, letter becomes ✕ | The wrong option the user picked |
| `disabled` | Faded, no hover | Lock all options after an answer (the `disabled` attribute does the same) |

When one option has `incorrect`, the `correct` option automatically gets a small "Correct answer" tag, and the wrong one gets "Your answer".

### Feedback panel (`#feedback`)

| Class | Look |
|---|---|
| `feedback-success` | Green panel |
| `feedback-error` | Red panel |
| (no class) | Blue information panel |

## 7. How to connect the JavaScript

You don't need to change the HTML structure. Everything below happens in `script.js`.

### 7.1 Where the script goes

The `<script src="script.js"></script>` line is already at the end of `<body>`, so every element exists by the time your code runs. `script.js` already exists as a template: it gets every element by its ID, holds the shared `currentQuestion` and `score` variables, and has an empty section and empty functions for each member. Write your code inside your own section.

### 7.2 Showing and hiding screens

Screens start hidden with the HTML `hidden` attribute. Use the same property to switch them:

```js
document.getElementById("home-screen").hidden = true;   // hide
document.getElementById("quiz-screen").hidden = false;  // show
```

`element.style.display = "block"` / `"none"` also works. Please **don't** use `classList.add("hidden")` for the screens, because removing a class won't remove the `hidden` attribute.

### 7.3 Answer buttons

Put four `<button>` elements inside `#answer-options`. Any button there is styled automatically, and **CSS adds the letters A, B, C, D by itself**, so the button text should be only the answer, without "A)" in front.

Markup each button should have:

```html
<button class="answer-btn" type="button">Answer text here</button>
```

The HTML contains four placeholder buttons. You can either clear the container (`innerHTML = ""`) and create new buttons, or reuse the four existing ones and change their text. Remember to remove `selected`, `correct`, `incorrect` and `disabled` before showing the next question.

### 7.4 Progress bar

`#progress-bar` is the coloured fill. Set its width as a percentage, and the CSS animates the change:

```js
document.getElementById("progress-bar").style.width = "35%";
```

### 7.5 Feedback panel

`#feedback` is empty on load and takes no space. Plain text works:

```js
feedback.textContent = "Correct! Real banks never ask for your password by email.";
feedback.className = "feedback feedback-success";
```

For a bold title on its own line, you can use this optional markup instead:

```html
<strong class="feedback-title">Correct!</strong>
<p class="feedback-explanation">Explanation text…</p>
```

Set it back to empty (`feedback.textContent = ""`) and reset the class to `"feedback"` before the next question. The panel has `role="status"`, so screen readers read the message out automatically.

### 7.6 Results and the score ring

Set the numbers with `textContent` (`final-score`, `score-percentage`, `correct-count`, `incorrect-count`). The ring fill is controlled by the CSS variable `--score`, a number from 0 to 100:

```js
document.getElementById("score-ring").style.setProperty("--score", 80);
```

When the results screen appears, the ring fills from 0 up to that value.

### 7.7 Optional extras

- After loading a new question, `document.getElementById("question-text").focus()` helps keyboard and screen-reader users. The heading has `tabindex="-1"` for this.
- `#next-btn` can be disabled (`nextBtn.disabled = true`) until an answer is chosen; it already has a disabled style.
- On the last question you can change the Next button text, e.g. `nextBtn.textContent = "See Results"`.

### 7.8 Question data → page elements

The shared question format (category, question, four choices, correct answer index, explanation) maps onto the page like this:

| Question field | Goes into |
|---|---|
| `category` | `#question-category` or `#category-name` |
| `difficulty` (optional) | `#difficulty-level` |
| `question` | `#question-text` |
| `choices` (4) | Four buttons in `#answer-options` |
| `answer` (index 0–3) | Decides which button gets `correct` |
| `explanation` | `#feedback` |

## 8. How `style.css` is organised

The file is split into numbered sections, listed at the top of the file:

1. **Colors and sizes** – colours, fonts and corner radius as CSS variables in `:root`. Change one value there and it updates everywhere.
2. **Base styles** – box sizing, body background, fonts, headings, shared `.icon` style.
3. **Accessibility helpers** – visible keyboard focus ring, skip link.
4. **Page layout** – containers, header, main area, footer.
5. **Buttons** – `.btn`, `.btn-primary`, `.btn-large`, disabled state.
6. **Screen 1 – Home** – intro, phishing email example, topic cards.
7. **Screen 2 – Quiz** – status row, badges, progress bar, question, answer buttons.
8. **Answer states** – `.selected`, `.correct`, `.incorrect`, `.disabled`.
9. **Screen 3 – Feedback** – `.feedback`, `.feedback-success`, `.feedback-error`.
10. **Screen 4 – Results** – score ring, stats, focus area, security reminder.
11. **Animations** – a short fade-in for each screen and feedback panel, and the score ring filling up.
12. **Wider screens** – mobile is the default; extra rules at 640px, 768px and 1024px.
13. **Reduced motion** – turns animations off for users who ask their device for less motion.
14. **Hidden elements** – the `[hidden]` rule, kept last on purpose so it always wins.

Main colours: navy `#0B1120` background, blue `#3B82F6` and cyan `#22D3EE` accents, green `#34D399` for correct, red `#F87171` for incorrect.

## 9. Preview mode (temporary)

Because the quiz and results screens start hidden, `preview.js` lets you see them before `script.js` is filled in. Add one of these to the end of the address:

| Address | Shows |
|---|---|
| `index.html?preview=quiz` | A sample question, nothing answered |
| `index.html?preview=correct` | Feedback after a correct answer |
| `index.html?preview=incorrect` | Feedback after a wrong answer |
| `index.html?preview=results` | Results screen with 16/20 |

With Live Server the address looks like `http://127.0.0.1:5500/index.html?preview=results`.

`preview.js` has no click handlers, scoring or question bank, so it can't conflict with the real quiz. Without `?preview=` in the address it does nothing at all.

**Before final submission:** delete `preview.js` and the `<script src="preview.js"></script>` line at the bottom of `index.html`.

## 10. What the other members still need to build

**Member 1 – Questions**
- Write 20 questions: 5 phishing, 5 password, 5 malware, 5 online safety.
- Each question needs a category, the question text, four choices, the index of the correct choice, and an explanation (plus difficulty, if the team uses `difficulty-level`).
- Store them as an array in `script.js` and cite sources.

**Member 2 – Quiz navigation and feedback**
- Start button: hide `home-screen`, show `quiz-screen`, load question 1.
- Render each question: `question-number`, `progress-bar`, category, `question-text`, four answer buttons.
- On click: check the answer, add `selected` / `correct` / `incorrect` / `disabled`, fill `feedback` with `feedback-success` or `feedback-error`.
- Next button: move to the next question, or hand over to the results after question 20.

**Member 4 – Score, results and restart**
- Count correct and incorrect answers.
- Show `results-screen` and fill `final-score`, `score-percentage`, `correct-count`, `incorrect-count`, and `--score` on `score-ring`.
- Optional: `performance-message`, `weak-category`, `recommendation`.
- Restart button: reset everything and go back to the first question or the home screen.

## 11. Responsive and accessibility notes

- Tested at 1920px, 1366px, 768px and 375px wide with no horizontal scrolling.
- Phones: everything stacks in one column, and buttons are at least 44px tall.
- From 768px the answers form a 2 × 2 grid; from 1024px the home page splits into two columns and the topic cards sit in a row of four.
- Semantic elements throughout (`header`, `main`, `section`, `article`, `footer`, `button`). Nothing clickable is a `div`.
- Visible cyan focus ring on every interactive element, plus a "Skip to main content" link for keyboard users.
- Text contrast meets WCAG AA on the dark background.
- The feedback panel is a live region, so screen readers announce it.
- `prefers-reduced-motion` is respected.
- Works in current Chrome, Edge, Firefox and Safari. The small "Correct answer" label and the auto-hiding "Topic to review" box use CSS `:has()`, which all of these support.

## 12. Checklist before submission

- [ ] `script.js` filled in and every ID above matches exactly
- [ ] `preview.js` and its `<script>` line removed
- [ ] Tested start → 20 questions → results → restart
- [ ] Checked on a phone-sized window (DevTools → device toolbar)
- [ ] Screenshots taken for the report (section 8: User Interface and Screenshots)