// plugins/jwtDecode.js
import jwtDecode from 'jwt-decode'

export default {
  install: (app) => {
    app.config.globalProperties.$jwtDecode = jwtDecode // $jwtDecode
  }
}
