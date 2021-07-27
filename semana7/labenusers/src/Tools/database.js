const axios = require('axios')

class Database {

    registerUser = user => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const headers = {
            Authorization: "tiago-kodama-lovelace"
        }
        const body = {
            name: user.name,
            email: user.email
        }
        axios.post(url, {headers})
    }
}

export default Database;