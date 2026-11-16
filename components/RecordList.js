app.component('record-list', {
  props: {
    records: { type: Array, required: true },
    isAdmin: { type: Boolean, default: false }
  },
  emits: ['deleted', 'updated'],
  data() {
    return {
      showRecords: false
    }
  },
  methods: {
    deleteRecord(id) {
      axios.delete('https://localhost:7233/api/MusicRecords/' + id)
        .then(response => {
          console.log('Record deleted:', id)
          this.$emit('deleted', id)
        })
        .catch(error => {
          console.error('Failed to delete record:', error)
        })
    }
  },
  template:
  /*html*/
  `
    <h2>Records List</h2>
    <button id="toggle-records" @click="showRecords = !showRecords">
      {{ showRecords ? 'Hide Records' : 'Show Records' }}
    </button>
    <div v-show="showRecords">
      <ul>
        <li v-for="record in records" :key="record.id">
          {{ record.title }} by {{ record.artist }} ({{ record.publicationYear }}) - {{ record.duration }} sec
          <button v-if="isAdmin" :id="'delete-' + record.id" @click="deleteRecord(record.id)">Delete</button>
        </li>
      </ul>
    </div>
  `
})