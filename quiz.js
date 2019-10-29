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
  }
];
