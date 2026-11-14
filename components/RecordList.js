app.component('record-list', {
  props: {
    records: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showRecords: false
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
        </li>
      </ul>
    </div>
  `
})