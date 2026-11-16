const tokenName = 'userInfo'
axios.interceptors.request.use(config => {
    const saved = localStorage.getItem(tokenName)
    if (saved != null) {
        config.headers.Authorization = 'Bearer ' + JSON.parse(saved).token
    }
    return config
})
const app = Vue.createApp({
    data() {
        return {
            intro: 'Danmarks Radio',
            records: [],
            userInfo: null,

        }
    },
    created() {
       const saved = localStorage.getItem(tokenName)
            if (saved != null) {
            this.userInfo = JSON.parse(saved)
        }
    },
    onRecordAdded(record) {
    this.records.push(record)
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
        onLogin(userInfo) {
            this.userInfo = userInfo
            localStorage.setItem(tokenName, JSON.stringify(userInfo))
        },
        logout() {
            this.userInfo = null
            localStorage.removeItem(tokenName)
        },
        onRecordAdded(record) {
        this.records.push(record)
       },
       onRecordDeleted(id) {
       this.records = this.records.filter(record => record.id !== id)
       }

    }
})