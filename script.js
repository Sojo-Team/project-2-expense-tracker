const balance = document.getElementById('balance')
const moneyPlus = document.getElementById('money-plus')
const moneyMinus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const getTransactionFromLocalStorage = JSON.parse(
  localStorage.getItem('transactions')
)

let transactions = localStorage.getItem('transactions')
  ? getTransactionFromLocalStorage
  : []

function generateID() {
  return Math.floor(Math.random() * 100000000)
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+'
  const item = document.createElement('li')

  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')

  item.innerHTML = `
  ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
  <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">X</button>
  `

  list.appendChild(item)
}

function updateValues() {}

function addTransaction(e) {
  e.preventDefault()

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and an amount')
    return
  }

  const transaction = {
    id: generateID(),
    text: text.value,
    amount: +amount.value,
  }

  transactions.push(transaction)
  addTransactionDOM(transaction)
  updateValues()
}

form.addEventListener('submit', addTransaction)
