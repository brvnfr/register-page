import axios from 'axios';
import jwt from 'jsonwebtoken';

const API_URL = 'https://fakestoreapi.com/'; // fakestore API URL

class AuthService {
  login(email, password) {
    return axios
      .post(`${API_URL}/auth/login`, { email, password }) //rota de login da fake API
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken() {
    const user = this.getUser();
    return user ? user.token : null;
  }

  isLoggedIn() {
    const token = this.getToken();

    if (token) {
      const decodedToken = jwt.decode(token);
      return decodedToken && decodedToken.exp > Date.now() / 1000;
    }

    return false;
  }
}

export default new AuthService();
