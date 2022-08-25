function validatesend() {
  let money = document.getElementById('money')

  if (money <= 0) {
    alert('O valor não pode ser menor que 0')
  }
  valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}
