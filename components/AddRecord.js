app.component('add-record', {
  emits: ['added'],
  data() {
    return {
      title: '',
      artist: '',
      duration: 0,
      publicationYear: 0
    }
  },
  methods: {
    addRecord() {
      axios.post('https://localhost:7233/api/MusicRecords', {
        title: this.title,
        artist: this.artist,
        duration: this.duration,
        publicationYear: this.publicationYear
      })
        .then(response => {
          console.log('Record added:', response.data)
          this.$emit('added', response.data)
        })
        .catch(error => {
          console.error('Failed to add record:', error)
        })
    }
  },
  template:
  /*html*/
  `
    <h2>Add Record</h2>
    <input id="add-title" v-model="title" placeholder="Title">
    <input id="add-artist" v-model="artist" placeholder="Artist">
    <input id="add-duration" v-model.number="duration" type="number" placeholder="Duration (sec)">
    <input id="add-year" v-model.number="publicationYear" type="number" placeholder="Publication year">
    <button id="add-button" @click="addRecord">Add</button>
  `
})