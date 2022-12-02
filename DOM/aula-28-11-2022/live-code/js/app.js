const modal = document.getElementById('modal')
const form = document.getElementById('subscribe')
let currentQuestion = null

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

const renderQuestions = (questions) => {
    const questionsContent = document.getElementById('content')
    questionsContent.innerHTML = ''

    questions.forEach((question) => {
        questionsContent.innerHTML = questionsContent.innerHTML + `
            <div class="card mb-3">
                <div class="card-body d-flex justify-content-between">
                    <div>${question.title}</div>
                    <div class="d-flex">
                        <button type="button" onclick="editQuestion(${question.id})">Editar</button>
                        <button type="button" onclick="deleteQuestion(${question.id})">Excluir</button>
                    </div>
                </div>
            </div>
        `
    })
}

const getQuestions = async () => {
    const apiResponse = await fetch('http://localhost:3000/questions')
    const questions = await apiResponse.json()
    renderQuestions(questions)
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

const saveQuestion = async (question) => {
    if (currentQuestion === null) {
        await createQuestion(question)
    } else {
        await updateQuestion(currentQuestion.id, question)
        currentQuestion = null
    }
    closeModal()
    getQuestions()
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