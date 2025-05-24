let botaoEnviar = document.querySelector("#click_botao")

let campoNome = document.querySelector("#fnome")
let campoEmail = document.querySelector("#femail")
let campoTelefone = document.querySelector("#ftelefone")
let campoTipo = document.querySelector("#ftipo")
let campoMensagem = document.querySelector("#fmensagem")

botaoEnviar.addEventListener('click', validarFormulario)

function validarFormulario() {
  if (campoNome.value == "") {
    alert("O campo de nome não foi preenchido!")
  } else if (campoEmail.value == "") {
    alert("O campo de email não foi preenchido!")
  } else if (campoTelefone.value == ""){
    alert("O campo de telefone não foi preenchido!")
  } else if (campoTipo.value == "") {
    alert("O campo de identificação não foi preenchido!")
  } else if (campoMensagem.value == "") {
    alert("O campo de mensagem não foi preenchido!")
  }
}