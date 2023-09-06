// const altCorreta = document.querySelectorAll(".alt-correta");
// const altErrada = document.querySelectorAll(".alt-errada");
// const respCorreta = document.querySelector(".resp-correta");
// const respErrada = document.querySelector(".resp-errada");
// const button = document.querySelectorAll("button");
// const questaoQuiz = document.querySelectorAll(".questao-quiz");

// button.forEach((item) =>  {
//     item.addEventListener('click', (event) => {
//         if(event.target.classList.contains("alt-correta")) {
//             respErrada.classList.remove("ativo");
//             respCorreta.classList.toggle("ativo");
//         } else {
//             respCorreta.classList.remove("ativo");
//             respErrada.classList.toggle("ativo");
//         }
//     });
// });

const questions = [
    {
        question: "Qual a definição de ecologia?",
        options: ["a) O estudo dos seres humanos e seu comportamento", "b) O estudo dos seres vivos e seu ambiente", "c) O estudo das rochas e minerais"],
        correctAnswer: "b) O estudo dos seres vivos e seu ambiente"
    },
    {
        question: "Qual é o principal fator que contribui para o aquecimento global?",
        options: ["a) A poluição do ar", "b) O uso excessivo de energia elétrica", "c) O aumento da concentração de gases de efeito estufa na atmosfera"],
        correctAnswer: "c) O aumento da concentração de gases de efeito estufa na atmosfera"
    },
    {
        question: "Por que a biodiversidade é importante?",
        options: ["a) Porque garante a sobrevivência dos seres humanos", "b) Porque mantém o equilíbrio dos ecossistemas", "c) Porque é bonita de se ver"],
        correctAnswer: "b) Porque mantém o equilíbrio dos ecossistemas"
    },
    {
        question: "Qual é o principal impacto do desmatamento?",
        options: ["a) A extinção de espécies animais e vegetais", "b) Diminuição da qualidade do ar", "c) A falta de espaço para construções urbanas"],
        correctAnswer: "a) A extinção de espécies animais e vegetais"
    },
    {
        question: "Qual é o objetivo da sustentabilidade?",
        options: ["a) Garantir a sobrevivência das empresas", "b) Preservar os recursos naturais para as gerações futuras", "c) Reduzir os custos de produção"],
        correctAnswer: "b) Preservar os recursos naturais para as gerações futuras"
    },
    {
        question: "Qual é a principal fonte de energia renovável?",
        options: ["a) Carvão", "b) Petróleo", "c) Sol"],
        correctAnswer: "c) Sol"
    },
    {
        question: "Qual é o principal problema causado pela poluição da água?",
        options: ["a) A morte de peixes e outros animais aquáticos", "b) O aumento da temperatura da água", "c) A falta de água potável para consumo humano"],
        correctAnswer: "a) A morte de peixes e outros animais aquáticos"
    },
    {
        question: "Qual é a função das florestas na natureza?",
        options: ["a) Produzir oxigênio", "b) Absorver gás carbônico", "c) Fornecer sombra para os animais"],
        correctAnswer: "b) Absorver gás carbônico"
    },
    {
        question: "Qual é o principal impacto do lixo no meio ambiente?",
        options: ["a) A contaminação do solo e da água", "b) A redução da qualidade do ar", "c) A diminuição da população de animais selvagens"],
        correctAnswer: "a) A contaminação do solo e da água"
    },
    {
        question: "Qual é a importância da reciclagem?",
        options: ["a) Reduzir a quantidade de lixo produzido", "b) Economizar dinheiro", "c) Ajudar a preservar o meio ambiente"],
        correctAnswer: "c) Ajudar a preservar o meio ambiente"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const resultText = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsList.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => checkAnswer(option));
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.textContent = '';
    optionsList.innerHTML = '';

    resultText.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

loadQuestion();