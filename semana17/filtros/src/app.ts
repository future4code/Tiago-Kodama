import express from 'express'
import cors from 'cors'

import { getAllUsers } from './endpoints/getAll'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/user', getAllUsers)

app.listen(3003, () => {
    "Lintening port 3003"
})