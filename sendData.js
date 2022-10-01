var info = []

function InsertData() {
  if (Array.isArray(info)) {
    localStorage.setItem('_info_', JSON.stringify(info)) //Faz a conversão dos dados

    $('#tbData tbody').html('') //Faz a limpeza de todo conteudo da tabela tbody

    info.forEach(function (item) {
      $('#tbData tbody').append(`<tr>
      <td>${item.ID}</td>
      <td>${item.Título}</td>
      <td>${item.Dinheiro}</td>
      <td>${item.Data}</td>
      <td>${item.Descrição}</td>
      
      </tr>`) //função append adciona um trecho html a cada rodada no tbody usando template string
    })
  }
}

$(function () {
  //Irá ser executado primeiro
  // transforma toda a string em JSON com JSON.parse
  info = JSON.parse(localStorage.getItem('__info__')) //verifica se ja tem algo armazenado

  if (info) {
    //fazendo um if apontando uma váriável, será feito (!= " ")
    InsertData()
  }

  $('#btnSave').click(function () {
    // será executado quando clicar no botão salvar

    let Tittle = $('#tittleName').val()
    let Money = $('#moneyValue').val()
    let day = new Date($('#dateValue').val()).toLocaleDateString('pt-br', {
      timeZone: 'UTC'
    }) // Faz a conversão da data p/ pt-br
    let Desc = $('#descrName').val()

    let register = {}

    register.Tittle = Tittle
    register.Money = Money
    register.day = day
    register.Desc = Desc

    register.ID = day.length + 1

    info.push(register)

    alert('Registro salvo')
    $('#modalregister').modal('hide') //Fecha a modal Registro

    // limpa os campos do modal ao usuário retornar
    $('#tittleName').val('')
    $('#moneyValue').val('')
    $('#dateValue').val('')
    $('#descrName').val('')

    InsertData()
  })
})
