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
            const usersFromDatabase = await this.getAllUsers()
            const addedUser = usersFromDatabase.filter(userDatabase => user.name===userDatabase.name)

            if(addedUser[0])
                alert(`Registou  ${addedUser[0].id}`)
            else
                alert("Falha ao registar")
        }
        catch(err){
            console.log(err)
            alert("Erro registerUser")
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
            console.log(err)
            alert("Erro getAllUsers ")
        }

    }

    getUser = async (userName, userEmail) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search`
        const headers = {
            Authorization: "tiago-kodama-lovelace"
        }
        const params = {
            name: userName,
            email: userEmail
        }
        try {
            const res = await axios.get(url, {headers, params})
            console.log(res)

        } catch (err) {
            console.log(err)
        }
    }

    deleteUser = async id => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const headers = {
            Authorization: "tiago-kodama-lovelace"
        }
        try {
            const res = await axios.delete(url, {headers})
            return res

        } catch (err) {
            return err
        }
    }
}

export default Database;