// Variável com o elemento modal
const modal = document.getElementById('modal')
// Variável com o elemento formulário
const form = document.getElementById('subscribe')
// Variável para armazena a questão que está sendo editada
let currentQuestion = null

/* VARIÁVEIS PARA O FUNCIONAMENTO DO QUIZ */
// Variável para armazena o index da questão que está sendo respondida
let currentIndexQuizQuestion = 0
// Variável para armazena a questão que está sendo respondida
let currentQuizQuestion = null
// Variável para armazena as questões do Quiz
let quizQuestions = []
// Variável para armazena as respostas do Quiz
let quizAnswers = []

/* Método para abrir o modal definindo o display do elemento como "block" */
const openModal = () => {
    modal.style.display = "block"
}

/* Método para fechar o modal definindo o display do elemento como "none" */
const closeModal = () => {
    modal.style.display = "none"
}

/* 
    Método para limpar os campos do formulário
    1. Os valor de todos os campos de texto são definidos como vazios 
    2. O atributo checked dos campos de radio são definidos como "false"
*/
const clearFormFields = () => {
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

/* Método para buscar a lista de questões na API */
const getQuestions = async () => {
    const apiResponse = await fetch('http://localhost:3000/questions')
    const questions = await apiResponse.json()
    return questions
}

/* Método para buscar uma questão na API */
const getQuestion = async (id) => {
    const apiResponse = await fetch(`http://localhost:3000/questions/${id}`)
    const question = await apiResponse.json()
    return question
}

/* Método para cadastrar uma nova questão através da API */
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

/* Método para atualizar uma questão existente na API */
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

/* Método para remover uma questão através da API */
const deleteQuestion = async (id) => {
    await fetch(`http://localhost:3000/questions/${id}`, {
        method: 'DELETE'
    })
    getQuestions()
}

/*
    Método responsável por renderizar as questões no arquivo index.html
    Usa-se o atributo "innerHtml" do elemento com id "content" para adicionar novos trechos de código HTML na tela.
    Neste caso, a cada iteração do forEach sob a variável "questions", adiciona-se na tela um Card com os dados correspondentes à Questão
*/
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

/* 
    Método para carregar as questões.
    1. Busca os dados na API
    2. Chama o método para renderizá-los na tela
*/
const loadQuestions = async () => {
    const questions = await getQuestions()
    renderQuestions(questions)
}

/* 
    Método para salvar as questões (novo cadastro ou edição).
*/
const saveQuestion = async (question) => {
    //Se não existe questão sendo editada no momento, chama o médoto de criação de uma nova questão
    if (currentQuestion === null) {
        await createQuestion(question)
    } else {
        //Se existe questão sendo editada no momento, chama o médoto para atualização da mesma
        await updateQuestion(currentQuestion.id, question)
        currentQuestion = null
    }
    // Chama o método para limpar os campos
    clearFormFields()
    // Chama o método para fechar o modal
    closeModal()
    // Chama o método para carregar os dados atualizados na listagem
    loadQuestions()
}

/* 
    Método chamado ao clicar no botão de "lápis" da listagem
    1. Busca os dados da questão pelo "id"
    2. Carrega nos campos do modal
    3. Abre o modal
*/
const editQuestion = async (id) => {
    currentQuestion = await getQuestion(id)
    document.getElementById('title').value = currentQuestion.title
    currentQuestion.alternatives.forEach((alternative, index) => {
        document.getElementById(`alternative${index+1}Text`).value = alternative.text
        document.getElementById(`alternative${index+1}`).checked = alternative.correct
    })
    openModal()
}

/* MÉTODOS RELACIONADOS AO QUIZ (arquivo quiz.html) */

/*
    Método responsável por renderizar cada questão do quiz no arquivo "quiz.html"
*/
const renderQuizQuestion = (index) => {
    const questionsContent = document.getElementById('content-quiz')
    questionsContent.innerHTML = ''
    const question = quizQuestions[index]

    let questionsHtml = `
        <div class="question-title mb-4">${question.title}</div>
        <form id="quiz-form">`

    /* 
        Passa pelas alterativas da questão para montar os inputs do tipo "radio"
        Observa-se que todos os inputs "radio" tem o mesmo "name", mas "id" e "value" diferentes
        O "value" é o index da alternativa, para facilitar no momento da correção do Quiz
    */
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

    /* 
        Condicional para não mostrar botão "Anterior" na primeira questão
        Botão "Anterior" chama o método "navigate" parrasando o tipo "previous" como parâmetro
    */
    if (index > 0) {
        questionsHtml = questionsHtml + `<button type="button" class="primary-button" onclick="navigate('previous')">Anterior</button>`
    } else {
        questionsHtml = questionsHtml + `<div class="simulate-primary-button"></div>`
    }

    questionsHtml = questionsHtml + `<div class="footer-text">Questão ${index + 1}/${quizQuestions.length}</div>`

    /*
        Condicional para não mostrar botão "Próximo" na última questão e mostrar o botão "Finalizar"
        Botão "Próximo" chama o método "next" parrasando o tipo "previous" como parâmetro
        Botão "Finalizar" chama o método "finish"
    */
    if (index + 1 !== quizQuestions.length) {
        questionsHtml = questionsHtml + `<button type="button" class="primary-button" onclick="navigate('next')">Próximo</button>`
    } else {
        questionsHtml = questionsHtml + `<button type="button" class="primary-button" onclick="finish()">Finalizar</button>`
    }

    `</div></form>`

    questionsContent.innerHTML = questionsHtml
}

/*
    Método responsável por renderizar o resultado do quiz no arquivo "quiz.html".
*/
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

/* 
    Método responsável por carregar o Quiz. 
    1. Busca os dados na API e armazena na variável global "quizQuestions"
    2. Atualiza na variável global "currentQuizQuestion" a questão atual que está sendo respondida para a primeira questão da lista
    3. Chama o método para renderizar questão na tela através do index
*/
const loadQuiz = async () => {
    quizQuestions = await getQuestions()
    currentQuizQuestion = quizQuestions[currentIndexQuizQuestion]
    renderQuizQuestion(currentIndexQuizQuestion)
}

/* 
    Método responsável por navegar entre as questões do Quiz. 
    type='next' para Próximo
    type='previous' para Anterior
*/
const navigate = async (type) => {
    //Recupera o valor da alternativa escolhida pelo usuário
    const alternative = document.getElementById('quiz-form').elements['alternative'].value

    /* 
        "Limpa" a resposta para a questão atual (currentQuizQuestion) se ela já existir no array "quizAnswers", evitando que tenham duas respostas para a mesma questão dentro do array
    */
    quizAnswers = quizAnswers.filter((answer) => answer.id !== currentQuizQuestion.id)

    /* 
        Busca a alternativa correta na questão atual
    */
    const correctAlternativeIndex = currentQuizQuestion.alternatives.findIndex((alternative) => alternative.correct)

    /* 
        Armazena no array "quizAnswers" um objeto com a resposta da questão atual
        Observa-se que o atributo "correct" salva o resultado da comparação entre o que foi respondido pelo usuário "alternative" e a alternativa correta "correctAlternativeIndex" 
    */
    quizAnswers.push({
        questionId: currentQuizQuestion.id,
        alternative,
        correct: correctAlternativeIndex === parseInt(alternative)
    })

    /*
        A partir do tipo de navegação, incrementa ou decrementa o index da questão atual para carregar a próxima questão ou a anterior
    */
    type === 'next' ? currentIndexQuizQuestion++ : currentIndexQuizQuestion--

    /*
        Atualiza a questão atual
    */
    currentQuizQuestion = quizQuestions[currentIndexQuizQuestion]

    /*
        Chama a função para renderizar na tela a nova questão
    */
    renderQuizQuestion(currentIndexQuizQuestion)
}

/* 
    Método responsável calcular o resultado do Quiz
    1. Verifica a quantidade de questões respondidas corretamente
    2. Calcula a porcentagem de acertos
    3. Chama o método para renderizar o resultado do Quiz na tela
*/
const finish = () => {
    const countCorrects = quizAnswers.filter((answer) => answer.correct).length
    const correctPercentage = (countCorrects * 100) / quizQuestions.length
    renderQuizResult(correctPercentage.toFixed(2))
}


if (form) {
    /* 
        Ouvinte da ação de "submit" do formulário 
    */
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        //Recupera os dados do formulário
        const title = form.elements['title'].value
        const alternative1 = form.elements['alternative1Text'].value
        const alternative2 = form.elements['alternative2Text'].value
        const alternative3 = form.elements['alternative3Text'].value
        const alternative4 = form.elements['alternative4Text'].value
        const correct = form.elements['correct'].value

        //Monta o objeto
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

        //Chama o método para salvar a questão
        saveQuestion(question)
    })
}

/* 
    Ouvinte da ação de "click" fora do modal
*/
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        //limpa os campos
        clearFormFields()
        //fecha o modal
        closeModal()
    }
})