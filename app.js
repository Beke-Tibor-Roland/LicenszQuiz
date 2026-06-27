(function () {
  const allQuestions = Array.isArray(window.QUIZ_QUESTIONS) ? window.QUIZ_QUESTIONS : [];

  const startView = document.querySelector("#startView");
  const quizView = document.querySelector("#quizView");
  const resultView = document.querySelector("#resultView");
  const questionTotal = document.querySelector("#questionTotal");
  const startButton = document.querySelector("#startButton");
  const restartButton = document.querySelector("#restartButton");
  const againButton = document.querySelector("#againButton");
  const nextButton = document.querySelector("#nextButton");
  const counter = document.querySelector("#counter");
  const score = document.querySelector("#score");
  const progressFill = document.querySelector("#progressFill");
  const tetelLabel = document.querySelector("#tetelLabel");
  const pageLabel = document.querySelector("#pageLabel");
  const questionText = document.querySelector("#questionText");
  const answers = document.querySelector("#answers");
  const feedback = document.querySelector("#feedback");
  const resultTitle = document.querySelector("#resultTitle");
  const resultDetails = document.querySelector("#resultDetails");

  let questions = [];
  let currentIndex = 0;
  let correctCount = 0;
  let answered = false;
  const forcedQuestionId = new URLSearchParams(window.location.search).get("question");

  questionTotal.textContent = String(allQuestions.length);

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  }

  function showOnly(view) {
    [startView, quizView, resultView].forEach((item) => item.classList.add("hidden"));
    view.classList.remove("hidden");
  }

  function startQuiz() {
    const shuffledQuestions = shuffle(allQuestions);
    if (forcedQuestionId) {
      const forcedIndex = shuffledQuestions.findIndex((question) => question.id === forcedQuestionId);
      if (forcedIndex > 0) {
        const [forcedQuestion] = shuffledQuestions.splice(forcedIndex, 1);
        shuffledQuestions.unshift(forcedQuestion);
      }
    }

    questions = shuffledQuestions.map((question) => ({
      ...question,
      shuffledOptions: shuffle(question.options),
    }));
    currentIndex = 0;
    correctCount = 0;
    answered = false;
    showOnly(quizView);
    renderQuestion();
  }

  function createParagraph(lines) {
    const paragraph = document.createElement("p");
    paragraph.className = "question-copy";
    paragraph.textContent = lines.join(" ");
    return paragraph;
  }

  function createAlgorithmBlock(lines) {
    const block = document.createElement("pre");
    block.className = "algorithm-block";
    block.textContent = lines.join("\n");
    return block;
  }

  function createFigure(figure) {
    const wrapper = document.createElement("figure");
    wrapper.className = "question-figure";

    const image = document.createElement("img");
    image.src = figure.src;
    image.alt = figure.alt || "Kérdés ábrája";
    image.loading = "lazy";

    wrapper.append(image);
    return wrapper;
  }

  function startsAlgorithm(line) {
    return line.startsWith("Algoritmus ") || line === "START";
  }

  function endsAlgorithm(line) {
    return line === "STOP" || line === "Vége(algoritmus)";
  }

  function renderQuestionText(question) {
    const lines = Array.isArray(question.questionLines) && question.questionLines.length
      ? question.questionLines
      : [question.question];
    const hasAlgorithm = lines.some((line) => startsAlgorithm(line));
    const longQuestion = question.question.length > 360 || lines.length > 8;

    questionText.innerHTML = "";
    questionText.classList.toggle("long-question", longQuestion);

    const appendFigures = () => {
      if (Array.isArray(question.figures)) {
        question.figures.forEach((figure) => {
          questionText.append(createFigure(figure));
        });
      }
    };

    if (!hasAlgorithm) {
      questionText.append(createParagraph(lines));
      appendFigures();
      return;
    }

    let textLines = [];
    let algorithmLines = [];
    let inAlgorithm = false;

    lines.forEach((line) => {
      if (startsAlgorithm(line)) {
        if (textLines.length) {
          questionText.append(createParagraph(textLines));
          textLines = [];
        }
        if (algorithmLines.length) {
          questionText.append(createAlgorithmBlock(algorithmLines));
          algorithmLines = [];
        }
        inAlgorithm = true;
      }

      if (inAlgorithm) {
        algorithmLines.push(line);
        if (endsAlgorithm(line)) {
          questionText.append(createAlgorithmBlock(algorithmLines));
          algorithmLines = [];
          inAlgorithm = false;
        }
      } else {
        textLines.push(line);
      }
    });

    if (algorithmLines.length) {
      questionText.append(createAlgorithmBlock(algorithmLines));
    }
    if (textLines.length) {
      questionText.append(createParagraph(textLines));
    }

    appendFigures();
  }

  function renderQuestion() {
    const question = questions[currentIndex];
    answered = false;
    answers.innerHTML = "";
    feedback.className = "feedback hidden";
    feedback.textContent = "";
    nextButton.classList.add("hidden");

    counter.textContent = `${currentIndex + 1} / ${questions.length}`;
    score.textContent = `Pontszám: ${correctCount}`;
    progressFill.style.width = `${(currentIndex / questions.length) * 100}%`;
    tetelLabel.textContent = `${question.tetel}. tétel`;
    pageLabel.textContent = `PDF oldal: ${question.sourcePages.join(", ")}`;
    renderQuestionText(question);

    question.shuffledOptions.forEach((option) => {
      const button = document.createElement("button");
      button.className = "answer-button";
      button.type = "button";
      button.textContent = option.text;
      button.dataset.optionId = option.id;
      button.addEventListener("click", () => selectAnswer(button, question));
      answers.append(button);
    });
  }

  function selectAnswer(button, question) {
    if (answered) {
      return;
    }

    answered = true;
    const selectedId = button.dataset.optionId;
    const isCorrect = selectedId === question.answer;
    const correctOption = question.options.find((option) => option.id === question.answer);

    if (isCorrect) {
      correctCount += 1;
      feedback.textContent = "Helyes válasz.";
      feedback.className = "feedback success";
    } else {
      feedback.textContent = `Helytelen. A helyes válasz: ${correctOption.text}`;
      feedback.className = "feedback error";
    }

    [...answers.children].forEach((answerButton) => {
      answerButton.disabled = true;
      if (answerButton.dataset.optionId === question.answer) {
        answerButton.classList.add("correct");
      } else if (answerButton === button) {
        answerButton.classList.add("wrong");
      }
    });

    score.textContent = `Pontszám: ${correctCount}`;
    progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
    nextButton.textContent = currentIndex + 1 === questions.length ? "Eredmény" : "Következő";
    nextButton.classList.remove("hidden");
    nextButton.focus();
  }

  function goNext() {
    if (currentIndex + 1 >= questions.length) {
      showResult();
      return;
    }

    currentIndex += 1;
    renderQuestion();
  }

  function showResult() {
    const percent = Math.round((correctCount / questions.length) * 100);
    resultTitle.textContent = `${percent}%`;
    resultDetails.textContent = `${correctCount} helyes válasz ${questions.length} kérdésből.`;
    showOnly(resultView);
  }

  startButton.addEventListener("click", startQuiz);
  restartButton.addEventListener("click", startQuiz);
  againButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", goNext);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !nextButton.classList.contains("hidden")) {
      goNext();
    }
  });
})();
