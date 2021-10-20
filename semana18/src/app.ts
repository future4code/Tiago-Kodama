import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user'
import productRoutes from './routes/product'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/user', userRoutes)
app.use('/product', productRoutes)

app.listen(3003, () => {
    console.log('Application running at port 3003')
})