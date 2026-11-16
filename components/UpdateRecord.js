app.component('update-record', {
  props: {
    selected: { type: Object, default: null }
  },
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
  watch: {
    selected(record) {
      if (record) {
        this.id = record.id
        this.title = record.title
        this.artist = record.artist
        this.duration = record.duration
        this.publicationYear = record.publicationYear
      }
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
          this.$emit('updated', {
            id: this.id,
            title: this.title,
            artist: this.artist,
            duration: this.duration,
            publicationYear: this.publicationYear
          })
          this.id = null
          this.title = ''
          this.artist = ''
          this.duration = 0
          this.publicationYear = 0
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
    <p v-if="id === null">Click Edit on a record to select it</p>
    <div v-else>
      <input id="update-title" v-model="title" placeholder="Title">
      <input id="update-artist" v-model="artist" placeholder="Artist">
      <input id="update-duration" v-model.number="duration" type="number" placeholder="Duration (sec)">
      <input id="update-year" v-model.number="publicationYear" type="number" placeholder="Publication year">
      <button id="update-button" @click="updateRecord">Update</button>
    </div>
  `
})