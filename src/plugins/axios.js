// plugins/axios.js
import axios from 'axios'

// Configuração global do axios
axios.defaults.baseURL = 'https://fakestoreapi.com' //baseURL global para todas as chamadas da aplicação

export default {
  install: (app) => {
    app.config.globalProperties.$axios = axios
  }
}
