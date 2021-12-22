// Valida se a pessoa está logada para trazer o usuário para dentro do App
import rotaApp from './moduloRotas.js'

// Tudo que afeta regra de negócio precisa de uma classe controladora
class ControleRotasApp {
  constructor(status, idRota, tela, linkUrl) {
    this.status = status
    this.idRota = idRota
    this.tela = tela
    this.linkUrl = linkUrl
  }

  validaRota(status, idRota) {
    // Confirma qual status e direciona para a rota
    if (status === 'true') {
      return rotaApp.find(rotaApp => rotaApp.idRota === idRota).linkUrl
    } else {
      return rotaApp.find(rotaApp => rotaApp.idRota === idRota).linkUrl
    }
  }
}

const controleRotasApp = new ControleRotasApp()
export default controleRotasApp
