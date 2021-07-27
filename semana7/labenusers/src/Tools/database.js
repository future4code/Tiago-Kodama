const axios = require('axios')

class Database {

    registerUser = async user => {

        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const headers = {
            Authorization: "tiago-kodama-lovelace"
        }
        const body = {
            name: user.name,
            email: user.email
        }

        const res = await axios.post(url, { body, headers })

        console.log(res)
    }
}

export default Database;