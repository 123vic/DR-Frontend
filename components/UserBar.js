app.component('user-bar', {
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  },
  emits: ['logout'],
  template:
  /*html*/
  `
    <p>
      Logged in as <i>{{ userInfo.username }}</i>, role: <i>{{ userInfo.role }}</i>
      <button id="logout-button" @click="$emit('logout')">Logout</button>
    </p>
  `
})