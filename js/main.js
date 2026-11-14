const app = Vue.createApp({
    data() {
        return {
            intro: 'Danmarks Radio',
            records: [],

        }
    },
    mounted() {
        this.getAll()
    },
    methods: {
        getAll() {
            axios.get('https://localhost:7233/api/MusicRecords')
                .then(response => {
                    this.records = response.data
                })
                .catch(error => {
                    console.error('Failed to get records:', error)
                })
        },

        searchRecords(title, artist) {
            axios.get('https://localhost:7233/api/MusicRecords', {
                params: { title: title, artist: artist }
            })
                .then(response => {
                    this.records = response.data
                })
                .catch(error => {
                    console.error('Failed to search records:', error)
                })
        },

    }
})