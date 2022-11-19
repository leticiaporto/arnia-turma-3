const form = document.getElementById('subscribe')

const NAME_REQUIRED = 'Por favor insira o seu nome'
const EMAIL_REQUIRED = 'Por favor insira o seu e-mail'
const EMAIL_INVALID = 'Por favor insira um e-mail no padrão correto'
const CPF_REQUIRED = 'Por favor insira o seu CPF'
const CPF_INVALID = 'Por favor insira um CPF no padrão correto (11 dígitos)'
const CEP_REQUIRED = 'Por favor insira o seu CEP'
const CEP_INVALID = 'Por favor insira um CEP no padrão correto (8 dígitos)'
const PASSWORD_REQUIRED = 'Por favor insira o sua senha'
const PASSWORD_INVALID = 'Por favor insira uma senha válida (8 dígitos com um número e uma letra)'
const CONFIRM_PASSWORD_REQUIRED = 'Por favor insira a confirmação sua senha'
const PASSWORD_SAME = 'As senhas devem ser iguais'

/**
 * Função que tem como objetivo colocar conteúdo dentro da tag small que está dentro das sections com
 * a classe field. O input.parentNode serve para pegar a tag que é pai do input passado por parâmetro, 
 * e o querySelector seleciona a primeira tag small que ele encontrar. Além disso, a função também é 
 * responsável por colorir a borda do input, mostrando que está tudo certo ou errado.
 * @param {HTMLInputElement} input Elemento HTML Input em que será mostrada a mensagem
 * @param {string} message String contendo a mensagem que será inserida dentro da tag small
 * @param {boolean} type Tipo da mensagem, sendo true para sucesso e false para erro
 * @returns {boolean} True ou false a depender do type passado
 */
function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small')
  msg.innerText = message
  input.classList.remove('success')
  input.classList.remove('error')
  input.className = `${input.className} ${type ? 'success' : 'error'}`
  return type
}

/**
 * Função que tem como objetivo utilizar a função showMessage criada anteriormente para mostrar um
 * erro na tela. Repare que ela recebe o mesmo input que será passado para showMessage e também a 
 * mensagem, mas ela sempre passa false para o parâmetro type.
 * @param {HTMLInputElement} input Elemento HTML Input em que será mostrada a mensagem de erro 
 * @param {string} message String contendo a mensagem que será inserida dentro da tag small 
 * @returns {false}
 */
function showError(input, message) {
  return showMessage(input, message, false)
}

/**
 * Função que tem como objetivo utilizar a função showMessage criada anteriormente para mostrar um
 * sucesso no input. Repare que ela recebe o mesmo input que será passado para showMessage, mas não 
 * recebe a mensagem, pois um sucesso não precisa ter mensagem.
 * @param {HTMLInputElement} input Elemento HTML Input em que será mostrada a mensagem de sucesso
 * @returns {true}
 */
function showSuccess(input) {
  return showMessage(input, '', true)
}

/**
 * Função que tem como objetivo verificar se há algum valor dentro do input ou se ele está vazio.
 * Repare que a função trim() serve para retirar os espaços em branco antes e depois da string.
 * @param {HTMLInputElement} input Elemento HTML Input que será verificado 
 * @param {string} message Mensagem de erro caso o elemento esteja vazio
 * @returns 
 */
function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message)
  }
  return showSuccess(input)
}

/**
 * Função que tem como objetivo validar um e-mail. Primeiro ela verifica se o input possui alguma
 * coisa inserida (utilizando a função hasValue) e depois ele testa o e-mail a partir de um regex, 
 * para ver se ele segue o padrão correto.
 * @param {HTMLInputElement} input Elemento HTML Input de email que será verificado 
 * @param {string} requiredMsg Mensagem de erro caso o elemento esteja vazio
 * @param {string} invalidMsg Mensagem de erro caso o elemento seja inválido
 * @returns {boolean} True caso o e-mail seja válido e false caso não
 */
function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const email = input.value.trim()

  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg)
  }

  return true
}

/**
 * Função que tem como objetivo gerar o dígito veríficador de um CPF de acordo com as regras descritas nesse endereço: https://www.calculadorafacil.com.br/computacao/validar-cpf.
 * @param {array} arrayNumeros Array com os números para cálculo do dígito verificador
 * @param {string} countStart Contém o valor inicial que será usado como multiplicador
 * @returns {number} Dígito verificador
 */
function calculateIdentity(arrayNumeros, countStart) {
  let soma = 0
  let i = countStart

  arrayNumeros.forEach((numero) => {
    soma = soma + (parseInt(numero) * i)
    i++
  })

  const identity = soma % 11
  return identity === 10 ? 0 : identity
}

