app.component('login-form', {
  emits: ['login'],
  data() {
    return {
      auth: { username: '', password: '' },
      authMessage: null
    }
  },
  methods: {
    login() {
      axios.post('https://localhost:7233/api/Auth/login', this.auth)
        .then(response => {
          const userInfo = {
            username: this.auth.username,
            role: response.data.role,
            token: response.data.token
          }
          this.authMessage = 'Authentication successful'
          this.$emit('login', userInfo)
        })
        .catch(error => {
          this.authMessage = 'Authentication failed - ' + error.message
        })
    }
  },
  template:
  /*html*/
  `
    <div class="login-box">
      <h2>Login</h2>
      <input id="login-username" v-model="auth.username" placeholder="Username" type="text" />
      <input id="login-password" v-model="auth.password" placeholder="Password" type="password" />
      <button id="login-button" @click="login">Login</button>
      <p v-if="authMessage">{{ authMessage }}</p>
    </div>
  `
})