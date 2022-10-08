var info = []

function deletRegister(id) {
  let _confirm = confirm("Deseja DELETAR este registro?")

  if (_confirm){
    for(let i = 0; i < info.length; ++i){
      if (info[i].ID = id) {
        info.splice(i, 1)
         //função splice para apagar um indice do array
      }
    }
    // chamada do insertdata par atualizar os registros.
    
    InsertData()
  }
}

function editRegister(id) {
  $("#modalregister").modal("show")

  info.forEach(function(item){

    if(item.ID = id){
      $("#tittleName").val(item.tittle)
      $("#moneyValue").val(item.money)
      $("#dateValue").val(item.day)
      $("#descrName").val(item.descr)
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
