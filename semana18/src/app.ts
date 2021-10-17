import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', userRoutes)

app.listen(3003, () => {
    console.log('Application running at port 3003')
})