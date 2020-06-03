import express from 'express'
const app = express()
import routes from './routes'
import path from 'path'
import cors from 'cors'

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')))



//npm run dev
app.listen(3333,() => {
    console.log('Api rodando...')
})