/**
 * Função que tem como objetivo validar um CPF. Primeiro ela verifica se o input possui alguma
 * coisa inserida (utilizando a função hasValue), depois ele remove os "." e "-", testa se o
 * tamanho do CPF é válido (8 dígitos) e testa se ele segue o padrão correto.
 * @param {HTMLInputElement} input Elemento HTML Input de CPF que será verificado 
 * @param {string} requiredMsg Mensagem de erro caso o elemento esteja vazio
 * @param {string} invalidMsg Mensagem de erro caso o elemento seja inválido
 * @returns {boolean} True caso o CPF seja válido e false caso não
 */

function validateCPF(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false
  }

  const cpf = input.value.trim().replaceAll('.', '').replaceAll('-', '')

  if (cpf.length !== 11) {
    return showError(input, invalidMsg)
  }

  /*
    Transforma o CPF digitado em array
  */
  const cpfArray = cpf.split('')
  /*
    Os 9 primeiros dígitos do CPF são extraídos e armazenados na variável "firstNumbers".
    Neste momento a variável "cpfArray" passa a armazenar somente os dois ultimos números do CPF digitado.
  */
  const firstNumbers = cpfArray.splice(0, 9)
  /*
    Os primeiro dígito verificador é calculado e valor inicial do multiplicador é 1.
  */
  const firstIdentity = calculateIdentity(firstNumbers, 1)
  /*
    Os primeiro dígito verificador calculado é adicionado ao array "firstNumbers" para o cálculo do segundo dígito verificador. Agora o valor inicial do multiplicador é 0.
  */
  firstNumbers.push(firstIdentity)
  const secondIdentity = calculateIdentity(firstNumbers, 0)
  /*
    Checagem se os dígitos verificadores gerados são iguais aos dois últimos dífitos do CPF digitado.
  */
  if (parseInt(cpfArray[0]) !== firstIdentity || parseInt(cpfArray[1]) !== secondIdentity) {
    return showError(input, invalidMsg)
  }

  return true
}

function validateCEP(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false
  }

  const cepRegex = /[0-9]+/
  const cep = input.value.trim().replaceAll('.', '').replaceAll('-', '')

  if (cep.length !== 8) {
    return showError(input, invalidMsg)
  }

  if (!cepRegex.test(cep)) {
    return showError(input, invalidMsg)
  }

  return true
}

function validatePassword(input, requiredMsg, invalidMsg, sameMsg, secondInput) {
  if (!hasValue(input, requiredMsg)) {
    return false
  }

  const passwordRegex = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i
  const password = input.value.trim()
  const otherPassword = secondInput.value.trim()

  if (password.length < 8) {
    return showError(input, invalidMsg)
  }

  if (!passwordRegex.test(password)) {
    return showError(input, invalidMsg)
  }

  
  if (otherPassword !== password) {
    return showError(input, sameMsg)
  }

  return true
}

/**
 * Esta função chamada a partir do elemento form que pegamos lá em cima adiciona um 
 * listener para o evento submit. Quando este evento ocorre, a função que está declarada
 * no segundo parâmetro é disparada. Primeiro, a função previne que o comportamento padrão
 * de um submit seja executado. Segundo, ela pega os elementos HTML de nome e email. Terceiro,
 * ela valida cada um dos campos e por último ela deixa executar o submit caso ambos sejam
 * válidos.
 */
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const nameInput = form.elements['fullName']
  const emailInput = form.elements['email']
  const cpfInput = form.elements['cpf']
  const cepInput = form.elements['cep']
  const passwordInput = form.elements['password']
  const confirmPasswordInput = form.elements['confirmPassword']

  const nameValid = hasValue(nameInput, NAME_REQUIRED)
  const emailValid = validateEmail(emailInput, EMAIL_REQUIRED, EMAIL_INVALID)
  const cpfValid = validateCPF(cpfInput, CPF_REQUIRED, CPF_INVALID)
  const cepValid  = validateCEP(cepInput, CEP_REQUIRED, CEP_INVALID)
  const passwordValid = validatePassword(passwordInput, PASSWORD_REQUIRED, PASSWORD_INVALID, PASSWORD_SAME, confirmPasswordInput)
  const confirmPasswordValid = validatePassword(confirmPasswordInput, PASSWORD_REQUIRED, PASSWORD_INVALID, PASSWORD_SAME, passwordInput)

  if (nameValid && emailValid && cpfValid && cepValid && passwordValid && confirmPasswordValid) {
    form.submit()
  }
})