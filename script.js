var timerEl = document.getElementById("counter");
var questionEl = document.getElementById("questions");
var startBtn = document.getElementById("start-quiz");
var questionContainerEl =  document.querySelector('#question-container');
console.log(document.getElementById("start-quiz"))
var fullQuiz = [
    {
        question: "How many moons does Neptune have?",
        answers: [
            { answer: 22, isItCorrect: false },
            { answer: 10, isItCorrect: false },
            { answer: 3, isItCorrect: false },
            { answer: 14, isItCorrect: true },
        ]

    },
    {
        question: "Which planet spins in the opposite direction from all others in our Solar System?",
        answers: [
            { answer: "Saturn", isItCorrect: false },
            { answer: "Jupiter", isItCorrect: false },
            { answer: "Venus", isItCorrect: true },
            { answer: "Earth", isItCorrect: false },
        ]
    },
    {
        question: "Which planet  in our Solar System does not have rings?",
        answers: [
            { answer: "Mercury", isItCorrect: true },
            { answer: "Jupiter", isItCorrect: false },
            { answer: "Neptune", isItCorrect: false },
            { answer: "Uranus", isItCorrect: false },
        ]
    },
    {
        question: "Which odd element can be found as 'rain' on the planet Saturn?",
        answers: [
            { answer: "Fire", isItCorrect: false },
            { answer: "Diamonds", isItCorrect: true },
            { answer: "Acid", isItCorrect: false },
            { answer: "Liquid Mercury", isItCorrect: false },
        ]
    },
    {
        question: "Which of the following was downgraded from planet to Dwarf planet by NASA?",
        answers: [
            { answer: "Charon", isItCorrect: false },
            { answer: "Phobos", isItCorrect: false },
            { answer: "Pluto", isItCorrect: true },
            { answer: "Deimos", isItCorrect: false },
        ]
    },
]


var count = 0;
function showNextQuestion() {
    const answerList = document.querySelector('#answers');
    while (answerList.firstChild) {
        answerList.firstChild.remove();
    };

    questionEl.textContent = fullQuiz[count].question;
    for (i = 0; i < fullQuiz[count].answers.length; i++) {
        var btn = document.createElement('button');
        btn.innerText = fullQuiz[count].answers[i].answer;
        btn.setAttribute('data-isItCorrect', fullQuiz[count].answers[i].isItCorrect);
        answerList.appendChild(btn);
    };
    count++
}

var timeLeft = 90;
function countDown() {
    var timeInterval = setInterval(function () {

        timerEl.textContent = timeLeft;
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = ""
            displayMessage();
        }
    }, 1000);
}

function checkAnswer(e){
    console.log(e.target.getAttribute('data-isItCorrect'))
    // if isItCorrect == "true" give correct feedback else give incorrect feeback subtratc -10 from timer
    // if count == fullQuiz.length - 1 { endGame() };
    showNextQuestion();
}

function startGame() {
    countDown();
    questionContainerEl.style.display = "block"
    showNextQuestion();
}
console.log(timerEl)
startBtn.addEventListener('click', startGame);
questionContainerEl.addEventListener('click', checkAnswer);