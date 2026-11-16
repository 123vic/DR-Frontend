app.component('update-record', {
  emits: ['updated'],
  data() {
    return {
      id: null,
      title: '',
      artist: '',
      duration: 0,
      publicationYear: 0
    }
  },
  methods: {
    updateRecord() {
      axios.put('https://localhost:7233/api/MusicRecords/' + this.id, {
        title: this.title,
        artist: this.artist,
        duration: this.duration,
        publicationYear: this.publicationYear
      })
        .then(() => {
          console.log('Record updated:', this.id)
          this.$emit('updated', {
            id: this.id,
            title: this.title,
            artist: this.artist,
            duration: this.duration,
            publicationYear: this.publicationYear
          })
        })
        .catch(error => {
          console.error('Failed to update record:', error)
        })
    }
  },
  template:
  /*html*/
  `
    <h2>Update Record</h2>
    <input id="update-id" v-model.number="id" type="number" placeholder="Id">
    <input id="update-title" v-model="title" placeholder="Title">
    <input id="update-artist" v-model="artist" placeholder="Artist">
    <input id="update-duration" v-model.number="duration" type="number" placeholder="Duration (sec)">
    <input id="update-year" v-model.number="publicationYear" type="number" placeholder="Publication year">
    <button id="update-button" @click="updateRecord">Update</button>
  `
})