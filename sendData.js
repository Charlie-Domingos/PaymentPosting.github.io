var info = []

function InsertData() {
  if (Array.isArray(info)) {
    localStorage.setItem('__info__', JSON.stringify(info)) //Faz a conversão dos dados para o modo txt

    $('#tbData tbody').html('') //Faz a limpeza de todo conteudo da tabela tbody

    info.forEach(function (item) {
      $('#tbData tbody').append(`<tr>
      <td>${item.id}</td>
      <td>${item.tittle}</td>
      <td>${item.money}</td>
      <td>${item.day}</td>
      <td>${item.descr}</td>
      <td><button type="button" class="btn btn-primary"><i class="fas fa-edit"></i></button></td>
      <td><button type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
      
      </tr>`) //função append adciona um trecho html a cada rodada no tbody usando template string
    })
  }
}

$(function () {
  //Irá ser executado primeiro
  // transforma toda a string em JSON
  info = JSON.parse(localStorage.getItem('__info__')) //verifica se ja tem algo armazenado

  if (info) {
    //fazendo um if apontando uma váriável, será feito (!= " ")
    InsertData()
  }
  

  $('#btnSave').click(function () {
    // será executado quando clicar no botão salvar
    

    let tittle = $('#tittleName').val()
    let money = $('#moneyValue').val()
    let day = new Date($('#dateValue').val()).toLocaleDateString('pt-br', {
      timeZone: 'UTC'
    }) // Faz a conversão da data p/ pt-br
    let descr = $('#descrName').val()

    let register = {}

    register.tittle = tittle
    register.money = money
    register.day = day
    register.descr = descr
    register.id = info.length + 1

    
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
