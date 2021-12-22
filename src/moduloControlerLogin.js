import comunicacaoModal from './moduloComunicacaoDados.js'
import userLogin from './moduloDados.js'

// Este controle dá um retorno, e direciona para o controle de rotas
class ControlerUserLogin {
  constructor(status) {
    this.status = status // Variável iniciada como undefined
  }
  checkLogin() {
    this.status = true // Atualização do valor. Padroniza a entrada como verdadeira, aprovando o login
  }

  checkOutLogin() {
    this.status = false // Padroniza a entrada como falsa, negando o login
  }

  loginInfo(user, senha) {
    localStorage.clear // Limpa o localStorage inicialmente
    var infoCheck = userLogin.find(userLogin => userLogin.username === user)

    // Verifica se as informações vieram
    if (user === null || senha === null || user === '' || senha === '') {
      this.checkOutLogin()
      localStorage.status = this.status // Atualização do navegador com o status do usuário
      return comunicacaoModal.find(
        comunicacaoModal => comunicacaoModal.idModal === 'camposVazios1'
      )

      // Verifica se as informações existem
    } else {
      if (!infoCheck) {
        this.checkOutLogin()
        localStorage.status = this.status
        return comunicacaoModal.find(
          comunicacaoModal => comunicacaoModal.idModal === 'usuarioNaoExiste1'
        )

        // Confirma se a senha está válida
      } else {
        if (infoCheck.senha === senha) {
          this.checkLogin()
          localStorage.status = this.status
          return comunicacaoModal.find(
            comunicacaoModal => comunicacaoModal.idModal === 'loginExecutado1'
          )

          // Caso a senha não seja válida
        } else {
          this.checkOutLogin()
          localStorage.status = this.status
          return comunicacaoModal.find(
            comunicacaoModal => comunicacaoModal.idModal === 'falhaLogin1'
          )
        }
      }
    }
  }
}
const controlerUserLogin = new ControlerUserLogin()
export default controlerUserLogin
