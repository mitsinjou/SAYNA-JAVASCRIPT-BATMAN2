//set the data
// from the api

var questions = [
    {
        question: "Quel est l’autre nom de l’Homme-Mystère ?",
        answers: ["Le Sphinx", "Le Saphir", "Le Joker"],
        correctAnswer: 0,
    },
    {
        question: "Quelle est l’ancienne profession de Harley Quinn ?",
        answers: ["Infirmière", "Psychiatre", "Dentiste"],
        correctAnswer: 1,
    },
    {
        question: "Quel est l’objet fétiche de Double Face ?",
        answers: ["Une pièce", "Un livre", "Un couteau"],
        correctAnswer: 0,
    },

    {
        question: "Quelle ville Batman défend-il ?",
        answers: ["Gotham City", "Starling City", "Tananarive"],
        correctAnswer: 0,
    },

    {
        question: "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
        answers: ["Georges Clooney", "Val Kilmer", "Mickael Keaton"],
        correctAnswer: 2,
    },

    {
        question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
        answers: ["Matina et Adam", "Elaine et Georges", "Martha et James"],
        correctAnswer: 1,
    },

    {
        question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
        answers: ["Le Pingouin", "L'Homme mystère", "Le Geek"],
        correctAnswer: 1,
    },

    {
        question: " Qui interprète le Joker en 2008 ?",
        answers: ["Heath Legder", "Haeth Ledger", "Heath Ledger"],
        correctAnswer: 2,
    },

    {
        question: "En quelle année Robin fait il sa première apparition ?",
        answers: ["1940", "1936", "1941"],
        correctAnswer: 0,
    },

    {
        question: "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
        answers: ["Oracle Huntress", "Black Canary", "L'Epouvantail"],
        correctAnswer: 0,
    },

    {
        question: "Batman c’est aussi le nom d’une ville en...",
        answers: ["Islande", "Turquie", "Allemagne"],
        correctAnswer: 1,
    },

    {
        question: "Qui a realisé Batman en 1966 ?",
        answers: ["Stanley Kubrick", "Andy Warhol", "Leslie Martinson"],
        correctAnswer: 2,
    },
];

// Set variable départ

var currentQuestion = 0;
var score = 0;

// Set éleéments html , liaiso avec js, set variable et DOM

var startBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questionText = document.querySelector(".question");
var options = document.querySelector(".options");
var nextBtn = document.getElementById("next-btn");
var resultContainer = document.getElementById("result-container");
var resultText = document.getElementById("result-text");

// Set event for buttons

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);

// fonction to start the quizz

function startQuiz() {
    startBtn.style.display = "none";
    questionContainer.style.display = "block";
    showQuestion();
}

// Fonction that show the questions

function showQuestion() {
    // set the question, erase last question

    var question = questions[currentQuestion];
    questionText.textContent = question.question;
    options.innerHTML = "";

    // for loop to display the 3 options of answer

    for (var i = 0; i < question.answers.length; i++) {
        var option = document.createElement("label");
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = i;
        option.appendChild(input);
        option.appendChild(document.createTextNode(question.answers[i]));
        options.appendChild(option);
    }
}

// Function to discplay next question

function nextQuestion() {
    // Verification si l'utilisateur réponds
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');

    // codition si l(utilisateur n'a pas répondu)
    if (!selectedAnswer) {
        alert("Veuillez sélectionner une réponse.");
        return;
    }

    // évaluaton de la réponse: score
    var answer = parseInt(selectedAnswer.value);

    // si bonne réponse

    if (answer === questions[currentQuestion].correctAnswer) {
        score++;
    }

    // incrémentation, passer nextQuestion

    currentQuestion++;

    // Arrivée à la fin du quizz

    if (currentQuestion === questions.length) {
        showResult();
    } else {
        showQuestion();
    }
}

// Function to disply result and popup

function showResult() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";

    // conditions résultats

    if (score < 4) {
        resultText.textContent = "Vous êtes nul.";
    } else if (score >= 4 && score <= 10) {
        resultText.textContent = "Vous êtes moyen.";
    } else {
        resultText.textContent = "Vous êtes très bon.";
    }
}
