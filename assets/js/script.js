import { questions } from './questions.js'

const respsLog = []

function getQuestion() {
  const selectQuestion = document.getElementById('selectQuestion')

  if (selectQuestion.value < 1 || selectQuestion.value > 10) {
    alert('Por favor, digite um número entre 1 e 10')
    return
  }

  const index = selectQuestion.value - 1
  console.log(questions[index])
  const { pergunta, opcoes, resposta } = questions[index]

  createQuestion(pergunta, opcoes, resposta)
}

function checkAnswer(resp) {
  const getAnswer = document.getElementsByName('option')
  let response,isCorrect, getTextFromLabel

  getAnswer.forEach((answer) => {
    if(answer.value == resp.value) {
      isCorrect = answer
      getTextFromLabel = answer.parentElement.innerText
    }
    
    if (answer.checked) {
      response = answer
    }
  })

  response.value == isCorrect.value ? alert('Acertou!') : alert(`Errou, a resposta é: ${getTextFromLabel}`)
}

function createQuestion(ques, opts, resp) {
  const getDiv = document.getElementById('questions')
  getDiv.innerHTML = ''

  const h2 = document.createElement('h2')
  h2.innerHTML = ques

  const div = document.createElement('div')
  div.setAttribute('id', 'options')

  const newOpts = Object.entries(opts);

  newOpts.forEach(([key, value]) => {
    const label = document.createElement('label')
    label.setAttribute('for', key)
    label.setAttribute('class', 'option')
    label.innerText = value
    
    const input = document.createElement('input')
    
    input.setAttribute('type', 'radio')
    input.setAttribute('name', 'option')
    input.setAttribute('id', key)
    input.setAttribute('value', key)
    label.appendChild(input)
    
    div.appendChild(label)
  })

  const btn = document.createElement('button')
  btn.setAttribute('onclick', `checkAnswer(${resp})`)
  btn.setAttribute('class', 'btn')
  btn.innerHTML = 'Responder'

  getDiv.appendChild(h2)
  getDiv.appendChild(div)
  getDiv.appendChild(btn)

}


window.getQuestion = getQuestion
window.checkAnswer = checkAnswer