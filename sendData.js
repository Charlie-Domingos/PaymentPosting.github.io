var info = []

function deletRegister(ID) {
  let _confirm = confirm('Deseja DELETAR este registro?')

  if (_confirm) {
    for (let i = 0; i < info.length; ++i) {
      if ((info[i].id == ID)) {
        info.splice(i, 1)
        //função splice para apagar um indice do array
      }
    }
    // chamada do insertdata par atualizar os registros.

    $('#hideID').val('0')
    $('#tittleName').val('')
    $('#moneyValue').val('')
    $('#dateValue').val('')
    $('#descrName').val('')

    InsertData()
  }
}

function editRegister(ID) {
  $('#modalregister').modal('show')

  info.forEach(function (item) {
    if ((item.id == ID)) {
      $('#hideID').val(item.id)
      $('#tittleName').val(item.tittle)
      $('#moneyValue').val(item.money)
      $('#dateValue').val(
        item.day.substr(6, 4) +
          '-' +
          item.day.substr(3, 2) +
          '-' +
          item.day.substr(0, 2)
      )
      $('#descrName').val(item.descr)
    }
  })
}

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
      <td><button type="button" class="btn btn-primary" onclick="javascript:editRegister(${item.id});"><i class="fas fa-edit"></i></button></td>
      <td><button type="button" class="btn btn-danger" onclick="javascript:deletRegister(${item.id});"><i class="fas fa-trash"></i></button></td>
      
      </tr>`) //função append adciona um trecho html a cada rodada no tbody usando template string
    })
  }
}

$(function () {
  //Irá ser executado primeiro
  // transforma toda a string em JSON
  info = JSON.parse(localStorage.getItem('__info__')) //verifica se ja tem algo armazenado

  //tratativa de erro, verifica se o array é null
  if (info != null) {
    InsertData()
  } else {
    info = []
  }
  if (info) {
    //fazendo um if apontando uma váriável, será feito (!= " ")
    InsertData()
  }

  $('#btnSave').click(function () {
    // será executado quando clicar no botão salvar

    let _id = $('#hideID').val()
    let tittle = $('#tittleName').val()
    let money = $('#moneyValue').val()
    let day = new Date($('#dateValue').val()).toLocaleDateString('pt-br', {
      timeZone: 'UTC'
    }) // Faz a conversão da data p/ pt-br
    let descr = $('#descrName').val()

    // senteça responsavel pela edição do registro
    if (!_id || _id == "0") {
      let register = {}

      register.tittle = tittle
      register.money = money
      register.day = day
      register.descr = descr

      register.id = info.length + 1
      info.push(register)
    } else {
      info.forEach(function (item) {
        if ((item.ID = _id)) {
          item.tittle = tittle
          item.money = money
          item.day = day
          item.descr = descr
        }
      })
    }

    alert('Registro salvo')
    $('#modalregister').modal('hide') //Fecha a modal Registro

    // limpa os campos do modal ao usuário retornar
    $('#hideID').val('0')
    $('#tittleName').val('')
    $('#moneyValue').val('')
    $('#dateValue').val('')
    $('#descrName').val('')

    InsertData()
  })
})
