const form = document.getElementById('form')
const tittle = document.getElementById('tittle')
const money = document.getElementById('money')
const date = document.getElementById('date')
const tax = document.getElementById('tax')
const descr = document.getElementById('descr')

function validatesend() {
  let tittleValue = tittle.value.trim() //trim metodo remove espaco em branco
  let moneyValue = money.value.trim()
  let dateValue = date.value.trim()
  let taxValue = tax.value.trim()
  let descrValue = descr.value.trim()

  if (money <= 0) {
    alert('O valor não pode ser menor que zero!!!')
  }
  console.log('chegou')
}





