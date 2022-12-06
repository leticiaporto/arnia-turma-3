const modal = document.getElementById('modal')
const form = document.getElementById('subscribe')
let currentQuestion = null
let currentIndexQuizQuestion = 0
let currentQuizQuestion = null
let quizQuestions = []
let quizAnswers = []

const openModal = () => {
    modal.style.display = "block"
}

const closeModal = () => {
    modal.style.display = "none"
    document.getElementById('title').value = ''
    document.getElementById('alternative1Text').value = ''
    document.getElementById(`alternative1`).checked = false
    document.getElementById('alternative2Text').value = ''
    document.getElementById(`alternative2`).checked = false
    document.getElementById('alternative3Text').value = ''
    document.getElementById(`alternative3`).checked = false
    document.getElementById('alternative4Text').value = ''
    document.getElementById(`alternative4`).checked = false
}

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal()
    }
})

const getQuestions = async () => {
    const apiResponse = await fetch('http://localhost:3000/questions')
    const questions = await apiResponse.json()
    return questions
}

const getQuestion = async (id) => {
    const apiResponse = await fetch(`http://localhost:3000/questions/${id}`)
    const question = await apiResponse.json()
    return question
}

const createQuestion = async (question) => {
    await fetch('http://localhost:3000/questions', {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(question)
    })
}

const updateQuestion = async (id, question) => {
    await fetch(`http://localhost:3000/questions/${id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(question)
    })
}

const deleteQuestion = async (id) => {
    await fetch(`http://localhost:3000/questions/${id}`, {
        method: 'DELETE'
    })
    getQuestions()
}

const renderQuestions = (questions) => {
    const questionsContent = document.getElementById('content')
    questionsContent.innerHTML = ''

    questions.forEach((question) => {
        questionsContent.innerHTML = questionsContent.innerHTML + `
            <div class="card mb-3">
                <div class="card-body d-flex justify-content-between">
                    <div>${question.title}</div>
                    <div class="d-flex">
                        <button type="button" class="button" onclick="editQuestion(${question.id})"><i class="fa-solid fa-pen-to-square fa-lg"></i></button>
                        <button type="button" class="button remove-button" onclick="deleteQuestion(${question.id})"><i class="fa-solid fa-trash-can fa-lg"></i></button>
                    </div>
                </div>
            </div>
        `
    })
}

const loadQuestions = async () => {
    const questions = await getQuestions()
    renderQuestions(questions)
}

const saveQuestion = async (question) => {
    if (currentQuestion === null) {
        await createQuestion(question)
    } else {
        await updateQuestion(currentQuestion.id, question)
        currentQuestion = null
    }
    closeModal()
    loadQuestions()
}

const editQuestion = async (id) => {
    currentQuestion = await getQuestion(id)
    document.getElementById('title').value = currentQuestion.title
    currentQuestion.alternatives.forEach((alternative, index) => {
        document.getElementById(`alternative${index+1}Text`).value = alternative.text
        document.getElementById(`alternative${index+1}`).checked = alternative.correct
    })
    openModal()
}

const renderQuizQuestion = (index) => {
    const questionsContent = document.getElementById('content-quiz')
    questionsContent.innerHTML = ''
    const question = quizQuestions[index]

    let questionsHtml = `
        <div class="question-title mb-4">${question.title}</div>
        <form id="quiz-form">`

    question.alternatives.forEach((alternative, index) => {
        questionsHtml = questionsHtml + `
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="alternative" id="alternative${index + 1}" value="${index}" />
                    <label class="form-check-label" for="alternative${index + 1}">${alternative.text}</label>
                </div>
            </div>
        `
    })
    questionsHtml = questionsHtml + `
            <div class="mt-5 d-flex justify-content-between">`

    if (index > 0) {
        questionsHtml = questionsHtml + `<button type="button" class="primary-button" onclick="navigate('previous')">Anterior</button>`
    } else {
        questionsHtml = questionsHtml + `<div class="simulate-primary-button"></div>`
    }

    questionsHtml = questionsHtml + `<div class="footer-text">Questão ${index + 1}/${quizQuestions.length}</div>`

    if (index + 1 !== quizQuestions.length) {
        questionsHtml = questionsHtml + `<button type="button" class="primary-button" onclick="navigate('next')">Próximo</button>`
    } else {
        questionsHtml = questionsHtml + `<button type="button" class="primary-button" onclick="finish()">Finalizar</button>`
    }

    `</div></form>`

    questionsContent.innerHTML = questionsHtml
}

const renderQuizResult = (percentage) => {
    const questionsContent = document.getElementById('content-quiz')
    questionsContent.innerHTML = `
        <div class="quiz-result">
            <div class="result-icon">
                <i class="fa-regular fa-circle-check fa-8x"></i>
            </div>
            <div class="text">
                QUIZ Finalizado!
            </div>
            <div class="text">
                Você acertou ${percentage}% das questões
            </div>
        </div>
    `
}

const loadQuiz = async () => {
    quizQuestions = await getQuestions()
    currentQuizQuestion = quizQuestions[currentIndexQuizQuestion]
    renderQuizQuestion(currentIndexQuizQuestion)
}

const navigate = async (type) => {
    const alternative = document.getElementById('quiz-form').elements['alternative'].value

    quizAnswers = quizAnswers.filter((answer) => answer.id !== currentQuizQuestion.id)

    const correctAlternativeIndex = currentQuizQuestion.alternatives.findIndex((alternative) => alternative.correct)
    quizAnswers.push({
        questionId: currentQuizQuestion.id,
        alternative,
        correct: correctAlternativeIndex === parseInt(alternative)
    })

    type === 'next' ? currentIndexQuizQuestion++ : currentIndexQuizQuestion--

    renderQuizQuestion(currentIndexQuizQuestion)

    currentQuizQuestion = quizQuestions[currentIndexQuizQuestion]
}

const finish = () => {
    const countCorrects = quizAnswers.filter((answer) => answer.correct).length
    const correctPercentage = (countCorrects * 100) / quizQuestions.length
    renderQuizResult(correctPercentage.toFixed(2))
}

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const title = form.elements['title'].value
        const alternative1 = form.elements['alternative1Text'].value
        const alternative2 = form.elements['alternative2Text'].value
        const alternative3 = form.elements['alternative3Text'].value
        const alternative4 = form.elements['alternative4Text'].value
        const correct = form.elements['correct'].value

        const question = {
            title,
            alternatives: [{
                    text: alternative1,
                    correct: correct === 'alternative1'
                },
                {
                    text: alternative2,
                    correct: correct === 'alternative2'
                },
                {
                    text: alternative3,
                    correct: correct === 'alternative3'
                },
                {
                    text: alternative4,
                    correct: correct === 'alternative4'
                },
            ]
        }

        saveQuestion(question)
    })
}