const app = Vue.createApp({
    data() {
        return {
            intro: 'Danmarks Radio',
            records: [
                   { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', publishedYear: 2019 },
                   { id: 2, title: 'Shape of You', artist: 'Ed Sheeran', publishedYear: 2017 },
                   { id: 3, title: 'Bad Guy', artist: 'Billie Eilish', publishedYear: 2019 }
            ],
            id:0,
            title:'',
            artist:'',
            publishedYear:0,
            showRecords: true
        }
    },
    methods: {
        myMethod(){

        },

    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
