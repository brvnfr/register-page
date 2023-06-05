
import axios from 'axios'

export default {
  async login({ commit, state }) {
    try {
      const response = await axios.post('/auth/login', {
        username: state.email,
        password: state.password,
      })

      const token = response.data.token
      const decodedToken = this.$jwtDecode(token)

      console.log('Token de autenticação:', decodedToken)
      localStorage.setItem('token', token)

      commit('SET_EMAIL', '')
      commit('SET_PASSWORD', '')

      // Redirecionar para a página após login
      this.$router.push('/dashboard')
    } catch (error) {
      console.log('Erro ao fazer login:', error)
    }
  },
}
