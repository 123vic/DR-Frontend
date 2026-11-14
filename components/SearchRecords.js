app.component('search-records', {
    emits: ['search'],
  data() {
    return {
      searchTitle: '',
      searchArtist: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searchTitle, this.searchArtist)
    },
  },
  template:
  /*html*/
  `
    <h2>Search Records</h2>
    <div class="search-box">
      <input id="search-title" type="text" v-model="searchTitle" placeholder="Title" />
      <input id="search-artist" type="text" v-model="searchArtist" placeholder="Artist" />
      <button id="search-button" @click="search">Search</button>
    </div>
  `
})