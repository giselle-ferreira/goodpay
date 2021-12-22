import controlerUserLogin from './moduloControlerLogin.js'
import controleRotasApp from './moduloControleRotas.js'

// Trazendo elementos do Bootstrap para uso da main Javascript
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

// Trazendo os botões do DOM em HTML
// Ordem para executar e validar o login
const entrarUsuario = document.getElementById('btnEntrar')
entrarUsuario.addEventListener('click', event => {
  let user = document.getElementById('usuario').value,
    senha = document.getElementById('senha').value
  let alertModal = controlerUserLogin.loginInfo(user, senha)

  // Inserindo as informações no Modal
  document.getElementById('titleModal').innerHTML = alertModal.title
  document.getElementById('bodyModal').innerHTML = alertModal.bodyModal
  document.getElementById('btnModalClose').innerHTML = alertModal.b1
  document.getElementById('btnModalSave').innerHTML = alertModal.b2

  myModal.show()

  // Tempo de esperar para iniciar a função carregarPagina
  setTimeout(carregarPagina, 5000)

  function carregarPagina() {
    window.location.href = controleRotasApp.validaRota(
      localStorage.status,
      alertModal.idModal

      // Abre a janela, e a partir de um link, envia para a rota
    )
  }
})

// Ordem para criar um novo usuário
const novoUsuario = document.getElementById('btnNovoUsuario')
novoUsuario.addEventListener('click', event => {
  window.location.href = controleRotasApp.validaRota(
    //para que o usuario não tenha acesso direto ao link
    'false',
    'usuarioNaoExiste1'
  )
})
