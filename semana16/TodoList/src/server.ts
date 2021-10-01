import express from 'express';
import cors from 'cors';

import userRoutes from './routes/userRoutes';
import taskRoutes from './routes/taskRoutes';

const app = express()

app.use(express.json())
app.use(cors())

app.use(userRoutes)
app.use(taskRoutes)

app.listen(3003, () => {
    console.log('Ouvindo na porta 3003')
})