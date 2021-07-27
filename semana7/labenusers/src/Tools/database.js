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

        try {
            await axios.post(url, body, { headers })
            
        }
        catch(err){
            const res = await err.response.data
            console.log("Erro: ", res.message)
        }

    }
}

export default Database;