const app = Vue.createApp({
    data() {
        return {
            intro: 'Danmarks Radio',
            records: [],
            searchTitle: '',
            searchArtist: '',
            showRecords: false
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

        searchRecords() {
            axios.get('https://localhost:7233/api/MusicRecords', {
                params: {
                    title: this.searchTitle,
                    artist: this.searchArtist
                }
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