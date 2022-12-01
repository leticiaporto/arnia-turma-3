const modal = document.getElementById('modal')
const form = document.getElementById('subscribe')

const openModal = () => {
    modal.style.display = "block"
}

const closeModal = () => {
    modal.style.display = "none"
}

window.addEventListener("click", (event) => {
    if(event.target === modal) {
        closeModal()
    }
})

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

const saveQuestion = async (question) => {
    await createQuestion(question)
    closeModal()
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
        alternatives: [
            {
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