import express from 'express';
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('isso ai')
})

app.listen(3003, () => {
    console.log('Ouvindo na porta 3003')
})