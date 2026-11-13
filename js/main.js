const app = Vue.createApp({
    data() {
        return {
            intro: 'Danmarks Radio',
            records: [ ],
            id:0,
            title:'',
            artist:'',
            Duration:0,
            PublicationYear:0,
            showRecords: false
        }
    },
    mounted() {
    this.getAll()
    },
    methods: {
        myMethod(){},
        
        getAll() {
        axios.get('https://localhost:7233/api/MusicRecords')
        .then(response => {
            this.records = response.data
        })
        .catch(error => {
            console.error('Failed to get records:', error)
        })
},
        

    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
