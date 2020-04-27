const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-conntainer");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestion, currentQuestionIndex

startButton.addEventListener("click", StarQuiz)
nextButton.addEventListener("click", () => {
    crurentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    console.log("stared")
    startButton.classList.add("hide")
    ShuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    ShowQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerTex = answer.text;
        button.classList.add("btn");
        If (answer.correct) {
            button.datasset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add("Hide")
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(buton =>{
        setStatusClass(buton, button.dataset.correct)
    })
    if(shuffLedQuestions.length >crurentQuestionIndex +1){
        nextButton.classList.remove("hide")
    }
    
    else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } 
    else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const Question =[];
const score = 0;

const question = [
    {
        prompt: "What element is used to identify a variable in a mathematical equation \n(a) var\n\(b)function\n(c)Let",
        answer : "a"
    },
    {
        prompt: "what is Hypertext Markup Language?\n(a) style\n\ (b) html\n(c)css",
        answer: "b"

    },
    {
        prompt: "which is a is a data structure, which can store a fixed-size collection of elements of the same data type\(a)if\n\(b)const\n(c)arrays",
        answer: "c"
    },
]
