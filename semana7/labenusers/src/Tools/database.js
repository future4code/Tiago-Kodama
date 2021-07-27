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
            alert(`Registou`)
        }
        catch(err){
            alert("Erro registerUser: ", err.response.data.message)
        }
    }

    getAllUsers = async () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const headers = {
            Authorization: "tiago-kodama-lovelace"
        }

        try {
            const res = await axios.get(url, { headers })
            return res.data
        }
        catch(err){
            alert("Erro getAllUsers: ", err)
        }

    }
}

export default Database;