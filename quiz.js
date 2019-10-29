// Select all the elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// Create the questions
let questions = [
  {
    question: "What does HTML stand for?",
    imgSrc: "img/html.png",
    choiceA: "Correct",
    choiceB: "Wrong",
    choiceC: "Wrong",
    correct: "A"
  },
  {
    question: "What does CSS stand for?",
    imgSrc: "img/css.png",
    choiceA: "Wrong",
    choiceB: "Correct",
    choiceC: "Wrong",
    correct: "B"
  },
  {
    question: "What does JS stand for?",
    imgSrc: "img/js.png",
    choiceA: "Wrong",
    choiceB: "Wrong",
    choiceC: "Correct",
    correct: "C"
  }
];

// create variables

const lastQuestion = questions.length - 1;

let runningQuestion = 0;

let count = 0;

const questionTime = 10; // 10 seconds
const gaugeWidth = 150; // 150 pixels
const gaugeUnit = gaugeWidth / questionTime;
const TIMER;
let score = 0;

// render questions
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+q.question+"</p>";
    qImg.innerHTML = "<img src="+q.imgSrc+">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// Quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1 second
}

// render progress
function renderProgress() {
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// render counter
function renderCounter() {
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// Check Answers
function checkAnswer(answer) {
    if( answer == question[runningQuestion].correct){
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "0f0";
}

// answer is wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "f00";
}