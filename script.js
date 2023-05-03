var timerEl = document.getElementById("counter");
var pointCounterEl = document.getElementById("points");
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
            { answer: "Glass", isItCorrect: false },
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
    {
        question: "Which moon is the largest in our solar system?",
        answers: [
            { answer: "Rhea", isItCorrect: false },
            { answer: "Ganymeade", isItCorrect: true },
            { answer: "Titania", isItCorrect: false },
            { answer: "Earth's Moon", isItCorrect: false },
        ]
    },
    {
        question: "Sunsets on Mars are what color?",
        answers: [
            { answer: "Purple", isItCorrect: false },
            { answer: "Pink", isItCorrect: false },
            { answer: "Orange", isItCorrect: false },
            { answer: "Blue", isItCorrect: true },
        ]
    },
    {
        question: "What is the the name of the area in a black hole that once crossed, there is no coming back?",
        answers: [
            { answer: "Event Horizon", isItCorrect: true },
            { answer: "Point of no Return", isItCorrect: false },
            { answer: "Endgame", isItCorrect: false },
            { answer: "No Man's Land", isItCorrect: false },
        ]
    },
    {
        question: "Which two galaxies are gradually nearing a collision?",
        answers: [
            { answer: "Andromeda & Triangulum", isItCorrect: false },
            { answer: "Milky Way & Triangulum", isItCorrect: false },
            { answer: "Andromeda & Milky Way", isItCorrect: true },
            { answer: "Triangulum & Messier 81", isItCorrect: false },
        ]
    },
    {
        question: "Which is not a type of galaxy?",
        answers: [
            { answer: "Elliptical", isItCorrect: false },
            { answer: "Tornado", isItCorrect: true },
            { answer: "Irregular", isItCorrect: false },
            { answer: "Spiral", isItCorrect: false },
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
        btn.style.backgroundColor="navy";
        btn.style.color="mediumpurple";
        btn.style.minHeight="100px"
        btn.style.minWidth="800px"
        btn.style.fontSize="30px"
        btn.style.borderRadius="25px"
        btn.style.boxShadow="10px 10px 20px grey"
        btn.style.textShadow="5px 5px 20px hotpink"
        btn.style.margin="20px"

        questionEl.style.textAlign="center"
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

var pointTotal = 0
pointCounterEl.textContent=pointTotal;
pointCounterEl.style.fontSize="50px"
pointCounterEl.style.color="darkgreen"

if(pointTotal==0){
    pointCounterEl.style.display="none";
}

function checkAnswer(e){
    console.log(e.target.getAttribute('data-isItCorrect'))

    if(e.target.getAttribute('data-isItCorrect') == "false"){
        timeLeft -= 10;
     }
    // if isItCorrect == "true" give points
    if(timeLeft <= 0){
        endGame();
    }else if(count == fullQuiz.length - 1){
        endGame();
    }else{
    showNextQuestion();
    }
}

function endGame(){
    
}

function startGame() {
    countDown();
    questionContainerEl.style.display = "block"
    showNextQuestion();
    startBtn.style.display= "none"
}
console.log(timerEl)
startBtn.addEventListener('click', startGame);
questionContainerEl.addEventListener('click', checkAnswer);