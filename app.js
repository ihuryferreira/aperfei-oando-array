//Adicionando 3 Dados no Array
var objetos = Array('Cadeira', 'Impressora', 'Garfo')

//Adicionando novo dado no Array, sem perder os 3 dados que já existe
function adicionarObjetos() {
  //recupera o valor inserido no campo id objeto
  var objeto = document.getElementById('objeto').value
  //caso possua algum valor preenchido entra no if
  if(objeto != '') {
    //verifica se o valor já não foi inserido anteriormente
    //se sim, informa que valor já existe, se não insere novo valor
    if( objetos.indexOf(objeto) !== -1 ) {
      alert('Objeto já foi adicionado')
    } else {
      objetos.push(objeto)
      console.log(objetos)
      document.getElementById('objeto').value = ""
      document.getElementById('objeto2').innerHTML = objetos
    }
  } else {
    alert('Informe um objeto válido')
  }
}

//função que ordena os objetos
function ordenarObjetos() {
  objetos.sort()
  console.log(objetos)
  document.getElementById('objeto2').innerHTML = objetos
}
